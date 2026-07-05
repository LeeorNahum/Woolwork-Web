<!-- BEGIN claude-code-compat (generated, do not edit) -->

@AGENTS.md

# Nested AGENTS.md

Before you create, edit, or run files in a directory, read that directory's `AGENTS.md` first when one exists. Only the root `AGENTS.md` is imported above; nested `AGENTS.md` files hold local rules for their own subtree and are not auto-loaded. The closest `AGENTS.md` at or above a file governs work on that file, so check for one whenever you enter a new part of the tree (a package, an app, or a skill directory).

# Agent Skills Index

## anti-backrooms

`.agents/skills/anti-backrooms/SKILL.md`

> Review and improve visual, spatial, textual, and user-facing artifacts for coherent-but-wrong failures that violate human normalcy, including nonsensical wording, unsupported claims, wrong scale, impossible adjacency, unreadable hierarchy, duplicated patterns, meta leakage, and broken viewer flow. Always use this skill when creating or critiquing UI, decks, diagrams, docs, PDFs, signage, booths, copy, or other artifacts where local plausibility can hide global incoherence.

## branch-promote

`.agents/skills/branch-promote/SKILL.md`

> Inspect branch state and safely promote code between deployment branches. Use when moving changes between development, staging, and production branches, handling branch drift or divergence, or chaining promotion stages.

## claude-code-compat

`.agents/skills/claude-code-compat/SKILL.md`

> Keep Claude Code in sync with cross-tool Agent Skills and AGENTS.md by regenerating a managed block in CLAUDE.md. Run it whenever anything under .agents changes, such as a skill being added, removed, renamed, or having its name or description edited, and whenever a repository has an AGENTS.md or .agents/skills but no up-to-date CLAUDE.md, because Claude Code natively reads only CLAUDE.md and .claude/skills. It lists each skill's name and description so Claude Code can discover and load them on demand.

## convex-compendium

`.agents/skills/convex-compendium/SKILL.md`

> Build and maintain Convex backends in any AI coding agent - schema, queries, mutations, actions, HTTP endpoints, file storage, scheduling, auth, components, migrations, and performance. Use when writing or reviewing Convex code, scaffolding a Convex project, setting up authentication, designing a schema, building a reusable component, planning a migration, or diagnosing Convex performance.

## design-md

`.agents/skills/design-md/SKILL.md`

> Create, update, maintain, and apply a DESIGN.md, the file that serves as a repository's living source of truth for its visual identity. Use for any work on a product's look and feel: building or restyling UI, components, layouts, colors, typography, spacing, or themes; starting a design system; defining or changing design tokens; or reading and keeping DESIGN.md in sync with the implemented UI.

## monolith-audit

`.agents/skills/monolith-audit/SKILL.md`

> Build or audit a body of work to rigorous, present-day correctness: ground in the live code, verify every external assumption at the source, and eliminate or never introduce anything broken, obsolete, duplicated, incoherent, or worked-around. Runs whole-repo when invoked bare, or appended to a specific task or focus (a feature, fix, subsystem, surface, or file set), where it holds that task and everything in its blast radius to the same standard so the work is done right in one pass rather than patched and audited later. This skill is strictly manual and must only be invoked by name. When invoked, load this skill and follow it for deep, whole-product correctness, cleanliness, and coherence work across backend, data, APIs, protocols, frontend, UI, UX, copy, configuration, environment contracts, integration points, and product flows, or for self-critical building and rewrites validated against up-to-date, authoritative references.

## naming-check

`.agents/skills/naming-check/SKILL.md`

> Evaluate a proposed name (brand, product, company, app, domain) for conflicts, risks, and quality. Use when the user wants to vet, validate, or assess a name before committing to it.

## no-em-dashes

`.agents/skills/no-em-dashes/SKILL.md`

> Use whenever this skill is visible or available to the agent. Always prevent em dashes (U+2014) in all agent-generated replies, text, edits, docs, comments, commit messages, and tool output. Also use when the user mentions em dashes, asks for AI-like punctuation cleanup, or explicitly asks to remove em dashes from named files, folders, or repos. Full-repo retroactive cleanup only on explicit user request for that scope.

## provider-onboarding

`.agents/skills/provider-onboarding/SKILL.md`

> Run an interactive external-provider setup loop for a web product: wire auth, DNS, hosting, backend, billing, storage, and email across local, staging, and production stages, and fill every environment value into its correct store. Use when onboarding providers, filling env files, configuring dashboards, or standing up a new deployment stage.

## release-versioning

`.agents/skills/release-versioning/SKILL.md`

> Manage versioned releases and release artifacts across software, apps, firmware, skills, packages, and downloadable builds. Use when bumping semver, preparing GitHub releases, syncing README badges/version mentions, publishing binaries or archives, attaching release assets, updating package/app metadata, or making sure version constants and docs agree before a release.

## skill-forge

`.agents/skills/skill-forge/SKILL.md`

> Create, design, refine, and package Agent Skills that follow the open SKILL.md standard. Use when the user wants to create or author a new skill, improve skill triggering, organize references/scripts/assets, preserve key wording and meaning during edits, decide invocation style, or asks about skill structure, naming conventions, or SKILL.md format.

## skill-sync

`.agents/skills/skill-sync/SKILL.md`

> Sync and update all installed skill submodules to their latest remote commits. Use this skill before every Git commit, or whenever the user asks to update, sync, refresh, or pull installed skills, or when a skill is installed.

## web-repository-opinions

`.agents/skills/web-repository-opinions/SKILL.md`

> Opinionated defaults and standards for building TypeScript web products and any repo built on web technology, covering monorepo layout, rendering, surfaces, routing, IDs, key generation, domains, origins, env contracts, branches, deployment, DNS, auth, data ownership, media, jobs, billing, admin, responsive layout, fonts, product UX, and release operating philosophy. Load this skill early and keep it loaded for any web work: whenever planning, deciding, designing, scaffolding, auditing, naming, reviewing, or implementing anything in a web app, marketing site, signed-in app, SaaS, extension, desktop, or mobile surface built with HTML, CSS, JS, or TS. When unsure whether it applies, load it; almost every decision in a web repo touches an opinion it holds.

## woolwork-ui

`.agents/skills/woolwork-ui/SKILL.md`

> Apply the Woolwork design language to any web UI: a physically believable wool, felt, and yarn world with sewn attachments and place-then-stitch choreography. Use when building a new site or component in a wool, felt, yarn, knit, craft, cozy, or handmade aesthetic, when porting an existing site into that look, or when editing any project that already contains woolwork.css.

<!-- END claude-code-compat -->
