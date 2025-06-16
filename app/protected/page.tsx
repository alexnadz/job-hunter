import { redirect } from 'next/navigation';

import { createClient } from '@/lib/shared/services/supabase/server';
import { SignOutButton } from '@/lib/shared';

export default async function ProtectedPage() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        // TODO:
        redirect('/');
    }

    return (
        <>
            {data.user.email}
            <SignOutButton />
        </>
    );

    // return 'ProtectedPage';
}
