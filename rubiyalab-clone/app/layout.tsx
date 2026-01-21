import type { Metadata } from "next";
import Providers from "@/app/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team | Clone",
  description: "rubiyalab.team-style landing clone (practice)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
