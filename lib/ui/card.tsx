export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-lg border border-slate-400 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      {children}
    </div>
  );
}
