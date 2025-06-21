import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

type PageErrorLayoutProps = {
    Icon: LucideIcon;
    iconClassName?: string;
    iconContainerClassName?: string;
    title: string;
    subtitle: string;
    description: string;
    children?: ReactNode;
};

export const PageErrorLayout = ({
    Icon,
    iconClassName = 'h-12 w-12 text-primary',
    iconContainerClassName = 'rounded-full bg-muted p-6',
    title,
    subtitle,
    description,
    children,
}: PageErrorLayoutProps) => (
    <div className="flex h-[80vh] flex-col items-center justify-center text-center">
        <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
                <div className={iconContainerClassName}>
                    <Icon className={iconClassName} />
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{title}</h1>
                <h2 className="text-2xl font-semibold">{subtitle}</h2>
                <p className="max-w-[500px] text-muted-foreground">{description}</p>
                {children}
            </div>
        </div>
    </div>
);
