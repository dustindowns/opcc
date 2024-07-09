import clsx from 'clsx';
import { formatCurrency } from '../utils/currency';
import Card from '@/lib/ui/card';

export default function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <Card>
      <dt className="text-base">{label}</dt>
      <dd
        className={clsx('text-2xl', {
          'text-green-600 dark:text-green-400': value > 0,
          'text-red-600 dark:text-red-400': value < 0,
        })}
      >
        {formatCurrency(value)}
      </dd>
    </Card>
  );
}
