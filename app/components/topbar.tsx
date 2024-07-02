import Avatar from '@/lib/ui/avatar';

export default function TopBar() {
  return (
    <div className="flex h-20 items-center justify-between border-b border-b-slate-400 bg-slate-200 px-8 dark:border-b-slate-500 dark:bg-slate-900">
      <div className="text-xl font-bold">Billion Beri Collectibles</div>
      <Avatar label="MG" />
    </div>
  );
}
