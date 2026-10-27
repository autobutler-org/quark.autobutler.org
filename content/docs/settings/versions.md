---
title: Versions and release notes
description: Which Quark version these docs describe, how to see the version you run, and where release notes live
navigation:
  title: Versions
  order: 4
---

# Versions and release notes

These docs describe **Quark v0.56.2**. If your Quark runs a different version, some screens may not match what you
read here.

Quark gets new versions every so often. Each one fixes problems or adds features. This page shows you how to see which
version you have, what changed, and how an admin updates.

## How to use it

### See which version you run

There are two versions to know about: your Quark itself, and the app you use to reach it. They come from the same
releases, but they can drift apart. For example, your Quark may have been updated while a phone app has not.

1. Open **Settings** from the app menu.
2. Go to the **Updates** tab. Your Quark's version shows under **Quark version (installed)**.
3. Go to the **About** tab. Your app's version reads **App version:** followed by a number.

### Read what changed

- On **Settings → Updates**, tap **What's in this release** to see what changed in your Quark's version.
- On **Settings → About**, tap **App version** to see the same for your app.

### Update your Quark (admins)

Quark never updates itself. An admin starts each update.

1. Open **Settings → Updates**.
2. Pick a version from **Update Quark to version**.
3. Tap **Start update**. Quark updates, then restarts.

When there is nothing newer, the tab says **No updates available**. Everyone can see the installed version, but only
an admin can update.

## About release notes

Release notes live on [GitHub Releases](https://github.com/autobutler-org/quark/releases), with one page per version.
Each page lists the changes since the last release, one line each, with a link to the change. The list is written for
the people who build Quark, so expect some technical words. This site does not keep a separate "what's new" page.

If a release turns out to have a serious bug, it is pulled, and it stops being offered on **Settings → Updates**. The
fix arrives as a newer version that an admin installs the usual way.

## What's inside your build

**Settings → About** also has a **Software Bill of Materials**. It lists every part your app and your Quark are built
from, each with its version, under **Flutter dependencies** and **Go dependencies**. It is read from the build you are
actually running, so you can check what is on your own Quark instead of taking our word for it. The source code is
public at [github.com/autobutler-org/quark](https://github.com/autobutler-org/quark).

A version built by hand from the source code reads **Development build** instead of a number, and has no release notes
link.

## Related

- [Settings](/docs/settings#updates): the **Updates** and **About** tabs
- [Getting Started](/docs/start/getting-started#updates): updates in the first-run guide

## Nerd Notes

Checked against quark `main` at `c0f4eefc` (v0.56.2, tagged 2026-10-24, plus one test-only commit).

**Tags and releases.** Each release is a tag like `v0.56.2`. Pushing a tag runs GoReleaser, which builds and uploads
the release to Azure blob storage (the main update source) and to GitHub Releases (`docs/release.md`). The notes are
GitHub's generated "What's Changed" list. `docs:` and `test:` commits are left out (`.goreleaser.yaml`).

**Pulling a release.** `make release/yank` deletes the version's blob, and the GitHub release is marked prerelease or
deleted. **Settings → Updates** lists only non-development releases newer than the installed one
(`pkg/util/updateutil/updateutil.go`), read from Azure first, so a pulled version disappears.

**API.** Paths are relative to `/api/v0`. All need a signed-in user.

- `GET /version` returns `{"semver", "gitCommit", "goVersion", "buildDate"}`. A development build sends `"NOSEMVER"`
  as `semver`.
- `GET /version/available` lists newer releases. Add `?all=true` to list every release.
- `GET /sbom` returns the Go dependency list shown on **Settings → About**.
- `POST /version/update` starts an update. It is admin only.

```bash
curl -s http://<your-quark>/api/v0/version -H "Authorization: Bearer $TOKEN"
```

**On the box.** `quark version` prints `semver@commit`, plus the build date when one is stamped. A development build
prints only the commit.
