import Link from 'next/link';
import { ReactNode } from 'react';

type NavbarLinkProps = {
    href: string;
    children: ReactNode;
};

export const NavbarLink = ({ href, children }: NavbarLinkProps) => (
    <Link href={href} className="text-sm font-medium transition-colors hover:text-primary">
        {children}
    </Link>
);
