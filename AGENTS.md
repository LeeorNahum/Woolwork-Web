# AGENTS.md

Maintenance rules for the Woolwork website.

## What this site is

Two audience-facing pages, fully static, no build step:

- `index.html`: the product page. What Woolwork is, proof that it works (the page itself runs it), install, and the paths in (component page, skill download).
- `showcase.html`: every component, each named and explained, with live examples.

Supporting files: `site.css` (page composition and self-hosted fonts only), `cloth.js` (the one Tier 3 hero decoration the kit permits per page), `fonts/` (Baloo 2 and Nunito, SIL OFL, latin woff2), `icon.svg`, `og.png`, `robots.txt`, `sitemap.xml`, `vercel.json`.

`woolwork.css` and `woolwork.js` are copies of the Woolwork kit. They are never edited here; they are replaced wholesale from the `woolwork-ui` skill's `assets/` when the kit updates.

## Paired repository contract

This site and the `woolwork-ui` skill (github.com/LeeorNahum/woolwork-ui-skill, installed here as the `.agents/skills/woolwork-ui` submodule) are one product on two repos. Edits to either side that touch the kit MUST be paralleled in the same working session:

- Any kit change (a class, token, behavior, or kit doc) is made in the skill repo, on its `dev` branch, with the skill's own AGENTS.md rules applied (version surfaces bumped, dictionary and migration updated together).
- The same session then updates this repo on its `dev` branch: advance the `.agents/skills/woolwork-ui` submodule pointer to that skill commit, and re-copy `assets/woolwork.css` and `assets/woolwork.js` over the site's kit files. The site's `--ww-version` must always equal the pinned submodule's version.
- The reverse holds: if site work reveals a kit defect, fix it in the skill repo first, then flow it back here. Never patch the kit files locally.
- Releases move together. First the skill releases (its `dev` fast-forwards to `main`, tag `vX.Y.Z`, the release workflow packages and publishes `woolwork-ui.zip`). Then this site pins the submodule to that released commit on `dev` and promotes `dev` to `preview` to `main`. Site `main` must only ever pin a skill commit that is reachable from the skill's `main`.
- The product page's "Get the skill" button links to the skill repo's latest-release page (`releases/latest`), never to a zip hosted in this repo, so the site stays correct when the skill releases without a site deploy.

## Build and run

There is no build. The repo root is the deployable output.

- Local: serve the folder statically, for example `python -m http.server 8000`, and open `http://localhost:8000`. Opening `index.html` directly from disk also works.
- Verify after changes: pages render complete with JavaScript disabled; both pages work from a plain file server; no horizontal overflow from the narrowest supported width up.

## Branches and deployment

Branches are deployment roles: `dev` is where every change lands first and never deploys, `preview` is hosted staging, `main` is production. Promote by merging `dev` into `preview`, and `preview` into `main` for releases with explicit approval. `vercel.json` gates deploys so only `preview` and `main` deploy.

- Host: Vercel, one project for this repo, production branch `main` (confirm in the dashboard once).
- Domains: `woolwork.dev` on `main`; `preview.woolwork.dev` as the `preview` branch domain. Remove the auto-generated platform alias once the custom domains are attached.
- DNS (Cloudflare): the two host records above point at Vercel, unproxied, each with a comment in the `Provider - Product Purpose (Scope)` format, for example `Vercel - Woolwork site (production)`.
- No runtime reads env. If one ever does, it gets its own committed `.env.example` beside it and a gitignored `.env.local`, same key names across stages.

Run the skill-sync pass (update `.agents/skills` submodules) before commits, on `dev` only; `preview` and `main` receive submodule pointers through promotion, never directly.

## Rules

- The site always runs the current kit. Never fork or patch the kit files locally; fix the kit in the skill and re-copy.
- Every visual claim on the page must be demonstrable on the page. If the copy says pressing settles the patch, pressing must settle the patch.
- Copy is written for a visitor deciding whether to use Woolwork. The craft world itself, the material, light, and motion, is the message; no internal vocabulary, no iteration history, no design-law jargon presented as a selling point.
- No em dashes anywhere.
- Pages must render complete with JavaScript disabled; motion is enhancement only. Keep the one-line `ww-js` head snippet immediately after the stylesheet links so reveals never flash on first paint.
- Fonts are self-hosted from `fonts/` and preloaded; do not reintroduce a runtime font CDN request on these pages.
- One page, one job. The product page persuades and installs; the showcase demonstrates. Do not let either grow the other's content.
- `DESIGN.md` mirrors the kit's identity for this repo. When the kit's tokens or type change, update `DESIGN.md` in the same change that re-copies the kit.
- Keep `sitemap.xml`, canonical URLs, and social metadata pointing at `https://woolwork.dev` clean URLs (`/`, `/showcase`); internal links keep the `.html` form so the folder still works from a plain file server, and Vercel's `cleanUrls` redirects them.
