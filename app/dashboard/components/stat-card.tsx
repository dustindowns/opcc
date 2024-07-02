import clsx from 'clsx';
import { formatCurrency } from '../utils/currency';

export default function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="flex flex-col gap-1.5 rounded-lg border border-slate-400 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      <dt className="text-base">{label}</dt>
      <dd
        className={clsx('text-2xl', {
          'text-green-600 dark:text-green-400': value > 0,
          'text-red-600 dark:text-red-400': value < 0,
        })}
      >
        {formatCurrency(value)}
      </dd>
    </div>
  );
}
