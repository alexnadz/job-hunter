import { PropsWithChildren } from 'react';

import { ThemeProvider } from 'next-themes';

export const AppThemeProvider = ({ children }: PropsWithChildren) => (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        {children}
    </ThemeProvider>
);
