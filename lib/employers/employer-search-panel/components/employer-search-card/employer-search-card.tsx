import Link from 'next/link';

import { Building2 } from 'lucide-react';

import { Button, PATHNAMES } from '@/lib/shared';
import { EmployerDto } from '@/lib/employers/shared';

type EmployerSearchCardProps = {
    company: EmployerDto;
};

export const EmployerSearchCard = ({ company }: EmployerSearchCardProps) => {
    const { id, name } = company;

    return (
        <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-md">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Building2 className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                        <h3 className="font-semibold">{name}</h3>
                        {/* <Badge variant="outline" className="mt-1">
                            {industry}
                        </Badge> */}
                    </div>
                </div>
            </div>

            {/* <div className="mb-4 space-y-2 text-sm">
                <EmployerInfoItem icon={MapPin}>{location}</EmployerInfoItem>
                <EmployerInfoItem icon={Users}>{employeesCount} employees</EmployerInfoItem>
            </div> */}

            {/* <div className="mb-4 flex items-center justify-between border-t border-b py-2">
                <span className="text-sm font-medium">{openPositions} open positions</span>
            </div> */}

            <div className="flex justify-between gap-2">
                {/* <Button variant="outline-on-light" className="flex-1" asChild>
                    <Link href={`${PATHNAMES.PUBLIC.COMPANIES}/${id}`}>View Profile</Link>
                </Button> */}
                <Button className="flex-1" asChild>
                    <Link href={`${PATHNAMES.PUBLIC.JOB_SEARCH}?company=${id}`}>View Jobs</Link>
                </Button>
            </div>
        </div>
    );
};
