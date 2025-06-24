import { LucideIcon } from 'lucide-react';

type FeatureItemProps = {
    icon: LucideIcon;
    title: string;
    description: string;
};

export const FeatureItem = ({ icon: Icon, title, description }: FeatureItemProps) => (
    <div className="rounded-lg bg-card p-6 shadow-sm">
        <div className="mb-4 inline-block rounded-full bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-3 text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
    </div>
);
