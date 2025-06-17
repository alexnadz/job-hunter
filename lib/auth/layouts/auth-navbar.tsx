import Link from 'next/link';

import { Button, NavbarBase } from '@/lib/shared';

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
                    <Button variant="outline" size="sm">
                        Sign In
                    </Button>
                </Link>
            </>
        }
    />
);
