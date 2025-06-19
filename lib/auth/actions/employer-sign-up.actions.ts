'use server';

import { ActionResult, ActionResultStatus } from '@/lib/shared/types/action-result.types';
import { createClient } from '@/lib/shared/services/supabase/server';
import { PATHNAMES } from '@/lib/shared/constants';
import { EmployerSignUpFormFields } from '../schemas/employer-sign-up.schemas';
import { Employer, insertEmployer, insertProfile } from '@/lib/shared';

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
                emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}${PATHNAMES.PROTECTED.ROOT}`,
            },
        });

        if (authError || !authData.user) {
            console.error('Error creating user:', authError);
            return {
                error: authError?.message || 'Failed to create account',
                status: ActionResultStatus.ERROR,
            };
        }

        const { profileData } = await insertProfile({
            supabaseClient: supabase,
            args: {
                insertProfileData: {
                    user_id: authData.user.id,
                    user_type: 'employer',
                },
            },
        });

        const { employerData } = await insertEmployer({
            supabaseClient: supabase,
            args: {
                employerInsertData: {
                    profile_id: profileData.id,
                    company_name: formData.companyName,
                    about_company: formData.aboutCompany,
                },
            },
        });

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
