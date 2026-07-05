# AGENTS.md

Maintenance rules for the Woolwork website. This is a stand-in for the current static build; it will be expanded when the site is ported to a deployable framework, but its rules apply now and survive the port.

## What this site is

Two audience-facing pages:

- `index.html`: the product page. What Woolwork is, proof that it works (the page itself runs it), install, and the paths in (component page, skill download).
- `showcase.html`: every component, each named and explained, with live examples.

`woolwork.css` and `woolwork.js` are copies of the Woolwork kit. They are not edited here; they are replaced wholesale from the `woolwork-ui` skill's `assets/` when the kit updates.

## Rules

- The site always runs the current kit. Never fork or patch the kit files locally; fix the kit in the skill and re-copy.
- Every visual claim on the page must be demonstrable on the page. If the copy says hovering dents the felt, hovering must dent the felt.
- Copy is written for a visitor deciding whether to use Woolwork. No internal vocabulary, no iteration history, no design-law jargon presented as a selling point.
- No em dashes anywhere.
- Pages must render complete with JavaScript disabled; motion is enhancement only.
- One page, one job. The product page persuades and installs; the showcase demonstrates. Do not let either grow the other's content.

## When porting to a framework

Keep these invariants: kit files load unmodified, pages are server-renderable, the two-page structure and their jobs stay, and this file grows real build/deploy instructions instead of being replaced.
