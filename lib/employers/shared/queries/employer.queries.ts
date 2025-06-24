import { QueryParams } from '@/lib/shared/types';
import { EmployerDto } from '@/lib/employers/shared/types';
import { EMPLOYER_SEARCH_FILTERS } from '@/lib/employers/employer-search-panel/constants';

const GET_EMPLOYERS_ERROR_MESSAGE =
    'Unable to fetch employers at this time. Please try again later.';

export const getEmployersByFilters = async ({
    supabaseClient,
    args,
}: QueryParams<Partial<Record<EMPLOYER_SEARCH_FILTERS, string>> & { limit?: number }>) => {
    const { search, limit } = args;

    try {
        let getEmployersQuery = supabaseClient
            .from('employers')
            .select('id, company_name, about_company');

        if (search) {
            getEmployersQuery = getEmployersQuery.ilike('company_name', `%${search}%`);
        }

        if (limit) {
            getEmployersQuery = getEmployersQuery.limit(limit);
        }

        const { data: employersData, error: employersError } = await getEmployersQuery;

        if (employersError) {
            console.error(employersError);
            throw new Error(employersError.message);
        }

        const employers: EmployerDto[] = employersData.map((employer) => {
            const { id, about_company, company_name } = employer;
            return {
                id,
                name: company_name,
                description: about_company,
            };
        });

        return {
            employersData: employers,
        };
    } catch (error) {
        console.error(error);
        throw new Error(GET_EMPLOYERS_ERROR_MESSAGE);
    }
};
