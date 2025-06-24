import { EmployerSearchPanel } from '@/lib/employers/employer-search-panel/components/employer-search-panel';
import { EMPLOYER_SEARCH_FILTERS } from '@/lib/employers/employer-search-panel/constants';

type EmployerSearchPageProps = {
    searchParams: Promise<Record<EMPLOYER_SEARCH_FILTERS, string | undefined>>;
};

const EmployerSearchPage = async ({ searchParams }: EmployerSearchPageProps) => {
    const searchFilter = (await searchParams).search;

    return <EmployerSearchPanel searchFilter={searchFilter} />;
};

export default EmployerSearchPage;
