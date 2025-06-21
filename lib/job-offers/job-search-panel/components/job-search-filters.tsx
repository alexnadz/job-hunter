import { Checkbox, Label } from '@/lib/shared';

// TODO: to refactor
export const JobSearchFilters = () => (
    <div className="rounded-lg border bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold">Filters</h2>

        {/* Job Type */}
        <div className="mb-6">
            <h3 className="mb-3 font-medium">Job Type</h3>
            <div className="space-y-2">
                <div className="flex items-center space-x-2">
                    <Checkbox id="full-time" />
                    <Label htmlFor="full-time">Full-time</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="part-time" />
                    <Label htmlFor="part-time">Part-time</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="remote" />
                    <Label htmlFor="remote">Remote</Label>
                </div>
            </div>
        </div>

        {/* Experience Level */}
        <div className="mb-6">
            <h3 className="mb-3 font-medium">Experience Level</h3>
            <div className="space-y-2">
                <div className="flex items-center space-x-2">
                    <Checkbox id="entry-level" />
                    <Label htmlFor="entry-level">Entry Level</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="mid-level" />
                    <Label htmlFor="mid-level">Mid Level</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="senior-level" />
                    <Label htmlFor="senior-level">Senior Level</Label>
                </div>
            </div>
        </div>

        {/* Salary Range */}
        <div>
            <h3 className="mb-3 font-medium">Salary Range</h3>
            <div className="space-y-2">
                <div className="flex items-center space-x-2">
                    <Checkbox id="0-50k" />
                    <Label htmlFor="0-50k">$0 - $50k</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="50k-100k" />
                    <Label htmlFor="50k-100k">$50k - $100k</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="100k+" />
                    <Label htmlFor="100k+">$100k+</Label>
                </div>
            </div>
        </div>
    </div>
);
