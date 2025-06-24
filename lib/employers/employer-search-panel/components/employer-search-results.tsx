import { getEmployersByFilters } from '@/lib/employers/shared';
import { createClient } from '@/lib/shared/services/supabase/server';

import { EmployerSearchCard } from './employer-search-card/employer-search-card';

type EmployerSearchResultsProps = {
    searchFilter?: string;
};

export const EmployerSearchResults = async ({ searchFilter }: EmployerSearchResultsProps) => {
    const supabaseClient = await createClient();

    const { employersData } = await getEmployersByFilters({
        supabaseClient,
        args: { search: searchFilter },
    });

    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                    {employersData.length} {employersData.length === 1 ? 'Company' : 'Companies'}{' '}
                    Found
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {employersData.length > 0 ? (
                    employersData.map((employer) => (
                        <EmployerSearchCard key={employer.id} company={employer} />
                    ))
                ) : (
                    <div className="col-span-full rounded-lg border bg-card p-8 text-center">
                        <h3 className="mb-2 text-lg font-semibold">No companies found</h3>
                        <p className="text-muted-foreground">
                            Try adjusting your search or filters to find what you&apos;re looking
                            for.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
