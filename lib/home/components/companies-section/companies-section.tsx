import { Building2, Briefcase, Globe, BarChart, Laptop } from 'lucide-react';

import { CompanyCard } from './company-card';

// TODO: Replace with actual company logos and data
const companies = [
    {
        id: 1,
        name: 'TechCorp',
        logo: <Building2 className="h-10 w-10 text-blue-600" />,
    },
    {
        id: 2,
        name: 'GrowthLab',
        logo: <BarChart className="h-10 w-10 text-green-600" />,
    },
    {
        id: 3,
        name: 'DesignStudio',
        logo: <Laptop className="h-10 w-10 text-purple-600" />,
    },
    {
        id: 4,
        name: 'GlobalTech',
        logo: <Globe className="h-10 w-10 text-indigo-600" />,
    },
    {
        id: 5,
        name: 'WorkForce',
        logo: <Briefcase className="h-10 w-10 text-orange-600" />,
    },
];

export const CompaniesSection = () => (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
            <div className="mb-10 text-center">
                <h2 className="mb-2 text-3xl font-bold tracking-tight">Featured Companies</h2>
                <p className="text-muted-foreground">Top employers that trust our platform</p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                {companies.map((company) => (
                    <CompanyCard key={company.id} logo={company.logo} name={company.name} />
                ))}
            </div>
        </div>
    </section>
);
