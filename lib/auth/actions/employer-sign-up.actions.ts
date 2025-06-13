'use server';

import { ActionResult, ActionResultStatus } from '@/lib/shared/types/action-result.types';
import { createClient } from '@/lib/shared/services/supabase/server';
import { PATHNAMES } from '@/lib/shared/consts';
import { EmployerSignUpFormFields } from '../schemas/employer-sign-up.schemas';

type Employer = {
    id: string;
    email: string;
    companyName: string;
    aboutCompany: string;
};

export const signUpEmployer = async (
    _: ActionResult<Employer>,
    formData: EmployerSignUpFormFields,
): Promise<ActionResult<Employer>> => {
    try {
        const supabase = await createClient();

        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
                emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}${PATHNAMES.protected.ROOT}`,
            },
        });

        if (authError || !authData.user) {
            console.error('Error creating user:', authError);
            return {
                error: authError?.message || 'Failed to create account',
                status: ActionResultStatus.ERROR,
            };
        }

        const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .insert({
                user_id: authData.user.id,
                user_type: 'employer',
            })
            .select('id')
            .single();

        if (profileError || !profileData) {
            console.error('Error creating profile:', profileError);
            return {
                error: profileError?.message || 'Failed to create user profile',
                status: ActionResultStatus.ERROR,
            };
        }

        const { data: employerData, error: employerError } = await supabase
            .from('employers')
            .insert({
                user_id: authData.user.id,
                profile_id: profileData.id,
                company_name: formData.companyName,
                about_company: formData.aboutCompany,
            })
            .select('*')
            .single();

        if (employerError) {
            console.error('Error creating employer profile:', employerError);
            return {
                error: employerError.message || 'Failed to create employer profile',
                status: ActionResultStatus.ERROR,
            };
        }

        return {
            data: employerData,
            status: ActionResultStatus.SUCCESS,
        };
    } catch (error) {
        console.error('Error signing up employer:', error);
        return {
            error:
                error instanceof Error
                    ? error.message
                    : 'Unable to sign up at this time. Please try again later.',
            status: ActionResultStatus.ERROR,
        };
    }
};
