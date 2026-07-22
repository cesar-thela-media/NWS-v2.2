import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "public", "images", "area-logos");
fs.mkdirSync(dir, { recursive: true });

const logos = [
  {
    file: "richmond.svg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" fill="none" role="img" aria-label="Richmond, TX">
  <text x="0" y="32" font-family="Georgia, 'Times New Roman', serif" font-size="22" font-weight="700" fill="#F5F5F4" letter-spacing="0.04em">RICHMOND</text>
  <text x="148" y="32" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#A8A29E" letter-spacing="0.12em">TX</text>
  <line x1="0" y1="40" x2="170" y2="40" stroke="#FF4500" stroke-width="1.5"/>
</svg>`,
  },
  {
    file: "sugar-land.svg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 48" fill="none" role="img" aria-label="Sugar Land, TX">
  <text x="0" y="22" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#F5F5F4" letter-spacing="0.18em">SUGAR LAND</text>
  <text x="0" y="40" font-family="Georgia, serif" font-size="12" font-style="italic" fill="#A8A29E" letter-spacing="0.08em">TEXAS</text>
  <circle cx="200" cy="24" r="10" stroke="#FF4500" stroke-width="1.5" fill="none"/>
  <circle cx="200" cy="24" r="3" fill="#FF4500"/>
</svg>`,
  },
  {
    file: "katy.svg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 48" fill="none" role="img" aria-label="Katy, TX">
  <rect x="0" y="8" width="4" height="32" rx="1" fill="#FF4500"/>
  <text x="14" y="34" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800" fill="#F5F5F4" letter-spacing="0.06em">KATY</text>
  <text x="112" y="34" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#A8A29E" letter-spacing="0.1em">TX</text>
</svg>`,
  },
  {
    file: "fulshear.svg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" fill="none" role="img" aria-label="Fulshear, TX">
  <path d="M8 36 L20 10 L32 36 Z" stroke="#FF4500" stroke-width="1.5" fill="none"/>
  <text x="42" y="32" font-family="Georgia, serif" font-size="20" font-weight="700" fill="#F5F5F4" letter-spacing="0.05em">FULSHEAR</text>
</svg>`,
  },
  {
    file: "cinco-ranch.svg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 48" fill="none" role="img" aria-label="Cinco Ranch, TX">
  <text x="0" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#FF4500" letter-spacing="0.22em">CINCO</text>
  <text x="0" y="40" font-family="Georgia, serif" font-size="18" font-weight="700" fill="#F5F5F4" letter-spacing="0.12em">RANCH</text>
  <line x1="100" y1="12" x2="100" y2="40" stroke="#57534E" stroke-width="1"/>
  <text x="112" y="32" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="#A8A29E" letter-spacing="0.08em">TEXAS</text>
</svg>`,
  },
  {
    file: "rosenberg.svg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 48" fill="none" role="img" aria-label="Rosenberg, TX">
  <text x="0" y="33" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#F5F5F4" letter-spacing="0.08em">ROSENBERG</text>
  <rect x="168" y="18" width="28" height="16" rx="2" stroke="#FF4500" stroke-width="1.5" fill="none"/>
  <text x="174" y="30" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#FF4500">TX</text>
</svg>`,
  },
  {
    file: "weston-lakes.svg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" fill="none" role="img" aria-label="Weston Lakes, TX">
  <path d="M4 28 Q16 12 28 28 Q40 44 52 28" stroke="#FF4500" stroke-width="1.5" fill="none"/>
  <text x="60" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#A8A29E" letter-spacing="0.2em">WESTON</text>
  <text x="60" y="40" font-family="Georgia, serif" font-size="16" font-weight="700" fill="#F5F5F4" letter-spacing="0.14em">LAKES</text>
</svg>`,
  },
  {
    file: "park-row.svg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 48" fill="none" role="img" aria-label="Park Row, TX">
  <rect x="0" y="10" width="14" height="28" rx="1" fill="#F5F5F4" opacity="0.9"/>
  <rect x="4" y="14" width="6" height="6" fill="#1C1917"/>
  <rect x="4" y="24" width="6" height="10" fill="#1C1917"/>
  <text x="24" y="32" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#F5F5F4" letter-spacing="0.06em">PARK ROW</text>
</svg>`,
  },
  {
    file: "west-houston.svg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 48" fill="none" role="img" aria-label="West Side of Houston, TX">
  <text x="0" y="20" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#FF4500" letter-spacing="0.24em">WEST SIDE</text>
  <text x="0" y="40" font-family="Georgia, serif" font-size="18" font-weight="700" fill="#F5F5F4" letter-spacing="0.1em">HOUSTON</text>
  <circle cx="160" cy="28" r="12" stroke="#A8A29E" stroke-width="1" fill="none"/>
  <path d="M160 18 L160 28 L168 32" stroke="#F5F5F4" stroke-width="1.5" stroke-linecap="round"/>
</svg>`,
  },
];

for (const logo of logos) {
  fs.writeFileSync(path.join(dir, logo.file), logo.svg, "utf8");
  console.log("wrote", logo.file);
}
console.log("done", logos.length);
