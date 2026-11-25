# Design System: Spykey Vault (Dark Cinematic)

> **Source of truth** for the unified `spykey-agent` repository combining the **Vault Media Archive** (`/dashboard`, `/directory`, `/uploader`, `/detail`) and the secondary **Maison Acquisition Checkout** surface (`/checkout`).

## 1. Visual Theme & Atmosphere

**Spykey Vault** is built around a **Dark Cinematic** gallery aesthetic designed to recede behind photography, film frames, and archival media. True void-black canvases (`#050505`) and stepped obsidian surfaces (`#0D0D0D`, `#131313`) eliminate UI glare so visual assets command full attention, evoking a private screening room or digital archival vault.

- **Primary Surface Polarity:** Deep dark mode (`#050505` void canvas, `#131313` obsidian ground, `#0D0D0D` elevated card surfaces).
- **Layout Density & Tone:** Spacious gallery density with `32px` grid gutters, `48px` page margins on desktop, and strict `1px` structural hairlines (`#1A1A1A`) instead of drop shadows.
- **Secondary Acquisition Surface (`/checkout`):** The legacy `Warm Paper Editorial` checkout flow uses `#FFF8F4` / `#FAF8F5` warm parchment, `#FFFFFF` cards, and `Newsreader` + `Geist` typography; future unification should either migrate `/checkout` to Dark Cinematic tokens or keep it explicitly scoped as an editorial receipt modal.

## 2. Color Palette & Roles

### Primary Foundation
- **Void Black (`#050505`)**: Primary viewport background, fixed top navigation bar, and left library sidebar (`--color-void-black`).
- **Obsidian Ground (`#131313`)**: Base surface token (`surface`, `background`, `surface-dim`) used for full-bleed theatrical backdrop transitions (`--color-obsidian-ground`).
- **Vault Card Surface (`#0D0D0D`)**: Level-1 cards, search inputs, uploader drop zones, and active sidebar/tab fills (`--color-surface-card`).
- **Elevated Slate Tier (`#1C1B1B` to `#2A2A2A`)**: `surface-container-low` (`#1c1b1b`), `surface-container` (`#201f1f`), and `surface-container-high` (`#2a2a2a`) for nested drawers, popovers, and hover states.

### Accent & Interactive
- **Pure Focus White (`#FFFFFF`)**: Primary CTAs, active navigation indicators (`2px` bottom/left borders), active filter pills, and focus borders (`--color-primary-white`).
- **Ghost Border Charcoal (`#333333`)**: Secondary ghost button outlines and hover boundary emphasis (`--color-border-ghost`).
- **Structural Hairline (`#1A1A1A`)**: Default `1px` borders separating topbar, sidebar, cards, inputs, and footer dividers (`--color-border-hairline`).

### Typography & Text Hierarchy
- **Alabaster Ink (`#E5E2E1`)**: Primary body copy and high-legibility headings on dark surfaces (`--color-on-surface`).
- **Cool Silver (`#C4C7C8` / `#C8C6C5`)**: Secondary descriptions, subheadings, and cast/role subtitles (`--color-on-surface-variant`, `--color-secondary-silver`).
- **Muted Zinc (`#71717A`)**: Inactive nav links, search placeholders, uppercase section labels, and counts (`--color-text-muted`).
- **On-Primary Charcoal (`#2F3131` / `#050505`)**: Dark ink placed inside solid white primary buttons and active pills.

### Functional States
- **Rating Gold (`#EAB308`)**: Star rating icon highlight on detail views (`--color-rating-gold`).
- **Alert Rose (`#FFB4AB`) on Deep Crimson (`#93000A`)**: Error states and destructive warnings (`error` / `error-container`).
- **Active Selection**: `1px` `#FFFFFF` border or solid `#FFFFFF` fill with `#050505` text; hover cards scale media `1.05x` beneath a `linear-gradient(0deg, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0) 60%)` scrim.

## 3. Typography Rules

All core Vault routes use **Inter** (`--font-sans`) with tight display tracking, tabular readability, and uppercase micro-labels for technical metadata.

| Role | Family | Size / Line Height | Weight | Letter Spacing |
| --- | --- | --- | --- | --- |
| **Display (`display`)** | `Inter` | `48px` / `1.1` | `700` | `-0.02em` |
| **Headline LG (`headline-lg`)** | `Inter` | `32px` / `1.2` | `600` | `-0.01em` |
| **Headline MD (`headline-md`)** | `Inter` | `24px` / `1.3` | `600` | `0em` |
| **Body LG (`body-lg`)** | `Inter` | `18px` / `1.6` | `400` | `0em` |
| **Body MD (`body-md`)** | `Inter` | `16px` / `1.6` | `400` | `0em` |
| **Metadata (`metadata`)** | `Inter` | `14px` / `1.4` | `500` | `0em` |
| **Label Caps (`label-caps`)** | `Inter` | `12px` / `1.0` | `700` | `0.10em` (uppercase) |

## 4. Component Stylings

- **Navigation Shell (`TopNavBar` & `SideNavBar`)**: Fixed `64px` (`h-16`) `#050505` header with `1px` `#1A1A1A` bottom border and a `256px` (`w-64`) `#050505` left sidebar (`hidden lg:flex`) featuring `2px` white left-border active state (`bg-[#0D0D0D]`) and a storage quota meter at the base.
- **Buttons**:
  - *Primary*: Solid `#FFFFFF` fill, `#050505` / `#2F3131` text, `4px` (`0.25rem`) to `8px` (`0.5rem`) radius, bold `14px` or uppercase `label-caps` text.
  - *Secondary / Ghost*: Transparent fill, `1px solid #333333` border, `#FFFFFF` text, shifting to `#FFFFFF` fill or `rgba(255,255,255,0.1)` on hover.
  - *Floating Action Button (FAB)*: `56x56px` circular (`9999px` radius) `#FFFFFF` button with `#000000` `+` icon anchored `32px` from bottom-right on the Dashboard only (suppressed on task-focused Uploader and Directory screens).
- **Media Cards**: `2:3` poster aspect ratio (`aspect-[2/3]`), `#0D0D0D` fill, `1px solid #1A1A1A` border, `8px` (`0.5rem`, `rounded-lg`) corner radius. Metadata (`label-caps` category, `headline-md` title, `metadata` format tag) remains hidden at rest and reveals on hover over a bottom-up dark gradient scrim.
- **Filter Chips**: `9999px` pill radius (`20px` horizontal / `8px` vertical padding), `label-caps` typography. Inactive chips use `#0D0D0D` fill with `1px solid #1A1A1A` border and `#A1A1AA` text; active chips invert to `#FFFFFF` fill, `#FFFFFF` border, and `#000000` text.
- **Inputs & Search Fields**: `#0D0D0D` fill, `1px solid #1A1A1A` border, `4px` (`0.25rem`) radius, `#FFFFFF` text, transitioning border to `#FFFFFF` on focus. Metadata edit fields may use bottom-border-only (`border-b border-[#1A1A1A]`) styling.

## 5. Layout Principles

- **Base Grid & Spacing**: `8px` baseline unit (`--space-unit: 8px`), `24px` container padding (`gutter`), `32px` card grid gap (`grid-gap`), and `48px` section margins (`margin`) inside a `1600px` max-width container.
- **Dashboard & Gallery Grid**: Responsive CSS Grid scaling across breakpoints: `1` column (mobile `<768px`), `2` columns (`md: 768px`), `3` columns (`xl: 1280px`), `4` columns (`2xl: 1536px`).
- **Detail & Directory Split**: `12`-column asymmetric layout (`8/4` split on Directory; fluid hero canvas + `384px` right metadata rail on Item Detail).
- **Viewport & Shell Offsets**: Desktop content offsets `pt-24` (`96px`) below the `64px` fixed header and `lg:ml-64` (`256px`) beside the fixed sidebar; tablet/mobile collapse the sidebar to a compact rail or bottom navigation bar.

## 6. Design System Notes for Stitch Generation

- **Atmosphere keywords**: Dark Cinematic, Void Black `#050505`, Obsidian `#131313`, monochromatic gallery UI, `1px` `#1A1A1A` hairlines, zero drop shadows, crisp `Inter` typography.
- **Canonical colors**: Void Black `#050505`, Obsidian Ground `#131313`, Vault Card `#0D0D0D`, Hairline `#1A1A1A`, Ghost Border `#333333`, Pure Focus White `#FFFFFF`, Alabaster Ink `#E5E2E1`, Muted Zinc `#71717A`.
- **Component prompts**:
  - *Vault Media Grid*: `4`-column `2:3` poster card grid on `#050505` canvas with `#0D0D0D` cards, `1px` `#1A1A1A` borders, `8px` corners, and hover-only bottom gradient metadata overlays.
  - *Editorial Filter Bar*: Horizontally scrollable row of `9999px` pill chips in uppercase `12px` `Inter` (`0.1em` tracking), solid `#FFFFFF` active pill with `#000000` text and `#0D0D0D` inactive pills.
  - *Vault Shell*: Fixed `64px` `#050505` top bar with centered search input (`#0D0D0D`) paired with a `256px` left library sidebar with `2px` white left-border active state and bottom storage progress bar.
