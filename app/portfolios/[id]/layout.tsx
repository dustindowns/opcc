import SideNav from '@/app/portfolios/components/sidenav';

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>
    //     <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
    //       <div className="row-span-2 overflow-hidden">
    //         <SideNav />
    //       </div>
    //       <div className="overflow-hidden">
    //         <TopNav />
    //       </div>
    //       <div className="overflow-auto">{children}</div>
    //     </div>
    //   </body>
    // </html>

    <div className="grid grid-cols-[auto_1fr]">
      <SideNav />
      <div>{children}</div>
    </div>
  );
}
