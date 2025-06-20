type StatsItemProps = {
    value: string;
    label: string;
};

export const StatsItem = ({ value, label }: StatsItemProps) => (
    <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-blue-500 md:text-4xl">{value}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
    </div>
);
