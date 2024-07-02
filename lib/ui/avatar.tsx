import { ComponentProps } from 'react';

interface Props extends ComponentProps<'div'> {
  label: string;
}

export default function Avatar({ label }: Props) {
  return (
    <div
      className={`flex size-12 shrink-0 items-center justify-center rounded-full border border-slate-500 bg-white font-bold dark:border-slate-600 dark:bg-slate-900`}
    >
      {label}
    </div>
  );
}
