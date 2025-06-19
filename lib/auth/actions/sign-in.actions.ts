'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/lib/shared/services/supabase/server';
import { SignInFormFields } from '../schemas/sign-in.schemas';
import { ActionResult, ActionResultStatus } from '@/lib/shared/types/action-result.types';
import { PATHNAMES } from '@/lib/shared/constants';

export const signIn = async (
    _: ActionResult<void>,
    formData: SignInFormFields,
): Promise<ActionResult<void>> => {
    let userProfileData;

    try {
        const supabase = await createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        });

        if (error) {
            return {
                error: error.message,
                status: ActionResultStatus.ERROR,
            };
        }

        const { data: profileData } = await supabase.from('profiles').select('user_type').single();
        userProfileData = profileData;
    } catch (error) {
        console.error('Error signing in:', error);
        return {
            error: 'Unable to sign in at this time. Please try again later.',
            status: ActionResultStatus.ERROR,
        };
    }

    if (userProfileData?.user_type === 'employer') {
        redirect(PATHNAMES.PROTECTED.EMPLOYER.DASHBOARD);
    } else if (userProfileData?.user_type === 'candidate') {
        redirect(PATHNAMES.PROTECTED.CANDIDATE.DASHBOARD);
    } else {
        // TODO:
        redirect(PATHNAMES.PROTECTED.ROOT);
    }

    return {
        status: ActionResultStatus.SUCCESS,
    };
};
