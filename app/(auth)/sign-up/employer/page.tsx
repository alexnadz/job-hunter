import { EmployerSignUpForm } from '@/lib/auth/components';

const EmployerSignUpPage = () => (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <div className="w-[500px]">
            <EmployerSignUpForm />
        </div>
    </div>
);

export default EmployerSignUpPage;
