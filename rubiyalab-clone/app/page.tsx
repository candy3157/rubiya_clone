"use client";

import MemberMarquee from "@/components/MemberMarquee";
import { members } from "@/data/members";
import { ArrowRight, Github, MessageSquare, Trophy } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

function SpacedTitle({ children }: { children: string }) {
  // "A b o u t" 같은 느낌의 자간/문자 분리 타이포 흉내
  return (
    <div className="text-xs font-semibold tracking-[0.35em] uppercase text-black/60 dark:text-white/60">
      {children.split("").join(" ")}
    </div>
  );
}

const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
  loading: () => (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-xs font-medium backdrop-blur transition dark:border-white/10 dark:bg-black/40"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className="h-4 w-4" />
      <span className="hidden sm:inline">Toggle theme</span>
    </button>
  ),
});

export default function Page() {
  return (
    <main className="min-h-dvh bg-transparent text-black antialiased dark:text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-black/10 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/40">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-black/5 dark:bg-white/10" />
            <span className="text-sm font-semibold">Team</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10"
              href="#"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10"
              href="#"
              aria-label="Discord"
            >
              <MessageSquare className="h-4 w-4" />
            </a>
            <a
              className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10"
              href="#"
              aria-label="CTFtime"
            >
              <Trophy className="h-4 w-4" />
            </a>

            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <SpacedTitle>About</SpacedTitle>
        <div className="mt-4 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <p className="text-balance text-sm leading-7 text-black/80 dark:text-white/80">
            우리는 보안/CTF를 중심으로 문제 해결과 연구를 지속하는 팀이라는
            콘셉트의 랜딩 페이지를 구현합니다. (학습용 클론이므로 문구는
            자유롭게 교체하세요.)
          </p>

          <div className="rounded-3xl border border-black/10 bg-black/[0.03] p-8 dark:border-white/10 dark:bg-white/[0.06]">
            <div className="text-xs font-medium text-black/60 dark:text-white/60">
              RB
            </div>
            <div className="mt-3 text-2xl font-semibold tracking-tight">
              Welcome to <span className="italic">yourLab</span> ?
            </div>
            <div className="mt-2 text-xs text-black/60 dark:text-white/60">
              Hero 영역(타이틀/서브타이틀/배지) 구성
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold tracking-[0.35em] uppercase text-black/60 dark:text-white/60">
              CREWS
            </div>
            <div className="mt-2">
              <SpacedTitle>Members</SpacedTitle>
              <div className="mt-2 text-xs text-black/60 dark:text-white/60">
                Current active players in the team.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16">
        <MemberMarquee members={members} />
        <div className="flex justify-center">
        <Link href="/users" className="group inline-flex w-30 items-center justify-center gap-2 rounded-full p-2 transition hover:bg-black/5 dark:hover:bg-white/10">
            <span className="text-sm font-medium transition-all duration-200 group-hover:text-base">
              More
            </span>
            <ArrowRight className="h-4 w-4 translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-black/10 py-8 text-center text-xs text-black/50 dark:border-white/10 dark:text-white/50">
        © {new Date().getFullYear()} Team Landing Clone (Practice)
      </footer>
    </main>
  );
}
