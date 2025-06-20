'use client';

import { usePathname } from 'next/navigation';

import { PATHNAMES } from '@/lib/shared/constants';

import { ProtectedNavbar } from './protected-navbar';
import { PublicNavbar } from './public-navbar';
import { AuthNavbar } from './auth-navbar';

export const AppNavbar = () => {
    const pathname = usePathname();

    if (pathname.startsWith(PATHNAMES.AUTH.ROOT)) {
        return <AuthNavbar />;
    } else if (pathname.startsWith(PATHNAMES.PROTECTED.ROOT)) {
        return <ProtectedNavbar />;
    } else {
        return <PublicNavbar />;
    }
};
