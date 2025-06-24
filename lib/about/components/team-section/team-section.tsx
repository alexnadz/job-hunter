import { TeamMember } from './team-member';

export const TeamSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold">Meet Our Team</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <TeamMember 
                        name="Alex Johnson"
                        role="CEO & Founder"
                        description="With over 15 years in HR and recruitment, Alex founded Job Hunter to revolutionize how people find work."
                    />
                    <TeamMember 
                        name="Sarah Chen"
                        role="CTO"
                        description="Sarah leads our technology team, bringing AI and machine learning expertise to create our intelligent matching algorithms."
                    />
                    <TeamMember 
                        name="Michael Rodriguez"
                        role="Head of Employer Relations"
                        description="Michael works directly with companies to understand their hiring needs and optimize their recruitment strategies."
                    />
                    <TeamMember 
                        name="Emma Wilson"
                        role="Career Development Director"
                        description="Emma oversees our resources for job seekers, ensuring candidates have the tools they need to succeed in their job search."
                    />
                </div>
            </div>
        </section>
    );
};
