---
trigger: always_on
---

# form input

type FormInputProps<FormFieldsValues extends FieldValues> = {
control: Control<FormFieldsValues, unknown>;
name: Path<FormFieldsValues>;
type?: HTMLInputTypeAttribute;
label: string;
placeholder?: string;
};

export const FormInput = <FormFieldsValues extends FieldValues>({
control,
name,
type,
label,
placeholder,
}: FormInputProps<FormFieldsValues>) => (
<FormField
control={control}
name={name}
render={({ field }) => (
<FormItem>
<FormLabel>{label}</FormLabel>
<FormControl>

<div className="relative">
<Input type={type} placeholder={placeholder} {...field} />
</div>
</FormControl>
<FormMessage />
</FormItem>
)}
/>
);

# form

import { useActionState, useEffect } from 'react';

const JOB_OFFER_DEFAULT_FORM_VALUES: JobOfferFormFields = {
title: '',
};

export const JobOfferFormContent = () => {
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
            // TODO: Show success message
            console.log('Job offer added successfully');
        }
    }, [actionStatus, form]);

    const handleSubmitWithTransition = (jobOfferFormFields: JobOfferFormFields) =>
        startTransition(() => executeAction(jobOfferFormFields));

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitWithTransition)} className="space-y-8">
                <FormInput control={form.control} name="title" label="Title" />

                <Button disabled={isActionPending}>
                    {isActionPending ? 'Loading...' : 'Submit'}
                </Button>
            </form>
        </Form>
    );

};

# action

export const addJobOffer: (
prevAddJobOfferState: ActionResult<JobOffer>,
jobOfferFormFields: JobOfferFormFields,
) => Promise<ActionResult<JobOffer>> = async (\_, jobOfferFormFields) => {
try {
const createdJobOffer = await prisma.jobOffer.create({
data: jobOfferFormFields,
});
return {
data: createdJobOffer,
status: ActionResultStatus.SUCCESS,
};
} catch (error) {
console.error('Error adding job offer:', error);
return {
error: 'Unable to add job offer at this time. Please try again later.',
status: ActionResultStatus.ERROR,
};
}
};

# action result types

export enum ActionResultStatus {
SUCCESS = 'SUCCESS',
ERROR = 'ERROR',
IDLE = 'IDLE',
}

export type ActionResult<DataType> = {
data?: DataType;
error?: string;
status: ActionResultStatus;
};

# schema file

import { z } from 'zod';

export const JobOfferSchema = z.object({
title: z
.string()
.min(1, 'Title is required')
.max(100, 'Title must be less than 100 characters'),
});

export type JobOfferFormFields = z.infer<typeof JobOfferSchema>;

# export page

const SignUpPage = () => (

<div className="container flex h-screen w-screen flex-col items-center justify-center">
SignUpPage
</div>
);

export default SignUpPage;

# export component

export const Component= () => (

<div className="container flex h-screen w-screen flex-col items-center justify-center">
Component
</div>
);

# pathnames

export const PATHNAMES = {
public: {
HOME: '/',
},

    auth: {
        SIGN_UP: '/auth/sign-up',
        SIGN_UP_EMPLOYER: '/auth/sign-up/employer',
        SIGN_UP_CANDIDATE: '/auth/sign-up/candidate',
        SIGN_UP_SUCCESS: '/auth/sign-up/success',
        SIGN_IN: '/auth/sign-in',
        EMAIL_CONFIRM_CALLBACK: '/api/auth/email-confirm',
        AUTH_CODE_ERROR: '/auth/auth-code-error',
    },

    protected: {
        ROOT: '/protected',
    },

    employer: {
        DASHBOARD: '/employer/dashboard',
        JOBS: '/employer/jobs',
    },

    candidate: {
        DASHBOARD: '/candidate/dashboard',
        PROFILE: '/candidate/profile',
    },

} as const;
