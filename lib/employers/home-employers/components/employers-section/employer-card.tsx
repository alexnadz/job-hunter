import { Building2 } from 'lucide-react';

import { EmployerDto } from '@/lib/employers/shared/types';

type EmployerCardProps = {
    employer: EmployerDto;
};

export const EmployerCard = ({ employer }: EmployerCardProps) => {
    const { name } = employer;

    return (
        <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center transition-all hover:shadow-md">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-medium">{name}</h3>
        </div>
    );
};
