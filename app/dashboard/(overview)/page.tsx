import StatCard from './stat-card';

export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="mb-4 text-3xl font-bold">Dashboard</h1>

      <dl className="grid grid-cols-3 gap-4">
        <StatCard label="Overall Profit / Loss" value={500.0} />
        <StatCard label="Portfolio Profit / Loss" value={800.0} />
        <StatCard label="Total Expenses" value={-300.0} />
      </dl>
    </main>
  );
}
