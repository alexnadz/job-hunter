import { JOB_SEARCH_FILTERS, JobSearch } from '@/lib/job-offers/job-search-panel';

type JobSearchPageProps = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<Record<JOB_SEARCH_FILTERS, string | undefined>>;
};

const JobSearchPage = async ({ searchParams }: JobSearchPageProps) => {
    const searchFilter = (await searchParams).search;

    return <JobSearch searchFilter={searchFilter} />;
};

export default JobSearchPage;
