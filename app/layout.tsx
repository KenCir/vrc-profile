import type { Metadata } from "next";
import { Share_Tech_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Ken_Cir VRChat Profile",
  description: "Ken_Cir VRChat Self-Introduction Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${shareTechMono.variable} ${orbitron.variable} font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
