import { Briefcase } from 'lucide-react';

import { Button } from '@/lib/shared';
// import { CompanyInfoItem } from './company-info-item';

type JobDetailsCompanyInfoProps = {
    name: string;
    description: string;
    // foundedYear: number;
    // location: string;
    // employeesCount: string;
};

export const JobDetailsCompanyInfo = ({
    name,
    description,
    // foundedYear,
    // location,
    // employeesCount,
}: JobDetailsCompanyInfoProps) => (
    <div className="rounded-lg border bg-card p-6">
        <h2 className="mb-4 text-xl font-semibold">About {name}</h2>

        <div className="mb-4 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Briefcase className="h-8 w-8" />
            </div>
        </div>

        <p className="mb-4 text-card-foreground">{description}</p>

        {/* <div className="space-y-2 text-sm">
            <CompanyInfoItem label="Founded in" value={foundedYear} />
            <CompanyInfoItem label="Location" value={location} />
            <CompanyInfoItem label="Company size" value={employeesCount} />
        </div> */}

        <div className="mt-4">
            <Button variant="outline-on-light" className="w-full">
                Company website
            </Button>
        </div>
    </div>
);
