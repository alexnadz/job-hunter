import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import { createClient } from '@/lib/shared/services/supabase/server';
import { Button, PATHNAMES } from '@/lib/shared';
import { getJobOfferDetails } from '@/lib/job-offers/shared';

import { JobDetailsHeader } from './job-details-header';
import { JobDetailsDescription } from './job-details-description';
import { JobDetailsCompanyInfo } from './job-details-company-info';

type JobSearchDetailsProps = {
    jobOfferId: string;
};

export const JobSearchDetails = async ({ jobOfferId }: JobSearchDetailsProps) => {
    const supabase = await createClient();

    const { jobOfferData } = await getJobOfferDetails({
        supabaseClient: supabase,
        args: { id: jobOfferId },
    });

    const { description, employers, created_at, salary_max, salary_min } = jobOfferData;
    const {
        company_name: companyName,
        about_company: companyDescription,
        // foundedYear: companyFoundedYear,
        // location: companyLocation,
        // employeesCount: companyEmployeesCount,
    } = employers;

    return (
        <div className="container py-8 px-8">
            <div className="mb-6">
                <Link
                    href={PATHNAMES.PUBLIC.JOB_SEARCH}
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to job search
                </Link>
            </div>

            <JobDetailsHeader
                title={jobOfferData.title}
                companyName={jobOfferData.employers.company_name}
                // location={jobOfferData.location}
                salaryMin={salary_min}
                salaryMax={salary_max}
                postedDate={created_at}
            />

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <JobDetailsDescription
                        description={description}
                        // niceToHave={niceToHave}
                        // requirements={requirements}
                        // responsibilities={responsibilities}
                    />
                </div>

                <div>
                    {/* TODO: to add apply section */}

                    {/* <SimilarJobs similarJobs={similarJobs} /> */}
                </div>

                <div className="lg:col-span-2">
                    <JobDetailsCompanyInfo
                        name={companyName}
                        description={companyDescription}
                        // foundedYear={companyFoundedYear}
                        // location={companyLocation}
                        // employeesCount={companyEmployeesCount}
                    />
                </div>
            </div>

            {/* Apply Button (Sticky) */}
            <div className="fixed bottom-0 left-0 right-0 border-t bg-background p-4 shadow-md md:hidden">
                <Button className="w-full">Apply Now</Button>
            </div>
        </div>
    );
};
