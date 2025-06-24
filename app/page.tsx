import { CategorySection, CtaSection, HeroSection, StatsSection } from '@/lib/home';
import { EmployersSection } from '@/lib/employers/home-employers';
import { JobOffersSection } from '@/lib/job-offers/home-job-offers';

const HomePage = () => (
    <main>
        <HeroSection />
        <StatsSection />
        <JobOffersSection />
        <CategorySection />
        <EmployersSection />
        <CtaSection />
    </main>
);

export default HomePage;
