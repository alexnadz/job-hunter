import Link from 'next/link';

type NavbarBaseProps = {
    centerLinksContent?: React.ReactNode;
    rightLinksContent?: React.ReactNode;
};

export const NavbarBase = ({ centerLinksContent, rightLinksContent }: NavbarBaseProps) => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 w-full mx-auto px-4 items-center">
                <div className="mr-4 flex">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-xl">JobHunter</span>
                    </Link>
                </div>
                <div className="flex w-full items-center justify-between">
                    <nav className="flex items-center gap-2">{centerLinksContent}</nav>
                    <div className="flex items-center gap-2">{rightLinksContent}</div>
                </div>
            </div>
        </header>
    );
};
