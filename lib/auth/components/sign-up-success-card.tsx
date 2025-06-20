import Link from 'next/link';

import { MailCheck } from 'lucide-react';

import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    PATHNAMES,
} from '@/lib/shared';

export const SignUpSuccessCard = () => (
    <Card className="w-full max-w-md">
        <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <MailCheck className="h-6 w-6 text-black" />
            </div>
            <CardTitle className="text-2xl">Registration Successful!</CardTitle>
            <CardDescription>Thank you for signing up with Job Hunter</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
            <p>
                We&apos;ve sent a confirmation email to your inbox. Please check your email and
                click the verification link to activate your account.
            </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
            <Button asChild className="w-full">
                <Link href={PATHNAMES.PUBLIC.HOME}>Return to Home</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
                <Link href={PATHNAMES.AUTH.SIGN_IN}>Sign In</Link>
            </Button>
        </CardFooter>
    </Card>
);
