import { FormLayout } from '@/lib/shared/layouts';
import { EmployerSignUpFormContent } from './employer-sign-up-form-content';

export const EmployerSignUpForm = () => (
    <FormLayout
        title="Employer Sign Up"
        description="Create your employer account to start posting jobs"
    >
        <EmployerSignUpFormContent />
    </FormLayout>
);
