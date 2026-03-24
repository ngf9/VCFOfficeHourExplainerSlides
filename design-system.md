# AI Study Camp Design System


A comprehensive reference for every visual decision in the AI Study Camp website. This document covers colors, typography, spacing, components, animations, and conventions — everything a new contributor needs to build pages that feel native to the site.


**Tech stack:** Next.js 15 (App Router), React 19, Tailwind CSS 4, TypeScript, InstantDB (real-time CMS)


**Design philosophy:** Editorial / magazine aesthetic inspired by [ycombinator.com](https://ycombinator.com). Warm, approachable, text-forward. Serif headlines give editorial weight; clean sans-serif UI keeps things functional. Glassmorphism and subtle hover animations add polish without distraction.


---


## Table of Contents


1. [Color Palette](#1-color-palette)
2. [Typography](#2-typography)
3. [Spacing & Layout](#3-spacing--layout)
4. [Buttons](#4-buttons)
5. [Cards](#5-cards)
6. [Badges & Pills](#6-badges--pills)
7. [Links](#7-links)
8. [Dividers](#8-dividers)
9. [Blockquotes](#9-blockquotes)
10. [Animations & Transitions](#10-animations--transitions)
11. [Custom CSS Classes Reference](#11-custom-css-classes-reference)
12. [Iconography & Assets](#12-iconography--assets)
13. [Accessibility](#13-accessibility)
14. [Quick Reference](#14-quick-reference)


---


## 1. Color Palette


All colors are defined as CSS custom properties in `src/app/globals.css` and mapped to Tailwind via the `@theme inline {}` block. Use the Tailwind class names (e.g. `bg-background`, `text-accent`) — never hardcode hex values.


### Core Colors


| Token | Hex | Tailwind Class | Usage |
|-------|-----|---------------|-------|
| `--background` | `#F5F0EB` | `bg-background` | Page background — warm cream editorial feel |
| `--foreground` | `#1C1917` | `text-foreground` | Primary text color (stone-900) |
| `--accent` | `#0D9488` | `text-accent`, `bg-accent` | Teal-600 — links, highlights, bullet markers, CTA backgrounds |
| `--accent-light` | `#14B8A6` | `text-accent-light` | Teal-500 — hover state for accent elements |
| `--accent-rgb` | `13, 148, 136` | *(CSS only)* | RGB version for `rgba()` calculations (shadows, glows) |
| `--surface` | `#FFFFFF` | `bg-surface` | Card backgrounds, input fields, surfaces |
| `--text-secondary` | `#78716C` | `text-text-secondary` | Stone-500 — captions, metadata, secondary labels |
| `--dark` | `#1C1917` | `bg-dark`, `text-dark` | Dark backgrounds (CTA section, primary buttons) |


### Tailwind Theme Mapping


```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);
  --color-accent-light: var(--accent-light);
  --color-surface: var(--surface);
  --color-text-secondary: var(--text-secondary);
  --color-dark: var(--dark);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --font-serif: 'Playfair Display', Georgia, serif;
}
```


### Usage Guidelines


- **Background vs Surface:** `background` is the page itself (cream); `surface` is for elevated elements like cards (white)
- **Accent vs Accent-light:** Use `accent` as the default. `accent-light` is only for hover states
- **Dark:** Reserved for the CTA section background and primary button fills — don't use it as a general dark color
- **Opacity variants:** Use Tailwind opacity syntax (e.g. `text-white/80`, `bg-accent/10`, `border-accent/30`)


---


## 2. Typography


The site uses a deliberate serif/sans split: **Playfair Display** for editorial content (headings, blockquotes, drop caps) and **Geist Sans** for UI elements (navigation, buttons, captions, body text).


### Font Families


| Font | Variable / Class | Import Method | Usage |
|------|-----------------|---------------|-------|
| Playfair Display | `font-serif` | Google Fonts CDN (`@import` in globals.css) | Headings, editorial text, quotes, drop caps |
| Geist Sans | `font-sans` | `next/font/google` in layout.tsx | Navigation, buttons, body copy, captions, UI |
| Geist Mono | `font-mono` | `next/font/google` in layout.tsx | Code snippets, technical content |


**Playfair Display** is loaded with weights 400, 500, 600, 700 in both regular and italic styles.


### Typography Scale


| Element | Tailwind Classes | Font |
|---------|-----------------|------|
| Hero heading (H1) | `font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight` | Playfair |
| Section heading (H2) | `font-serif text-3xl sm:text-4xl md:text-5xl` | Playfair |
| Card title (H3) | `font-serif text-2xl font-semibold` | Playfair |
| Subsection (H3) | `font-serif text-xl md:text-2xl` | Playfair |
| Body / paragraph | `font-sans text-base md:text-lg` or `text-lg md:text-xl` | Geist Sans |
| Caption / metadata | `font-sans text-sm text-text-secondary` | Geist Sans |
| Small / fine print | `font-sans text-xs text-text-secondary` | Geist Sans |
| Testimonial quote | `font-serif text-base` or `text-lg leading-relaxed` | Playfair |
| Italic emphasis | `font-serif italic` or `<em>` | Playfair Italic |


### Editorial Conventions


**Drop cap** — Used for editorial opening paragraphs (e.g. "How We Teach" section). Apply the `.drop-cap` class to the paragraph element:


```html
<p class="drop-cap font-serif text-lg leading-relaxed">
  Our approach to teaching AI is rooted in small-group learning...
</p>
```


The first letter will float left at 3rem (4.5rem on sm+) in bold Playfair Display.


**Italic emphasis** — Key phrases and course titles use `<em>` or `italic` for a classic editorial feel. The hero section splits its headline with `<em className="italic">`.


**Line heights** — Use `leading-relaxed` for body text and `leading-tight` for large headings. Testimonial quotes use `leading-relaxed` for readability.


---


## 3. Spacing & Layout


### Container Patterns


Sections use centered, max-width containers with horizontal padding:


| Pattern | Usage |
|---------|-------|
| `max-w-7xl mx-auto px-6` | Navigation (widest) |
| `max-w-6xl mx-auto px-6` | Standard sections (Courses, Footer, People) |
| `max-w-5xl mx-auto` | Narrower content (CTA section) |
| `max-w-4xl mx-auto` | Card grids (Courses grid) |
| `max-w-2xl mx-auto` | Centered text blocks (subtitles, descriptions) |


### Section Rhythm


Every major section uses consistent vertical padding:


```
py-24 px-6
```


The hero section uses `min-h-[70vh]` with flexbox centering instead of fixed padding.


### Grid Patterns


Grids use Tailwind's responsive column classes:


| Pattern | Usage |
|---------|-------|
| `grid grid-cols-1 sm:grid-cols-2 gap-6` | Course cards, achievement cards |
| `grid grid-cols-1 md:grid-cols-2 gap-6` | Student stories, testimonials |
| `grid grid-cols-1 md:grid-cols-3 gap-8` | Footer columns |
| `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5` | Method icon cards |
| `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6` | Instructor grid |


Gap standard: `gap-6` is the baseline. Wider gaps (`gap-8`, `gap-12 md:gap-24`) are used for looser section-level spacing.


### Responsive Breakpoints


The site uses Tailwind 4's default breakpoints:


| Breakpoint | Width | Common Uses |
|------------|-------|-------------|
| `sm` | 640px | 2-column grids, side-by-side buttons, font size bumps |
| `md` | 768px | Desktop nav visibility, 2-3 column grids |
| `lg` | 1024px | 3-4 column grids, larger mosaic size |
| `xl` | 1280px | Maximum mosaic size (88px) |


### Mosaic Sizing System


The photo mosaic grid uses CSS custom properties that scale with viewport:


| Breakpoint | `--mosaic-size` | `--mosaic-gap` |
|------------|----------------|----------------|
| Base (mobile) | 56px | 2px |
| `sm` (640px) | 72px | 3px |
| `lg` (1024px) | 80px | 3px |
| `xl` (1280px) | 88px | 3px |


---


## 4. Buttons


### Primary Button (Dark Pill)


The main CTA style — dark background, white text, fully rounded:


```html
<a class="bg-dark text-white font-sans px-8 py-3 rounded-full text-base hover:bg-stone-800 transition-colors">
  Explore our courses &rarr;
</a>
```


### Secondary Button (Accent Text)


Text-only link with accent color, used alongside primary buttons:


```html
<a class="text-accent hover:text-accent-light font-sans text-base transition-colors">
  See how we teach &rarr;
</a>
```


### Tertiary Button (White on Dark)


Used in the dark CTA section — inverted colors:


```html
<a class="bg-white text-dark font-sans px-8 py-3 rounded-full text-base hover:bg-stone-200 transition-colors">
  Explore our courses &rarr;
</a>
```


### Ghost Button on Dark


Text-only on dark backgrounds:


```html
<a class="text-white/80 hover:text-white font-sans text-base transition-colors">
  Apply now &rarr;
</a>
```


### Outline Button (Accent Border)


Used for expand/collapse actions:


```html
<button class="border border-accent rounded-full px-4 py-1.5 text-accent hover:text-accent-light transition-colors font-sans text-sm">
  Show more
</button>
```


### Accent CTA (Teal Fill)


Used on course cards as a full-width action:


```html
<a class="bg-accent text-white rounded-full py-3 hover:bg-accent-light transition-colors block text-center font-sans">
  Learn more
</a>
```


### Navigation "Apply" Button


Compact variant for the nav bar:


```html
<a class="bg-dark text-white px-5 py-2 rounded-full hover:bg-stone-800 transition-colors font-sans text-sm">
  Apply
</a>
```


### Common Button Rules


- Always `rounded-full` (pill shape)
- Always `transition-colors` for smooth hover
- Always `font-sans` — buttons never use serif
- Arrow suffix `&rarr;` on CTAs that navigate to another page/section


---


## 5. Cards


### Standard Card


Used for testimonials, student stories, achievements — white surface with subtle border:


```html
<div class="bg-surface rounded-lg shadow-sm p-6">
  <!-- content -->
</div>
```


With hover (student cards):
```html
<div class="bg-surface rounded-xl shadow-sm border border-stone-200 p-5
            hover:shadow-[0_4px_20px_rgba(var(--accent-rgb),0.3)]
            hover:-translate-y-0.5 transition-all duration-200">
  <!-- content -->
</div>
```


### Glass Card (Glassmorphism)


Used for course cards — semi-transparent with backdrop blur. Defined as a custom class in globals.css:


```css
.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
}
.glass-card:hover {
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08),
              0 0 20px rgba(var(--accent-rgb), 0.12);
  transform: translateY(-4px);
}
```


Usage:
```html
<div class="glass-card rounded-2xl p-8 flex flex-col">
  <!-- content -->
</div>
```


### Testimonial Card


Structured card with quote mark, divider, and avatar:


```
[quote mark] — font-serif text-5xl text-accent
[blockquote] — font-serif text-lg leading-relaxed
[accent divider] — w-10 h-px bg-accent
[avatar + name + title] — flex items-center gap-3
[course badge] — optional accent pill
```


### Method Icon Card


Small card for the "How We Teach" grid:


```html
<div class="bg-surface rounded-lg shadow-sm px-6 py-8 text-center
            hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
  <!-- SVG icon + title -->
</div>
```


### Person Card (Image Overlay)


Used for founders, instructors, speakers — image fills the card with gradient text overlay:


```html
<div class="group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-200">
  <img class="absolute inset-0 w-full h-full object-cover" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
  <!-- Name label at bottom-left, LinkedIn icon top-right -->
  <!-- Hover: bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -->
</div>
```


---


## 6. Badges & Pills


### Audience Pill


Soft teal background for tagging course audience:


```html
<span class="bg-accent/10 text-accent rounded-full px-3 py-1 text-xs font-sans">
  For startup founders
</span>
```


### Course Badge


Tiny bordered pill for labeling which course a testimonial belongs to:


```html
<span class="text-[11px] text-accent border border-accent/30 rounded-full px-2 py-px">
  LLM Fundamentals
</span>
```


### "New" Badge (with Glow)


Absolute-positioned badge on course cards with accent glow:


```html
<span class="absolute top-4 right-4 bg-black text-white text-[10px] font-sans font-bold uppercase tracking-wide rounded-full px-2.5 py-0.5 shadow-[0_0_8px_rgba(13,148,136,0.5)]">
  New
</span>
```


### Stat Value


Large serif numbers used in the social proof section:


```html
<div class="font-serif text-4xl md:text-5xl font-semibold text-accent">150+</div>
<div class="font-sans text-sm text-text-secondary uppercase tracking-wide mt-1">Alumni</div>
```


---


## 7. Links


### Navigation Link


```html
<a class="text-sm font-sans text-foreground hover:text-accent transition-colors">
  Courses
</a>
```


### Footer Link


```html
<a class="text-text-secondary hover:text-foreground transition-colors font-sans text-sm">
  Outcomes
</a>
```


### Inline Accent Link


For in-content links:


```html
<a class="text-accent hover:text-accent-light transition-colors underline underline-offset-2">
  Learn more
</a>
```


### Social Links (External)


Always include `target="_blank" rel="noopener noreferrer"`:


```html
<a href="..." target="_blank" rel="noopener noreferrer"
   class="text-text-secondary hover:text-foreground transition-colors">
  LinkedIn
</a>
```


---


## 8. Dividers


### Section Divider (Accent Line)


Short teal line used between content blocks in the social proof section:


```html
<div class="w-16 h-px bg-accent mx-auto my-16" />
```


### Testimonial Divider


Inside testimonial cards, separating quote from attribution:


```html
<div class="w-10 h-px bg-accent mt-4 mb-4" />
```


### Course Divider (Gradient HR)


Full-width gradient fade used on course detail pages:


```css
.course-divider {
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, #d6d3d1, transparent);
  margin: 3rem 0;
}
```


### Border Divider


Standard Tailwind border for section separators (footer, nav):


```html
<div class="border-t border-stone-200" />
<!-- or with reduced opacity: -->
<nav class="border-b border-stone-200/50">
```


---


## 9. Blockquotes


### Course Blockquote


Decorative blockquote with large serif opening quote mark. Defined in globals.css:


```css
.course-blockquote {
  position: relative;
  background: var(--surface);
  border: none;
  border-radius: 0.75rem;
  padding: 1.5rem 1.5rem 1.5rem 2.5rem;
  margin: 2rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  font-style: italic;
}


.course-blockquote::before {
  content: "\201C";  /* Left double quotation mark */
  position: absolute;
  top: 0.5rem;
  left: 0.75rem;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 3rem;
  line-height: 1;
  color: var(--accent);
  opacity: 0.3;
}
```


### Testimonial Quote


Inline quote mark rendered as a text element (not CSS pseudo-element):


```html
<span class="font-serif text-5xl leading-none text-accent select-none">&ldquo;</span>
<blockquote class="font-serif text-lg leading-relaxed mt-1">
  Quote text here...
</blockquote>
```


---


## 10. Animations & Transitions


### Keyframe Animations


Defined in globals.css:


```css
/* Staggered fade-in for mosaic grid squares */
@keyframes mosaicFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}


/* General fade-in with upward slide */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
```


### Tailwind Utility


```css
@utility animate-fade-in {
  animation: fadeIn 0.2s ease-out;
}
```


Use as `class="animate-fade-in"` for dropdown menus or elements that appear dynamically.


### Hover Patterns


| Pattern | Classes | Usage |
|---------|---------|-------|
| Color transition | `transition-colors` | All buttons, links, nav items |
| Subtle lift | `hover:-translate-y-0.5 transition-all duration-200` | Standard cards, method icons |
| Glass card lift | `transform: translateY(-4px)` (via CSS) | Course cards (glass-card class) |
| Shadow enhancement | `hover:shadow-md` or `hover:shadow-[0_4px_20px_rgba(var(--accent-rgb),0.3)]` | Cards on hover |
| Scale up | `group-hover:scale-110 transition-transform` | Play buttons |
| Overlay reveal | `opacity-0 group-hover:opacity-100 transition-opacity duration-300` | Person card hover overlay |


### Framer Motion


The project includes `framer-motion` (v12.34.1) for more complex animations. Use it for:
- Scroll-triggered section reveals
- Modal enter/exit transitions
- Interactive state animations


### Reduced Motion


The site respects `prefers-reduced-motion`:


```css
@media (prefers-reduced-motion: reduce) {
  .mosaic-square {
    animation: none !important;
    opacity: 1 !important;
  }
}
```


When adding new animations, always include a reduced-motion fallback.


---


## 11. Custom CSS Classes Reference


All defined in `src/app/globals.css`:


| Class | Description |
|-------|-------------|
| `.glass-card` | Glassmorphism card — semi-transparent white, 24px backdrop blur, accent glow on hover |
| `.drop-cap` | Editorial first-letter styling — 3rem/4.5rem Playfair Display, floated left, bold |
| `.mosaic-square` | Photo grid square — sized by `--mosaic-size` custom property |
| `.mosaic-container` | Constrains mosaic to 2 rows with overflow hidden |
| `.course-divider` | Gradient horizontal rule — fades from transparent to stone-300 to transparent |
| `.course-blockquote` | Decorative quote box — white surface, rounded, italic, with teal quote mark |
| `.course-logistics-grid` | Responsive 1→2 column grid for course logistics cards |
| `.course-logistics-card` | White card with minimal shadow for logistics items |
| `.scrollbar-hide` | Hides scrollbars (all browsers) — used on horizontal scroll containers |
| `.scrollbar-thin` | 4px thin scrollbar with stone-300 thumb — used on two-column layouts |
| `.pill-scroll-fade` | Gradient mask that fades edges of horizontal scroll containers |
| `.animate-fade-in` | Tailwind utility — `fadeIn 0.2s ease-out` for dropdown menus |


---


## 12. Iconography & Assets


### SVG Icons


Icons are rendered inline as SVG elements within components (not from an icon library). Key icons:


- **LinkedIn** — Reusable component at `src/components/shared/LinkedInIcon.tsx` (default `w-4 h-4`)
- **Play button** — Reusable component at `src/components/shared/PlayButton.tsx` (teal or white variants, sm/md sizes)
- **Method icons** — 7 custom SVGs in `HowWeTeachSection.tsx` (small-groups, live-work, one-on-ones, structured-curriculum, evidence-based, world-class-speakers, experienced-instructors)
- **Hamburger menu** — Inline SVG in `Navigation.tsx`
- **Chevrons** — Inline SVGs for dropdowns and expand/collapse


### Image Conventions


When rendering images:


- **Photos:** `rounded-lg` or `rounded-xl` with `object-cover`
- **Avatars:** `w-12 h-12 rounded-full object-cover` — optionally with `ring-2 ring-accent`
- **Person cards:** `aspect-[4/3]` with gradient overlay
- **Overlapping faces:** Negative margin (`-ml-2`) with `ring-2 ring-white` to create the strip effect
- **Company logos:** `grayscale opacity-60` for muted appearance
- **Fallback avatar:** Stone-200 circle with the person's first initial in serif


### Public Assets Directory


```
public/
  humansofaisc/     — Course photos, group shots (~32 images)
  LLMVibes/         — LLM course images (~9 images)
  VCFVibes/         — VCF course images (~16 images)
  Instructors/      — Instructor headshots (~8 images)
  Experts/          — Expert speaker headshots
  Outcomes/         — Student outcome profile photos (~23 images)
  reviews/          — Review/testimonial photos (~18 images)
  facesVCF/         — VCF cohort face cutouts (for course cards)
  facesLLMs/        — LLM cohort face cutouts (for course cards)
  facesOpenClaw/    — OpenClaw face cutouts
  Logos/            — Company logos (Accenture, Google, Meta, YC, etc.)
  Sprints/          — Sprint course images
  VCFTechStack/     — Tech stack logos (N8n, Vercel)
```


### Image Formats


- **JPEG** — Student/instructor portrait photos
- **PNG** — Course photos, face cutouts, logos
- **WebP** — Optimized showcase images (preferred for large photos)
- **SVG** — Logos and icons only


---


## 13. Accessibility


### Reduced Motion


All mosaic animations are disabled when `prefers-reduced-motion: reduce` is active. New animations should always include this check.


### Color Contrast


- Primary text (`#1C1917`) on background (`#F5F0EB`): passes WCAG AA
- Accent (`#0D9488`) on background (`#F5F0EB`): passes WCAG AA for large text
- White text on dark (`#1C1917`): passes WCAG AAA


### Semantic HTML


- Sections use `<section>` with `id` attributes for anchor linking
- Navigation uses `<nav>` with `aria-label` on toggle buttons
- Images use `alt` attributes
- External links include `rel="noopener noreferrer"`
- The video modal traps focus and responds to Escape key


### Scrollbar Accessibility


Hidden scrollbars (`.scrollbar-hide`) are only used on decorative horizontal scroll areas where the content is also accessible via other means. The `.pill-scroll-fade` mask provides a visual hint that content extends beyond the viewport.


---


## 14. Quick Reference


### Colors


| Use | Class |
|-----|-------|
| Page background | `bg-background` |
| Card/surface | `bg-surface` |
| Primary text | `text-foreground` |
| Secondary text | `text-text-secondary` |
| Accent (links, highlights) | `text-accent` / `bg-accent` |
| Accent hover | `text-accent-light` / `bg-accent-light` |
| Dark section background | `bg-dark` |


### Typography


| Use | Classes |
|-----|---------|
| Hero heading | `font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight` |
| Section heading | `font-serif text-3xl sm:text-4xl md:text-5xl` |
| Card title | `font-serif text-2xl font-semibold` |
| Body text | `font-sans text-base md:text-lg` |
| Caption | `font-sans text-sm text-text-secondary` |
| Fine print | `font-sans text-xs text-text-secondary` |


### Buttons


| Variant | Key Classes |
|---------|-------------|
| Primary | `bg-dark text-white px-8 py-3 rounded-full hover:bg-stone-800 transition-colors` |
| Secondary | `text-accent hover:text-accent-light transition-colors` |
| Tertiary | `bg-white text-dark px-8 py-3 rounded-full hover:bg-stone-200 transition-colors` |
| Accent CTA | `bg-accent text-white rounded-full py-3 hover:bg-accent-light transition-colors` |
| Outline | `border border-accent rounded-full px-4 py-1.5 text-accent` |


### Cards


| Variant | Key Classes |
|---------|-------------|
| Standard | `bg-surface rounded-lg shadow-sm p-6` |
| With hover | `bg-surface rounded-xl shadow-sm border border-stone-200 p-5 hover:shadow-[...] hover:-translate-y-0.5 transition-all duration-200` |
| Glass | `glass-card rounded-2xl p-8` |


### Layout


| Pattern | Classes |
|---------|---------|
| Section container | `max-w-6xl mx-auto px-6` |
| Section padding | `py-24 px-6` |
| 2-column grid | `grid grid-cols-1 sm:grid-cols-2 gap-6` |
| 3-column grid | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6` |
| Centered text | `text-center max-w-2xl mx-auto` |


---


*Source of truth: `src/app/globals.css` (design tokens & custom classes) and `src/app/layout.tsx` (font configuration). Design spec: `docs/plans/2026-02-05-aisc-website-redesign-design.md`.*
