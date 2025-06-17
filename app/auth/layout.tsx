import { PropsWithChildren } from 'react';

import { AuthNavbar } from '@/lib/auth';

const AuthLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <AuthNavbar />
            <main className="flex-1">{children}</main>
        </>
    );
};

export default AuthLayout;
