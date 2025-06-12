import { z } from 'zod';

export const EmployerSignUpSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email format'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one symbol'),
    companyName: z
        .string()
        .min(1, 'Company name is required')
        .max(100, 'Company name must be less than 100 characters'),
    aboutCompany: z
        .string()
        .min(1, 'About company is required')
        .max(500, 'About company must be less than 500 characters'),
});

export type EmployerSignUpFormFields = z.infer<typeof EmployerSignUpSchema>;
