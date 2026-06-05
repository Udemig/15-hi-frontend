/**
 * Inline SVG weather icons — no external assets or libraries.
 * @type {Record<string, string>}
 */
export const weatherIcons = {
  sunny: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="32" r="14" fill="currentColor" opacity="0.95"/>
    <g stroke="currentColor" stroke-width="3" stroke-linecap="round">
      <line x1="32" y1="4" x2="32" y2="12"/>
      <line x1="32" y1="52" x2="32" y2="60"/>
      <line x1="4" y1="32" x2="12" y2="32"/>
      <line x1="52" y1="32" x2="60" y2="32"/>
      <line x1="12.2" y1="12.2" x2="17.9" y2="17.9"/>
      <line x1="46.1" y1="46.1" x2="51.8" y2="51.8"/>
      <line x1="12.2" y1="51.8" x2="17.9" y2="46.1"/>
      <line x1="46.1" y1="17.9" x2="51.8" y2="12.2"/>
    </g>
  </svg>`,

  cloudy: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M48 44H18a12 12 0 1 1 4.2-23.2A16 16 0 0 1 52 28a10 10 0 0 1-4 16z" fill="currentColor" opacity="0.9"/>
    <path d="M44 20a12 12 0 0 0-22.4 4.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
  </svg>`,

  "partly-cloudy": `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="22" cy="22" r="10" fill="currentColor"/>
    <g stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.7">
      <line x1="22" y1="6" x2="22" y2="10"/>
      <line x1="6" y1="22" x2="10" y2="22"/>
      <line x1="10" y1="10" x2="13" y2="13"/>
    </g>
    <path d="M50 46H22a11 11 0 1 1 3.8-21.3A14 14 0 0 1 54 30a9 9 0 0 1-4 16z" fill="currentColor" opacity="0.85"/>
  </svg>`,

  rainy: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M48 36H20a11 11 0 1 1 3.9-21.2A15 15 0 0 1 52 22a9 9 0 0 1-4 14z" fill="currentColor" opacity="0.9"/>
    <g stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
      <line x1="24" y1="42" x2="20" y2="52"/>
      <line x1="34" y1="42" x2="30" y2="52"/>
      <line x1="44" y1="42" x2="40" y2="52"/>
    </g>
  </svg>`,

  snowy: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M48 34H20a11 11 0 1 1 3.9-21.2A15 15 0 0 1 52 20a9 9 0 0 1-4 14z" fill="currentColor" opacity="0.9"/>
    <g fill="currentColor">
      <circle cx="24" cy="46" r="2.5"/>
      <circle cx="34" cy="50" r="2.5"/>
      <circle cx="44" cy="46" r="2.5"/>
      <circle cx="29" cy="54" r="2"/>
      <circle cx="39" cy="54" r="2"/>
    </g>
  </svg>`,

  stormy: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M48 36H20a11 11 0 1 1 3.9-21.2A15 15 0 0 1 52 22a9 9 0 0 1-4 14z" fill="currentColor" opacity="0.85"/>
    <path d="M30 38 L26 48 L32 48 L28 58 L40 44 L34 44 L38 38 Z" fill="currentColor"/>
  </svg>`,
};
