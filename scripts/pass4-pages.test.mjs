/**
 * Pass 4 gates: About video/play + no stats strip, story card/bg, orange bento,
 * services hero-12 + alternating strips, gallery hero-22 + masonry contrast,
 * location/areas themed headers.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (...parts) =>
  fs.readFileSync(path.join(root, ...parts), "utf8");
const exists = (...parts) => fs.existsSync(path.join(root, ...parts));

test("About hero: NWS YouTube play path with API error → watch fallback; no stats strip", () => {
  const hero = read(
    "src",
    "components",
    "shadcn-space",
    "blocks",
    "hero-13",
    "hero.tsx",
  );
  assert.match(hero, /nSJ_8lzRTjM/);
  assert.match(hero, /iframe_api|YT\.Player|loadYouTubeApi/);
  assert.match(hero, /onError/);
  assert.match(hero, /data-about-video-play|Play NWS project video/);
  assert.match(hero, /data-about-video-fallback|useWatchFallback|watch-fallback/);
  assert.match(hero, /data-about-video-watch|NWS_ABOUT_YOUTUBE_WATCH|Play on YouTube/);
  assert.doesNotMatch(hero, /data-about-hero-stats/);
  assert.doesNotMatch(hero, /Serving Fort Bend/);
  assert.doesNotMatch(hero, /label:\s*"Projects"/);
});

test("Dark-surface outline CTAs force transparent bg + white label", () => {
  const files = [
    "src/components/shadcn-space/blocks/hero-12/hero.tsx",
    "src/components/shadcn-space/blocks/hero-22/hero.tsx",
    "src/components/GalleryPage.tsx",
    "src/components/LocationPage.tsx",
    "src/app/services/[slug]/page.tsx",
  ];
  for (const f of files) {
    const src = read(...f.split("/"));
    assert.match(
      src,
      /!bg-transparent/,
      `${f} must force transparent outline bg on dark`,
    );
    assert.match(
      src,
      /!text-white/,
      `${f} must force white outline label on dark`,
    );
    assert.match(
      src,
      /data-dark-outline-cta/,
      `${f} must mark dark outline CTAs for probes`,
    );
  }
});

test("Our Story is one white card over generated themed background", () => {
  const about = read(
    "src",
    "components",
    "shadcn-space",
    "blocks",
    "about-us-13",
    "about-us.tsx",
  );
  assert.match(about, /data-about-story-card/);
  assert.match(about, /about-story-bg/);
  assert.match(about, /bg-white/);
  assert.match(about, /Discover the true meaning of custom homes/i);
  assert.match(about, /full-service construction[\s\S]{0,40}company/i);
  assert.doesNotMatch(about, /Transforming spaces into experiences/i);
  assert.ok(exists("public", "images", "about-story-bg.jpg"));
});

test("Bento three cards: orange face, white text, equal aspect image, fade seam", () => {
  const cards = read(
    "src",
    "components",
    "shadcn-space",
    "blocks",
    "bento-grid-02",
    "feature-cards-grid.tsx",
  );
  assert.match(cards, /data-bento-orange-cards/);
  assert.match(cards, /bg-primary/);
  assert.match(cards, /text-white/);
  assert.match(cards, /aspect-\[4\/3\]|aspect-\[/);
  assert.match(cards, /bg-gradient-to-b/);
  assert.match(cards, /backdrop-blur/);
  assert.doesNotMatch(cards, /bg-card/);
});

test("Services hub uses hero-12 + scratch alternating strips over serviceCards", () => {
  const page = read("src", "app", "services", "page.tsx");
  const hero = read(
    "src",
    "components",
    "shadcn-space",
    "blocks",
    "hero-12",
    "hero.tsx",
  );
  const strips = read("src", "components", "ServiceAlternatingStrips.tsx");
  assert.match(page, /hero-12/);
  assert.match(page, /ServiceAlternatingStrips/);
  assert.match(hero, /data-hero-12/);
  assert.doesNotMatch(hero, /#1 Agency in New York|SaaS solutions/i);
  assert.match(hero, /Custom homes|remodeling/i);
  assert.match(strips, /data-service-alternating-strips/);
  assert.match(strips, /services\.map|services\.map/);
});

test("Service detail keeps split hero + longform markers", () => {
  const page = read("src", "app", "services", "[slug]", "page.tsx");
  assert.match(page, /data-service-split-hero/);
  assert.match(page, /data-service-longform|prose-nws/);
  assert.match(page, /lg:grid-cols-2/);
});

test("Gallery family: hero-22 + scratch masonry + contrast-safe secondary band", () => {
  const gall = read("src", "components", "GalleryPage.tsx");
  const hero = read(
    "src",
    "components",
    "shadcn-space",
    "blocks",
    "hero-22",
    "hero.tsx",
  );
  const masonry = read("src", "components", "GalleryMasonry.tsx");
  assert.match(gall, /Hero22|hero-22/);
  assert.match(gall, /GalleryMasonry/);
  assert.match(gall, /data-gallery-secondary-band/);
  assert.match(gall, /text-white/);
  assert.doesNotMatch(gall, /gallery-04/);
  assert.match(hero, /data-hero-22/);
  assert.doesNotMatch(hero, /Explore Shadcnspace|Loved by creators/i);
  assert.match(masonry, /data-gallery-masonry/);
  assert.match(masonry, /columns-1/);
});

test("Locations header band + Areas map hero use theme washes and light text", () => {
  const loc = read("src", "components", "LocationPage.tsx");
  const areas = read("src", "app", "areas-we-serve", "page.tsx");
  assert.match(loc, /data-location-header-band/);
  assert.match(loc, /text-white/);
  assert.match(loc, /var\(--primary\)/);
  assert.match(areas, /data-areas-map-hero/);
  assert.match(areas, /text-white/);
  assert.match(areas, /var\(--primary\)/);
  assert.match(areas, /LogoCloud03|logo-cloud-03/);
  assert.match(areas, /AreasGrid/);
});

test("FAQ and Contact page bodies still present (no redesign required)", () => {
  assert.ok(exists("src", "app", "faqs", "page.tsx"));
  assert.ok(exists("src", "app", "contact", "page.tsx"));
});
