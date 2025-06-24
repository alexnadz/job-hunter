import { Briefcase, Clock, Globe } from 'lucide-react';
import { FeatureItem } from './feature-item';

export const FeaturesSection = () => (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">What Makes Us Different</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <FeatureItem
                    icon={Briefcase}
                    title="Quality Job Listings"
                    description="We carefully vet all job listings to ensure they meet our quality standards, providing only legitimate and valuable opportunities."
                />
                <FeatureItem
                    icon={Clock}
                    title="Time-Saving Tools"
                    description="Our platform offers advanced search filters, automated matching, and streamlined application processes to save time for both employers and candidates."
                />
                <FeatureItem
                    icon={Globe}
                    title="Global Reach"
                    description="Connect with opportunities and talent worldwide, breaking down geographical barriers to find the perfect match regardless of location."
                />
            </div>
        </div>
    </section>
);
