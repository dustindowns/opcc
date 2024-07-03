export default function ExpensesPage() {
  return (
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Expenses</h1>
      <div>
        <p>
          This section is for managing overall expenses that are not tied to a
          specific portfolio.
          <span className="italic"> (Ex. card sleeves, studio equipment)</span>
        </p>
        <p>
          I imagine here you could create expense accounts{' '}
          <span className="italic">
            (e.g. - &ldquo;Studio Expenses&rdquo; or &ldquo;Miscellaneous
            Expenses&rdquo;)
          </span>{' '}
          and then view expense transactions of each account.
        </p>
      </div>
    </main>
  );
}
