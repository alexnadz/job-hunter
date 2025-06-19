'use client';

import { ReactNode } from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
} from '@/lib/shared/ui/sidebar';

type ProtectedSidebarBaseProps = {
    menuItems: ReactNode;
};

export const ProtectedSidebarBase = ({ menuItems }: ProtectedSidebarBaseProps) => {
    return (
        <Sidebar className="mt-16">
            {/* <SidebarHeader>
                <span className="text-lg font-semibold">{title}</span>
            </SidebarHeader> */}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>{menuItems}</SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};
