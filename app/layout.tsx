import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';
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
        <body
        // className={`${geistSans.className}`}
        >
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <div className="relative flex min-h-screen flex-col">{children}</div>
                <Toaster position="top-right" richColors />
            </ThemeProvider>
        </body>
    </html>
);

export default RootLayout;
