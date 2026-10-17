---
title: How Quark Works
description: How Quark keeps your files on hardware you control by default — local-first, on your home network
navigation:
  title: How It Works
  order: 4
---

# How Quark Works

Quark is a small device on your home network. It stores your files on drives you own. By default, your content stays on
hardware you control.

## Your files, your network

Phones, laptops, and tablets on your home WiFi talk to your router. The router talks to Quark. Quark talks to your
drive. Your files are on that drive — not on a Google server, not on an Apple server, not in a data center you will
never visit.

## How this is different from iCloud or Google Photos

With typical cloud storage, your photos and files travel over the internet to a computer you don't own. They come back
when you ask for them. Convenient. Also rented.

With Quark, day-to-day use is local. Files move over your own WiFi to a box in your house. You own the hardware. You own
the data.

Remote access, once it ships, is planned as a private path to that same box — not a copy of your files on our hardware.
If we ever offer an optional backup or sync service, it would require your explicit opt-in. It would not be the
default, and it would not be forced.

## Accessing from outside your home

Remote access is coming soon. Today, Quark works on your home network: your phone or computer reaches it over your own
WiFi. In the current release, **Settings → Network** shows remote access as **Coming soon**, so there is nothing to turn
on yet.

Why not yet: the Quark side is built, but the app cannot bring your phone or laptop onto that private network yet.

What it is meant to be when it ships: a private path to your box, not a hosted cloud. Your files stay on your drive, and
we do not store a copy of them. It stays off until an admin turns it on, each Quark gets its own network rather than
being pooled with other households, and turning it off again is one switch.

## What Quark stores

When you plug in a drive, Quark keeps things in ordinary folders:

- **Photos and videos** — from your phone or computer, browsable by date
- **Documents** — PDFs, notes, spreadsheets, whatever you keep
- **Media** — books, videos, and files from any device on your network

Everything is real files in real folders. No proprietary lock-in. On a plugged-in drive, those folders sit inside
`quark/data/files/`, a folder Quark makes for itself. Files already on the drive outside it do not show up in Quark
until you bring them in. See [Storage and Backups](/docs/storage-and-backups).

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
does not run on a schedule yet, so start one every so often. [Storage and Backups](/docs/storage-and-backups) covers
the steps and how to get files back.

The plan is still the ordinary one: a second drive, and a third copy somewhere that is
not your house. See the [Security Guide](/docs/security-guide) for the 3-2-1 version of that.
