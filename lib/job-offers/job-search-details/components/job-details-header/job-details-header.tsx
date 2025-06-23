import { Building2, Clock } from 'lucide-react';

import { getFormattedSalary } from '@/lib/job-offers/shared';

import { JobInfoItem } from './job-info-item';

type JobDetailsHeaderProps = {
    title: string;
    companyName: string;
    // location: string;
    salaryMin: number | null;
    salaryMax: number | null;
    postedDate: string;
};

// TODO: to move to shared
export const JobDetailsHeader = ({
    title,
    companyName,
    // location,
    salaryMin,
    salaryMax,
    postedDate,
}: JobDetailsHeaderProps) => {
    return (
        <div className="mb-8 rounded-lg bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <div className="mt-2 flex items-center">
                        <JobInfoItem icon={Building2} text={companyName} />
                        {/* <JobInfoItem icon={MapPin} text={location} /> */}
                        <JobInfoItem icon={Clock} text={`Posted ${postedDate}`} />
                    </div>
                    {/* <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline">{jobType}</Badge>
                        {remote && <Badge variant="outline">Remote</Badge>}
                        <Badge variant="outline">{seniorityLevel}</Badge>
                    </div> */}
                </div>

                <div className="flex flex-col items-start gap-4">
                    <div className="text-right">
                        <div className="text-xl font-bold">{`Salary: ${getFormattedSalary(salaryMin, salaryMax)}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

//  <span className="mx-2">•</span>
// <span>{applicantsCount} applicants</span>

//     <div className="flex gap-2">

//      <Button>Apply Now</Button>

//      <Button variant="outline" size="icon">
//     <Share2 className="h-4 w-4" />
// </Button>

//  </div>

//  <div className="flex items-center text-sm text-muted-foreground"></div>
