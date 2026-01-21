export type Member = {
  name: string;
  handle: string;
  roles: string[];
  avatarUrl?: string; // 연습용: 없으면 이니셜로 대체
};

export const members: Member[] = [
  { name: "혜또", handle: "@hy_sunii", roles: [] },
  { name: "장지원", handle: "@jangjiweon5986", roles: ["Pwnable", "Reverse"] },
  {
    name: "민지",
    handle: "@hzuiw33",
    roles: ["Pwnable", "Forensic", "Reverse"],
  },
  { name: "김혼구", handle: "@alhabhonggu", roles: ["Pwnable"] },
  { name: "Predic", handle: "@predic02", roles: ["Web", "Web3"] },
  { name: "jhanks", handle: "@jhanks_.", roles: ["Web", "Reverse"] },
  { name: "LOBYI", handle: "@lobyi", roles: ["Web", "Web3"] },
  { name: "oiji", handle: "@oesp91", roles: ["Web", "Web3"] },
  { name: "dldldl", handle: "@dldldl1955", roles: ["Web"] },
  { name: "Tyojong", handle: "@tyojong", roles: ["Web", "Web3"] },
  { name: "aestera", handle: "@aest3ra", roles: ["Web", "Web3"] },
];
