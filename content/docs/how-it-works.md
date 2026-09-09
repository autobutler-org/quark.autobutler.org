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

If we offer an optional backup or sync service later, it would require your explicit opt-in. It would not be the
default, and it would not be forced.

## Accessing from outside your home (coming soon)

We are building a way to reach your files when you are not on home WiFi — work, travel, phone data.

That feature is not available yet. When it ships, the goal is a private, encrypted path between your devices and your
Quark, with your actual file data staying under your control — not sitting on our servers as a hosted cloud. We will
document how it works in plain English when it is ready to use. Until then, Quark is for your home network.

## What Quark stores

When you plug in a drive, Quark keeps things in ordinary folders:

- **Photos and videos** — from your phone or computer, browsable by date
- **Documents** — PDFs, notes, spreadsheets, whatever you keep
- **Media** — books, videos, and files from any device on your network

Everything is real files in real folders. No proprietary lock-in.

## The files live on the drive, not in the box

This is the part worth understanding, because it is the reason the rest of the pitch holds up.

Quark is the thing that serves your files. The drive is the thing that holds them. Your photos and documents are written
to the storage device as normal files in normal folders, and they stay there whether or not Quark is running.

So if the box dies, gets replaced, or you simply unplug the drive and carry it to a laptop, your files are still there
and still readable. Nothing is trapped in a database or a format only we can open. Swap the box, keep the files.

## Backups (coming soon)

Persisting on the drive is not the same as being backed up. A drive is one copy in one building, and one copy is the
copy that gets lost.

Quark does not yet do this for you. Automatic copies to a second drive is a feature we are building, and we would rather
ship it late than ship something that quietly stops working and takes your only backup with it. When it lands, the
shape we are aiming for is:

- A second drive attached to Quark that holds a full copy of what matters
- Copies that run on their own, on a schedule, without you remembering to start them
- Somewhere obvious in the app that tells you the last copy actually finished

Until then, the copying is manual and the plan is the ordinary one: a second drive, and a third copy somewhere that is
not your house. See the [Security Guide](/docs/security-guide) for the 3-2-1 version of that.
