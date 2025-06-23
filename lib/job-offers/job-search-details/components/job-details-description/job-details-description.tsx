import { JobDescriptionSection } from './job-description-section';

type JobDetailsDescriptionProps = {
    description: string;
    // niceToHave: string;
    // requirements: string;
    // responsibilities: string;
};

export const JobDetailsDescription = ({
    description,
    // niceToHave,
    // requirements,
    // responsibilities,
}: JobDetailsDescriptionProps) => (
    <div className="mb-8 rounded-lg border bg-card p-6">
        <h2 className="mb-4 text-xl font-semibold">Job Description</h2>
        <JobDescriptionSection title="" content={description} />
        {/* <JobDescriptionSection title="Key Responsibilities" content={responsibilities} />
        <JobDescriptionSection title="Requirements" content={requirements} />
        <JobDescriptionSection title="Nice to Have" content={niceToHave} /> */}
    </div>
);
