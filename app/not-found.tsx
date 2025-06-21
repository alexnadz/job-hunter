import Link from 'next/link';
import { FileSearch } from 'lucide-react';

import { Button, PageInfoLayout } from '@/lib/shared';

const NotFound = () => (
    <PageInfoLayout
        Icon={FileSearch}
        title="404"
        subtitle="Page Not Found"
        description="We couldn't find the page you were looking for. The page might have been removed, renamed, or is temporarily unavailable."
    >
        <div className="mt-4">
            <Button asChild variant="default">
                <Link href="/">Return to Home</Link>
            </Button>
        </div>
    </PageInfoLayout>
);

export default NotFound;
