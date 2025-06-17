import { PropsWithChildren } from 'react';
import { redirect } from 'next/navigation';

import {
    createServerClient,
    ProtectedNavbar,
    SidebarProvider,
    SidebarTrigger,
    EmployerSidebar,
    CandidateSidebar,
} from '@/lib/shared';

const ProtectedLayout = async ({ children }: PropsWithChildren) => {
    const supabase = await createServerClient();

    // TODO:
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        redirect('/auth/sign-in');
    }

    // Get user profile to determine the type (employer or candidate)
    const { data: profile } = await supabase
        .from('profiles')
        .select('user_type')
        .eq('user_id', session.user.id)
        .single();

    const userType = profile?.user_type;

    console.log('userType', userType);

    return (
        <div className="flex min-h-screen flex-col">
            <ProtectedNavbar />
            <div className="flex flex-1">
                <SidebarProvider>
                    <div className="flex w-full">
                        {userType === 'employer' ? (
                            <EmployerSidebar />
                        ) : userType === 'candidate' ? (
                            <CandidateSidebar />
                        ) : null}
                        {/* TODO: temporary */}
                        <main className="flex-1 md:ml-[160px]">
                            <SidebarTrigger />
                            {children}
                        </main>
                    </div>
                </SidebarProvider>
            </div>
        </div>
    );
};

export default ProtectedLayout;
