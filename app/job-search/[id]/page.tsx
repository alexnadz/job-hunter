import { JobDetails } from '@/lib/job-offers';

type JobOfferPageProps = {
    params: Promise<{ id: string }>;
};

const JobOfferPage = async ({ params }: JobOfferPageProps) => {
    const { id } = await params;

    return <JobDetails jobOfferId={id} />;
};

export default JobOfferPage;
