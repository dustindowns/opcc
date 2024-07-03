import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';

export default function SideNavLink({
  href,
  active,
  children,
}: {
  href: LinkProps['href'];
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        `inline-flex w-full items-center gap-4 rounded-md p-2 font-semibold`,
        {
          'bg-blue-500 text-white dark:bg-blue-600 dark:text-blue-100': active,
        },
      )}
    >
      {children}
    </Link>
  );
}
