import { ReactNode } from 'react';

type CategoryCardProps = {
    icon: ReactNode;
    title: string;
    jobCount: number;
    color?: string;
};

export const CategoryCard = ({
    icon,
    title,
    jobCount,
    color = 'bg-blue-100',
}: CategoryCardProps) => (
    <div className="flex flex-col items-center">
        <div className={`mb-3 flex h-16 w-16 items-center justify-center rounded-md ${color}`}>
            {icon}
        </div>
        <h3 className="mb-1 font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{jobCount.toLocaleString()} jobs</p>
    </div>
);
