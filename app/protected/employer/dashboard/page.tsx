import { redirect } from 'next/navigation';

import { createClient } from '@/lib/shared/services/supabase/server';
import { LogoutButton } from '@/lib/shared';

const EmployerDashboardPage = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        // TODO:
        redirect('/');
    }

    return (
        <>
            {data.user.email}
            <LogoutButton />
        </>
    );
};

export default EmployerDashboardPage;
