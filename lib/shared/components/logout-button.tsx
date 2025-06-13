'use client';

import { createClient } from '@/lib/shared/services/supabase/client';
import { Button } from '@/lib/shared/ui/button';
import { useRouter } from 'next/navigation';

export const LogoutButton = () => {
    const router = useRouter();

    const logout = async () => {
        const supabase = createClient();
        await (await supabase).auth.signOut();
        router.push('/sign-in');
    };

    return <Button onClick={logout}>Logout</Button>;
};
