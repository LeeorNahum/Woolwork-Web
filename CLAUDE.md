<!-- BEGIN claude-code-compat (generated, do not edit) -->

@AGENTS.md

# Nested AGENTS.md

Before you create, edit, or run files in a directory, read that directory's `AGENTS.md` first when one exists. Only the root `AGENTS.md` is imported above. Nested `AGENTS.md` files hold local rules for their own subtree and are not auto-loaded. The closest `AGENTS.md` at or above a file governs work on that file, so check for one whenever you enter a new part of the tree (a package, an app, or a skill directory).

# Agent Skills Index

These project skills are not Claude Code slash-command skills. When a listed skill is relevant, read its `SKILL.md` path directly instead of trying a Skill tool or slash command.

Each description is the trigger. Respect it, and when it matches the task, read the skill's `SKILL.md` plus any relevant references, assets, scripts, or nearby root files the skill points to.

## [anti-backrooms](.agents/skills/anti-backrooms/SKILL.md)

> Use whenever anything is written, edited, named, or shown that a person or another agent will read or look at, including every visual, spatial, or printed artifact and equally the surfaces that do not look like design work: comments, commit messages, names, reusable instructions, and the prose beside configuration. Apply while composing, not only when a critique is asked for. It catches output that is locally plausible but globally wrong, the coherent-but-wrong failures that violate human normalcy: filler wording, claims stronger than their evidence, wrong scale, impossible adjacency, unreadable hierarchy, meaningless repetition, the same fact shown twice, a context leak of internal material or session evidence, a generic artifact shaped by one person, and a viewer with no path through it.

## [branch-promote](.agents/skills/branch-promote/SKILL.md)

> Use when moving changes between development, staging, and production deployment branches, checking branch state before a promotion, handling branch drift or divergence, chaining promotion stages, or removing branches whose work has already landed. Inspects branch state and promotes code between deployment branches safely.

## [claude-code-compat](.agents/skills/claude-code-compat/SKILL.md)

> Use whenever anything under .agents changes, such as a skill being added, removed, renamed, or having its name or description edited, and whenever a repository has an AGENTS.md or .agents/skills but no up-to-date CLAUDE.md, because Claude Code natively reads only CLAUDE.md and .claude/skills. Keeps Claude Code in sync with cross-tool Agent Skills and AGENTS.md by regenerating a managed block in CLAUDE.md.

## [convex-compendium](.agents/skills/convex-compendium/SKILL.md)

> Use for Convex schemas, queries, mutations, actions, HTTP actions, auth, components, migrations, indexes, OCC conflicts, files, scheduling, or performance, to build, integrate, secure, migrate, and optimize Convex backends. Also use when a repository contains the convex package, convex/schema.ts, convex/_generated/api, convex/react, convex/server, generated api or internal references, ctx.db, stale Convex types, or a Convex function-boundary problem even when the user does not name Convex.

## [design-md](.agents/skills/design-md/SKILL.md)

> Use when building or restyling UI, components, layouts, colors, typography, spacing, or themes in a repository that has, or should have, a DESIGN.md, including using its tokens and identity to guide external visual assets such as a logo or marketing material that need to stay on-brand. Use when starting a design system for a repository, when defining or changing design tokens that DESIGN.md should record, or when reading DESIGN.md and keeping it in sync with the implemented UI. Covers creating, updating, applying, and validating DESIGN.md, the token-and-prose file that is a repository's living source of truth for its visual identity.

## [monolith-audit](.agents/skills/monolith-audit/SKILL.md)

> Build or audit a body of work to rigorous, present-day correctness: ground in the live code, verify every external assumption at the source, and eliminate or never introduce anything broken, obsolete, duplicated, incoherent, or worked-around. Runs whole-repo when invoked bare, or appended to a specific task or focus (a feature, fix, subsystem, surface, or file set), where it holds that task and everything in its blast radius to the same standard so the work is done right in one pass rather than patched and audited later. This skill is strictly manual and must only be invoked by name, Monolith Audit. When invoked, load this skill and follow it for deep, whole-product correctness, cleanliness, and coherence work across backend, data, APIs, protocols, frontend, UI, UX, copy, configuration, environment contracts, integration points, and product flows, or for self-critical building and rewrites validated against up-to-date, authoritative references.

## [naming-check](.agents/skills/naming-check/SKILL.md)

> Use while generating, brainstorming, searching for, comparing, evaluating, or adopting a name for a brand, product, company, app, or domain, including when the user asks whether a name is taken or available, and even when they only want name ideas and never ask for a check. Evaluates each candidate for conflicts, risks, and quality and gives a verdict.

## [no-em-dashes](.agents/skills/no-em-dashes/SKILL.md)

> Use whenever this skill is visible or available to the agent. Always prevent em dashes (U+2014) in all agent-generated output, including chat replies written directly to the user, file edits, docs, comments, commit messages, and tool output, and avoid semicolons as prose pauses or sentence joiners. Also use when the user mentions em dashes, asks for AI-like punctuation cleanup, or explicitly asks to remove em dashes from named files, folders, or repos.

## [provider-onboarding](.agents/skills/provider-onboarding/SKILL.md)

> Run an interactive external-provider setup loop for a web product: wire auth, DNS, hosting, backend, billing, storage, and email across local, staging, and production stages, and fill every environment value into its correct store. Use when onboarding providers, filling env files, configuring dashboards, or standing up a new deployment stage.

## [release-versioning](.agents/skills/release-versioning/SKILL.md)

> Use when deciding or making a version bump, including a skill's metadata.version, preparing or publishing a GitHub release, publishing binaries or archives, attaching release assets, syncing README badges and version mentions, updating package or app metadata, or making sure version constants and docs agree before a release. Manages versioned releases and release artifacts across software, apps, firmware, skills, packages, and downloadable builds.

## [skill-forge](.agents/skills/skill-forge/SKILL.md)

> Use before creating or editing any Agent Skill or any file bundled with one: a SKILL.md, a skill's description or frontmatter, its AGENTS.md or README, or a reference, script, asset, or other file under a skill directory. Load it before the first edit, not after. Also use when designing, refining, reviewing, or validating a skill that follows the open SKILL.md standard: writing or tuning its triggering description, organizing its references, scripts, or assets directories, preserving key wording and meaning during edits, deciding automatic or manual invocation, or answering questions about skill structure, naming conventions, or SKILL.md format. Holds the authoring rules and a validator for the spec and house style.

## [skill-sync](.agents/skills/skill-sync/SKILL.md)

> Use before every Git commit, or when the user asks to update, sync, refresh, or pull installed skills, or when a skill is installed. Brings every installed skill submodule to its latest remote commit and keeps each checkout named after its skill.

## [subagent-spawn-book](.agents/skills/subagent-spawn-book/SKILL.md)

> Subagent Spawn Book (SSB). Use before creating any subagent and before choosing which model leads a session or orchestrates a run: whenever the user asks for one, a plan includes delegation or fan-out, or the work at hand would go better in another session, such as research, a browser or computer-use task, a review or critique, a visual check, a bulk job, or anything another model would do better.

## [web-repository-opinions](.agents/skills/web-repository-opinions/SKILL.md)

> Use for any web work: planning, deciding, designing, scaffolding, naming, reviewing, auditing, or implementing anything in a TypeScript or web-technology repo, including a marketing site, signed-in app, SaaS, extension, desktop or mobile surface, and backend-only pieces of a web product. Holds opinionated defaults for architecture, URLs, environment and deployment, auth and data ownership, media and jobs, billing, public interfaces, and product UI. When unsure whether it applies, load it.

## [woolwork-ui](.agents/skills/woolwork-ui/SKILL.md)

> Use when building or porting web UI in a wool, felt, yarn, knit, craft, cozy, or handmade look, or when editing any project that already contains woolwork.css. Applies the Woolwork design language: a physically believable wool, felt, and yarn world with sewn attachments and place-then-stitch choreography.

<!-- END claude-code-compat -->
