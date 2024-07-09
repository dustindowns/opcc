import Card from '@/lib/ui/card';
import Link from 'next/link';

export default function PortfoliosPage() {
  return (
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Portfolios</h1>

      <div>
        <p>This section is the bulk of managing the card portfolios.</p>
        <p>
          The idea is that a user would have a &ldquo;Main&rdquo; portfolio by
          default and see the portfolios with key stats of each listed here.
        </p>
        <p>
          The user could this drill into a portfolio to see its details,
          including links to see Inventory, Grading, Purchases, Sales
        </p>
      </div>

      <Link
        href={`/dashboard/portfolios/${1}`}
        className="mt-8 inline-block rounded-lg bg-blue-500 p-2.5 text-white hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500"
      >
        View Main Portfolio
      </Link>
    </main>
  );
}
