import Avatar from '@/lib/ui/avatar';
import Link from 'next/link';
import { FaChartPie, FaDollarSign, FaFolderClosed } from 'react-icons/fa6';
import TopNavLink from './topnav-link';

export default function TopNav() {
  return (
    <div className="flex h-20 items-center justify-between border-b border-b-slate-400 bg-slate-200 px-8 dark:border-b-slate-500 dark:bg-slate-900">
      <Link href="/" className="text-3xl font-bold">
        Card Collector
      </Link>

      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <TopNavLink href="/">
              <FaChartPie className="text-2xl" />
              Dashboard
            </TopNavLink>
          </li>
          <li>
            <TopNavLink href="/portfolios">
              <FaFolderClosed className="text-2xl" />
              Portfolios
            </TopNavLink>
          </li>
          <li>
            <TopNavLink href="/expenses">
              <FaDollarSign className="text-2xl" />
              Expenses
            </TopNavLink>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="text-xl font-bold">Billion Beri Collectibles</div>
        <Avatar label="MG" />
      </div>
    </div>
  );
}
