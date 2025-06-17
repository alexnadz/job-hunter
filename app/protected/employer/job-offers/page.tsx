import Link from 'next/link';
import { redirect } from 'next/navigation';

import { PlusCircle } from 'lucide-react';

import { Button, PATHNAMES, createServerClient } from '@/lib/shared';
import { JobOfferList } from '@/lib/job-offers';

const EmployerJobOffersPage = async () => {
    const supabase = await createServerClient();

    // Get the current session
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        redirect(PATHNAMES.auth.SIGN_IN);
    }

    // Check if the user is an employer
    const { data: profile } = await supabase
        .from('profiles')
        .select('user_type')
        .eq('user_id', session.user.id)
        .single();

    if (!profile || profile.user_type !== 'employer') {
        redirect(PATHNAMES.public.HOME);
    }

    // Get the employer ID for the current user
    const { data: employer } = await supabase
        .from('employers')
        .select('id')
        .eq('user_id', session.user.id)
        .single();

    if (!employer) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Job Offers</h1>
                <p className="text-muted-foreground">Employer profile not found.</p>
            </div>
        );
    }

    // Get the job offers for the current employer
    const { data: jobOffers } = await supabase
        .from('job_offers')
        .select('*')
        .eq('employer_id', employer.id)
        .order('created_at', { ascending: false });

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Job Offers</h1>
                <Link href={`${PATHNAMES.employer.JOB_OFFERS}/add-job-offer`}>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add New Job Offer
                    </Button>
                </Link>
            </div>

            <JobOfferList jobOffers={jobOffers} />
        </div>
    );
};

export default EmployerJobOffersPage;
