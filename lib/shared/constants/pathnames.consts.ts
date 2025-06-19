export const PATHNAMES = {
    PUBLIC: {
        HOME: '/',
    },

    AUTH: {
        ROOT: '/auth',
        SIGN_UP: '/auth/sign-up',
        SIGN_UP_EMPLOYER: '/auth/sign-up/employer',
        SIGN_UP_CANDIDATE: '/auth/sign-up/candidate',
        SIGN_UP_SUCCESS: '/auth/sign-up/success',
        SIGN_IN: '/auth/sign-in',
        EMAIL_CONFIRM_CALLBACK: '/api/auth/email-confirm',
        AUTH_CODE_ERROR: '/auth/auth-code-error',
    },

    PROTECTED: {
        ROOT: '/protected',
        EMPLOYER: {
            ROOT: '/protected/employer',
            DASHBOARD: '/protected/employer/dashboard',
            JOB_OFFERS: '/protected/employer/job-offers',
        },
        CANDIDATE: {
            ROOT: '/protected/candidate',
            DASHBOARD: '/protected/candidate/dashboard',
            PROFILE: '/protected/candidate/profile',
        },
    },
} as const;

export const EMPLOYER_PATHS = [
    PATHNAMES.PROTECTED.EMPLOYER.DASHBOARD,
    PATHNAMES.PROTECTED.EMPLOYER.JOB_OFFERS,
] as const;

export const CANDIDATE_PATHS = [
    PATHNAMES.PROTECTED.CANDIDATE.DASHBOARD,
    PATHNAMES.PROTECTED.CANDIDATE.PROFILE,
] as const;

export const PROTECTED_PATHS = [...EMPLOYER_PATHS, ...CANDIDATE_PATHS] as const;

export type PathNameCategory = keyof typeof PATHNAMES;
export type PublicPathName = keyof typeof PATHNAMES.PUBLIC;
export type AuthPathName = keyof typeof PATHNAMES.AUTH;
export type ProtectedPathName = keyof typeof PATHNAMES.PROTECTED;
export type ProtectedEmployerPathName = keyof typeof PATHNAMES.PROTECTED.EMPLOYER;
export type ProtectedCandidatePathName = keyof typeof PATHNAMES.PROTECTED.CANDIDATE;
