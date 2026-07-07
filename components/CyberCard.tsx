import { ReactNode } from 'react';

type Props = {
  label: string;
  children: ReactNode;
};

export default function CyberCard({ label, children }: Props) {
  return (
    <section className="relative overflow-hidden rounded-lg border border-slate-200/10 bg-slate-950/55 px-5 py-4 shadow-sm shadow-black/20">
      <div className="absolute top-0 bottom-0 left-0 w-0.75 bg-linear-to-b from-cyan-300/70 to-transparent" />

      <div className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-[3px] text-cyan-200/75 uppercase">
        {label}
        <div className="h-px flex-1 bg-slate-200/10" />
      </div>

      {children}
    </section>
  );
}
