import { ReactNode } from 'react';

type Props = {
  label: string;
  children: ReactNode;
};

export default function CyberCard({ label, children }: Props) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-cyan-500/20 bg-cyan-400/3 px-5 py-4">
      {/* Left accent line */}
      <div className="absolute top-0 bottom-0 left-0 w-0.75 bg-linear-to-b from-cyan-400 to-transparent" />

      {/* Section label */}
      <div className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-[3px] text-cyan-400 uppercase">
        {label}
        <div className="h-px flex-1 bg-cyan-400/15" />
      </div>

      {children}
    </div>
  );
}
