import { JobSearchDetails } from '@/lib/job-offers';

type JobOfferPageProps = {
    params: Promise<{ id: string }>;
};

const JobOfferPage = async ({ params }: JobOfferPageProps) => {
    const { id } = await params;

    return <JobSearchDetails jobOfferId={id} />;
};

export default JobOfferPage;
