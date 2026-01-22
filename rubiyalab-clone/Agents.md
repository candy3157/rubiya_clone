# Users Page Layout Guide

This document explains how to build the Members screen using file-based data under `data/` (no database).
Requirements:
- Store data as files under `data/`.
- Render with Next.js App Router in `app/users/page.tsx`.
- Match the provided UI (table-like layout, badges, avatars, social links).

---

## 1) Data Design (data directory)

1. Create `data/members.ts`.
2. Define an array of members. Each member should include:
   - `name`: display name
   - `handle`: @id
   - `avatar`: image path (e.g., `/avatars/rubiya.png`)
   - `roles`: list of role badges (label, color, icon)
   - `joinDate`: text (e.g., `Feb 2025`)
   - `socials`: list of social links (label, href, icon)

### Example structure (concept)
- `roles` should contain enough info to render badge styles.
- `socials` should contain enough info to render link icons.

---

## 2) Type Definitions (optional)

1. Define types in `data/members.ts` or under `types/`.
2. Example:
   - `Role`: `{ label: string; color: string; icon?: ReactNode; }`
   - `SocialLink`: `{ label: string; href: string; icon?: ReactNode; }`
   - `Member`: `{ name; handle; avatar; roles; joinDate; socials; }`

---

## 3) Import Data in the Page

1. In `app/users/page.tsx`, import the `members` array.
2. Render rows with `members.map(...)`.

---

## 4) Layout Structure

1. Wrap everything in a card-like container.
   - Example: `max-w-4xl`, `bg-black/70`, `border border-white/10`, `rounded-lg`
2. Create a header row using a fixed-column grid.
   - Columns: `Name / Roles / Join Date / Social Links`
3. Use the same column proportions for each row.
   - Example: `grid grid-cols-[2fr_3fr_1fr_1fr]`

---

## 5) Row Composition

1. Name column
   - Avatar + name/handle stacked
   - `flex items-center gap-4`
2. Roles column
   - Render badges with `flex flex-wrap gap-2`
3. Join Date column
   - Text only (e.g., `text-white/70`)
4. Social Links column
   - Horizontal icons/links (`flex items-center gap-3`)

---

## 6) Badge (roles) Styling

1. Base style
   - `rounded-full px-3 py-1 text-sm font-medium`
2. Color
   - Use `role.color` mapped to classes or inline styles

---

## 7) Image Rules

1. Use Next.js `Image` component.
2. Avoid LCP warnings
   - If the image is above the fold, add `priority`.
3. Keep aspect ratio
   - Provide both `width` and `height`.
   - When resizing via CSS, include `w-auto` or `h-auto`.

---

## 8) Visual Tone

- Background: `bg-black`
- Card: `bg-black/70`
- Borders: `border border-white/10`
- Row dividers: `border-b border-white/10`
- Text: `text-white` for primary, `text-white/70` for secondary

---

## 9) Quick Build Order

1. Add member data in `data/members.ts`
2. (Optional) add type definitions
3. Import data in `app/users/page.tsx`
4. Build the grid header/rows
5. Render roles/socials via map
6. Polish styles and image rules

---

If needed, I can also provide sample `members` data and a UI template snippet in text form.
