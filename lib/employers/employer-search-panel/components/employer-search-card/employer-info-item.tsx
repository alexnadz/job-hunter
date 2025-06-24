import { ReactNode } from 'react';

import { LucideIcon } from 'lucide-react';

type EmployerInfoItemProps = {
    icon: LucideIcon;
    children: ReactNode;
};

export const EmployerInfoItem = ({ icon: Icon, children }: EmployerInfoItemProps) => {
    return (
        <div className="flex items-center text-muted-foreground">
            <Icon className="mr-2 h-4 w-4" />
            {children}
        </div>
    );
};
