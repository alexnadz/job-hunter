'use client';

import { usePathname } from 'next/navigation';

import { PublicFooter } from './public-footer';

export const Footer = () => {
    const pathname = usePathname();
    const showFooter = !pathname.startsWith('/auth') && !pathname.startsWith('/protected');

    if (!showFooter) {
        return null;
    }

    return <PublicFooter />;
};
