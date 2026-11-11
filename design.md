# Design System — iqbaldf Portfolio (Folioblox Architecture)

## 1. Core Vibe & Direction
- **100% Folioblox layout, typography, and color composition**: High-impact sunset flame gradient juxtaposed against matte obsidian black (`#0A0A0B`).
- **Centerpiece Editorial Portrait**: Cutout portrait of Iqbal Dwi Fathonah (`/fotoiqbalnew.png`) in suit and tie with glasses, integrated directly with the sunset gradient background and softened with radial masks.
- **100% Collision-Free Mobile Experience**: Natural vertical `flex-col` flow on screens `< 1024px` where Navbar, Text, Photo, and 4 Pillars are stacked sequentially with dark gradient backings, ensuring 100% text contrast.
- **Strict Project Constraint**: Exactly 2 authentic Data Analyst case studies (Pizza Sales Performance Dashboard & NYC Traffic Safety Analysis) in a 2-column grid + a separate 2-column Official Credentials section (BNSP & Certiport AI).
- **Centered Project Modal**: Centered dialog with backdrop blur (`bg-black/80 backdrop-blur-md`) replacing the slide drawer for immediate focus and mobile ergonomics.

---

## 2. Palette & Tokens
| Token | Value | Role / Context |
|---|---|---|
| Page Background | `#0A0A0B` (Matte Black) | Body background, modal backdrops |
| Secondary Surface | `#141416` (Dark Charcoal) | Competency strip, credential cards, modal bodies |
| Primary Accent | `#FF511A` (Flame Orange) | Eyebrow badges, index numbers (#01–#04), CTA pills |
| Hero Gradient | `linear-gradient(125deg, #FF551A 0%, #DF360D 42%, #481108 78%, #140806 100%)` | Hero container background |
| Typography Base | `#FFFFFF` (Pure White) | Headings, primary text |
| Muted Text | `#8E8D88` / `text-stone-400` | Subtext, labels, secondary metadata |
| Border Line | `rgba(255, 255, 255, 0.1)` | Subtle structural separators |

---

## 3. Structural Hierarchy
1. **Hero Section (Folioblox Sunset Stage)**:
   - Container: `rounded-b-[32px] sm:rounded-b-[48px] bg-hero-gradient shadow-2xl relative overflow-hidden`.
   - **Integrated Transparent Navbar**:
     * Left: Brand `iqbaldf` (`font-bold text-white text-base tracking-tight`).
     * Right: Nav links (Beranda, Tentang, Proyek, Sertifikasi, Kontak) + Language toggle (ID/EN) + White pill button "Hubungi Saya" (contains `#FF511A` circle with white right arrow).
   - **Mobile Layout (< 1024px)**:
     * Vertical sequence: Navbar → Text Block (`text-5xl font-bold`) → Portrait container (`w-[260px] sm:w-[320px] mx-auto mt-6`) → 4 Pillars over dark gradient (`bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/95 to-transparent pt-6 pb-8 px-5`) in `grid-cols-2 gap-4`.
     * Zero collision between portrait and white text.
   - **Desktop Layout (>= 1024px)**:
     * Scaled-up center bottom portrait (`lg:h-[480px] xl:h-[540px]`) with radial mask (`radial-gradient(ellipse 62% 72% at 50% 45%, black 52%, transparent 100%)`).
     * Asymmetric typography: Giant 2-line title `Data\nAnalyst` (`text-7xl xl:text-[84px] leading-[0.95]`) on left, authoritative statement on right.
     * 4 Pillars (#01–#04) backed by dark gradient overlay (`bg-gradient-to-t from-[#0A0A0B]/90 via-[#0A0A0B]/60 to-transparent`).

2. **Competency Strip (Secondary Bar Stack)**:
   - Container: `bg-[#141416] rounded-b-[32px] sm:rounded-b-[48px] -mt-6 pt-12 py-8 border-b border-white/5 overflow-x-hidden`.
   - Left: Monospace muted label `KOMPETENSI & ALAT UTAMA`.
   - Right: 4 monochrome tools (`PostgreSQL & SQL`, `Looker Studio`, `Microsoft Excel`, `Certiport AI`) organized in `grid-cols-2 sm:flex sm:flex-wrap gap-3`.

3. **Profil & Pendekatan + Proyek Analisis Unggulan (2 Kolom Sejajar)**:
   - Header 2-column: Eyebrow `[ PROFIL & PENDEKATAN ]` + Headline "Mengubah Data Mentah Menjadi Keputusan Terukur" + Orange pill button "Lihat Resume / CV".
   - 2 Project Cards (`bg-[#EAEAEA] text-[#111215] rounded-[28px]` in `grid-cols-1 md:grid-cols-2 gap-8`):
     * **Card 1**: Pizza Sales Performance Dashboard ($817.8K Sales, 49.574 Sold, Looker Studio) with enlarged preview image (`h-56 sm:h-64 lg:h-72`).
     * **Card 2**: NYC Traffic Safety Analysis (238,421 Cases, 116,227 Injuries, Excel Analytics) with enlarged preview image (`h-56 sm:h-64 lg:h-72`).

4. **Kredensial & Sertifikasi (Section Terpisah)**:
   - Header: Eyebrow `[ KREDENSIAL RESMI ]` + Title "Sertifikasi & Kompetensi".
   - 2 Dark Charcoal Cards (`bg-[#141416] border border-white/10 rounded-[28px]` in `grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8`):
     * **Card 1**: BNSP Web Development (Badan Nasional Sertifikasi Profesi) -> triggers Certificate Lightbox.
     * **Card 2**: Certiport Artificial Intelligence (Certiport · Pearson VUE) -> triggers Certificate Lightbox.

5. **Centered Project Modal (P / A / R)**:
   - `fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md`.
   - Box: `w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl bg-[#141416] border border-white/15 p-5 sm:p-10 shadow-2xl`.
   - Accessible Escape key, outside click close, body scroll lock, sticky accessible close button.

6. **Minimalist Footer**:
   - Matte black `#0A0A0B` with large editorial headline, contact links (Email, WhatsApp, LinkedIn, GitHub), and copyright "© 2026 Iqbal Dwi Fathonah".
