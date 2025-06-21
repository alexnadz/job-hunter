export type JobListing = {
    id: string;
    title: string;
    company: string;
    location: string;
    jobType: string;
    salaryRange: string;
    description: string;
    postedDate: string;
    skills: string[];
};

export const MOCK_JOB_LISTINGS: JobListing[] = [
    {
        id: '1',
        title: 'Senior Frontend Developer',
        company: 'TechCorp Inc.',
        location: 'San Francisco, CA',
        jobType: 'Full-time',
        salaryRange: '$100k - $150k',
        description: "We're looking for an experienced Frontend Developer to join our team and help build amazing user experiences.",
        postedDate: '2 days ago',
        skills: ['React', 'TypeScript', 'Redux']
    },
    {
        id: '2',
        title: 'Product Manager',
        company: 'StartupXYZ',
        location: 'Remote',
        jobType: 'Full-time',
        salaryRange: '$90k - $120k',
        description: 'Join our growing team as a Product Manager and help shape the future of our innovative platform.',
        postedDate: '1 week ago',
        skills: ['Product Strategy', 'Agile', 'Analytics']
    },
    {
        id: '3',
        title: 'UX/UI Designer',
        company: 'Design Studio Pro',
        location: 'New York, NY',
        jobType: 'Full-time',
        salaryRange: '$75k - $95k',
        description: "We're seeking a creative UX/UI Designer to create intuitive and engaging user experiences.",
        postedDate: '3 days ago',
        skills: ['Figma', 'Sketch', 'Prototyping']
    },
    {
        id: '4',
        title: 'Backend Developer',
        company: 'CloudTech Solutions',
        location: 'Austin, TX',
        jobType: 'Full-time',
        salaryRange: '$110k - $140k',
        description: 'Looking for a skilled Backend Developer to help us build scalable and efficient server-side applications.',
        postedDate: '5 days ago',
        skills: ['Node.js', 'PostgreSQL', 'AWS']
    },
    {
        id: '5',
        title: 'Marketing Specialist',
        company: 'GrowthHackers',
        location: 'Remote',
        jobType: 'Part-time',
        salaryRange: '$60k - $80k',
        description: 'Join our marketing team to help drive customer acquisition and brand awareness strategies.',
        postedDate: '1 day ago',
        skills: ['SEO', 'Content Marketing', 'Social Media']
    }
];
