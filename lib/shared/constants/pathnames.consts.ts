export const PATHNAMES = {
    public: {
        HOME: '/',
    },

    auth: {
        SIGN_UP: '/auth/sign-up',
        SIGN_UP_EMPLOYER: '/auth/sign-up/employer',
        SIGN_UP_CANDIDATE: '/auth/sign-up/candidate',
        SIGN_UP_SUCCESS: '/auth/sign-up/success',
        SIGN_IN: '/auth/sign-in',
        EMAIL_CONFIRM_CALLBACK: '/api/auth/email-confirm',
        AUTH_CODE_ERROR: '/auth/auth-code-error',
    },

    protected: {
        ROOT: '/protected',
    },

    employer: {
        DASHBOARD: '/protected/employer/dashboard',
        JOB_OFFERS: '/protected/employer/job-offers',
    },

    candidate: {
        DASHBOARD: '/protected/candidate/dashboard',
        PROFILE: '/candidate/profile',
    },
} as const;

export type PathNameCategory = keyof typeof PATHNAMES;
export type PublicPathName = keyof typeof PATHNAMES.public;
export type AuthPathName = keyof typeof PATHNAMES.auth;
export type ProtectedPathName = keyof typeof PATHNAMES.protected;
export type EmployerPathName = keyof typeof PATHNAMES.employer;
export type CandidatePathName = keyof typeof PATHNAMES.candidate;
