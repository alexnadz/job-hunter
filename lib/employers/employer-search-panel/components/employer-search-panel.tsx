import { EmployerSearchHeader } from './employer-search-header';
import { EmployerSearchResults } from './employer-search-results';

type EmployerSearchPanelProps = {
    searchFilter?: string;
};

export const EmployerSearchPanel = ({ searchFilter }: EmployerSearchPanelProps) => (
    <div className="container mx-auto py-8 px-8">
        <EmployerSearchHeader searchFilter={searchFilter} />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* <div className="md:col-span-1">
                <CompaniesFilters />
            </div> */}
            <div className="md:col-span-4">
                <EmployerSearchResults searchFilter={searchFilter} />
            </div>
        </div>
    </div>
);
