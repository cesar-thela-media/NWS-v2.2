/**
 * Scrape main content text from live pages for parity expansion.
 * node scripts/scrape-main.mjs /services/bathroom-remodeling/
 */
import fs from "fs";

const pathArg = process.argv[2] || "/";
const url =
  pathArg === "/"
    ? "https://www.nws-homes.com/"
    : `https://www.nws-homes.com${pathArg}`;

const res = await fetch(url, {
  headers: { "User-Agent": "NWS-scrape/1.0" },
});
const html = await res.text();

// Prefer elementor post content region if present
let chunk = html;
const mainMatch = html.match(
  /<main[\s\S]*?<\/main>|elementor-location-single[\s\S]*?elementor-location-footer|class="entry-content"[\s\S]*?<\/div>/i
);
if (mainMatch) chunk = mainMatch[0];

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "\n")
    .replace(/<style[\s\S]*?<\/style>/gi, "\n")
    .replace(/<\/(p|div|li|h[1-6]|br|tr)>/gi, "\n")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<h([1-6])[^>]*>/gi, "\n###H$1### ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "-")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n +/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const text = strip(chunk);
const outDir =
  process.env.SCRATCH ||
  "C:\\Users\\idder\\AppData\\Local\\Temp\\grok-goal-045f02ee4755\\implementer";
const safe = pathArg.replace(/\//g, "_").replace(/^_|_$/g, "") || "home";
fs.mkdirSync(outDir, { recursive: true });
const out = `${outDir}/scrape-${safe}.txt`;
fs.writeFileSync(out, text);
console.log(`Wrote ${out} (${text.length} chars)`);
console.log(text.slice(0, 4000));
