import type { Metadata, Viewport } from 'next';

import './globals.css';

import { inter, jetbrainsMono, leagueSpartan } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const metadata: Metadata = {
  title: 'Agin',
  description: 'Build it agin.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen font-sans antialiased',
          inter.variable,
          jetbrainsMono.variable,
          leagueSpartan.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
