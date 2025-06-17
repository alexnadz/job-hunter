'use server';

import { redirect } from 'next/navigation';

import {
    createServerClient,
    PATHNAMES,
    ActionResult,
    ActionResultStatus,
    JobOffer,
    JobOfferInsert,
} from '@/lib/shared';
import { JobOfferFormFields } from '@/lib/job-offers/schemas';

export const addJobOffer = async (
    _: ActionResult<JobOffer>,
    formData: JobOfferFormFields,
): Promise<ActionResult<JobOffer>> => {
    try {
        const supabase = await createServerClient();

        // Get the current session
        const {
            data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
            return {
                status: ActionResultStatus.ERROR,
                error: 'You must be logged in to add a job offer',
            };
        }

        // Get the employer ID for the current user
        const { data: employer, error: employerError } = await supabase
            .from('employers')
            .select('id')
            .eq('user_id', session.user.id)
            .single();

        if (employerError || !employer) {
            return {
                status: ActionResultStatus.ERROR,
                error: 'You must be an employer to add a job offer',
            };
        }

        // Transform form data for database insertion
        const jobOfferData: JobOfferInsert = {
            title: formData.title,
            description: formData.description,
            employer_id: employer.id,
        };

        // Convert string values to numbers if they exist
        if (formData.salary_min) {
            jobOfferData.salary_min = Number(formData.salary_min);
        }

        if (formData.salary_max) {
            jobOfferData.salary_max = Number(formData.salary_max);
        }

        // Insert the job offer
        const { error } = await supabase.from('job_offers').insert(jobOfferData).select().single();

        if (error) {
            console.error('Error adding job offer:', error);
            return {
                status: ActionResultStatus.ERROR,
                error: 'Failed to add job offer. Please try again.',
            };
        }
    } catch (error) {
        console.error('Error adding job offer:', error);
        return {
            status: ActionResultStatus.ERROR,
            error: 'An unexpected error occurred. Please try again.',
        };
    }

    // Revalidate the job offers page to show the new job offer
    // TODO:
    // revalidatePath(PATHNAMES.employer.JOB_OFFERS);

    // Redirect to the job offers page
    redirect(PATHNAMES.employer.JOB_OFFERS);

    // This code is unreachable due to the redirect, but TypeScript needs it
    return {
        status: ActionResultStatus.SUCCESS,
    };
};
