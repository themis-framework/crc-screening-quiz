/**
 * Template literal tag to format SVG for data URI usage.
 * Strips whitespace between tags and encodes for URI embedding.
 */
function svg(strings: TemplateStringsArray, ...values: unknown[]): string {
  const raw = strings.reduce(
    (acc, str, i) => acc + str + (values[i] ?? ""),
    "",
  );
  // Remove whitespace between tags, keep content intact
  const minified = raw
    .replace(/>\s+</g, "><") // whitespace between tags
    .replace(/^\s+|\s+$/g, ""); // leading/trailing whitespace
  return `url("data:image/svg+xml,${encodeURIComponent(minified)}")`;
}

// ============================================================================
// Data URI exports for use as CSS background images
// Safari has rendering issues with complex SVG filters in DOM elements, but
// works correctly when the same SVG is used as a background image.
// ============================================================================

/** AlpineImmerse gradient as a data URI for CSS background-image */
export const alpineImmerseBgImage = svg`<svg viewBox="0 0 1199 816" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip)">
    <rect width="1199" height="816" fill="#F9F7F6"/>
    <g filter="url(#filter0)">
      <rect x="-85" y="-277" width="1370" height="1370" fill="#D9D9D9" fill-opacity="0.1"/>
    </g>
    <g filter="url(#filter1)">
      <rect x="-179" y="-146" width="1662" height="1662" rx="500" fill="url(#paint0)"/>
    </g>
    <g filter="url(#filter2)">
      <ellipse cx="1094.28" cy="489.276" rx="147.677" ry="373.147" transform="rotate(-45 1094.28 489.276)" fill="#1A72FF"/>
    </g>
    <g filter="url(#filter3)">
      <ellipse cx="165.278" cy="368.276" rx="147.677" ry="373.147" transform="rotate(-45 165.278 368.276)" fill="#1A72FF"/>
    </g>
  </g>
  <defs>
    <filter id="filter0" x="-85" y="-277" width="1370" height="1370" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feTurbulence type="fractalNoise" baseFrequency="1 1" stitchTiles="stitch" numOctaves="3" result="noise" seed="2872"/>
      <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise"/>
      <feComponentTransfer in="alphaNoise" result="coloredNoise1">
        <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"/>
      </feComponentTransfer>
      <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped"/>
      <feFlood flood-color="#FFFFFF" result="color1Flood"/>
      <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1"/>
      <feMerge result="effect1_noise">
        <feMergeNode in="shape"/>
        <feMergeNode in="color1"/>
      </feMerge>
    </filter>
    <filter id="filter1" x="-246.3" y="-213.3" width="1796.6" height="1796.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="33.65" result="effect1_foregroundBlur"/>
    </filter>
    <filter id="filter2" x="364.436" y="-240.57" width="1459.69" height="1459.69" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="223" result="effect1_foregroundBlur"/>
    </filter>
    <filter id="filter3" x="-564.564" y="-361.57" width="1459.69" height="1459.69" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="223" result="effect1_foregroundBlur"/>
    </filter>
    <linearGradient id="paint0" x1="652" y1="67.6857" x2="652" y2="1596.25" gradientUnits="userSpaceOnUse">
      <stop stop-color="#33BEFF"/>
      <stop offset="0.869506" stop-color="#FFFDFA"/>
      <stop offset="1" stop-color="#F9F7F6"/>
    </linearGradient>
    <clipPath id="clip">
      <rect width="1199" height="816" fill="white"/>
    </clipPath>
  </defs>
</svg>`;

/** LightSky gradient as a data URI for CSS background-image */
export const lightSkyBgImage = svg`<svg viewBox="0 0 1199 816" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip)">
    <mask id="mask" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="1199" height="816">
      <path d="M1187 0H12C5.37258 0 0 5.37258 0 12V804C0 810.627 5.37258 816 12 816H1187C1193.63 816 1199 810.627 1199 804V12C1199 5.37258 1193.63 0 1187 0Z" fill="white"/>
    </mask>
    <g mask="url(#mask)">
      <path d="M1187 0H12C5.37258 0 0 5.37258 0 12V804C0 810.627 5.37258 816 12 816H1187C1193.63 816 1199 810.627 1199 804V12C1199 5.37258 1193.63 0 1187 0Z" fill="#F9F7F6"/>
      <g filter="url(#filter)">
        <path d="M983 -146H321C44.8576 -146 -179 77.8576 -179 354V1016C-179 1292.14 44.8576 1516 321 1516H983C1259.14 1516 1483 1292.14 1483 1016V354C1483 77.8576 1259.14 -146 983 -146Z" fill="url(#paint)"/>
      </g>
    </g>
  </g>
  <defs>
    <filter id="filter" x="-246.3" y="-213.3" width="1796.6" height="1796.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="33.65" result="effect1_foregroundBlur"/>
    </filter>
    <radialGradient id="paint" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(635 1028.5) rotate(-89.1381) scale(1130.13 1736.13)">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="#A2D8FF"/>
    </radialGradient>
    <clipPath id="clip">
      <rect width="1199" height="816" fill="white"/>
    </clipPath>
  </defs>
</svg>`;

/** MorningSky gradient as a data URI for CSS background-image */
export const morningSkyBgImage = svg`<svg viewBox="0 0 1200 816" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0)">
    <g filter="url(#filter0)">
      <rect x="-449" y="-326" width="2098" height="2098" rx="500" fill="url(#paint0)"/>
    </g>
  </g>
  <defs>
    <filter id="filter0" x="-516.3" y="-393.3" width="2232.6" height="2232.6" filterUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="33.65" result="effect1_foregroundBlur_1291_8748"/>
    </filter>
    <linearGradient id="paint0" x1="600" y1="-1368.25" x2="600" y2="1873.3" gradientUnits="userSpaceOnUse" color-interpolation-filters="sRGB" color-interpolation="sRGB">
       <stop offset="0.252808" stop-color="#00aeff"/>
      <stop offset="0.781427" stop-color="#fff5e6"/>
      <stop offset="1" stop-color="#f9f7f6"/>
    </linearGradient>
    <clipPath id="clip0">
      <rect width="1200" height="816" fill="white"/>
    </clipPath>
  </defs>
</svg>`;
