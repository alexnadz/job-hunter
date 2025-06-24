'use client';

import { Search } from 'lucide-react';

import { Button, Input } from '@/lib/shared/ui';
import { useSearchBar } from '@/lib/shared/hooks/use-search-bar';

type SearchHeaderProps = {
    title: string;
    placeholder: string;
    searchFilter?: string;
    searchPath: string;
    searchParamName?: string;
};

export const SearchHeader = ({
    title,
    placeholder,
    searchFilter,
    searchPath,
    searchParamName = 'search',
}: SearchHeaderProps) => {
    const { search, onSearchChange, onSearchButtonClick } = useSearchBar({
        defaultSearchValue: searchFilter,
        searchPath,
        searchParamName,
    });

    return (
        <div className="rounded-lg bg-card p-6 shadow-sm">
            <h1 className="mb-6 text-2xl font-bold">{title}</h1>
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        type="text"
                        placeholder={placeholder}
                        value={search}
                        onChange={onSearchChange}
                        className="pl-10"
                    />
                </div>
                <Button type="button" className="shrink-0" onClick={onSearchButtonClick}>
                    <Search className="mr-2 h-4 w-4" /> Search
                </Button>
            </div>
        </div>
    );
};
