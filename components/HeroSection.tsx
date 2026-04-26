import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-cyan-500/20 bg-linear-to-br from-[#061418] to-[#060d10] px-8 py-12">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,198,211,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(29,198,211,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="scan-line pointer-events-none absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="relative z-10 flex items-center gap-8">
        <div className="relative h-28 w-28 shrink-0">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-cyan-400/70 bg-linear-to-br from-[#071c22] to-[#0a2830] shadow-[0_0_24px_rgba(29,198,211,0.25),inset_0_0_20px_rgba(29,198,211,0.05)]">
            <Image
              src="/vrc_avatar.webp"
              alt="Ken_Cir Avatar"
              fill
              className="object-cover"
              priority
              sizes="112px"
            />
          </div>
          {/* Corner brackets */}
          <span className="absolute -left-0.5 -top-0.5 h-3 w-3 border-l-2 border-t-2 border-cyan-400" />
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 border-r-2 border-t-2 border-cyan-400" />
          <span className="absolute -bottom-0.5 -left-0.5 h-3 w-3 border-b-2 border-l-2 border-cyan-400" />
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 border-b-2 border-r-2 border-cyan-400" />
        </div>

        <div>
          <p className="mb-1 font-mono text-xs tracking-[3px] text-cyan-400 uppercase">
            VRChat Profile
          </p>
          <h1
            className="mb-1 font-['Orbitron'] text-3xl font-bold tracking-widest text-white"
            style={{ textShadow: "0 0 24px rgba(29,198,211,0.6)" }}
          >
            Ken_Cir（けんちる）
          </h1>
          <p className="mb-3 font-mono text-sm text-cyan-300/70">
            VRC ID: Ken_Cir（けんちる）
          </p>
        </div>
      </div>
    </section>
  );
}
