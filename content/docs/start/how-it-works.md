---
title: How Quark Works
description: How Quark keeps your files on hardware you control by default — local-first, on your home network
navigation:
  title: How It Works
  order: 3
---

# How Quark Works

Quark is a small device on your home network. It stores your files on drives you own. By default, your content stays on
hardware you control.

## How to use it

1. At home, open Quark on any phone or computer on your WiFi. See [Connecting](/docs/start/connecting).
2. Away from home, use the iPhone or Android app. This needs remote access, which an admin turns on in **Settings →
   Network**.
3. Copy the files you can't replace onto a second drive now and then. See [Backups](#backups) below.

## Your files, your network

Phones, laptops, and tablets on your home WiFi talk to your router. The router talks to Quark. Quark talks to your
drive. Your files are on that drive — not on a Google server, not on an Apple server, not in a data center you will
never visit.

## How this is different from iCloud or Google Photos

With typical cloud storage, your photos and files travel over the internet to a computer you don't own. They come back
when you ask for them. Convenient. Also rented.

With Quark, day-to-day use is local. Files move over your own WiFi to a box in your house. You own the hardware. You own
the data.

Remote access doesn't change that. It is a private path back to the same box, not a copy of your files on our
hardware. If we ever offer an optional backup or sync service, it would require your explicit opt-in. It would not be
the default, and it would not be forced.

## Accessing from outside your home

At home, your phone or computer reaches Quark over your own WiFi. Away from home, the iPhone and Android apps use remote
access. The app reaches the box in your house, not a hosted cloud. Your files stay on your drive.

Remote access is off until an admin turns it on in **Settings → Network**. One switch covers the whole household, and
turning it off again is one switch too. Each Quark gets its own private network, not one shared with other households.
Everyone still signs in with their own account. Nothing changes on your router.

[Remote Access](/docs/settings/remote-access) has the steps.

## What Quark stores

When you plug in a drive, Quark keeps things in ordinary folders:

- **Photos and videos** — from your phone or computer, browsable by date
- **Documents** — PDFs, notes, spreadsheets, whatever you keep
- **Media** — books, videos, and files from any device on your network

Everything is real files in real folders. No proprietary lock-in. On a plugged-in drive, Quark keeps them in a folder
it makes for itself. Files already on the drive outside that folder do not show up in Quark until you bring them in. See
[Storage and Backups](/docs/system/storage-and-backups).

## The files live on the drive, not in the box

This is the part worth understanding, because it is the reason the rest of the pitch holds up.

Quark is the thing that serves your files. The drive is the thing that holds them. Your photos and documents are written
to the storage device as normal files in normal folders, and they stay there whether or not Quark is running.

So if the box dies, gets replaced, or you simply unplug the drive and carry it to a laptop, your files are still there
and still readable. Nothing is trapped in a database or a format only we can open. Swap the box, keep the files.

## Backups

Persisting on the drive is not the same as being backed up, and this is the honest tradeoff of keeping your files at
home: nobody else can read them, and nobody else is quietly keeping a spare copy for you either. Google does that second
part on your behalf, and charges you for it in a currency you may not want to keep paying.

It is a solved problem, though, and you solve it once. Copy the irreplaceable folders onto a second drive and keep that
drive somewhere a bad day cannot reach — a fireproof box, a relative's house. Do that and the tradeoff costs you an
afternoon rather than your photos.

Quark can make that second copy for you, when an admin starts it: a **snapshot backup** on **System → Storage**. It
does not run on a schedule yet, so start one every so often. [Storage and Backups](/docs/system/storage-and-backups) covers
the steps and how to get files back.

The plan is still the ordinary one: a second drive, and a third copy somewhere that is
not your house. See the [Security Guide](/docs/help/security-guide) for the 3-2-1 version of that.

## Related

- [Remote Access](/docs/settings/remote-access): using Quark away from home
- [Connecting](/docs/start/connecting): finding your Quark on your home WiFi
- [Storage and Backups](/docs/system/storage-and-backups): drives, and making a second copy
- [Security Guide](/docs/help/security-guide): what Quark talks to on the internet

## Nerd Notes

Checked against quark `main` at `c0f4eefc` (v0.56.2 plus one test-only commit).

- On a plugged-in drive, Quark's files sit in `quark/data/files/` on that drive. Anything outside it is not listed until
  you bring it in.
- Remote access runs a network node built into the Quark binary. It forwards requests to Quark's own server over
  loopback, so no port is opened on your router and Quark's sign-in checks every request
  (`docs/architecture/system-context.md`, "Remote access"). [Remote Access](/docs/settings/remote-access#nerd-notes)
  lists what leaves the box while it is on.
