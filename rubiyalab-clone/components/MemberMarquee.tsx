import type { Member } from "@/data/members";

function InitialsAvatar({ name }: { name: string }) {
  const initial = name.trim().slice(0, 1).toUpperCase();
  return (
    <div className="grid h-12 w-12 place-items-center rounded-full bg-black/5 text-sm font-semibold dark:bg-white/10">
      {initial}
    </div>
  );
}

function MemberCard({ m }: { m: Member }) {
  return (
    <div className="w-[220px] shrink-0 rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-black/40 dark:hover:bg-black/30">
      <div className="flex items-center gap-3">
        <InitialsAvatar name={m.name} />
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">{m.name}</div>
          <div className="truncate text-xs text-black/60 dark:text-white/60">{m.handle}</div>
        </div>
      </div>
      {m.roles.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {m.roles.map((r) => (
            <span
              key={r}
              className="rounded-full border border-black/10 bg-black/[0.03] px-2 py-1 text-[11px] text-black/70 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/70"
            >
              {r}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MemberMarquee({ members }: { members: Member[] }) {
  // 무한 슬라이드처럼 보이게 2배로 붙여서 -50% 이동
  const loop = [...members, ...members];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-red-500 via-white/70 to-transparent dark:from-black dark:via-black/70" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-red-500 via-white/70 to-transparent dark:from-black dark:via-black/70" />

      <div className="relative z-0 marquee gap-4 py-2">
        {loop.map((m, idx) => (
          <MemberCard key={`${m.handle}-${idx}`} m={m} />
        ))}
      </div>
    </div>
  );
}
