import { redirect } from 'next/navigation';

import { createServerClient } from '@/lib/shared';

const EmployerDashboardPage = async () => {
    const supabase = await createServerClient();

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
