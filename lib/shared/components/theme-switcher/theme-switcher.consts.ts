import { Laptop, Moon, Sun, LucideIcon } from 'lucide-react';

import type { ThemeVaraint } from './theme-switcher.types';

export const ICON_SIZE = 16;

export const THEME_ICONS: Record<ThemeVaraint, LucideIcon> = {
    light: Sun,
    dark: Moon,
    system: Laptop,
};

export const THEME_OPTIONS: Array<{
    value: ThemeVaraint;
    label: string;
}> = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
];
