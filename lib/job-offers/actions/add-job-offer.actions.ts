'use server';

import {
    createServerClient,
    ActionResult,
    ActionResultStatus,
    JobOffer,
    JobOfferInsert,
    getEmployerForCurrentUser,
} from '@/lib/shared';
import { JobOfferFormFields } from '@/lib/job-offers/schemas';

export const addJobOffer = async (
    _: ActionResult<JobOffer>,
    formData: JobOfferFormFields,
): Promise<ActionResult<JobOffer>> => {
    try {
        const supabase = await createServerClient();

        const { employerData } = await getEmployerForCurrentUser({ supabaseClient: supabase });

        const jobOfferInsertData: JobOfferInsert = {
            title: formData.title,
            description: formData.description,
            employer_id: employerData.id,
        };

        if (formData.salary_min) {
            jobOfferInsertData.salary_min = Number(formData.salary_min);
        }

        if (formData.salary_max) {
            jobOfferInsertData.salary_max = Number(formData.salary_max);
        }

        const { data: jobOfferData, error: jobOfferError } = await supabase
            .from('job_offers')
            .insert(jobOfferInsertData)
            .select()
            .single();

        if (jobOfferError) {
            console.error('Error adding job offer:', jobOfferError);
            return {
                status: ActionResultStatus.ERROR,
                error: 'Failed to add job offer. Please try again.',
            };
        }

        return {
            status: ActionResultStatus.SUCCESS,
            data: jobOfferData,
        };
    } catch (error) {
        console.error('Error adding job offer:', error);
        return {
            status: ActionResultStatus.ERROR,
            error: 'An unexpected error occurred. Please try again.',
        };
    }
};
