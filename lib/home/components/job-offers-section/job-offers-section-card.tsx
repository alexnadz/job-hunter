import { MapPin } from 'lucide-react';

type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Remote';

type JobOffersSectionCardProps = {
    title: string;
    company: string;
    location: string;
    salary: string;
    jobType: JobType;
    icon: React.ReactNode;
};

// TODO:
// const getBadgeVariant = (type: JobType) => {
//     switch (type) {
//         case 'Full-time':
//             return 'outline';
//         case 'Part-time':
//             return 'secondary';
//         case 'Contract':
//             return 'destructive';
//         case 'Remote':
//             return 'default';
//         default:
//             return 'outline';
//     }
// };

// // TODO:
// const getBadgeColor = (type: JobType) => {
//     switch (type) {
//         case 'Full-time':
//             return 'text-green-500';
//         case 'Remote':
//             return 'text-blue-500';
//         case 'Contract':
//             return 'text-orange-500';
//         default:
//             return '';
//     }
// };

export const JobOffersSectionCard = ({
    title,
    company,
    location,
    salary,
    // jobType,
    icon,
}: JobOffersSectionCardProps) => (
    <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
        <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-medium">{title}</h3>
                    <p className="text-sm text-muted-foreground">{company}</p>
                </div>
            </div>
            {/* <Badge variant={getBadgeVariant(jobType)} className={getBadgeColor(jobType)}>
                {jobType}
            </Badge> */}
        </div>
        <div className="mb-4 flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            <span>{location}</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="font-medium text-blue-600">{salary}</span>
        </div>
    </div>
);
