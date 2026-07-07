import Image from 'next/image';

const heroImageSrc = '/background.webp';

export default function HeroSection() {
  return (
    <section className="relative min-h-[430px] overflow-hidden border-b border-white/10 bg-slate-950 px-6 py-8 sm:min-h-[500px] sm:px-8 sm:py-10">
      <Image
        src={heroImageSrc}
        alt=""
        fill
        className="object-cover opacity-25"
        priority
        sizes="(max-width: 768px) 100vw, 672px"
      />
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/30 via-slate-950/68 to-slate-950" />
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-950/35 to-slate-950/70" />

      <div className="relative z-10 flex min-h-[360px] flex-col justify-end gap-8 sm:min-h-[420px]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 font-mono text-xs tracking-[3px] text-cyan-200/75 uppercase">VRChat Profile</p>
            <h1 className="mb-3 text-4xl font-semibold text-white sm:text-5xl">けんちる</h1>
            <p className="mb-5 text-sm text-slate-300 sm:text-base">VRC ID: Ken_Cir（けんちる）</p>
            <p className="max-w-md text-base leading-relaxed text-slate-100 sm:text-lg">
              ゲムワ、イベント、写真、改変が好きなVRCユーザーです。よろしくお願いします。
            </p>
          </div>

          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-white/20 bg-slate-900 shadow-lg shadow-black/30 sm:h-28 sm:w-28">
            <Image src="/vrc_avatar.webp" alt="Ken_Cir Avatar" fill className="object-cover" priority sizes="112px" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
          <div className="rounded border border-white/10 bg-black/25 px-3 py-2 backdrop-blur">
            <p className="font-mono text-[10px] tracking-[2px] text-cyan-200/65 uppercase">Started</p>
            <p className="mt-1 text-slate-100">2024/05/22</p>
          </div>
          <div className="rounded border border-white/10 bg-black/25 px-3 py-2 backdrop-blur">
            <p className="font-mono text-[10px] tracking-[2px] text-cyan-200/65 uppercase">Full Tracking</p>
            <p className="mt-1 text-slate-100">2026/04頃から</p>
          </div>
          <div className="rounded border border-white/10 bg-black/25 px-3 py-2 backdrop-blur">
            <p className="font-mono text-[10px] tracking-[2px] text-cyan-200/65 uppercase">Online</p>
            <p className="mt-1 text-slate-100">22:00〜2:00</p>
          </div>
          <div className="rounded border border-white/10 bg-black/25 px-3 py-2 backdrop-blur">
            <p className="font-mono text-[10px] tracking-[2px] text-cyan-200/65 uppercase">Main</p>
            <p className="mt-1 text-slate-100">ゲムワ / イベント</p>
          </div>
        </div>
      </div>
    </section>
  );
}
