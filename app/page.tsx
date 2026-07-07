import HeroSection from '@/components/HeroSection';
import BioCard from '@/components/BioCard';
import SnsLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl">
        <HeroSection />

        <div className="flex flex-col gap-4 px-5 py-5 sm:px-8 sm:py-7">
          <BioCard />
          <SnsLinks />
        </div>

        <footer className="border-t border-white/10 px-5 py-5 sm:px-8">
          <span className="font-mono text-[11px] tracking-widest text-slate-500">
            © {new Date().getFullYear()} Ken_Cir. All rights reserved.
          </span>
        </footer>
      </div>
    </main>
  );
}
