type JobDescriptionSectionProps = {
    title: string;
    content: string;
};

export const JobDescriptionSection = ({ title, content }: JobDescriptionSectionProps) => (
    <div className="mb-6">
        <h3 className="mb-3 text-lg font-semibold">{title}</h3>
        <p className="text-card-foreground">{content}</p>
    </div>
);
