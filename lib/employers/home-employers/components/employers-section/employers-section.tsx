import Link from 'next/link';

import { PATHNAMES, Button } from '@/lib/shared';
import { createClient } from '@/lib/shared/services/supabase/server';
import { getEmployersByFilters } from '@/lib/employers/shared';

import { EmployerCard } from './employer-card';

export const EmployersSection = async () => {
    const supabase = await createClient();

    const { employersData } = await getEmployersByFilters({
        supabaseClient: supabase,
        args: { limit: 5 },
    });

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-8">
                <div className="mb-10 text-center">
                    <h2 className="mb-2 text-3xl font-bold tracking-tight">Featured Companies</h2>
                    <p className="text-muted-foreground">Top employers that trust our platform</p>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                    {employersData.map((employer) => (
                        // TODO:
                        <Link key={employer.id} href={''}>
                            <EmployerCard key={employer.id} employer={employer} />
                        </Link>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Link href={PATHNAMES.PUBLIC.EMPLOYER_SEARCH}>
                        <Button variant="default" size="lg">
                            View All Companies
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
