import Link from 'next/link';
import { User } from 'lucide-react';

import { Button } from '@/lib/shared/ui';
import { SignOutButton } from '@/lib/shared/components/sign-out-button';

import { NavbarBase } from './navbar-base';

export const ProtectedNavbar = () => {
    const rightLinksContent = (
        <>
            <Link href="/protected">
                <Button variant="ghost">
                    <User className="h-5 w-5" />
                    <span>My Panel</span>
                </Button>
            </Link>

            <SignOutButton />
        </>
    );

    return <NavbarBase rightLinksContent={rightLinksContent} />;
};
