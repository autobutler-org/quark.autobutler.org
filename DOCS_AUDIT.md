# Documentation Gap Audit

This is a one-time audit, not a doc change. It compares `content/docs/` against the documentation of other
consumer NAS products (Synology DSM, QNAP QTS, TrueNAS SCALE, Unraid) and against the actual shipped Quark
feature set (per [autobutler-org/quark](https://github.com/autobutler-org/quark), specifically
`docs/user-journeys/`), to find what's missing or wrong.

Findings are grouped by severity. Nothing here has been applied to the docs yet — this file is the diff to
review before anyone writes doc changes against it.

## Method

- Read every file in `content/docs/` on this repo.
- Reviewed the table of contents / help-center structure for Synology DSM, QNAP QTS, TrueNAS SCALE, and Unraid
  to see what topics consumer/prosumer NAS docs typically cover.
- Cross-checked candidate gaps against `autobutler-org/quark`'s README and `docs/user-journeys/*.md` (the
  product's own behavioral spec) to confirm a feature actually ships before flagging its docs as missing —
  per `AGENTS.md`, this site must not describe a feature Quark doesn't have.

## 1. Docs contradict the shipped product (fix first)

These aren't gaps, they're factual errors — a reader following the current docs would draw the wrong
conclusion about what Quark does.

- **"There is no recycle bin."** — `content/docs/getting-started.md` states deleting a file is permanent and
  there's no recycle bin. `docs/user-journeys/trash.md` describes a working Trash at `/trash` with a 30-day
  retention window, restore, and empty-trash actions. The docs describe the opposite of what ships.
- **Remote access is "coming soon."** — `content/docs/how-it-works.md` frames remote access as a future
  feature ("We're adding the ability..."). `docs/user-journeys/settings.md` describes it as a working toggle
  in Settings today: enable it, get a remote URL, share it. `security-guide.md` even gives instructions for an
  already-live Tailscale-based remote access, which conflicts with `how-it-works.md` calling it unreleased.
  These two pages need to agree with each other and with the product.

## 2. Shipped features with no user-facing docs at all

Consumer NAS docs (Synology, QNAP, TrueNAS) all document every first-party app the box ships, not just file
storage. Quark ships several such features per `docs/user-journeys/` that have zero mention anywhere in
`content/docs/`:

- **Vault** (`docs/user-journeys/vault.md`) — a full password manager: entries with title/username/password/
  URL/notes, a password generator, folders, search, and JSON/CSV import/export. Today it's only mentioned in
  passing in `security-guide.md` as "where Quark stores sensitive things" — there's no guide to actually using
  it (adding an entry, organizing folders, exporting for migration).
- **Docs** (`docs/user-journeys/docs.md`) — `.qdoc` document creation and editing. Not mentioned anywhere.
- **Sheets** (`docs/user-journeys/sheets.md`) — `.qsheet` spreadsheet creation and editing. Not mentioned
  anywhere.
- **Photo albums and favorites** (`docs/user-journeys/photos.md`) — `getting-started.md`'s Photos section only
  says "browse, view, and download." The product supports creating albums, favoriting photos (with a
  dedicated favorites view), rotating photos, and viewing metadata.
- **Multiple hosts** (`docs/user-journeys/settings.md`) — Settings supports adding, switching, and removing
  multiple Quark devices from one app. Not documented — likely relevant to anyone with more than one Quark or
  who replaces their device.
- **Update version selection** — `getting-started.md` only documents the auto-update toggle. The product also
  lets you check available versions and pick a specific target version, which matters to anyone who wants to
  hold back an update or knows which version fixed something.

## 3. Positioning gaps other NAS docs cover, that Quark's don't

Every competitor doc set opens with a clear statement of who the product is for and how the account model
works, because that's the first thing a switcher needs to know. Quark's docs don't state this directly:

- **Quark is single-user per device.** `docs/user-journeys/auth.md` confirms one account per Quark instance —
  there's no multi-user, no groups, no per-folder permissions. Every competitor (Synology, QNAP, TrueNAS,
  Unraid) leads with multi-user account and permission setup as a core doc section, so a reader coming from
  one of those products will look for it and assume it's missing by omission rather than by design. Worth a
  short, explicit note (probably in `welcome.md` or `how-it-works.md`): one owner account per device, and
  what that means for a household that wants separate access for each person today (nothing — sharing between
  people isn't a feature yet, confirmed absent in `file-browser.md` and `photos.md`).
- **No file/folder sharing.** Related to the above — there are no share links, public links, or per-user
  permissions in `file-browser.md`. Not a bug, but `security-guide.md`'s "What Quark Does Not Do" section
  would be the natural place to state this alongside the existing "doesn't scan for viruses" disclosures.
- **What happens when a drive fails.** `security-guide.md` covers the 3-2-1 rule and physical security, but
  not the operational question every NAS doc answers: a drive Quark depends on dies — what does the owner see,
  and what do they do next? `storage-devices.md` doesn't describe failure handling either, so this may need a
  product-side answer before it can be documented, not just a docs change.
- **Device migration / factory reset walkthrough.** `welcome.md` promises a "painless 1:1 swap" to new
  hardware if the device breaks, but there's no actual guide for it (what to back up first, how to attach the
  old drives to a new Quark, whether a factory reset wipes the vault). Every competitor has a dedicated
  "replace your NAS" or "reset to factory defaults" page.
- **Supported drives/filesystems and minimum requirements.** Synology, QNAP, TrueNAS, and Unraid all publish a
  compatibility list (drive types, filesystems, minimum hardware). Quark's docs don't state what drives are
  supported, formatted how, or what happens to an unsupported/pre-formatted drive when connected.
- **A general FAQ.** `help.md` is troubleshooting-only (can't reach it, install errors, VPN conflicts,
  performance, missing uploads). Competitor help centers separate a top-level FAQ (pricing, hardware, what
  happens if the company shuts down, is it really private) from troubleshooting. Some of this exists in
  `welcome.md`'s conversational Q&A style ("How can we trust you guys?") but it's not indexed as an FAQ, so a
  reader with a factual question has to know to look on the Welcome page for it.

## Explicitly not recommending

To stay inside `AGENTS.md`'s "only describe features Quark actually ships" rule, these common NAS-doc topics
are deliberately **not** flagged as gaps, because Quark doesn't have the underlying feature:

- Multi-user accounts, groups, or per-folder permissions (single-user by design, see above).
- RAID configuration (no evidence of RAID support in `storage-devices.md` or the README).
- A third-party app store / container platform (Quark ships fixed first-party apps: Cirrus, Photos, Docs,
  Sheets, Vault, Health — not an extensible app platform like Synology's Package Center or TrueNAS's Apps).
- Share links / public links (no sharing feature exists yet, per `file-browser.md`).
- DLNA/media-server streaming, though `how-it-works.md` currently lists "Books & Media" as something Quark
  "stores" — that line should be checked against whether Quark actually renders/streams media beyond serving
  the raw file, since it reads like a bigger claim than the file-browser/photos journeys support.

## Suggested next step

Turn section 1 into an immediate doc fix (it's actively wrong today) — pair it with confirming the intended
copy with whoever owns the Settings/Trash product behavior. Sections 2 and 3 are new-content work and should
probably become separate, normal PRs (one topic each, per this repo's one-focused-commit convention) rather
than one large docs PR.
