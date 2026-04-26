import CyberCard from "./CyberCard";
import { siX, siVrchat } from "simple-icons";

function SocialItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded border border-cyan-400/30 bg-cyan-400/[0.07] px-4 py-2 font-mono text-sm text-cyan-300/80 transition-all hover:border-cyan-400 hover:bg-cyan-400/15 hover:text-white"
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
    <CyberCard label="// Links">
      <div className="flex flex-wrap gap-2">
        <SocialItem
          href="https://twitter.com/Ken_Cir_VRC"
          icon={siX.path}
          label="X (Twitter)"
        />
        <SocialItem
          href="https://vrchat.com/home/user/usr_3974abeb-a05d-4e4b-9d09-0a18729fe908"
          icon={siVrchat.path}
          label="VRChat"
        />
      </div>
    </CyberCard>
  );
}
