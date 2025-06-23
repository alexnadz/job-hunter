'use client';

import { Search } from 'lucide-react';

import { Button, Input } from '@/lib/shared';
import { useJobSearchBar } from '@/lib/job-offers/shared';

type JobSearchHeaderProps = {
    searchFilter?: string;
};

export const JobSearchHeader = ({ searchFilter }: JobSearchHeaderProps) => {
    const { search, onSearchChange, onSearchButtonClick } = useJobSearchBar({
        defaultSearchValue: searchFilter,
    });

    return (
        <div className="rounded-lg bg-card p-6 shadow-sm">
            <h1 className="mb-6 text-2xl font-bold">Find Your Dream Job</h1>
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Job title or keyword"
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
