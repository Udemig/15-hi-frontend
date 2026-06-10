---
name: Artisanal Organic Flourish
colors:
  surface: '#fff8f6'
  surface-dim: '#e9d6d2'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ee'
  surface-container: '#feeae6'
  surface-container-high: '#f8e4e0'
  surface-container-highest: '#f2dedb'
  on-surface: '#231917'
  on-surface-variant: '#56423e'
  inverse-surface: '#392e2b'
  inverse-on-surface: '#ffede9'
  outline: '#89726d'
  outline-variant: '#ddc0bb'
  surface-tint: '#a03f2e'
  primary: '#9d3d2c'
  on-primary: '#ffffff'
  primary-container: '#bd5541'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4a5'
  secondary: '#51634e'
  on-secondary: '#ffffff'
  secondary-container: '#d1e6cb'
  on-secondary-container: '#556852'
  tertiary: '#615c4e'
  on-tertiary: '#ffffff'
  tertiary-container: '#7a7465'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad3'
  primary-fixed-dim: '#ffb4a5'
  on-primary-fixed: '#3f0400'
  on-primary-fixed-variant: '#802919'
  secondary-fixed: '#d3e8ce'
  secondary-fixed-dim: '#b8ccb3'
  on-secondary-fixed: '#0f1f0f'
  on-secondary-fixed-variant: '#394b38'
  tertiary-fixed: '#eae2d0'
  tertiary-fixed-dim: '#cec6b5'
  on-tertiary-fixed: '#1f1b10'
  on-tertiary-fixed-variant: '#4b4639'
  background: '#fff8f6'
  on-background: '#231917'
  surface-variant: '#f2dedb'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 42px
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-md:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system is built on the intersection of heritage craftsmanship and modern playfulness. It evokes the tactile sensation of a handmade product—fresh, authentic, and high-quality—while maintaining a cheerful, accessible energy.

The visual direction follows a **Modern Tactile** approach. It avoids clinical perfection in favor of organic shapes, subtle paper-grain textures, and "blob" geometries that feel naturally formed rather than mathematically plotted. The UI should feel like a premium physical menu or a boutique storefront: inviting, sun-drenched, and full of character.

Key Brand Pillars:
- **Warmth:** Every interaction should feel like a friendly greeting.
- **Craft:** High attention to typographic detail and spacing.
- **Vibrancy:** Using color to guide the eye and spark joy without overwhelming the content.

## Colors

The palette is a curated mix of "Earth and Sun." 

- **Primary (Terracotta):** Used for key actions and brand-heavy elements. It provides a grounded, baked-clay warmth.
- **Secondary (Sage):** Used for success states, natural highlights, and secondary backgrounds to evoke freshness.
- **Tertiary (Warm Cream):** The "canvas" color. Use this for main backgrounds instead of pure white to maintain a soft, paper-like feel.
- **Accents:** Pink, Mango, and Sky Blue are used sparingly for "flavor" indicators, decorative blobs, and seasonal tags.

**Usage Note:** Avoid high-contrast black. Use the Neutral Dark (Charcoal) for all text to keep the interface soft and readable.

## Typography

This design system utilizes a high-contrast pairing between a sophisticated serif and a friendly geometric sans-serif.

- **Headlines (EB Garamond):** Set in Semi-Bold or Medium. This font carries the "Artisanal" weight, providing a sense of history and trust. 
- **Body & UI (Plus Jakarta Sans):** Chosen for its open apertures and rounded terminals, making it highly readable and modern.
- **Emphasis:** Use the serif for pull-quotes or large numerical displays to inject personality into data. Labels should use the sans-serif in medium/bold weights for clarity.

## Layout & Spacing

The layout philosophy centers on **generous whitespace** to allow the typography and colors to breathe. 

- **Grid:** A standard 12-column fluid grid for desktop, transitioning to 4 columns for mobile.
- **Rhythm:** Use an 8px base unit. Most vertical spacing should fall into `md` (24px) or `lg` (48px) increments to create a relaxed, editorial flow.
- **Organic Breaks:** Content should not always be perfectly rectangular. Use "blob" masks for imagery and asymmetrical margins to create a handmade, less "templated" feel.

## Elevation & Depth

Avoid traditional, heavy drop shadows. Depth in this design system is achieved through:

1.  **Tonal Layering:** Placing a Cream card on a Sage background, or a Mango button on a Cream card.
2.  **Soft Ambient Occlusion:** When elevation is necessary (e.g., for modals or floating buttons), use extremely soft, tinted shadows (e.g., a 10% opacity Terracotta shadow) rather than neutral gray.
3.  **Physical Stacking:** Elements should feel like paper or physical objects. Use 1px "inner" strokes in a slightly lighter shade than the background to simulate a tactile edge.

## Shapes

The shape language is defined by **Pill-shaped (Level 3)** roundedness. 

- **Buttons:** Always fully rounded (pill) to feel approachable and "scoop-like."
- **Cards:** Use the `rounded-xl` (3rem) setting. This significant curve reinforces the soft, cheerful brand personality.
- **Decorative Blobs:** Incorporate vector "splashes" or hand-drawn organic circles behind product photography to break the grid and add playfulness.

## Components

- **Buttons:** Primary buttons use the Terracotta background with Cream text. Hover states should slightly increase the scale (1.02x) rather than just changing color, emphasizing the "bouncy" nature of the brand.
- **Chips/Tags:** Use the accent colors (Pink, Mango, Blue) with a low-opacity background and high-opacity text. These should always be fully rounded.
- **Cards:** Cards should have a subtle 1px border using a slightly darker version of the background color (e.g., a Sage border on a very light Sage card) to define boundaries without heavy shadows.
- **Inputs:** Input fields are large and pill-shaped with a 2px border in a soft Neutral. On focus, the border should transition to Terracotta.
- **Specialty Component: "The Scoop":** A circular or organic-shaped badge used for pricing or "New" callouts, often featuring rotated text using the label-lg typography.
- **Icons:** Use "hand-drawn" style icons with slightly imperfect lines and rounded caps to match the handmade aesthetic.