import Link from 'next/link';

import { createClient } from '@/lib/shared/services/supabase/server';
import { getJobOffersByFilters } from '@/lib/job-offers/shared';
import { generateJobOfferPath } from '@/lib/shared';

import { JobSearchCard } from './job-search-card';

type JobSearchResultsProps = {
    searchFilter?: string;
};

export const JobSearchResults = async ({ searchFilter }: JobSearchResultsProps) => {
    const supabase = await createClient();

    const { jobOffersData } = await getJobOffersByFilters({
        supabaseClient: supabase,
        args: { search: searchFilter },
    });

    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">{jobOffersData.length} Jobs Found</h2>
            </div>

            <div className="flex flex-col space-y-4">
                {jobOffersData.map((searchedJobOffer) => (
                    <Link
                        key={searchedJobOffer.id}
                        href={generateJobOfferPath(searchedJobOffer.id)}
                        target="_blank"
                    >
                        <JobSearchCard job={searchedJobOffer} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
