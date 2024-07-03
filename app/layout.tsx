import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopNav from './components/topnav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Card Collector',
  description: 'Manage your card collections',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-100 text-black dark:bg-black dark:text-white`}
      >
        <div className="grid h-screen grid-rows-[auto_1fr]">
          <TopNav />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
