import type { Metadata } from "next";
import Providers from "@/app/providers";
import BottomNav from "@/components/BottomNav";
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
      <body className="bg-black text-white">
        {/* 오버레이는 화면 전체에 깔기 */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* 본문에 하단 여백을 줘서 nav에 안 가리게 */}
        <Providers>
          <main className="pb-20">{children}</main>
        </Providers>

        {/* 뷰포트 하단 고정 */}
        <BottomNav />
      </body>
    </html>
  );
}
