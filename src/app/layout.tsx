import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

import { ThemeProvider } from './_components/theme-provider';

import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Xikão Junior - Dev Senior FullStack',
  description: 'Xikão Junior - Dev Senior FullStack',
  keywords: [
    'Php',
    'Zend',
    'Laravel 9+',
    'MySql',
    'Pgsql',
    'NoSql',
    'Azure',
    'Linux/CentOs/Windows',
    'Next.js',
    'React.js',
    'JavaScript',
    'TypeScript',
    'Full-stack',
    'Tailwind CSS',
    'Xikão Junior',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
