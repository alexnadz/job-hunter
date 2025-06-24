'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

type UseSearchBarProps = {
    defaultSearchValue?: string;
    searchPath: string;
    searchParamName?: string;
};

export const useSearchBar = ({ 
    defaultSearchValue, 
    searchPath, 
    searchParamName = 'search' 
}: UseSearchBarProps) => {
    const router = useRouter();

    const [search, setSearch] = useState(defaultSearchValue || '');

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    const onSearchButtonClick = () => {
        router.push(`${searchPath}?${searchParamName}=${encodeURIComponent(search)}`);
    };

    return {
        search,
        onSearchChange,
        onSearchButtonClick,
    };
};
