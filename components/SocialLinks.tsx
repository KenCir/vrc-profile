import CyberCard from './CyberCard';
import { siX, siVrchat } from 'simple-icons';

const globeIconPath =
  'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 9h-3.02a15.8 15.8 0 0 0-1.19-5.04A8.02 8.02 0 0 1 18.93 11ZM12 4.04c.83 1.2 1.63 3.42 1.88 6.96h-3.76C10.37 7.46 11.17 5.24 12 4.04ZM4.26 13h3.8c.1 1.58.36 3.03.76 4.27A8.02 8.02 0 0 1 4.26 13Zm3.8-2h-3a8.02 8.02 0 0 1 4.22-5.04A15.8 15.8 0 0 0 8.09 11Zm3.94 8.96c-.83-1.2-1.63-3.42-1.88-6.96h3.76c-.25 3.54-1.05 5.76-1.88 6.96Zm2.18-2.69c.4-1.24.66-2.69.76-4.27h3.8a8.02 8.02 0 0 1-4.56 4.27Z';

function SocialItem({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition-all hover:border-cyan-200/50 hover:bg-cyan-200/10 hover:text-white"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d={icon} />
      </svg>
      {label}
    </a>
  );
}

export default function SocialLinks() {
  return (
    <CyberCard label="Links">
      <div className="flex flex-wrap gap-2">
        <SocialItem
          href="https://vrchat.com/home/user/usr_3974abeb-a05d-4e4b-9d09-0a18729fe908"
          icon={siVrchat.path}
          label="VRChat"
        />
        <SocialItem href="https://twitter.com/Ken_Cir_VRC" icon={siX.path} label="Twitter（旧X）" />
        <SocialItem
          href="https://x.com/Ken_Cir_VRC/status/2061762762188153206"
          icon={siX.path}
          label="自己紹介カード"
        />
        <SocialItem href="https://kencir.blog" icon={globeIconPath} label="Portfolio" />
      </div>
    </CyberCard>
  );
}
