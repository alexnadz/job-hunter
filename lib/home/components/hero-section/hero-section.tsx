import { JobSearchForm } from './job-search-form';

export const HeroSection = () => (
    <section className="bg-gradient-to-b from-blue-500 to-blue-600 py-16 md:py-24">
        <div className="w-full flex flex-col items-center justify-center text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Find Your Dream Job Today
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-white/90">
                Connect with top employers and discover opportunities that match your skills and
                aspirations
            </p>

            <JobSearchForm />
        </div>
    </section>
);
