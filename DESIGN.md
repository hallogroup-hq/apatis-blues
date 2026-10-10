# Design System: Apatis Blues Editorial Profile

## 1. Visual Theme & Atmosphere
Dial: ENERGY 2 / RHYTHM 3 / MOTION 2

An architectural, high-fashion editorial digital portfolio for Apatis Blues (Dimas Rezza), menswear fashion creator, stylist, and denim artisan. The atmosphere captures the spirit of high-end independent fashion gazettes: warm stone ecru paper texture, deep velvet burgundy accents, disciplined typography, tactile raw denim references, and purposeful physical motion. No generic AI templates, no neon glows, and zero emoji clutter.

## 2. Color Palette & Roles
- **Primary Accent: Deep Burgundy** (`#4A0E17`) - Signature brand mark, active indicators, high-contrast focal points.
- **Secondary Burgundy: Merlot Rose** (`#871F30`, `#FAF3F4`) - Subtle tags, badge tints, hover states.
- **Canvas Base: Warm Ecru Stone** (`#F9F8F5`) - Editorial paper background, warm and tactile.
- **Card Surface: Warm White & Sand** (`#FFFFFF`, `#F2EFE9`) - Contrast elevation for image cards and modal backdrops.
- **Primary Ink: Off-Noir** (`#141211`) - Headlines, primary text, high-contrast typography (never pure `#000000`).
- **Muted Ink: Tailor Charcoal** (`#57534E`, `#8C867F`) - Captions, metadata, credits.
- **Denim Weft Accent: Indigo Raw** (`#1A232E`) - Subtle reference to 16oz raw selvedge denim culture.
- **Whisper Border** (`rgba(20, 18, 17, 0.08)`) - Structural hairline rules.

## 3. Typographic Architecture
- **Display & Headlines:** Cormorant Garamond (Serif) - Editorial elegance, disciplined letterform, track-tight on large titles.
- **Body & Interface:** Plus Jakarta Sans - Clean legibility, balanced geometry, modern Indonesian contemporary feel.
- **Archive & Metadata:** JetBrains Mono - Archival references, fabric weights (`16 OZ`), timestamps, article catalog numbers.
- **Forbidden:** Inter as default, generic system serifs (Times New Roman), comic or decorative novelty fonts.

## 4. Motion Philosophy
- **Scroll Engine:** Lenis inertial smooth scroll coupled with GSAP ScrollTrigger for buttery luxury feel.
- **Physics Springs:** Emil Kowalski and Apple HIG guidelines (`stiffness: 100, damping: 20`, `:active` scale `0.97`, entrance from scale `0.95` instead of `0`).
- **Ambient Canvas:** Lightweight Three.js interactive canvas in the hero header simulating ambient tactile fabric refractions in burgundy/indigo pigments.
- **Hardware Acceleration:** Animations restricted exclusively to `transform` and `opacity`.

## 5. Anti-Patterns & Prohibitions
- Absolutely no em dashes (`—`) anywhere in copy (Hard Gate R-02).
- Absolutely no emoticons or decorative emoji junk.
- Absolutely no repetitive corner sub-headings ("ABOUT ME", "SERVICES") cluttering cards.
- Absolutely no fake metrics or unverifiable statistics (Hard Gate R-17).
- Absolutely no dead buttons or non-functional interactive elements (Hard Gate R-26, R-35).
