'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { Button } from '@/lib/shared/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuTrigger,
} from '@/lib/shared/ui/dropdown-menu';

import { ThemeRadioItem } from './theme-radio-item';
import { ICON_SIZE, THEME_ICONS, THEME_OPTIONS } from './theme-switcher.consts';
import type { ThemeVaraint } from './theme-switcher.types';

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const ThemeIcon = THEME_ICONS[(theme as ThemeVaraint) || 'system'];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size={'sm'}
                    className="text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                    <ThemeIcon key={theme} size={ICON_SIZE} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-content bg-background" align="start">
                <DropdownMenuRadioGroup value={theme} onValueChange={(e) => setTheme(e)}>
                    {THEME_OPTIONS.map((option) => (
                        <ThemeRadioItem
                            key={option.value}
                            value={option.value}
                            Icon={THEME_ICONS[option.value]}
                            label={option.label}
                            iconSize={ICON_SIZE}
                        />
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
