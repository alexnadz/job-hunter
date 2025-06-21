// import { MapPin } from 'lucide-react';

import { Card, CardContent, CardHeader } from '@/lib/shared';
import { FilteredJobOffer } from '@/lib/job-offers/shared/types';
import { getFormattedSalary } from '@/lib/job-offers/shared';

type JobSearchCardProps = {
    job: FilteredJobOffer;
};

// TODO: to finish
export const JobSearchCard = ({ job }: JobSearchCardProps) => {
    const { title, description, salary_min, salary_max, created_at, employers } = job;
    const { company_name } = employers;

    return (
        <Card className="overflow-hidden hover:border-primary/50">
            <CardHeader className="bg-white p-4">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-primary">{title}</h3>
                        <p className="text-sm text-gray-600">{company_name}</p>
                    </div>
                    <span className="text-xs text-gray-500">
                        {new Date(created_at).toLocaleDateString()}
                    </span>
                </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <div className="mb-3 mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    {/* <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                </div> */}
                    {/* <div className="flex items-center gap-1">
                    <span>•</span>
                    <span>{job.jobType}</span>
                </div> */}
                    {/* <div className="flex items-center gap-1">
                    <span>•</span>
                    <span>{job.salaryRange}</span>
                </div> */}
                    <p className="text-sm">
                        {`Salary: ${getFormattedSalary(salary_min, salary_max)}`}
                    </p>
                </div>

                <p className="mb-4 text-sm text-gray-600">{description}</p>

                {/* <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-full">
                        {skill}
                    </Badge>
                ))}
            </div> */}
            </CardContent>
        </Card>
    );
};
