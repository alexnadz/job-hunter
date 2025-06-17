'use client';

import { ReactNode } from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
} from '@/lib/shared/ui/sidebar';

type ProtectedSidebarBaseProps = {
    title: string;
    menuItems: ReactNode;
};

export const ProtectedSidebarBase = ({ title, menuItems }: ProtectedSidebarBaseProps) => {
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
