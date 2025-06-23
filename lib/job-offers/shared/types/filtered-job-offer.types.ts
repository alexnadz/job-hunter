export type FilteredJobOffer = {
    id: string;
    title: string;
    description: string;
    salary_min: number | null;
    salary_max: number | null;
    created_at: string;
    employers: {
        id: string;
        company_name: string;
    };
};

export type JobOfferDetails = {
    id: string;
    title: string;
    description: string;
    salary_min: number | null;
    salary_max: number | null;
    created_at: string;
    employers: {
        id: string;
        company_name: string;
        about_company: string;
    };
};
