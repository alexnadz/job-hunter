import { QueryParams } from '@/lib/shared/types';

const GET_JOB_OFFERS_BY_EMPLOYER_ID_ERROR_MESSAGE =
    'Unable to fetch job offers at this time. Please try again later.';

export const getJobOffersByEmployerId = async ({
    supabaseClient,
    args: { employerId },
}: QueryParams<{ employerId: string }>) => {
    try {
        const { data: jobOffersData, error: jobOffersError } = await supabaseClient
            .from('job_offers')
            .select('*')
            .eq('employer_id', employerId);

        if (jobOffersError) {
            console.error(jobOffersError);
            throw new Error(jobOffersError.message);
        }

        return {
            jobOffersData,
        };
    } catch (error) {
        console.error(error);
        throw new Error(GET_JOB_OFFERS_BY_EMPLOYER_ID_ERROR_MESSAGE);
    }
};
