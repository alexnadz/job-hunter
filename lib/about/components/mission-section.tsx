import { Target } from 'lucide-react';

export const MissionSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
                    <div className="md:w-1/2">
                        <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
                        <p className="mb-4 text-lg text-muted-foreground">
                            At Job Hunter, we believe that finding the right job or the right
                            candidate shouldn&apos;t be a struggle. Our mission is to create a seamless
                            connection between employers and job seekers, making the hiring process
                            efficient, transparent, and rewarding for everyone involved.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            We&apos;re dedicated to building tools that empower both sides of the
                            employment equation, leveraging technology to create meaningful career
                            opportunities and helping businesses grow with the right talent.
                        </p>
                    </div>
                    <div className="relative h-64 w-full md:h-80 md:w-1/2">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-primary-foreground opacity-80"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Target className="h-24 w-24 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
