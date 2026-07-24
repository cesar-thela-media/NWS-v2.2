/**
 * Cleanup pass: hero-04 wire, hero-12/22 integrity, residual About/gallery/CTA gates.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (...parts) => fs.readFileSync(path.join(root, ...parts), "utf8");
const exists = (...parts) => fs.existsSync(path.join(root, ...parts));

test("hero-04 block installed under Space tree", () => {
  assert.ok(exists("src", "components", "shadcn-space", "blocks", "hero-04", "hero.tsx"));
  assert.ok(exists("src", "components", "shadcn-space", "blocks", "hero-04", "index.tsx"));
});

test("no public demo routes for hero-04/12/22", () => {
  assert.equal(exists("src", "app", "hero-04", "page.tsx"), false);
  assert.equal(exists("src", "app", "hero-12", "page.tsx"), false);
  assert.equal(exists("src", "app", "hero-22", "page.tsx"), false);
});

test("LocationPage and areas-we-serve mount themed hero-04 without demo navbar", () => {
  const loc = read("src", "components", "LocationPage.tsx");
  const areas = read("src", "app", "areas-we-serve", "page.tsx");
  const index = read(
    "src",
    "components",
    "shadcn-space",
    "blocks",
    "hero-04",
    "index.tsx",
  );
  const hero = read(
    "src",
    "components",
    "shadcn-space",
    "blocks",
    "hero-04",
    "hero.tsx",
  );
  assert.match(loc, /hero-04/);
  assert.match(loc, /Hero04/);
  assert.match(areas, /hero-04/);
  assert.match(areas, /Hero04/);
  assert.match(hero, /data-hero-04/);
  assert.doesNotMatch(hero, /I'm Sophia|UI\/UX Designer|SaaS Platform/i);
  assert.doesNotMatch(hero, /images\.shadcnspace\.com\/assets\/profiles/);
  assert.doesNotMatch(index, /import\s+Navbar|from [\"'].*hero-04\/navbar/);
  assert.match(index, /Does NOT mount|content only|navbar-02/i);
});

test("hero-12 services hub remains NWS-themed (not SaaS demo)", () => {
  const page = read("src", "app", "services", "page.tsx");
  const hero = read(
    "src",
    "components",
    "shadcn-space",
    "blocks",
    "hero-12",
    "hero.tsx",
  );
  assert.match(page, /hero-12/);
  assert.match(hero, /data-hero-12/);
  assert.doesNotMatch(hero, /#1 Agency in New York/);
  assert.doesNotMatch(hero, /SaaS solutions/i);
  assert.match(hero, /Custom homes|remodeling/i);
});

test("hero-22 gallery family remains NWS-themed (not creators demo)", () => {
  const gall = read("src", "components", "GalleryPage.tsx");
  const hero = read(
    "src",
    "components",
    "shadcn-space",
    "blocks",
    "hero-22",
    "hero.tsx",
  );
  assert.match(gall, /Hero22|hero-22/);
  assert.match(hero, /data-hero-22/);
  assert.doesNotMatch(hero, /Loved by creators|Explore Shadcnspace/i);
  assert.match(hero, /Project gallery|heading/);
});

test("button nativeButton+render and logo onDark still production", () => {
  const btn = read("src", "components", "ui", "button.tsx");
  const logo = read("src", "assets", "logo", "logo.tsx");
  assert.match(btn, /resolvedNative/);
  assert.match(btn, /nativeButton/);
  assert.match(logo, /onDark/);
  assert.match(logo, /logoOnDark|logoTransparent/);
});

test("About play path and gallery secondary contrast still gated", () => {
  const about = read(
    "src",
    "components",
    "shadcn-space",
    "blocks",
    "hero-13",
    "hero.tsx",
  );
  const gall = read("src", "components", "GalleryPage.tsx");
  assert.match(about, /nSJ_8lzRTjM/);
  assert.match(about, /data-about-video-play/);
  assert.match(about, /watch-fallback|data-about-video-fallback|NWS_ABOUT_YOUTUBE_WATCH/);
  assert.match(gall, /data-gallery-secondary-band/);
  assert.match(gall, /text-white/);
});

test("dark outline CTAs still force transparent + white on key survivors", () => {
  for (const f of [
    ["src", "components", "shadcn-space", "blocks", "hero-12", "hero.tsx"],
    ["src", "components", "shadcn-space", "blocks", "hero-22", "hero.tsx"],
    ["src", "components", "GalleryPage.tsx"],
  ]) {
    const src = read(...f);
    assert.match(src, /!bg-transparent/);
    assert.match(src, /!text-white/);
  }
});
