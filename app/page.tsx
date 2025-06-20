import {
    CategorySection,
    CompaniesSection,
    CtaSection,
    HeroSection,
    JobOffersSection,
    StatsSection,
} from '@/lib/home';

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
