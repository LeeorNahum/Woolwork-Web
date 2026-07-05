# Woolwork-Web

The Woolwork website: a two-page static site that is itself the live demo of the [Woolwork UI kit](https://github.com/LeeorNahum/woolwork-ui-skill), a design system that turns any website into a hand-stitched world of wool, felt, and yarn.

- **woolwork.dev**: the product page (what it is, proof, install)
- **woolwork.dev/showcase**: every component, live

## Run locally

No build step. Serve the folder:

```sh
python -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` from disk also works.

## How it deploys

`dev` (working branch, never deploys) → `preview` (staging at preview.woolwork.dev) → `main` (production at woolwork.dev), hosted on Vercel with deploys gated to `preview` and `main` by `vercel.json`.

`woolwork.css` and `woolwork.js` are verbatim copies of the kit from the `woolwork-ui` skill and are only ever replaced wholesale. The full maintenance contract, including how this repo and the skill repo move together, lives in `AGENTS.md`.
