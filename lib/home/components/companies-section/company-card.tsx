import { ReactNode } from 'react';

type CompanyCardProps = {
    logo: ReactNode;
    name: string;
};

export const CompanyCard = ({ logo, name }: CompanyCardProps) => (
    <div className="flex flex-col items-center rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
        <div className="mb-4 flex h-16 w-16 items-center justify-center">{logo}</div>
        <h3 className="text-center font-medium">{name}</h3>
    </div>
);
