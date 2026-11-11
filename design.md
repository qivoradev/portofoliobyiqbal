# Design System — iqbaldf Portfolio (Folioblox Architecture)

## 1. Core Vibe & Direction
- **100% Folioblox layout, typography, and color composition**: High-impact sunset flame gradient juxtaposed against matte obsidian black.
- **Centerpiece Editorial Portrait**: Cutout portrait of Iqbal Dwi Fathonah (`/fotoiqbalnew.png`) in suit and tie with glasses, integrated directly with the sunset gradient background and layered seamlessly with asymmetric typography.
- **100% Real User Data & Zero 3D**: No Spline, zero heavy 3D canvases, instant load time, perfectly responsive across mobile and desktop.
- **Strict Project Constraint**: Exactly 2 authentic Data Analyst case studies (Pizza Sales Performance Dashboard & NYC Traffic Safety Analysis) + 1 official credential card (BNSP & Certiport AI).

---

## 2. Palette & Tokens
| Token | Value | Role / Context |
|---|---|---|
| Page Background | `#0A0A0B` (Matte Black) | Body background, modal backdrops |
| Secondary Surface | `#141416` (Dark Charcoal) | Competency strip, drawer sheets, modal cards |
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
     * Right: Nav links (Beranda, Tentang, Proyek, Kontak) + Language toggle + White pill button "Hubungi Saya" (contains `#FF511A` circle with white right arrow).
   - **Centerpiece Portrait Photo**:
     * `/fotoiqbalnew.png` positioned bottom-center (`absolute left-1/2 -translate-x-1/2 bottom-0 z-10`).
     * Visual blend: `grayscale contrast-125 mix-blend-luminosity opacity-90 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] drop-shadow-2xl`.
   - **Asymmetric Typography (z-20)**:
     * Left: Eyebrow "Halo, Saya Iqbal Dwi Fathonah" + Giant 2-line title "Data Analyst" (`text-5xl sm:text-7xl lg:text-[84px] leading-[0.95]`).
     * Right: Authoritative statement "Data yang presisi harus terasa jelas." + concise narrative.
   - **Bottom 4 Numbered Pillars**:
     * `#01 Pemodelan SQL`, `#02 Visualisasi BI`, `#03 Analisis Excel`, `#04 Validasi Data` with `#FF511A` accent numbering.

2. **Competency Strip (Secondary Bar Stack)**:
   - Container: `bg-[#141416] rounded-b-[32px] sm:rounded-b-[48px] -mt-6 pt-12 py-8 border-b border-white/5`.
   - Left: Monospace muted label "Kompetensi & Alat Utama".
   - Right: 4 monochrome tools (`PostgreSQL & SQL`, `Looker Studio`, `Microsoft Excel`, `Certiport AI`).

3. **Profil & Pendekatan (3 High-Contrast Cards)**:
   - Header 2-column:
     * Left: Eyebrow `[ PROFIL & PENDEKATAN ]` (`#FF511A`) + Headline "Mengubah Data Mentah Menjadi Keputusan Terukur".
     * Right: Analytical overview + Orange pill button "Lihat Resume / CV" (triggers PDF modal).
   - 3 Light Cards (`bg-[#EAEAEA] text-[#111215] rounded-[24px]`):
     * **Card 1**: Pizza Sales Performance Dashboard ($817.8K Sales, 49.574 Sold, Looker Studio) -> triggers PAR modal.
     * **Card 2**: NYC Traffic Safety Analysis (238,421 Cases, 116,227 Injuries, Excel Analytics) -> triggers PAR modal.
     * **Card 3**: Sertifikasi BNSP & Certiport AI (Official verified credentials) -> triggers Certificate Lightbox.

4. **Interactive Modals & Drawers**:
   - **Project Drawer (PAR)**: Deep charcoal sheet (`#141416`) detailing Problem, Action, and Results with metrics, findings, and recommendations.
   - **Certificate Lightbox**: Minimalist dark modal with switcher between BNSP Web Development and Certiport AI credentials.
   - **Resume Modal**: Accessible dialog displaying the verified PDF CV (`Resume_Iqbal_Dwi_Fathonah.pdf`) with direct download and external tab buttons.

5. **Minimalist Footer**:
   - Matte black `#0A0A0B` with large editorial headline, contact links (Email, WhatsApp, LinkedIn, GitHub), and copyright "© 2026 Iqbal Dwi Fathonah".
