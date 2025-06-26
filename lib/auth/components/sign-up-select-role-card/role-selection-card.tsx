import Link from 'next/link';

import { Button } from '@/lib/shared';

type RoleSelectionCardProps = {
    href: string;
    title: string;
    description: string;
    icon: React.ReactNode;
};

export const RoleSelectionCard = ({ href, title, description, icon }: RoleSelectionCardProps) => (
    <Link href={href} className="w-full">
        <Button
            variant="outline-on-light"
            className="w-full h-24 flex flex-col items-center justify-center gap-2 text-foreground"
        >
            {icon}
            <div className="flex flex-col items-center">
                <span className="font-medium text-foreground">{title}</span>
                <span className="text-xs text-muted-foreground">{description}</span>
            </div>
        </Button>
    </Link>
);
