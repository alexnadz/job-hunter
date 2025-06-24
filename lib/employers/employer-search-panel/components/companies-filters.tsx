'use client';

import { Briefcase, Building2, MapPin } from 'lucide-react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Badge,
    Checkbox,
    Label,
} from '@/lib/shared';

// TODO: to refactor
export const CompaniesFilters = () => {
    return (
        <div className="rounded-lg border bg-card p-4">
            <h2 className="mb-4 font-semibold">Filters</h2>

            <Accordion
                type="multiple"
                defaultValue={['industry', 'size', 'location']}
                className="w-full"
            >
                <AccordionItem value="industry">
                    <AccordionTrigger className="py-3 text-sm">
                        <div className="flex items-center">
                            <Briefcase className="mr-2 h-4 w-4" />
                            Industry
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2 pt-1">
                            {[
                                'Technology',
                                'Finance',
                                'Healthcare',
                                'Education',
                                'Manufacturing',
                            ].map((industry) => (
                                <div key={industry} className="flex items-center space-x-2">
                                    <Checkbox id={`industry-${industry.toLowerCase()}`} />
                                    <Label
                                        htmlFor={`industry-${industry.toLowerCase()}`}
                                        className="text-sm font-normal"
                                    >
                                        {industry}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="size">
                    <AccordionTrigger className="py-3 text-sm">
                        <div className="flex items-center">
                            <Building2 className="mr-2 h-4 w-4" />
                            Company Size
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2 pt-1">
                            {['1-10', '11-50', '51-200', '201-500', '501+'].map((size) => (
                                <div key={size} className="flex items-center space-x-2">
                                    <Checkbox id={`size-${size.toLowerCase()}`} />
                                    <Label
                                        htmlFor={`size-${size.toLowerCase()}`}
                                        className="text-sm font-normal"
                                    >
                                        {size} employees
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="location">
                    <AccordionTrigger className="py-3 text-sm">
                        <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4" />
                            Location
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2 pt-1">
                            {['Remote', 'New York', 'San Francisco', 'London', 'Berlin'].map(
                                (location) => (
                                    <div key={location} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`location-${location.toLowerCase().replace(' ', '-')}`}
                                        />
                                        <Label
                                            htmlFor={`location-${location.toLowerCase().replace(' ', '-')}`}
                                            className="text-sm font-normal"
                                        >
                                            {location}
                                        </Label>
                                    </div>
                                ),
                            )}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <div className="mt-4">
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Active filters:</span>
                    <button className="text-xs text-primary hover:underline">Clear all</button>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                        Technology
                        <button className="ml-1 h-3 w-3 rounded-full hover:bg-secondary-foreground/20">
                            ×
                        </button>
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                        Remote
                        <button className="ml-1 h-3 w-3 rounded-full hover:bg-secondary-foreground/20">
                            ×
                        </button>
                    </Badge>
                </div>
            </div>
        </div>
    );
};
