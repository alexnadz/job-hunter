import { Database } from '@/lib/shared/types/supabase';

type JobOffer = Database['public']['Tables']['job_offers']['Row'];

type JobOfferItemProps = {
    jobOffer: JobOffer;
};

export const JobOfferItem = ({ jobOffer }: JobOfferItemProps) => {
    return (
        <div className="rounded-lg shadow p-6 bg-muted">
            <h2 className="text-xl font-semibold mb-2">{jobOffer.title}</h2>
            <p className="text-muted-foreground mb-4 line-clamp-2">{jobOffer.description}</p>
            <div className="flex justify-between items-center">
                <div>
                    {jobOffer.salary_min && jobOffer.salary_max ? (
                        <p className="text-sm text-muted-foreground">
                            Salary: ${jobOffer.salary_min.toLocaleString()} - $
                            {jobOffer.salary_max.toLocaleString()}
                        </p>
                    ) : jobOffer.salary_min ? (
                        <p className="text-sm text-muted-foreground">
                            Salary: From ${jobOffer.salary_min.toLocaleString()}
                        </p>
                    ) : jobOffer.salary_max ? (
                        <p className="text-sm text-muted-foreground">
                            Salary: Up to ${jobOffer.salary_max.toLocaleString()}
                        </p>
                    ) : (
                        <p className="text-sm text-muted-foreground">Salary not specified</p>
                    )}
                </div>
                <div className="text-sm text-muted-foreground">
                    Posted: {new Date(jobOffer.created_at).toLocaleDateString()}
                </div>
            </div>
        </div>
    );
};
