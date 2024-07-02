'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function SideNavLink({
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
        `inline-flex w-full items-center gap-4 rounded-md p-2 font-semibold`,
        {
          'bg-blue-500 text-white dark:bg-blue-600 dark:text-blue-100':
            pathname === href,
        },
      )}
    >
      {children}
    </Link>
  );
}
