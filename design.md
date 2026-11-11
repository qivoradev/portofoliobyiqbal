# Design System — iqbaldf Portfolio (Studio Keffi Aesthetic)

## 1. Core Vibe
- 100% Studio Keffi design architecture with Deep Obsidian Charcoal canvas (#0C0D0E).
- Floating Capsule Navbar in stone-900/90 with white action capsule.
- The Master Bento Card in Warm Editorial Sand (#F5F3ED) with crisp Charcoal typography (#111215) and integrated 3D Spline Workstation.
- Zero watermark, clean editorial divider tables, and spring physics micro-interactions.

## 2. Tokens (CSS variables in `src/index.css`)
| Token | Value | Utility |
|---|---|---|
| Page Canvas | `#0C0D0E` Deep Obsidian Charcoal | `bg-[#0C0D0E]` |
| Master Bento Card | `#F5F3ED` Warm Editorial Sand | `bg-[#F5F3ED]` |
| Card Typography | `#111215` Deep Charcoal | `text-[#111215]` |
| Muted Accent | `#8E8D88` Slate Olive / Stone | `text-stone-500` / `text-stone-600` |
| Divider Line | `stone-300/60` / `border-black/15` | `border-black/15` |

## 3. Typography
- **Headings**: Sans-serif bold tight tracking (`tracking-tight`, `.type-display`).
- **Body**: Inter.
- **Micro-labels**: JetBrains Mono, uppercase, `text-[11px]`, `tracking-widest` → `.type-micro`.
- Brand: `iqbaldf` — font-bold text-white text-xs tracking-widest uppercase.

## 4. Motion (spring physics)
- Single curve everywhere: `cubic-bezier(0.16, 1, 0.3, 1)` → `ease-spring`.
- Micro-interactions: `hover:scale-105 active:scale-95`.
- Respects `prefers-reduced-motion`.

## 5. Component Anatomy
Root Container → Media Box (locked aspect ratio) → Meta Stack → Body Stack → Action Base.

| Section | File | Notes |
|---|---|---|
| Navigation | `components/Navbar.jsx` | Floating capsule centered at top: stone-900/90 border-white/10 backdrop-blur-md, brand left, nav center, white "Hubungi Saya" button right. |
| Hero | `components/Hero.jsx`, `KeffiHeroCard.jsx` | The Master Bento Card (2-column grid: left = Keffi headline, divider table [SCOPE], [TOOLS], [METRIC], black capsule CTA; right = Spline 3D canvas). |
| Spline 3D | `components/SplineStage.jsx` | `id="spline-canvas-wrapper"`, aspect-square max-h-[480px], transparent background, zero watermarks, micro-labels top & bottom. |
| Focus Bento | `components/FocusBento.jsx` | ARIA tabs (arrow keys), context-aware terminal. |
| Project Ledger | `components/ProjectLedger.jsx` | Editorial rows; click opens the PAR drawer. |
| Project Drawer | `components/ProjectDrawer.jsx` | Problem · Action · Result, spring slide, focus-trapped. |
| Stack Drawer | `components/StackDrawer.jsx`, `Drawer.jsx` | Logic Stack panel. |
| Credentials | `components/Credentials.jsx` | Two hairline rows → certificate lightbox. |
| Footer | `components/Footer.jsx` | Large statement + underline-fill contact links. |

## 6. Content
All copy (ID/EN) lives in `src/content.js`; components are presentation only.
