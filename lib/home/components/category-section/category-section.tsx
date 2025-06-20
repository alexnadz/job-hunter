import { Code, LineChart, Palette, Briefcase, BarChart3, Users } from 'lucide-react';

import { CategoryCard } from './category-card';

// TODO:
const categories = [
    {
        id: 1,
        title: 'Technology',
        jobCount: 2450,
        icon: <Code className="h-6 w-6 text-blue-600" />,
        color: 'bg-blue-100',
    },
    {
        id: 2,
        title: 'Marketing',
        jobCount: 1230,
        icon: <LineChart className="h-6 w-6 text-blue-600" />,
        color: 'bg-blue-100',
    },
    {
        id: 3,
        title: 'Design',
        jobCount: 890,
        icon: <Palette className="h-6 w-6 text-purple-600" />,
        color: 'bg-purple-100',
    },
    {
        id: 4,
        title: 'Finance',
        jobCount: 670,
        icon: <BarChart3 className="h-6 w-6 text-yellow-600" />,
        color: 'bg-yellow-100',
    },
    {
        id: 5,
        title: 'Sales',
        jobCount: 1120,
        icon: <Briefcase className="h-6 w-6 text-red-600" />,
        color: 'bg-red-100',
    },
    {
        id: 6,
        title: 'HR',
        jobCount: 340,
        icon: <Users className="h-6 w-6 text-purple-600" />,
        color: 'bg-purple-100',
    },
];

export const CategorySection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto">
                <div className="mb-10 text-center">
                    <h2 className="mb-2 text-3xl font-bold tracking-tight">Browse by Category</h2>
                    <p className="text-muted-foreground">Find jobs in your preferred industry</p>
                </div>

                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            icon={category.icon}
                            title={category.title}
                            jobCount={category.jobCount}
                            color={category.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
