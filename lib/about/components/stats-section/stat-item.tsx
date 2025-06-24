type StatItemProps = {
    value: string;
    label: string;
};

export const StatItem = ({ value, label }: StatItemProps) => (
    <div>
        <h3 className="mb-2 text-4xl font-bold">{value}</h3>
        <p className="text-lg">{label}</p>
    </div>
);
