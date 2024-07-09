'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function TopNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={clsx(
        `flex gap-3 border-b-4 border-b-transparent p-2 font-bold hover:border-b-blue-500 hover:text-blue-500 dark:hover:border-b-blue-300 dark:hover:text-blue-300`,
        {
          'border-b-blue-700 text-blue-700 dark:border-b-blue-400 dark:text-blue-400':
            href === '/' ? pathname === href : pathname.startsWith(href),
        },
      )}
    >
      {children}
    </Link>
  );
}
