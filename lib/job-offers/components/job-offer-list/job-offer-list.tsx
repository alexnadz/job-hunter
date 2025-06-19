import Link from 'next/link';

import { PlusCircle } from 'lucide-react';

import { Button, PATHNAMES, JobOffer } from '@/lib/shared';
import { JobOfferListItem } from '@/lib/job-offers';

type JobOfferListProps = {
    jobOffers: JobOffer[] | null;
};

export const JobOfferList = ({ jobOffers }: JobOfferListProps) => (
    <>
        {jobOffers && jobOffers.length > 0 ? (
            <div className="grid gap-4">
                {jobOffers.map((jobOffer) => (
                    <JobOfferListItem key={jobOffer.id} jobOffer={jobOffer} />
                ))}
            </div>
        ) : (
            <div className="bg-card rounded-lg shadow p-6 text-center">
                <p className="text-muted-foreground mb-4">
                    You haven&apos;t posted any job offers yet.
                </p>
                <Link href={`${PATHNAMES.PROTECTED.EMPLOYER.JOB_OFFERS}/add-job-offer`}>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Create Your First Job Offer
                    </Button>
                </Link>
            </div>
        )}
    </>
);
