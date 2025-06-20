import { PATHNAMES } from '@/lib/shared/constants/pathnames.consts';
import { Button } from '@/lib/shared/ui/button';

export const CtaSection = () => (
    <section className="bg-blue-500 py-16">
        <div className="container mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">
                Ready to Find Your Next Opportunity?
            </h2>
            <p className="mb-8 text-lg text-white/90">
                Join thousands of professionals who have found their dream jobs through JobHunter
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button
                    asChild
                    size="lg"
                    variant="default"
                    className="bg-white text-blue-500 hover:bg-gray-100"
                >
                    <a href={PATHNAMES.PUBLIC.HOME}>Browse Jobs</a>
                </Button>
                <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white hover:bg-blue-600"
                >
                    <a href="#">Post a Job</a>
                </Button>
            </div>
        </div>
    </section>
);
