'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

import { Button, PageErrorLayout } from '@/lib/shared';

type ErrorProps = { error: Error & { digest?: string }; reset: () => void };

const Error = ({ error, reset }: ErrorProps) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <PageErrorLayout
            Icon={AlertTriangle}
            iconClassName="h-12 w-12 text-red-600"
            iconContainerClassName="rounded-full bg-red-100 p-6"
            title="Oops!"
            subtitle="Something went wrong"
            description="We encountered an unexpected error. Our team has been notified and is working to fix the issue."
        >
            {error.digest && (
                <p className="text-sm text-muted-foreground">
                    Error ID: <code className="rounded bg-muted px-1 py-0.5">{error.digest}</code>
                </p>
            )}
            <div className="mt-6">
                <Button onClick={() => reset()} variant="default">
                    Try again
                </Button>
            </div>
        </PageErrorLayout>
    );
};

export default Error;
