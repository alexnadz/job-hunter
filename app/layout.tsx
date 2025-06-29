import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/next';

import { Toaster } from 'sonner';

import { AppThemeProvider, AppNavbar, Footer } from '@/lib/shared';

import './globals.css';

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
                <div className="relative flex min-h-screen flex-col">
                    <AppNavbar />
                    {children}
                    <Footer />
                </div>
                <Analytics />
                <Toaster position="top-right" richColors />
            </AppThemeProvider>
        </body>
    </html>
);

export default RootLayout;
