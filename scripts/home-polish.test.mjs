/**
 * Regression: em dashes gone, home polish tokens, page-family uniqueness.
 * Run: node --test scripts/home-polish.test.mjs
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcRoot = path.join(root, "src");

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(ts|tsx|css)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

test("no U+2014 em dashes in src ts/tsx/css", () => {
  const files = walk(srcRoot);
  const offenders = [];
  for (const f of files) {
    const t = fs.readFileSync(f, "utf8");
    if (t.includes("\u2014")) offenders.push(path.relative(root, f));
  }
  assert.deepEqual(offenders, [], `em dash found in: ${offenders.join(", ")}`);
});

test("logo has no mandatory white plate classes", () => {
  const logo = read("src", "assets", "logo", "logo.tsx");
  assert.doesNotMatch(logo, /bg-white/, "logo component must not force bg-white plate");
  assert.match(
    logo,
    /logoTransparent|nws-logo-transparent/,
    "logo should reference transparent asset path",
  );
  assert.ok(
    fs.existsSync(path.join(root, "public", "images", "nws-logo-transparent.png")),
    "transparent logo file must exist",
  );
});

test("What we do cards are not plain white face only", () => {
  const p = read(
    "src",
    "components",
    "shadcn-space",
    "blocks",
    "portfolio-06",
    "portfolio.tsx",
  );
  assert.doesNotMatch(
    p,
    /Card className="[^"]*\bbg-card\b[^"]*"/,
    "service Card must not use plain bg-card alone",
  );
  assert.ok(
    p.includes("#12181b") || p.includes("from-[#141c20]"),
    "service cards should use dark warm surface tokens",
  );
});

test("How we work allows full mobile image framing", () => {
  const p = read(
    "src",
    "components",
    "shadcn-space",
    "blocks",
    "portfolio-08",
    "portfolio.tsx",
  );
  assert.ok(
    p.includes("aspect-[16/10]") || p.includes("aspect-[16/9]"),
    "mobile aspect for full photo",
  );
  assert.ok(
    !p.includes("h-[min(32rem,70svh)]"),
    "old clipped sticky height must be gone",
  );
});

test("CTA has upper-weighted dark overlay", () => {
  const cta = read("src", "components", "shadcn-space", "blocks", "cta-08", "cta.tsx");
  assert.ok(
    cta.includes("from-black/80") || cta.includes("from-black/75"),
    "upper half should use strong from-black opacity",
  );
});

test("non-home page families use distinct layout markers", () => {
  const about = read("src", "app", "about", "page.tsx");
  const gallery = read("src", "components", "GalleryPage.tsx");
  const location = read("src", "components", "LocationPage.tsx");
  const services = read("src", "app", "services", "page.tsx");
  const serviceDetail = read("src", "app", "services", "[slug]", "page.tsx");
  const areas = read("src", "app", "areas-we-serve", "page.tsx");

  assert.ok(about.includes("Serving Fort Bend") || about.includes("min-h-[42svh]"));
  assert.ok(gallery.includes("columns-1") || gallery.includes("break-inside-avoid"));
  assert.ok(location.includes("lg:sticky") || location.includes("Areas we serve"));
  assert.ok(services.includes("space-y-6") && services.includes("md:col-span-5"));
  assert.ok(serviceDetail.includes("lg:grid-cols-2"));
  assert.ok(areas.includes("mapFull") || areas.includes("Areas we serve"));

  const oldTemplateCount = [about, gallery, location, services, areas].filter((s) =>
    /<PageHero[\s\S]*title=/.test(s),
  ).length;
  assert.ok(
    oldTemplateCount <= 1,
    `too many pages still open with PageHero template (${oldTemplateCount})`,
  );
});
