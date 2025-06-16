import { redirect } from 'next/navigation';

import { createClient } from '@/lib/shared/services/supabase/server';
import { SignOutButton } from '@/lib/shared';

const EmployerDashboardPage = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        // TODO:
        redirect('/');
    }

    return (
        <>
            Hello
            {/* {data.user.email}
            <SignOutButton /> */}
        </>
    );
};

export default EmployerDashboardPage;
