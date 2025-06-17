import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';
import './globals.css';
import { AppThemeProvider } from '@/lib/shared/providers';

export const metadata: Metadata = {
    title: 'Job Hunter',
    description: '',
};

const geistSans = Geist({
    variable: '--font-geist-sans',
    display: 'swap',
    subsets: ['latin'],
});

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.className}`}>
            <AppThemeProvider>
                <div className="relative flex min-h-screen flex-col">{children}</div>
                <Toaster position="top-right" richColors />
            </AppThemeProvider>
        </body>
    </html>
);

export default RootLayout;
