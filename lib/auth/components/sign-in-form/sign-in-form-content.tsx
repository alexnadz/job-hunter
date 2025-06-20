'use client';

import { startTransition, useEffect, useActionState } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Button, Form, FormInput, ActionResultStatus } from '@/lib/shared';
import { SignInFormFields, SignInSchema } from '@/lib/auth/schemas';
import { signIn } from '@/lib/auth/actions';

const SIGN_IN_DEFAULT_VALUES: SignInFormFields = {
    email: '',
    password: '',
};

export const SignInFormContent = () => {
    const form = useForm<SignInFormFields>({
        resolver: zodResolver(SignInSchema),
        defaultValues: SIGN_IN_DEFAULT_VALUES,
    });

    const [actionState, executeAction, isActionPending] = useActionState(signIn, {
        status: ActionResultStatus.IDLE,
    });

    const { status: actionStatus, error: actionError } = actionState;

    useEffect(() => {
        if (actionStatus === ActionResultStatus.ERROR && actionError) {
            toast.error('Error signing in', {
                description: actionError,
            });
        }
    }, [actionStatus, actionError]);

    const handleSubmitWithTransition = (signInFormFields: SignInFormFields) =>
        startTransition(() => executeAction(signInFormFields));

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitWithTransition)} className="space-y-6">
                <FormInput
                    control={form.control}
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="your.email@example.com"
                />

                <FormInput
                    control={form.control}
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="••••••••"
                />

                <Button type="submit" className="w-full" disabled={isActionPending}>
                    {isActionPending ? 'Signing in...' : 'Sign in'}
                </Button>
            </form>
        </Form>
    );
};
