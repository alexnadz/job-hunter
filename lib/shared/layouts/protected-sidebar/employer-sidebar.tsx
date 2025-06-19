'use client';

import Link from 'next/link';
import { LayoutDashboard, Briefcase, Settings } from 'lucide-react';

import { PATHNAMES } from '@/lib/shared/constants';
import { SidebarMenuItem } from '@/lib/shared/ui/sidebar';
import { ProtectedSidebarBase } from '@/lib/shared/layouts/protected-sidebar/protected-sidebar-base';

export const EmployerSidebar = () => {
    const menuItems = (
        <>
            <SidebarMenuItem>
                <Link
                    href={PATHNAMES.PROTECTED.EMPLOYER.DASHBOARD}
                    className="flex items-center gap-2 p-2 hover:bg-sidebar-accent rounded-md"
                >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <Link
                    href={PATHNAMES.PROTECTED.EMPLOYER.JOB_OFFERS}
                    className="flex items-center gap-2 p-2 hover:bg-sidebar-accent rounded-md"
                >
                    <Briefcase className="h-4 w-4" />
                    <span>Job Offers</span>
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

    return <ProtectedSidebarBase menuItems={menuItems} />;
};
