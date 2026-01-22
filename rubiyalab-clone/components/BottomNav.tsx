"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/users", label: "Members" },
  { href: "/posts", label: "Posts" },
  { href: "/settings", label: "Settings" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="
        fixed inset-x-0 bottom-0 pb-[env(safe-area-inset-bottom)] z-[999]
        border-t border-white/10
        bg-black/70 backdrop-blur
      "
      aria-label="Bottom navigation"
    >
      <div className="mx-auto flex max-w-4xl items-center justify-around px-6 py-3">
        {NAV.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "rounded-md px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      style={{ outline: "2px solid red" }}
    </nav>
  );
}
