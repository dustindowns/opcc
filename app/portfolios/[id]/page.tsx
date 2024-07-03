export default function PortfolioDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main>
      <h1>Portfolio: Main ({params.id})</h1>

      <div>Profit/Loss By Set</div>

      <div>Recent Graded Cards</div>

      <div>Recent Card Purchases</div>

      <div>Recent Card Sales</div>
    </main>
  );
}
