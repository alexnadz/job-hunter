'use client';

import { PATHNAMES, SearchHeader } from '@/lib/shared';

type JobSearchHeaderProps = {
    searchFilter?: string;
};

export const JobSearchHeader = ({ searchFilter }: JobSearchHeaderProps) => (
    <SearchHeader
        title="Find Your Dream Job"
        placeholder="Job title or keyword"
        searchFilter={searchFilter}
        searchPath={PATHNAMES.PUBLIC.JOB_SEARCH}
    />
);
