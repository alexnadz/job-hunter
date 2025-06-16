import { type EmailOtpType } from '@supabase/supabase-js';
import { type NextRequest } from 'next/server';

import { createClient } from '@/lib/shared/services/supabase/server';
import { PATHNAMES } from '@/lib/shared/constants';
import { redirect } from 'next/navigation';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const token_hash = searchParams.get('token_hash');
    const type = searchParams.get('type') as EmailOtpType | null;
    const next = searchParams.get('next') ?? PATHNAMES.public.HOME;

    if (token_hash && type) {
        const supabase = await createClient();

        const { error } = await supabase.auth.verifyOtp({
            type,
            token_hash,
        });
        if (!error) {
            redirect(next);
        }
    }

    redirect(PATHNAMES.auth.AUTH_CODE_ERROR);
}
