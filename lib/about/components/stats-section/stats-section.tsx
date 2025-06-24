import { StatItem } from './stat-item';

export const StatsSection = () => (
    <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4">
            <div className="grid gap-8 text-center md:grid-cols-3">
                <StatItem value="10,000+" label="Job Seekers" />
                <StatItem value="500+" label="Partner Companies" />
                <StatItem value="85%" label="Successful Placements" />
            </div>
        </div>
    </section>
);
