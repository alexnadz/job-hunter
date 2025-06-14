import { z } from 'zod';

export const SignInSchema = z.object({
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Invalid email format'),
    password: z
        .string()
        .min(1, 'Password is required'),
});

export type SignInFormFields = z.infer<typeof SignInSchema>;
