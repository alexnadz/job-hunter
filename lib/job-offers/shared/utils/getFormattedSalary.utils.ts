export const getFormattedSalary = (salary_min: number | null, salary_max: number | null) => {
    if (salary_min && salary_max) {
        return `${salary_min.toLocaleString()} $ - ${salary_max.toLocaleString()} $`;
    } else if (salary_min) {
        return `From ${salary_min.toLocaleString()} $`;
    } else if (salary_max) {
        return `Up to ${salary_max.toLocaleString()} $`;
    } else {
        return 'Not specified';
    }
};
