import { PropsWithChildren } from 'react';

import {
    createServerClient,
    SidebarProvider,
    EmployerSidebar,
    CandidateSidebar,
    UserType,
    getProfileForCurrentUser,
} from '@/lib/shared';

const ProtectedLayout = async ({ children }: PropsWithChildren) => {
    const supabase = await createServerClient();

    const { profileData } = await getProfileForCurrentUser({ supabaseClient: supabase });

    const UserTypeBasedSidebar =
        profileData.user_type === UserType.EMPLOYER ? EmployerSidebar : CandidateSidebar;

    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-1">
                <SidebarProvider>
                    <div className="flex w-full">
                        <UserTypeBasedSidebar />
                        {/* TODO: temporary */}
                        <main className="flex-1 md:ml-[160px]">{children}</main>
                    </div>
                </SidebarProvider>
            </div>
        </div>
    );
};

export default ProtectedLayout;
