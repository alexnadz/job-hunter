type CompanyInfoItemProps = {
    label: string;
    value: string | number;
};

export const CompanyInfoItem = ({ label, value }: CompanyInfoItemProps) => (
    <div className="flex justify-between">
        <span className="text-muted-foreground">{label}</span>
        <span>{value}</span>
    </div>
);
