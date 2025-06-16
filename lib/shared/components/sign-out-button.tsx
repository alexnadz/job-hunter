'use client';

import { LogOut } from 'lucide-react';

import { createClient } from '@/lib/shared/services/supabase/client';
import { Button } from '@/lib/shared/ui/button';
import { useRouter } from 'next/navigation';
import { PATHNAMES } from '../constants';

export const SignOutButton = () => {
    const router = useRouter();

    const signOut = async () => {
        const supabase = createClient();
        await (await supabase).auth.signOut();
        router.push(PATHNAMES.auth.SIGN_IN);
    };

    return (
        <Button variant="ghost" onClick={signOut}>
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
        </Button>
    );
};
