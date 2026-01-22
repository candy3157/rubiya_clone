export type RoleKey =
  | "Lead"
  | "Web3"
  | "Web"
  | "Reverse"
  | "Pwnable"
  | "Crypto"
  | "Contributor"
  | "Forensic"
  | "Guitar"
  | "Drum"
  | "Base"
  | "BackingVocals";

export type SocialKey = "github" | "x" | "website";

export type Member = {
  name: string;
  handle: string; // without "@"
  avatar: string; // e.g. "/avatars/rubiya.png"
  roles: RoleKey[];
  joinDate: string; // e.g. "Feb 2025"
  socials: { type: SocialKey; href: string }[];
};

export const members: Member[] = [
  {
    name: "Hitori",
    handle: "bocchi",
    avatar: "/avatars/hitori_profile.png",
    roles: ["Guitar"],
    joinDate: "Feb 2025",
    socials: [
      { type: "x", href: "https://x.com/rubiya" },
      { type: "github", href: "https://github.com/rubiya" },
      { type: "website", href: "https://example.com" },
    ],
  },
  {
    name: "Nijika",
    handle: "simokitawa's Angel",
    avatar: "/avatars/nijika_profile.png",
    roles: ["Drum"],
    joinDate: "Feb 2025",
    socials: [{ type: "github", href: "https://github.com/d0r43m0n" }],
  },
  {
    name: "Ryo",
    handle: "Beryoji",
    avatar: "/avatars/ryo_profile.png",
    roles: ["Base", "BackingVocals"],
    joinDate: "Feb 2025",
    socials: [{ type: "x", href: "https://x.com/playteddypicker" }],
  },
];
