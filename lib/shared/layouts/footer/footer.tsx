'use client';

import { usePathname } from 'next/navigation';

import { PATHNAMES } from '@/lib/shared/constants';

import { PublicFooter } from './public-footer';

export const Footer = () => {
    const pathname = usePathname();

    const showFooter =
        !pathname.startsWith(PATHNAMES.AUTH.ROOT) && !pathname.startsWith(PATHNAMES.PROTECTED.ROOT);

    if (!showFooter) {
        return null;
    }

    return <PublicFooter />;
};
