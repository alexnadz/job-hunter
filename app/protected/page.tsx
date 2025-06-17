import { redirect } from 'next/navigation';

import { createServerClient, SignOutButton } from '@/lib/shared';

export default async function ProtectedPage() {
    const supabase = await createServerClient();

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
