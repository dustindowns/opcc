import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopNav from './components/topbar';
import SideNav from './components/sidenav';
import TopBar from './components/topbar';

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
      <body className={inter.className}>
        <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
          <div className="row-span-2 overflow-hidden">
            <SideNav />
          </div>
          <div className="overflow-hidden">
            <TopBar />
          </div>
          <div className="overflow-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
