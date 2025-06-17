import { z } from 'zod';

export const JobOfferSchema = z.object({
    title: z
        .string()
        .min(1, 'Title is required')
        .max(100, 'Title must be less than 100 characters'),
    description: z
        .string()
        .min(1, 'Description is required')
        .max(5000, 'Description must be less than 5000 characters'),
    salary_min: z
        .string()
        .optional()
        .refine((val) => !val || !isNaN(Number(val)), 'Minimum salary must be a number'),
    salary_max: z
        .string()
        .optional()
        .refine((val) => !val || !isNaN(Number(val)), 'Maximum salary must be a number'),
});

export type JobOfferFormFields = z.infer<typeof JobOfferSchema>;
