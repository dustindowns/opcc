import Link from 'next/link';
import SideNavLink from './sidenav-link';

import { FaChartPie, FaDollarSign, FaFolderClosed } from 'react-icons/fa6';

export default function SideNav() {
  return (
    <div className="h-screen w-64 border-r border-r-blue-800 bg-blue-400 dark:border-r-slate-500 dark:bg-slate-800">
      <div className="flex h-20 items-center px-4">
        <Link href="/" className="text-2xl font-bold">
          Card Collector
        </Link>
      </div>

      <nav className="p-4">
        <ul className="flex flex-col gap-2.5">
          <li>
            <SideNavLink href="/dashboard">
              <FaChartPie className="text-2xl" />
              Dashboard
            </SideNavLink>
          </li>
          <li>
            <SideNavLink href="/portfolios">
              <FaFolderClosed className="text-2xl" />
              Portfolios
            </SideNavLink>
          </li>
          <li>
            <SideNavLink href="/expenses">
              <FaDollarSign className="text-2xl" />
              Expenses
            </SideNavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
