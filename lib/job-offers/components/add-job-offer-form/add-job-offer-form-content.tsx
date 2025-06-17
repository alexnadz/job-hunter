'use client';

import { useEffect, startTransition, useActionState } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Button, Form, FormInput, FormTextarea, ActionResultStatus } from '@/lib/shared';
import { JobOfferFormFields, JobOfferSchema } from '@/lib/job-offers/schemas';
import { addJobOffer } from '@/lib/job-offers/actions';

const JOB_OFFER_DEFAULT_FORM_VALUES: JobOfferFormFields = {
    title: '',
    description: '',
    salary_min: '',
    salary_max: '',
};

export const AddJobOfferFormContent = () => {
    const form = useForm<JobOfferFormFields>({
        resolver: zodResolver(JobOfferSchema),
        defaultValues: JOB_OFFER_DEFAULT_FORM_VALUES,
    });

    const [actionState, executeAction, isActionPending] = useActionState(addJobOffer, {
        status: ActionResultStatus.IDLE,
    });

    const { status: actionStatus } = actionState;

    useEffect(() => {
        if (actionStatus === ActionResultStatus.SUCCESS) {
            form.reset(JOB_OFFER_DEFAULT_FORM_VALUES);
            toast.success('Job offer added successfully');
        }
    }, [actionStatus, form]);

    const handleSubmitWithTransition = (jobOfferFormFields: JobOfferFormFields) =>
        startTransition(() => executeAction(jobOfferFormFields));

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitWithTransition)} className="space-y-6">
                <FormInput
                    control={form.control}
                    name="title"
                    label="Job Title"
                    placeholder="Enter job title"
                />

                <FormTextarea
                    control={form.control}
                    name="description"
                    label="Job Description"
                    placeholder="Enter job description"
                    rows={8}
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormInput
                        control={form.control}
                        name="salary_min"
                        label="Minimum Salary (optional)"
                        placeholder="e.g. 50000"
                    />

                    <FormInput
                        control={form.control}
                        name="salary_max"
                        label="Maximum Salary (optional)"
                        placeholder="e.g. 70000"
                    />
                </div>

                <div className="flex justify-end">
                    <Button type="submit" disabled={isActionPending}>
                        {isActionPending ? 'Submitting...' : 'Add Job Offer'}
                    </Button>
                </div>
            </form>
        </Form>
    );
};
