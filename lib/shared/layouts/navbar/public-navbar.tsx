import { Button } from '@/lib/shared/ui/button';
import { PATHNAMES } from '@/lib/shared/constants';
import { NavbarBase } from './navbar-base';
import { NavbarLink } from './navbar-link';

export const PublicNavbar = () => {
    const centerLinksContent = (
        <>
            <NavbarLink href={PATHNAMES.PUBLIC.JOB_SEARCH}>Find Jobs</NavbarLink>
            <NavbarLink href={PATHNAMES.PROTECTED.EMPLOYER.POST_JOB}>Post Job</NavbarLink>
            <NavbarLink href={PATHNAMES.PUBLIC.EMPLOYER_SEARCH}>Companies</NavbarLink>
            <NavbarLink href={PATHNAMES.PUBLIC.ABOUT}>About</NavbarLink>
        </>
    );

    const rightLinksContent = (
        <>
            <Button asChild variant="outline-on-light" size="sm">
                <a href={PATHNAMES.AUTH.SIGN_IN}>Sign In</a>
            </Button>
            <Button asChild size="sm">
                <a href={PATHNAMES.AUTH.SIGN_UP}>Sign Up</a>
            </Button>
        </>
    );

    return (
        <NavbarBase centerLinksContent={centerLinksContent} rightLinksContent={rightLinksContent} />
    );
};

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-14 items-center justify-between">
//         <div className="flex items-center gap-8">
//           <Link href={PATHNAMES.PUBLIC.HOME} className="flex items-center space-x-2">
//             <span className="text-xl font-bold text-primary"></span>
//           </Link>
//           <nav className="hidden gap-6 md:flex">

//           </nav>
//         </div>
//         <div className="flex items-center gap-2">
//           <Link href={PATHNAMES.AUTH.SIGN_IN}>
//             <Button variant="ghost" size="sm">
//               Sign In
//             </Button>
//           </Link>
//           <Link href={PATHNAMES.AUTH.SIGN_UP}>
//             <Button size="sm">Sign Up</Button>
//           </Link>
//         </div>
//       </div>
//     </header>
