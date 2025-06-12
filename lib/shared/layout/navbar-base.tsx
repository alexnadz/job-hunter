import Link from 'next/link';
import { PropsWithChildren } from 'react';

type NavbarBaseProps = PropsWithChildren;

export const NavbarBase = ({ children }: NavbarBaseProps) => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 w-full mx-auto px-4 items-center">
                <div className="mr-4 flex">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-xl">JobHunter</span>
                    </Link>
                </div>
                {children}
            </div>
        </header>
    );
};
