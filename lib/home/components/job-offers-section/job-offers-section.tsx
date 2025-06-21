import { Code, LineChart, Palette } from 'lucide-react';

import { Button } from '@/lib/shared/ui/button';

import { JobOffersSectionCard } from './job-offers-section-card';

// TODO:
const featuredJobs = [
    {
        id: 1,
        title: 'Senior Frontend Developer',
        company: 'TechCorp Inc.',
        location: 'San Francisco, CA',
        salary: '$120K - $150K',
        jobType: 'Full-time' as const,
        icon: <Code className="h-6 w-6" />,
    },
    {
        id: 2,
        title: 'Marketing Manager',
        company: 'GrowthLab',
        location: 'Remote, US',
        salary: '$80K - $100K',
        jobType: 'Remote' as const,
        icon: <LineChart className="h-6 w-6" />,
    },
    {
        id: 3,
        title: 'UX Designer',
        company: 'DesignStudio',
        location: 'New York, NY',
        salary: '$90K - $110K',
        jobType: 'Contract' as const,
        icon: <Palette className="h-6 w-6" />,
    },
];

export const JobOffersSection = () => (
    <section className="py-16">
        <div className="container mx-auto">
            <div className="mb-10 text-center">
                <h2 className="mb-2 text-3xl font-bold tracking-tight">Featured Jobs</h2>
                <p className="text-muted-foreground">
                    Discover handpicked opportunities from top companies
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredJobs.map((job) => (
                    <JobOffersSectionCard
                        key={job.id}
                        title={job.title}
                        company={job.company}
                        location={job.location}
                        salary={job.salary}
                        jobType={job.jobType}
                        icon={job.icon}
                    />
                ))}
            </div>

            <div className="mt-10 flex justify-center">
                <Button variant="default" size="lg">
                    View All Jobs
                </Button>
            </div>
        </div>
    </section>
);
