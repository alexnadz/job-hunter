import Link from 'next/link';

import { PlusCircle } from 'lucide-react';

import {
    Button,
    PATHNAMES,
    createServerClient,
    getEmployerForCurrentUser,
    getJobOffersByEmployerId,
} from '@/lib/shared';
import { JobOfferList } from '@/lib/job-offers/employer-job-offers';

const EmployerJobOffersPage = async () => {
    const supabase = await createServerClient();

    const { employerData } = await getEmployerForCurrentUser({ supabaseClient: supabase });
    const { jobOffersData } = await getJobOffersByEmployerId({
        supabaseClient: supabase,
        args: { employerId: employerData.id },
    });

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Job Offers</h1>
                <Link href={`${PATHNAMES.PROTECTED.EMPLOYER.JOB_OFFERS}/add-job-offer`}>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add New Job Offer
                    </Button>
                </Link>
            </div>

            <JobOfferList jobOffers={jobOffersData} />
        </div>
    );
};

export default EmployerJobOffersPage;
