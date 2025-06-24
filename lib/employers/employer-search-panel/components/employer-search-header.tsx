'use client';

import { SearchHeader, PATHNAMES } from '@/lib/shared';

type EmployerSearchHeaderProps = {
    searchFilter?: string;
};

export const EmployerSearchHeader = ({ searchFilter }: EmployerSearchHeaderProps) => (
    <SearchHeader
        title="Find Companies"
        placeholder="Company name or industry"
        searchFilter={searchFilter}
        searchPath={PATHNAMES.PUBLIC.EMPLOYER_SEARCH}
    />
);
