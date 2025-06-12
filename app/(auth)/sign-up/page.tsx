import Link from 'next/link';

import { User, Briefcase, Users } from 'lucide-react';

import { Card, CardContent } from '@/lib/shared/components/ui/card';
import { RoleSelectionCard } from '@/lib/auth/components';

const SignUpPage = () => (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <Card className="w-[400px] p-6">
            <CardContent className="p-0 space-y-6">
                <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Users className="text-primary h-6 w-6" />
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight">Create Account</h1>
                    <p className="text-sm text-muted-foreground">
                        Join our platform and start your journey
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-center text-sm font-medium">Choose Your Role</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <RoleSelectionCard
                            href="/sign-up/candidate"
                            title="Candidate"
                            description="Looking for jobs"
                            icon={<User className="h-6 w-6" />}
                        />

                        <RoleSelectionCard
                            href="/sign-up/employer"
                            title="Employer"
                            description="Hiring talent"
                            icon={<Briefcase className="h-6 w-6" />}
                        />
                    </div>
                </div>

                <div className="text-center text-sm">
                    Already have an account?{' '}
                    <Link href="/auth/sign-in" className="text-primary hover:underline">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    </div>
);

export default SignUpPage;
