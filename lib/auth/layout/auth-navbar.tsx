import Link from 'next/link';
import { Button } from '@/lib/shared/ui/button';
import { NavbarBase } from '@/lib/shared';

export const AuthNavbar = () => {
    return (
        <NavbarBase>
            <nav className="flex flex-1 items-center justify-end space-x-4">
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
            </nav>
        </NavbarBase>
    );
};
