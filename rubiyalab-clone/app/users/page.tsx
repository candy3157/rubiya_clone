"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  members,
  type Member,
  type RoleKey,
  type SocialKey,
} from "@/data/members2";

type HeaderCellProps = {
  label: string;
  width: number;
};

function SortIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}

function HeaderCell({ label, width }: HeaderCellProps) {
  return (
    <th
      className="text-white/60 h-12 p-4 text-left align-middle font-medium"
      style={{ width }}
    >
      <div className="flex items-center gap-2">
        {label}
        <button type="button" className="hover:text-white/90 transition-colors">
          <SortIcon />
        </button>
      </div>
    </th>
  );
}

// @ts-expect-error - role styles are partially defined during WIP
const ROLE_STYLES: Record<
  RoleKey,
  { className: string; icon?: React.ReactNode }
> = {
  Guitar: {
    className: "bg-orange-500/20 text-orange-200 border-orange-500/30",
    icon: <span className="inline-block h-2 w-2 rounded-full bg-orange-300" />,
  },
  Base: {
    className: "bg-amber-500/20 text-amber-200 border-amber-500/30",
    icon: <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />,
  },
  Drum: {
    className: "bg-blue-500/20 text-blue-200 border-blue-500/30",
    icon: <span className="inline-block h-2 w-2 rounded-full bg-blue-300" />,
  },
  BackingVocals: {
    className: "bg-purple-500/20 text-purple-200 border-purple-500/30",
    icon: <span className="inline-block h-2 w-2 rounded-full bg-purple-300" />,
  },
  Pwnable: {
    className: "bg-rose-500/20 text-rose-200 border-rose-500/30",
    icon: <span className="inline-block h-2 w-2 rounded-full bg-rose-300" />,
  },
  Crypto: {
    className: "bg-indigo-500/20 text-indigo-200 border-indigo-500/30",
    icon: <span className="inline-block h-2 w-2 rounded-full bg-indigo-300" />,
  },
  Contributor: {
    className: "bg-white/10 text-white/80 border-white/15",
    icon: <span className="inline-block h-2 w-2 rounded-full bg-white/50" />,
  },
  Forensic: {
    className: "bg-emerald-500/20 text-emerald-200 border-emerald-500/30",
    icon: <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />,
  },
};

function RoleBadge({ role }: { role: RoleKey }) {
  const style = ROLE_STYLES[role];
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        style.className,
      ].join(" ")}
    >
      {style.icon}
      {role}
    </span>
  );
}

/** Social icons (inline SVG) */
function SocialIcon({ type }: { type: SocialKey }) {
  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.9 3.18 9.06 7.6 10.53.56.1.77-.24.77-.54v-1.9c-3.09.67-3.74-1.3-3.74-1.3-.5-1.29-1.23-1.63-1.23-1.63-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.9.1-.7.38-1.19.69-1.46-2.47-.28-5.06-1.23-5.06-5.47 0-1.2.43-2.18 1.13-2.95-.12-.28-.49-1.42.1-2.96 0 0 .92-.29 3.01 1.12a10.4 10.4 0 0 1 5.48 0c2.09-1.41 3.01-1.12 3.01-1.12.59 1.54.22 2.68.1 2.96.7.77 1.13 1.75 1.13 2.95 0 4.25-2.6 5.18-5.08 5.46.39.34.74 1.02.74 2.06v3.06c0 .3.2.65.78.54a11.27 11.27 0 0 0 7.6-10.53C23.25 5.48 18.27.5 12 .5z" />
      </svg>
    );
  }
  if (type === "x") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.4l-5-7.1L5.7 22H2.6l7.3-8.4L1 2h6.6l4.5 6.3L18.9 2zm-1.1 18h1.7L6.6 3.9H4.8L17.8 20z" />
      </svg>
    );
  }
  // website
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" />
      <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
    </svg>
  );
}

function SocialLink({ type, href }: { type: SocialKey; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
      aria-label={type}
      title={type}
    >
      <SocialIcon type={type} />
    </a>
  );
}

function MemberNameCell({ m }: { m: Member }) {
  return (
    <td className="p-4 align-middle">
      <div className="flex items-center gap-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5">
          <Image
            src={m.avatar}
            alt={`${m.name} avatar`}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <div className="truncate font-semibold text-white">{m.name}</div>
          <div className="truncate text-sm text-white/60">@{m.handle}</div>
        </div>
      </div>
    </td>
  );
}

export default function Page() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return members;

    return members.filter((m) => {
      const hay = [
        m.name,
        m.handle,
        m.joinDate,
        ...m.roles,
        ...m.socials.map((s) => s.type),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
  }, [q]);

  return (
    <div className="flex min-h-screen justify-center bg-transparent">
      <div
        className="
          relative min-h-screen max-w-4xl w-full
          bg-black/70 text-white
          px-10 py-12 font-sans antialiased sm:py-24
          border border-white/10
          rounded-none lg:rounded-lg
          mt-0 lg:mt-16
        "
      >
        <main>
          <section id="hero" className="mb-12 space-y-3">
            <div className="flex justify-center">
              <Image
                src="/HACTOR.png"
                alt="HACTOR Logo"
                width={300}
                height={83}
                priority
                className="hidden dark:block w-3/4 sm:w-1/2 h-auto"
                sizes="(min-width: 640px) 50vw, 75vw"
              />
            </div>

            <h1 className="text-4xl font-bold tracking-tight">Members</h1>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              Current active players in HACTOR
            </p>

            <input
              className="mt-10 border-white/10 bg-white/5 ring-offset-background placeholder:text-white/40 focus-visible:ring-white/20 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm"
              placeholder="Search members..."
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </section>

          <div className="rounded-md border border-white/10 bg-black/30">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b border-white/10">
                  <tr className="border-b border-white/10">
                    <HeaderCell label="Name" width={300} />
                    <HeaderCell label="Roles" width={400} />
                    <HeaderCell label="Join Date" width={150} />
                    <HeaderCell label="Social Links" width={150} />
                  </tr>
                </thead>

                <tbody className="[&_tr:last-child]:border-0">
                  {filtered.map((m) => (
                    <tr
                      key={m.handle}
                      className="border-b border-white/10 hover:bg-white/[0.03] transition-colors"
                    >
                      <MemberNameCell m={m} />

                      <td className="p-4 align-middle">
                        <div className="flex flex-wrap gap-2">
                          {m.roles.map((r) => (
                            <RoleBadge key={r} role={r} />
                          ))}
                        </div>
                      </td>

                      <td className="p-4 align-middle text-white/60">
                        {m.joinDate}
                      </td>

                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-2">
                          {m.socials.map((s) => (
                            <SocialLink
                              key={`${m.handle}-${s.type}`}
                              type={s.type}
                              href={s.href}
                            />
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filtered.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="p-10 text-center text-white/60"
                      >
                        No members found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
