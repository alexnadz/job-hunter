import { Users } from 'lucide-react';

type TeamMemberProps = {
    name: string;
    role: string;
    description: string;
};

export const TeamMember = ({ name, role, description }: TeamMemberProps) => {
    return (
        <div className="text-center">
            <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full bg-gray-200">
                <div className="flex h-full w-full items-center justify-center bg-primary/10">
                    <Users className="h-20 w-20 text-primary" />
                </div>
            </div>
            <h3 className="mb-1 text-xl font-semibold">{name}</h3>
            <p className="mb-3 text-primary">{role}</p>
            <p className="text-muted-foreground">{description}</p>
        </div>
    );
};
