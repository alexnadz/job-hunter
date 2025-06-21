import {
    CategorySection,
    CompaniesSection,
    CtaSection,
    HeroSection,
    StatsSection,
} from '@/lib/home';
import { JobOffersSection } from '@/lib/job-offers/home-job-offers';

const HomePage = () => (
    <main>
        <HeroSection />
        <StatsSection />
        <JobOffersSection />
        <CategorySection />
        <CompaniesSection />
        <CtaSection />
    </main>
);

export default HomePage;
