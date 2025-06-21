import { JOB_SEARCH_FILTERS } from '@/lib/job-offers/job-search-panel';
import { QueryParams } from '@/lib/shared/types';

const GET_JOB_OFFERS_BY_SEARCH_FILTER_ERROR_MESSAGE =
    'Unable to fetch job offers at this time. Please try again later.';

export const getJobOffersByFilters = async ({
    supabaseClient,
    args,
}: QueryParams<Partial<Record<JOB_SEARCH_FILTERS, string>> & { limit?: number }>) => {
    const { search, limit } = args;

    try {
        let getJobOffersBySearchFilterQuery = supabaseClient
            .from('job_offers')
            .select(
                'id, title, description, salary_min, salary_max, created_at, employers (id, company_name)',
            );

        // TODO:
        if (search) {
            getJobOffersBySearchFilterQuery = getJobOffersBySearchFilterQuery.ilike(
                'title',
                `%${search}%`,
            );
        }

        if (limit) {
            getJobOffersBySearchFilterQuery = getJobOffersBySearchFilterQuery.limit(limit);
        }

        const { data: jobOffersData, error: jobOffersError } =
            await getJobOffersBySearchFilterQuery;

        if (jobOffersError) {
            console.error(jobOffersError);
            throw new Error(jobOffersError.message);
        }

        return {
            jobOffersData,
        };
    } catch (error) {
        console.error(error);
        throw new Error(GET_JOB_OFFERS_BY_SEARCH_FILTER_ERROR_MESSAGE);
    }
};

//  created_at: string;
// description: string;
// employer_id: string;
// id: string;
// salary_max: number | null;
// salary_min: number | null;
// title: string;
// updated_at: string;
