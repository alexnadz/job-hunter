import { JobSearchFilters } from './job-search-filters';
import { JobSearchHeader } from './job-search-header';
import { JobSearchResults } from './job-search-results';

type JobSearchProps = {
    searchFilter?: string;
};

export const JobSearchPanel = ({ searchFilter }: JobSearchProps) => (
    <div className="container mx-auto py-8">
        <JobSearchHeader searchFilter={searchFilter} />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="md:col-span-1">
                <JobSearchFilters />
            </div>
            <div className="md:col-span-3">
                <JobSearchResults searchFilter={searchFilter} />
            </div>
        </div>
    </div>
);
