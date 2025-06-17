import { EmployerSignUpForm } from '@/lib/auth';

const EmployerSignUpPage = () => (
    <div className="flex h-screen w-full flex-col items-center justify-center">
        <div className="w-[500px]">
            <EmployerSignUpForm />
        </div>
    </div>
);

export default EmployerSignUpPage;
