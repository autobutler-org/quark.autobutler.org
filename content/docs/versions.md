---
title: Versions and release notes
description: Which Quark version these docs describe, how to see the versions you run, and where release notes live
navigation:
  title: Versions
  order: 26
---

# Versions and release notes

These docs describe **Quark v0.52.0**. If your Quark runs a different version, some screens may not match what you read
here.

---

## How Quark is versioned

Each release is a tag like `v0.52.0`. Every tag builds and publishes a release, and each one gets its own page on
[GitHub Releases](https://github.com/autobutler-org/quark/releases).

---

## See which version you run

There are two versions to know about: the Quark box, and the app you are using to reach it. Both come from the same
releases, but they can drift apart, for example when the box has been updated and an installed phone app has not.

- **Your Quark's version.** Open **Settings → Updates**. It shows under **Quark version (installed)**. Tap
  **What's in this release** below it to open that version's release notes.
- **Your app's version.** Open **Settings → About**. It reads **App version:** followed by the version. Tap it to open
  that version's release notes.

A build made from source rather than from a release reads **Development build** instead of a version number, and has no
release notes link.

---

## Where release notes live

Release notes are on [GitHub Releases](https://github.com/autobutler-org/quark/releases), one page per version. Each
page lists the changes merged since the last release, one line each with a link to the change. The list is written for
the people building Quark, so expect technical wording. This site does not keep a separate "what's new" page.

If a release turns out to have a serious bug, it is pulled, and it stops being offered on **Settings → Updates**.

---

## Updating

Quark does not update itself. Anyone can see the installed version on **Settings → Updates**, but only an admin can
update: pick a version from **Update Quark to version**, then tap **Start update**. When there is nothing newer, the tab
says **No updates available**. See [Settings in Getting Started](/docs/getting-started#settings) for the rest of that
tab.

---

## What's inside your build

**Settings → About** also has a **Software Bill of Materials**: every **Flutter dependency** of the app and every **Go
dependency** of your Quark, each with its version. It is read from the build you are actually running, so you can check
what is on your own box rather than take our word for it. The source code is public at
[github.com/autobutler-org/quark](https://github.com/autobutler-org/quark).
