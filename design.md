# Design System — iqbaldf Portfolio (Editorial · Warm Paper)

## 1. Core Vibe
- Editorial agency standard (Studio Keffi–style system) with one interactive 3D focal point (Spline workstation).
- Hairline structure over boxes: 1px dividers, ledgers and rows instead of twin cards.
- Calm, analytical, precise. No flat white, no decorative gradients, no illustration clichés.

## 2. Tokens (CSS variables in `src/index.css`)
| Token | Light | Dark | Utility |
|---|---|---|---|
| Canvas | `#F5F3ED` Warm Paper | `#121316` | `bg-paper` |
| Ink | `#121316` Obsidian | `#F5F3ED` | `text-ink` |
| Muted | `#6E6D68` Slate Olive | `#A3A199` | `text-muted` |
| Line | stone-300 @ 80% | paper @ 14% | `border-line` |
| Surface | stone-200 @ 40% | paper @ 5% | `bg-surface` |
| Surface hover | stone-200 @ 50% | paper @ 8% | `bg-surface-hover` |

- Status accent: `emerald-500` (pulsing availability dot only).

## 3. Typography
- **Display / headings**: Inter Tight, bold, `letter-spacing: -0.03em` → `.type-display`.
- **Body**: Inter.
- **Micro-labels**: JetBrains Mono, uppercase, `text-[11px]`, `tracking-widest` → `.type-micro`.
- Brand: `iqbaldf` — sans, semibold, uppercase, `tracking-widest`, `text-xs`.

## 4. Motion (spring physics)
- Single curve everywhere: `cubic-bezier(0.16, 1, 0.3, 1)` → `ease-spring`.
- Durations 500–700ms. Hover = translate/colour only (no layout properties).
- Respects `prefers-reduced-motion` (reveals, terminal, preloader are disabled).

## 5. Component Anatomy
Root Container → Media Box (locked aspect ratio) → Meta Stack → Body Stack → Action Base.

| Section | File | Notes |
|---|---|---|
| Navigation | `components/Navbar.jsx` | Full-width hairline bar, `iqbaldf` left. |
| Hero | `components/Hero.jsx`, `SplineStage.jsx` | `lg:grid-cols-12` → 7 / 5. Lazy Spline in a locked `4:3 → 1:1` box. |
| Focus Bento | `components/FocusBento.jsx` | ARIA tabs (arrow keys), context-aware terminal. |
| Project Ledger | `components/ProjectLedger.jsx` | Editorial rows; click opens the PAR drawer. |
| Project Drawer | `components/ProjectDrawer.jsx` | Problem · Action · Result, spring slide, focus-trapped. |
| Credentials | `components/Credentials.jsx` | Two hairline rows → certificate lightbox. |
| Footer | `components/Footer.jsx` | Large statement + underline-fill contact links. |

## 6. Content
All copy (ID/EN) lives in `src/content.js`; components are presentation only.
