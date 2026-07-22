# Shadcn Space shopping cart — NWS site

**Source:** [shadcnspace.com](https://shadcnspace.com/)  
**License:** Pro (`SHADCNSPACE_LICENSE_KEY` in local env — see setup)  
**Stack target:** Next.js + shadcn/ui + Tailwind (Radix or Base UI)  
**Copy source:** `content/COPY.md`  
**Goal:** Pick blocks for each page section, then install + theme later.

---

## Why this library

| Need | Shadcn Space coverage |
|------|------------------------|
| Slim marketing navbar | Navbar Section blocks |
| Photo / service hero | Hero Section (real estate / service-business variants) |
| Services grid | Services Section + Feature Section |
| Reviews | Testimonials Section |
| Mid-page CTA | CTA Section |
| Contact + form | Contact Section + dashboard Forms / primitives |
| FAQ | FAQ Section |
| Gallery | Gallery (+ Portfolio if needed) |
| Footer | Footer Section |
| About / trust | About Us Section + Logo Cloud |
| Install | `npx shadcn@latest add @shadcnspace/...` |

Skip: pricing (SaaS), login/register, ecommerce, dashboard charts/kanban.

---

## Cart map (NWS section → browse category)

Browse each category, preview variants, pick **one primary** (+ optional alternate).

| Priority | NWS UI section | Shadcn Space category | Browse | Prefer (style fit) | Skip |
|----------|----------------|----------------------|--------|--------------------|------|
| P0 | Slim header / nav | Navbar | [navbar-section](https://shadcnspace.com/blocks/marketing/navbar-section) | Single row, logo left, links center/right, **one** solid CTA (“Book Now”), mobile sheet | Mega multi-row SaaS navs |
| P0 | Home hero | Hero | [hero-section](https://shadcnspace.com/blocks/marketing/hero-section) | **Hero 02 – Real Estate** (free, photo + CTA) · **Hero 09 – Cleaning/Services** (Pro, service biz) · **Hero 03 – Agency** (video/bold) | Crypto / AI dashboard heroes |
| P0 | Services | Services | [services-section](https://shadcnspace.com/blocks/marketing/services-section) | Icon + title + short text + link cards (3-col) | Pricing-style tier cards |
| P0 | Reviews | Testimonials | [testimonials-section](https://shadcnspace.com/blocks/marketing/testimonials-section) | Card grid or carousel; avatar initial/name/source | Logo-only “wall of love” without quotes |
| P0 | Contact form + info | Contact | [contact-section](https://shadcnspace.com/blocks/marketing/contact-section) | Split: form + phone/email/hours | Newsletter-only |
| P0 | FAQ | FAQs | [faq-section](https://shadcnspace.com/blocks/marketing/faq-section) | Accordion FAQ | Chat-style FAQ |
| P0 | Footer | Footer | [footer-section](https://shadcnspace.com/blocks/marketing/footer-section) | Logo + 2–3 link columns + contact | Huge app footers |
| P1 | Mid-page CTA | CTA | [cta-section](https://shadcnspace.com/blocks/marketing/cta-section) | Strong headline + phone CTA; dark or brand band | App store download CTAs |
| P1 | Trust / social proof | Logo Cloud | [logo-cloud](https://shadcnspace.com/blocks/marketing/logo-cloud) | Row of partner/platform logos (FB/IG/Houzz or “as seen”) | Animated infinite marquee if too busy |
| P1 | Intro “who we are” | About / Feature | [about-us-section](https://shadcnspace.com/blocks/marketing/about-us-section) · [feature-section](https://shadcnspace.com/blocks/marketing/feature-section) | Text + image or 3 proof bullets | Team headshots if you don’t have them |
| P1 | Gallery pages | Gallery / Portfolio | [gallery](https://shadcnspace.com/blocks/marketing/gallery) · [portfolio-section](https://shadcnspace.com/blocks/marketing/portfolio-section) | Responsive image grid + lightbox | Heavy masonry that fights project photos |
| P2 | Process / how we work | Timeline | [timeline](https://shadcnspace.com/blocks/marketing/timeline) | Consult → design → build → walkthrough | — |
| P2 | Service detail extras | Feature / Bento | [feature-section](https://shadcnspace.com/blocks/marketing/feature-section) · [bento-grid-section](https://shadcnspace.com/blocks/marketing/bento-grid-section) | “What’s included” grid | — |
| P2 | Form primitives | Components | [button](https://shadcnspace.com/components/button) · [input](https://shadcnspace.com/components/input) · [select](https://shadcnspace.com/components/select) · [card](https://shadcnspace.com/components/card) · [accordion](https://shadcnspace.com/components/accordion) · [carousel](https://shadcnspace.com/components/carousel) · [dropdown-menu](https://shadcnspace.com/components/dropdown-menu) · [dialog](https://shadcnspace.com/components/dialog) | Base shadcn primitives for forms/menus | — |
| Optional | Areas chips | Badge / Button / Card | [badge](https://shadcnspace.com/components/badge) · feature chips | City link chips | Map widgets from dashboard kits |
| Optional | Cookie | Cookie Consent | [cookie-consent](https://shadcnspace.com/blocks/marketing/cookie-consent) | Only if you need it | — |

### Templates (optional full-site base)

| Template | Link | Fit for NWS |
|----------|------|-------------|
| **Awake** – Agency & Portfolio | [templates/awake](https://shadcnspace.com/templates/awake) | Best full-site starting point (services, portfolio, contact) |
| Saazio / Atomist – SaaS | [templates](https://shadcnspace.com/templates) | Only if you want product-marketing chrome; less contractor-native |

**Recommendation:** Prefer **blocks composition** over adopting a full SaaS template wholesale—maps cleaner to `COPY.md` and existing routes.

---

## Home page composition (recommended cart)

Assemble home from these categories (pick concrete `hero-02`, `navbar-0x`, etc. after preview):

1. **Navbar** — slim single CTA  
2. **Hero** — real-estate or service hero with photo (`hero-02` free is a strong default)  
3. **Logo cloud** — trust / social  
4. **About or Feature** — intro + proof bullets  
5. **Services** — card grid (wire to service list)  
6. **CTA** — free consult + 5% offer  
7. **Testimonials** — existing review copy  
8. **Contact** — form + phones/hours  
9. **Feature chips or simple grid** — areas we serve  
10. **Footer**  

Fill every string from `content/COPY.md`.

---

## Setup (when you’re ready to install)

### 1. Env (do not commit)

Project already ignores `.env*`. Prefer real `.env.local` over `.env.local.txt`:

```env
# .env.local  (gitignored)
SHADCNSPACE_EMAIL=your@email.com
SHADCNSPACE_LICENSE_KEY=your-license-key
```

Copy values from your local license file; don’t paste keys into the repo or this markdown.

### 2. Init shadcn (once)

```bash
npx shadcn@latest init
```

Choose defaults that match Next App Router + Tailwind v4 if offered.

### 3. Register Shadcn Space

Per [CLI docs](https://shadcnspace.com/cli): add the Shadcn Space registry to `components.json`, then:

```bash
npx shadcn@latest add @shadcnspace/<block-name>
```

Exact registry JSON key names appear on each block’s install panel on the site (Select package manager → copy command).

### 4. Install order (minimal spike)

```text
1. button, input, select, textarea, card, accordion, dropdown-menu, navigation-menu / sheet
2. @shadcnspace navbar (chosen variant)
3. @shadcnspace hero (hero-02 or services-style)
4. @shadcnspace services-section
5. @shadcnspace testimonials
6. @shadcnspace cta-section
7. @shadcnspace contact-section
8. @shadcnspace faq-section
9. @shadcnspace gallery
10. @shadcnspace footer-section
```

### 5. Theme pass after install

Map tokens to existing NWS/Glyph palette:

- primary → `#ff4500`  
- background → `#fafaf9`  
- foreground → `#0c0a09`  
- font → Manrope  

---

## Decision checklist (while previewing)

For each block, open preview and ask:

- [ ] Works for **contractor / home services** (not only SaaS)?  
- [ ] **One primary CTA** (Book Now / Call)?  
- [ ] Room for **real photography** (hero/gallery)?  
- [ ] Mobile nav usable?  
- [ ] Form fields match: name, email, phone, zip, service, message?  
- [ ] Free vs Pro OK with your license?  
- [ ] Easy to inject `COPY.md` strings (not hard-coded demo “Acme SaaS”)?  

---

## Out of cart (don’t buy time on these)

- Dashboard shells, charts, kanban, chat apps  
- Ecommerce checkout / product listing  
- Auth (login, 2FA, verify email) as core site chrome  
- Biolink / social link-in-bio  
- Pricing tables (unless you later sell packages)

---

## Status

| Item | Status |
|------|--------|
| License credentials available locally | Yes (user file) |
| Shopping map written | This file |
| `shadcn init` run in NWS-v3 | Not yet |
| Blocks installed | Not yet |
| Wired to `COPY.md` | Not yet |

**Next step when you want implementation:** init shadcn → install P0 blocks from the map → replace demo copy with `content/COPY.md`.
