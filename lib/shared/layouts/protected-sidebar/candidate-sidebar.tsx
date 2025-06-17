'use client';

import Link from 'next/link';
import { LayoutDashboard, User, FileText, Settings } from 'lucide-react';

import { PATHNAMES } from '@/lib/shared/constants';
import { SidebarMenuItem } from '@/lib/shared/ui/sidebar';
import { ProtectedSidebarBase } from '@/lib/shared/layouts/protected-sidebar/protected-sidebar-base';

export const CandidateSidebar = () => {
    const menuItems = (
        <>
            <SidebarMenuItem>
                <Link
                    href={PATHNAMES.candidate.DASHBOARD}
                    className="flex items-center gap-2 p-2 hover:bg-sidebar-accent rounded-md"
                >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <Link
                    href={PATHNAMES.candidate.PROFILE}
                    className="flex items-center gap-2 p-2 hover:bg-sidebar-accent rounded-md"
                >
                    <User className="h-4 w-4" />
                    <span>My Profile</span>
                </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <Link
                    href="#"
                    className="flex items-center gap-2 p-2 hover:bg-sidebar-accent rounded-md"
                >
                    <FileText className="h-4 w-4" />
                    <span>My Applications</span>
                </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <Link
                    href="#"
                    className="flex items-center gap-2 p-2 hover:bg-sidebar-accent rounded-md"
                >
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                </Link>
            </SidebarMenuItem>
        </>
    );

    return <ProtectedSidebarBase title="Candidate Panel" menuItems={menuItems} />;
};
