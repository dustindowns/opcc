'use client';

import { useParams, usePathname } from 'next/navigation';
import { IconType } from 'react-icons';
import {
  FaArrowUp91,
  FaBook,
  FaChartPie,
  FaCreditCard,
  FaDollarSign,
} from 'react-icons/fa6';

import SideNavLink from './sidenav-link';

export default function SideNav() {
  const pathname = usePathname();
  const { id } = useParams();

  const portfolioLinks: Array<{
    href: string;
    label: string;
    icon: IconType;
  }> = [
    {
      href: `/dashboard/portfolios/${id}`,
      label: 'Overview',
      icon: FaChartPie,
    },
    {
      href: `/dashboard/portfolios/${id}/inventory`,
      label: 'Inventory',
      icon: FaBook,
    },
    {
      href: `/dashboard/portfolios/${id}/gradings`,
      label: 'Gradings',
      icon: FaArrowUp91,
    },
    {
      href: `/dashboard/portfolios/${id}/purchases`,
      label: 'Purchases',
      icon: FaCreditCard,
    },
    {
      href: `/dashboard/portfolios/${id}/sales`,
      label: 'Sales',
      icon: FaDollarSign,
    },
  ];

  return (
    <div className="h-screen w-64 border-r border-r-slate-400 bg-slate-200 dark:border-r-slate-500 dark:bg-slate-900">
      <div className="p-4">
        <div className="text-2xl font-bold">Portfolio</div>
        <div className="text-xl font-bold italic">Main</div>
      </div>

      <nav className="p-4">
        <ul className="flex flex-col gap-2.5">
          {portfolioLinks.map((l) => {
            return (
              <li key={l.label}>
                <SideNavLink href={l.href} active={l.href === pathname}>
                  <l.icon className="text-2xl" />
                  {l.label}
                </SideNavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
