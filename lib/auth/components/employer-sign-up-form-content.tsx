'use client';

import { useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { startTransition } from 'react';
import { toast } from 'sonner';

import { Button } from '@/lib/shared/components/ui/button';
import { Form } from '@/lib/shared/components/ui/form';
import { FormInput, FormTextarea } from '@/lib/shared/components/form';
import { ActionResultStatus } from '@/lib/shared/types/action-result.types';
import {
    EmployerSignUpFormFields,
    EmployerSignUpSchema,
} from '../schemas/employer-sign-up.schemas';
import { signUpEmployer } from '../actions/employer-sign-up.actions';

type Employer = {
    id: string;
    email: string;
    companyName: string;
    aboutCompany: string;
};

const EMPLOYER_SIGN_UP_DEFAULT_VALUES: EmployerSignUpFormFields = {
    email: '',
    password: '',
    companyName: '',
    aboutCompany: '',
};

export const EmployerSignUpFormContent = () => {
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
            toast.success('Account created successfully', {
                description: 'You will be redirected to the dashboard shortly',
            });

            setTimeout(() => {
                window.location.href = '/employer/dashboard';
            }, 2000);
        } else if (actionStatus === ActionResultStatus.ERROR && actionError) {
            toast.error('Error creating account', {
                description: actionError,
            });
        }
    }, [actionStatus, actionError, form]);

    const handleSubmitWithTransition = (employerSignUpFormFields: EmployerSignUpFormFields) =>
        startTransition(() => executeAction(employerSignUpFormFields));

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitWithTransition)} className="space-y-4">
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

                <Button type="submit" className="w-full" disabled={isActionPending}>
                    {isActionPending ? 'Creating Account...' : 'Create Account'}
                </Button>
            </form>
        </Form>
    );
};
