import Link from 'next/link';
import { LogIn } from 'lucide-react';

import { FormLayout } from '@/lib/shared/layout/form-layout';
import { PATHNAMES } from '@/lib/shared/consts';
import { SignInFormContent } from './sign-in-form-content';

export const SignInForm = () => (
    <FormLayout
        title={
            <>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <LogIn className="text-primary h-6 w-6" />
                </div>
                <span className="text-2xl font-semibold text-center">Sign In</span>
            </>
        }
        description={
            <span className="text-muted-foreground text-center">
                Enter your credentials to access your account
            </span>
        }
        footer={
            <div className="text-center text-sm mt-6">
                Don&apos;t have an account?{' '}
                <Link
                    href={PATHNAMES.auth.SIGN_UP}
                    className="font-medium text-primary underline-offset-4 hover:underline"
                >
                    Sign up
                </Link>
            </div>
        }
        className="w-[400px]"
    >
        <SignInFormContent />
    </FormLayout>
);
