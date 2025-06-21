'use client';

import { Search } from 'lucide-react';

import { Button, Input } from '@/lib/shared';
import { useJobSearchBar } from '@/lib/job-offers/shared';

export const JobSearchBar = () => {
    const { search, onSearchChange, onSearchButtonClick } = useJobSearchBar({
        defaultSearchValue: '',
    });

    return (
        <div className="w-full max-w-3xl rounded-lg bg-white p-4 shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Job title or keyword"
                        value={search}
                        className="pl-10"
                        onChange={onSearchChange}
                    />
                </div>
                <Button type="button" className="px-8" size="lg" onClick={onSearchButtonClick}>
                    Search Jobs
                </Button>
            </div>
        </div>
    );
};
