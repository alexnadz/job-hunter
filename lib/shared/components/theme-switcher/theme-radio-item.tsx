'use client';

import { LucideIcon } from 'lucide-react';

import { DropdownMenuRadioItem } from '@/lib/shared/ui/dropdown-menu';

import type { ThemeVaraint } from './theme-switcher.types';

type ThemeRadioItemProps = {
    value: ThemeVaraint;
    Icon: LucideIcon;
    label: string;
    iconSize?: number;
};

export const ThemeRadioItem = ({ value, Icon, label, iconSize = 16 }: ThemeRadioItemProps) => (
    <DropdownMenuRadioItem
        className="flex gap-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        value={value}
    >
        <Icon size={iconSize} />
        <span>{label}</span>
    </DropdownMenuRadioItem>
);
