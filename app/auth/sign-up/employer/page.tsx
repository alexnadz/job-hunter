import { EmployerSignUpForm } from '@/lib/auth';

const EmployerSignUpPage = () => (
    <div className="flex h-full w-full py-8 flex-col items-center justify-center">
        <div className="w-[500px]">
            <EmployerSignUpForm />
        </div>
    </div>
);

export default EmployerSignUpPage;
