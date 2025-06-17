import Link from 'next/link';

import { Button } from '@/lib/shared';

type RoleSelectionCardProps = {
    href: string;
    title: string;
    description: string;
    icon: React.ReactNode;
};

export const RoleSelectionCard = ({ href, title, description, icon }: RoleSelectionCardProps) => {
    return (
        <Link href={href} className="w-full">
            <Button
                variant="outline"
                className="w-full h-24 flex flex-col items-center justify-center gap-2"
            >
                {icon}
                <div className="flex flex-col items-center">
                    <span className="font-medium">{title}</span>
                    <span className="text-xs text-muted-foreground">{description}</span>
                </div>
            </Button>
        </Link>
    );
};
