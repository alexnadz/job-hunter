import Link from 'next/link';

import { PATHNAMES, Button, generateJobOfferPath } from '@/lib/shared';
import { createClient } from '@/lib/shared/services/supabase/server';
import { getJobOffersByFilters } from '@/lib/job-offers/shared/queries';

import { JobOffersSectionCard } from './job-offers-section-card';

// TODO:
// const featuredJobs = [
//     {
//         id: 1,
//         title: 'Senior Frontend Developer',
//         company: 'TechCorp Inc.',
//         location: 'San Francisco, CA',
//         salary: '$120K - $150K',
//         jobType: 'Full-time' as const,
//         icon: <Code className="h-6 w-6" />,
//     },
//     {
//         id: 2,
//         title: 'Marketing Manager',
//         company: 'GrowthLab',
//         location: 'Remote, US',
//         salary: '$80K - $100K',
//         jobType: 'Remote' as const,
//         icon: <LineChart className="h-6 w-6" />,
//     },
//     {
//         id: 3,
//         title: 'UX Designer',
//         company: 'DesignStudio',
//         location: 'New York, NY',
//         salary: '$90K - $110K',
//         jobType: 'Contract' as const,
//         icon: <Palette className="h-6 w-6" />,
//     },
// ];

export const JobOffersSection = async () => {
    const supabase = await createClient();

    const { jobOffersData } = await getJobOffersByFilters({
        supabaseClient: supabase,
        args: { limit: 3 },
    });

    return (
        <section className="py-16">
            <div className="container mx-auto">
                <div className="mb-10 text-center">
                    <h2 className="mb-2 text-3xl font-bold tracking-tight">Recently Added Jobs</h2>
                    <p className="text-muted-foreground">
                        Discover handpicked opportunities from top companies
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {jobOffersData.map((job) => (
                        <Link key={job.id} href={generateJobOfferPath(job.id)}>
                            <JobOffersSectionCard jobOffer={job} />
                        </Link>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Link href={PATHNAMES.PUBLIC.JOB_SEARCH}>
                        <Button variant="default" size="lg">
                            View All Jobs
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
