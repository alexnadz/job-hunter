import { NextResponse, type NextRequest } from 'next/server';

import { createServerClient } from '@supabase/ssr';

import { getProfileByUserId } from '@/lib/shared/queries';
import { PATHNAMES } from '@/lib/shared/constants';

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
                    supabaseResponse = NextResponse.next({
                        request,
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options),
                    );
                },
            },
        },
    );

    // Do not run code between createServerClient and
    // supabase.auth.getUser(). A simple mistake could make it very hard to debug
    // issues with users being randomly logged out.

    // IMPORTANT: DO NOT REMOVE auth.getUser()
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user && request.nextUrl.pathname.startsWith(PATHNAMES.PROTECTED.ROOT)) {
        const url = request.nextUrl.clone();
        url.pathname = PATHNAMES.AUTH.SIGN_IN;
        return NextResponse.redirect(url);
    } else if (user) {
        const { profileData } = await getProfileByUserId({
            supabaseClient: supabase,
            args: { userId: user.id },
        });

        const isEmployer = profileData.user_type === 'employer';
        const isCandidate = profileData.user_type === 'candidate';

        if (request.nextUrl.pathname.startsWith(PATHNAMES.AUTH.ROOT)) {
            if (isEmployer) {
                const url = request.nextUrl.clone();
                url.pathname = PATHNAMES.PROTECTED.EMPLOYER.DASHBOARD;
                return NextResponse.redirect(url);
            } else if (isCandidate) {
                const url = request.nextUrl.clone();
                url.pathname = PATHNAMES.PROTECTED.CANDIDATE.DASHBOARD;
                return NextResponse.redirect(url);
            }
        } else if (
            !isEmployer &&
            request.nextUrl.pathname.startsWith(PATHNAMES.PROTECTED.EMPLOYER.ROOT)
        ) {
            const url = request.nextUrl.clone();
            url.pathname = PATHNAMES.PROTECTED.CANDIDATE.DASHBOARD;
            return NextResponse.redirect(url);
        } else if (
            !isCandidate &&
            request.nextUrl.pathname.startsWith(PATHNAMES.PROTECTED.CANDIDATE.ROOT)
        ) {
            const url = request.nextUrl.clone();
            url.pathname = PATHNAMES.PROTECTED.EMPLOYER.DASHBOARD;
            return NextResponse.redirect(url);
        }
    }

    // IMPORTANT: You *must* return the supabaseResponse object as it is.
    // If you're creating a new response object with NextResponse.next() make sure to:
    // 1. Pass the request in it, like so:
    //    const myNewResponse = NextResponse.next({ request })
    // 2. Copy over the cookies, like so:
    //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
    // 3. Change the myNewResponse object to fit your needs, but avoid changing
    //    the cookies!
    // 4. Finally:
    //    return myNewResponse
    // If this is not done, you may be causing the browser and server to go out
    // of sync and terminate the user's session prematurely!

    return supabaseResponse;
}
