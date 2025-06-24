import {
    ContactSection,
    FeaturesSection,
    HeroSection,
    MissionSection,
    StatsSection,
    TeamSection,
} from '@/lib/about';

const AboutPage = () => (
    <main className="min-h-screen">
        <HeroSection />
        <MissionSection />
        <FeaturesSection />
        <TeamSection />
        <StatsSection />
        <ContactSection />
    </main>
);

export default AboutPage;
