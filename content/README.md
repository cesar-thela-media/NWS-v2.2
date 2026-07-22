# Content

- **`COPY.md`** — production-ready site copy by section (home, services, about, contact, areas, FAQs, meta, CTAs).
- **`UI-SHOPPING.md`** — Shadcn Space cart: which blocks/components map to each NWS section + install order.

**How to use**

1. Treat `COPY.md` as the source of truth for messaging.
2. Use `UI-SHOPPING.md` to preview/pick blocks on [shadcnspace.com](https://shadcnspace.com/blocks).
3. After install, map each section slot in `COPY.md` to the chosen block.
4. Optionally split into `src/data/copy/*.ts` for typed strings in the app.

**Secrets:** Put `SHADCNSPACE_*` in `.env.local` (gitignored). Do not commit license keys.
