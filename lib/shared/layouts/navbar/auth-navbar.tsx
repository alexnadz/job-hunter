import Link from 'next/link';

import { Button } from '@/lib/shared';

import { NavbarBase } from './navbar-base';

export const AuthNavbar = () => (
    <NavbarBase
        rightLinksContent={
            <>
                <Link href="/auth/sign-up">
                    <Button variant="default" size="sm">
                        Sign Up
                    </Button>
                </Link>
                <Link href="/auth/sign-in">
                    <Button variant="outline-on-light" size="sm">
                        Sign In
                    </Button>
                </Link>
            </>
        }
    />
);
