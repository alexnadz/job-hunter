import { redirect } from 'next/navigation';

import { createServerClient, PATHNAMES } from '@/lib/shared';
import { AddJobOfferForm } from '@/lib/job-offers';

const AddJobOfferPage = async () => {
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

    return <AddJobOfferForm />;
};

export default AddJobOfferPage;
