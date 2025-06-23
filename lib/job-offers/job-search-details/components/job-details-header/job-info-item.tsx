import { LucideIcon } from 'lucide-react';

type JobInfoItemProps = {
    icon: LucideIcon;
    text: string;
};

export const JobInfoItem = ({ icon: Icon, text }: JobInfoItemProps) => {
    return (
        <div className="flex items-center">
            <Icon className="mr-1 h-4 w-4 text-muted-foreground" />
            <span className="mr-4 text-muted-foreground">{text}</span>
        </div>
    );
};
