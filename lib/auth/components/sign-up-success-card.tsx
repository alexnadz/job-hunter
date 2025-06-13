import { Button } from '@/lib/shared/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/lib/shared/ui/card';
import { PATHNAMES } from '@/lib/shared/consts';
import { MailCheck } from 'lucide-react';
import Link from 'next/link';

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
                <Link href={PATHNAMES.public.HOME}>Return to Home</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
                <Link href={PATHNAMES.auth.SIGN_IN}>Sign In</Link>
            </Button>
        </CardFooter>
    </Card>
);
