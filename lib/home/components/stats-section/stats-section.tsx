import { StatsItem } from './stats-item';

export const StatsSection = () => (
    <section className="border-t border-b py-12">
        <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <StatsItem value="50K+" label="Active Jobs" />
                <StatsItem value="25K+" label="Companies" />
                <StatsItem value="100K+" label="Job Seekers" />
                <StatsItem value="15K+" label="Success Stories" />
            </div>
        </div>
    </section>
);
