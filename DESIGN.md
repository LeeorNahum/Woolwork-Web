---
version: alpha
name: Woolwork
description: A hand-stitched world of wool, felt, and yarn. Tokens mirror the Woolwork kit (woolwork.css v1.3.0), which is the wired token source for this repo.
colors:
  board: "#e3ddd0"
  cream: "#f6efdf"
  rose: "#e2707e"
  butter: "#f0c05a"
  leaf: "#7fae6a"
  sky: "#6fa8c9"
  plum: "#9a7bb0"
  cocoa: "#7a5c49"
  ink: "#463527"
  ink-soft: "#7d6a56"
  paper: "#fbf6ea"
  thread-rose: "#a94856"
  thread-butter: "#b08428"
  thread-leaf: "#4f7a3e"
  thread-sky: "#3f728f"
  thread-plum: "#6b5180"
  thread-cream: "#bfa886"
typography:
  display-hero:
    fontFamily: Baloo 2
    fontSize: 60px
    fontWeight: 800
    lineHeight: 1.05
  headline-md:
    fontFamily: Baloo 2
    fontSize: 24px
    fontWeight: 800
    lineHeight: 1.2
  body-md:
    fontFamily: Nunito
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  label-md:
    fontFamily: Baloo 2
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1
rounded:
  patch: 16px
  control: 10px
  full: 9999px
spacing:
  xs: 6px
  sm: 10px
  md: 16px
  lg: 22px
  xl: 34px
  page-max: 920px
components:
  button-patch:
    backgroundColor: "{colors.butter}"
    textColor: "{colors.ink}"
    typography: "{typography.label-md}"
    rounded: "{rounded.patch}"
    padding: 14px
  card-felt:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.patch}"
    padding: 22px
  input-pocket:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: 13px
---

# Woolwork

## Overview

Woolwork turns an interface into a believable craft table. The page background is a burlap work board; every element on it is a wool, felt, or yarn object attached to that board by a nameable fastening: sewn, buttoned, snapped, pinned, zipped, or pocketed. The feeling is warm, handmade, and physical, closer to a toy shop than a dashboard, but everything remains a real, accessible control underneath.

The wired token source in this repository is `woolwork.css` (the kit, v1.3.0). This file is the reference those tokens follow; when the kit re-dyes, this file updates in the same change.

## Colors

Every color is dyed wool, desaturated and warmed, never a pure digital hue.

- **Board (#e3ddd0):** the burlap work surface behind everything.
- **Cream (#f6efdf):** the default felt; most cards and controls sit on it.
- **Rose (#e2707e), Butter (#f0c05a), Leaf (#7fae6a), Sky (#6fa8c9), Plum (#9a7bb0):** the felt basket. At most about six felts appear per page, like a small basket of yarn.
- **Cocoa (#7a5c49), Ink (#463527), Ink-soft (#7d6a56):** thread and text. Contrast lives in the thread and stitches, not in loud felt.
- **Thread variants (thread-rose and friends):** darker, saturated partners used for stitches and accents on their matching felt.
- **Paper (#fbf6ea):** a small accent for tags, tooltips, and code sheets only; wool carries the identity.

Night mode is a token override, not a second palette: felts deepen, threads lighten, the lamp dims. Never hard-code a color in markup; every dye is a token so the night flip works without per-element fixes.

Label ink is chosen by the surface itself: pale felts (cream, butter) carry near-ink dark lettering, deep felts (rose, leaf, sky, plum) carry near-cream light lettering, both re-tinted with the felt's own hue. The kit derives this from `--c`, so re-dyeing or the night flip re-chooses the ink with no per-element fixes; override a single element with `--label` if a design ever needs to.

## Typography

- **Display (Baloo 2):** headings, buttons, tabs, tags. Rounded terminals read as yarn. Hero and section headings may use the embroidered treatment (raised-thread shadow).
- **Body (Nunito):** paragraphs and labels, soft but legible at small sizes.

Both faces are SIL OFL and self-hosted from `fonts/` with preload so text renders in brand faces on first paint.

## Layout

A single centered column, max width 920px, with 22px side padding. Cards are patches placed on the board with generous internal padding (20 to 28px) and 14 to 18px gaps. Grids flow with `auto-fit` minmax columns so composition is fluid at every width; there are no hard device breakpoints.

## Elevation & Depth

One top-left light source, always. Depth is physical: a highlight along top edges (`--hi`), occlusion below (`--lo`), a short contact shadow, and a soft ambient shadow. Pressed states sink into the board with an inset shadow plus a 1.5px settle; nothing scales. Fiber grain and streak textures are baked tiles blended over every surface so nothing is a flat fill.

## Shapes

Nothing straight. Patches use irregular, hand-cut corner radii (each corner slightly different, around the 16px scale for cards and 10px for controls), and borders are running stitches: dashed thread lines inset from the edge. Perfect geometry reads as plastic and is avoided everywhere except tiny paper accents.

## Components

- **Buttons (`.btn-patch`):** felt patches with a stitched inset border, padded 14px vertically and 24px horizontally; hover lifts 1.5px, press settles 1.5px into a deepened inset shadow. Dye per instance with `--c`/`--t` token pairs.
- **Cards (`.felt`, `.knit`):** felt or stockinette-knit patches; `.stitch` adds the sewn border, `.sew` the place-then-stitch arrival. The patch reaches full opacity before its final-tone thread draws, so the animated and settled outline have the same weight and color.
- **Inputs (`.pocket`):** text fields are slits cut into the felt; selects are a single properly sized paper choice sheet, sized and aligned like the fields beside it, with opaque concertina paper options unfolding from its own bottom edge. Closing reverses that fold smoothly while retaining the open control's stacking height until the final sheet settles. Focus wraps a rose thread ring.
- **Checkboxes (`.sew-check`) and radios (`.snap-radio`):** four-hole buttons cross-stitched shut and snap fasteners.
- **Navigation and overlays:** tabs are hand-cut fabric labels tucked behind the content card they switch, a flat vector shape (no 3D lean, which rasterizes into jagged edges at zoom). Unselected tabs rest slightly down in the rail, and the selected tab lifts to the neutral top edge. Modals (`dialog.pinned`) are paper sticky notes pinned above the board, closed by a pencil-drawn cross (`.pencil-x`), with any actions or fields inside in `.btn-ink`/`.ink-line`, never felt, a clip, or `.pocket`; the board behind an open note is scroll-locked without layout shift. Dropdowns are paper slips slotted behind their trigger; up to four toasts stack in a corner tray, each dismissable by its yarn cross or a swipe.
- **Icons in yarn:** a close/dismiss on wool surfaces is a yarn cross (`.yarn-x`), the exact shape the hamburger settles into; on paper popups it is two crossed pencils (`.pencil-x`); ratings are die-cut sticker stars (`.stars` / `.star`).
- **Decoration:** pompoms, woven tags, and thin bent-steel paper clips (`.clip`, placed `.tl`/`.tc`/`.tr`) holding patches down, sparingly, dyed from the same tokens.

## Do's and Don'ts

- Do dye every element from tokens (`--c`, `--t`); never a raw hex in markup.
- Do keep motion in transform and opacity with the spring easing; state changes settle, they never hard-stop.
- Don't scale text-bearing elements on press; the settle-plus-shadow is the press language.
- Don't add pointer-tracked deformation of any kind; motion only accompanies a real state change.
- Don't exceed roughly six felt colors on a page, and keep paper to small accents.
- Do keep the accessibility floor: dashed visible focus rings, real form controls, `prefers-reduced-motion` honored.
