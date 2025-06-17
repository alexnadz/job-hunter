import { redirect } from 'next/navigation';

import { createClient } from '@/lib/shared/services/supabase/server';
import { AddJobOfferForm } from '@/lib/job-offers/components/add-job-offer-form';
import { PATHNAMES } from '@/lib/shared/constants';

const AddJobOfferPage = async () => {
    const supabase = await createClient();

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
