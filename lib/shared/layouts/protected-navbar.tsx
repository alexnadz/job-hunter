import Link from 'next/link';
import { User } from 'lucide-react';

import { Button } from '@/lib/shared/components/ui/button';
import { NavbarBase } from '@/lib/shared/layouts/navbar-base';
import { SignOutButton } from '../components/sign-out-button';

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
