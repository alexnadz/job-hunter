'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

import { JOB_SEARCH_FILTERS } from '@/lib/job-offers/job-search-panel';
import { PATHNAMES } from '@/lib/shared';

type useJobSearchBarProps = {
    defaultSearchValue?: string;
};

export const useJobSearchBar = ({ defaultSearchValue }: useJobSearchBarProps) => {
    const router = useRouter();

    const [search, setSearch] = useState(defaultSearchValue);

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    const onSearchButtonClick = () =>
        router.push(`${PATHNAMES.PUBLIC.JOB_SEARCH}?${JOB_SEARCH_FILTERS.SEARCH}=${search}`);

    return {
        search,
        onSearchChange,
        onSearchButtonClick,
    };
};
