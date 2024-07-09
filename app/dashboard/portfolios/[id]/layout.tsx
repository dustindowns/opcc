import SideNav from './sidenav';

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <SideNav />
      <div>{children}</div>
    </div>
  );
}
