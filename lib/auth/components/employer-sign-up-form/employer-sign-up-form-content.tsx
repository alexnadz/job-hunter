'use client';

import { useEffect, startTransition, useActionState } from 'react';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Button, Form, FormInput, FormTextarea, ActionResultStatus, PATHNAMES } from '@/lib/shared';
import { EmployerSignUpFormFields, EmployerSignUpSchema } from '@/lib/auth/schemas';
import { signUpEmployer } from '@/lib/auth/actions';

const EMPLOYER_SIGN_UP_DEFAULT_VALUES: EmployerSignUpFormFields = {
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    aboutCompany: '',
};

export const EmployerSignUpFormContent = () => {
    const router = useRouter();

    const form = useForm<EmployerSignUpFormFields>({
        resolver: zodResolver(EmployerSignUpSchema),
        defaultValues: EMPLOYER_SIGN_UP_DEFAULT_VALUES,
    });

    const [actionState, executeAction, isActionPending] = useActionState(signUpEmployer, {
        status: ActionResultStatus.IDLE,
    });

    const { status: actionStatus, error: actionError } = actionState;

    useEffect(() => {
        if (actionStatus === ActionResultStatus.SUCCESS) {
            form.reset(EMPLOYER_SIGN_UP_DEFAULT_VALUES);
            router.push(PATHNAMES.AUTH.SIGN_UP_SUCCESS);
        } else if (actionStatus === ActionResultStatus.ERROR && actionError) {
            toast.error('Error creating account', {
                description: actionError,
            });
        }
    }, [actionStatus, actionError, form, router]);

    const handleSubmitWithTransition = (employerSignUpFormFields: EmployerSignUpFormFields) =>
        startTransition(() => executeAction(employerSignUpFormFields));

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitWithTransition)} className="space-y-4">
                <FormInput
                    control={form.control}
                    name="companyName"
                    label="Company Name"
                    placeholder="Enter your company name"
                />

                <FormTextarea
                    control={form.control}
                    name="aboutCompany"
                    label="About Company"
                    placeholder="Tell us about your company"
                    rows={4}
                />

                <FormInput
                    control={form.control}
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                />

                <FormInput
                    control={form.control}
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Create a strong password"
                />

                <FormInput
                    control={form.control}
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm your password"
                />

                <Button type="submit" className="w-full" disabled={isActionPending}>
                    {isActionPending ? 'Creating Account...' : 'Create Account'}
                </Button>
            </form>
        </Form>
    );
};
