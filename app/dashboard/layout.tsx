import TopNav from './topnav';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <TopNav />
      <div>{children}</div>
    </div>
  );
}
