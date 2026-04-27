import HeroSection from '@/components/HeroSection';
import BioCard from '@/components/BioCard';
import SnsLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060d10]">
      <div className="mx-auto max-w-2xl">
        <HeroSection />

        <div className="flex flex-col gap-5 px-8 py-6">
          <BioCard />
          <SnsLinks />
        </div>

        <footer className="flex items-center justify-between border-t border-cyan-400/10 px-8 py-4">
          <span className="font-mono text-[11px] tracking-widest text-cyan-400/35">
            © {new Date().getFullYear()} Ken_Cir. All rights reserved.
          </span>
        </footer>
      </div>
    </main>
  );
}
