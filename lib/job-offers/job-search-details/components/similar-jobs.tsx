import Link from 'next/link';

type SimilarJob = {
    title: string;
    company: string;
    location: string;
    salary: string;
};

type SimilarJobsProps = {
    similarJobs: SimilarJob[];
};

// TODO: refactor
export const SimilarJobs = ({ similarJobs }: SimilarJobsProps) => (
    <div className="mt-6 rounded-lg border bg-card p-6">
        <h2 className="mb-4 text-xl font-semibold">Similar Jobs</h2>

        <div className="space-y-4">
            {similarJobs.map((job, index) => (
                <div key={index} className={index < similarJobs.length - 1 ? 'border-b pb-3' : ''}>
                    <h3 className="font-medium text-primary hover:underline">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">
                        {job.company} • {job.location}
                    </p>
                    <p className="text-sm">{job.salary}</p>
                </div>
            ))}
        </div>

        <div className="mt-4 text-center">
            <Link href="#" className="text-sm text-primary hover:underline">
                View all similar jobs
            </Link>
        </div>
    </div>
);
