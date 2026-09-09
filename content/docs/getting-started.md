---
title: Getting Started
description: Get up and running with Quark — setup, files, and finding your way around
navigation:
  title: Getting Started
  order: 2
---

# Getting Started

This guide is day-to-day Quark — set up the box, open it from your phone or laptop, and move files around. No terminal
required.

---

## Set up the hardware (non-nerd path)

What you need:

- Your Quark device (or a supported box you've installed Quark on)
- A free ethernet port on your home router (preferred) or WiFi if your setup uses that
- A phone or computer on the same home network

Worth having, though not required to finish setup:

- **A spare USB drive or external hard drive.** Quark works fine without one, but everything then lives on a single
  device. If that device fails, the files go with it. A second drive you copy the irreplaceable folders onto is the
  cheapest insurance there is — see the [Security Guide](/docs/security-guide).

Steps:

1. Plug Quark into power and into your router.
2. Attach any extra storage you want Quark to manage.
3. Wait a minute for it to come up.
4. On a phone or computer already on that home WiFi, open a browser and go to **`http://quark.home.local`** (or the
   hostname you were given at setup).
5. Create your owner account when the setup screen asks. Pick a password you will remember, and write it down.

If the page won't load: same WiFi as Quark, Quark powered on, try restarting the router once. Still stuck? See
[Help](/docs/help), or [Nerd Notes](/docs/nerd-notes) if you're installing from a release yourself.

---

## Accessing Quark day to day

1. Open a browser on a device on your home WiFi
2. Go to **`http://quark.home.local`** (or your hostname)
3. Log in with your username and password

> **Tip:** Bookmark the address so you don't have to type it every time.

Quark is built for your home network by default — that's intentional.

---

## Cirrus — your files

Cirrus is the file browser. Same idea as Google Drive or iCloud, except the files are on your drive at home.

### Browsing your files

When you open Cirrus you'll see your files and folders listed. You can:

- **Click a folder** to open it
- **Click a file** to download or preview it (images and common file types open in a viewer)
- **Use the breadcrumb bar** at the top to navigate back up the folder tree
- **Click the home icon** in the breadcrumb to jump back to the root

### Changing the view

Cirrus has three layouts — pick whichever works best for what you're doing:

- **List** — a compact row-by-row view, good for lots of files
- **Grid** — larger thumbnails, good for photos
- **Unified / Per-device** — toggle between seeing all your storage devices as one combined view, or seeing each device
  separately

### Searching for a file

Click the search icon in the top bar and type a filename. Cirrus will search across all your connected storage.

---

## Uploading files

1. Navigate to the folder you want to upload into
2. Click the **Upload** button in the top bar
3. Choose your files from your device
4. Wait for the upload to complete — a progress indicator will show you how it's going

You can upload multiple files at once. Large files may take a moment depending on your home network speed.

---

## Creating folders

1. Navigate to where you want the new folder
2. Click the **New** button in the top bar
3. Type a name and confirm

---

## Moving, renaming, and deleting

Right-click (or long-press on mobile) any file or folder to open the action menu. From there you can:

- **Rename** — change the name
- **Move** — move it to a different folder or storage device
- **Delete** — remove it

### Delete and trash

Deleted files go to a trash folder on the device and stay recoverable for about 30 days. After that they are purged
for good.

Treat that as a 30-day window to change your mind, not as a recycle bin you can leave things in. The polished
Google Drive–style trash view is still to come.

---

## Storage devices

Quark can manage multiple storage devices (hard drives, USB drives) connected to it. If you have more than one:

- Use the **Unified** view to see everything in one place
- Use the **Per-device** view to see what's on each drive separately
- When uploading, you may be prompted to choose which device to upload to

---

## Photos

The Photos section shows your images organized by time. See [Photos](/docs/photos) for browsing and uploading from your
phone on the home network.

---

## Vault

Quark includes an encrypted password vault on your hardware. See [Vault](/docs/vault) for soft-launch
setup (master password only — no recovery phrase). Details on limits live in the
[Security Guide](/docs/security-guide).

---

## Health

The Health page shows you how Quark is doing:

- **Disk usage** — how much storage space is used vs. available
- **Temperature** — the device's current temperature (important for small devices like a Raspberry Pi)
- **Uptime** — how long the device has been running

If anything looks off (disk nearly full, temperature very high), this is where you'll see it first.

---

## Settings

The Settings page lets you:

- **Toggle automatic updates** — turn on to have Quark update itself overnight when a new version is available; turn off
  if you want to control updates manually
- **Export performance metrics** — saves recent health data to a file you can share if you're troubleshooting with the
  team

Quark's routine contact with the public internet is checking for software updates. Optional features you turn on later
(remote access when it ships, imports you start yourself) are separate from that default.

---

## Logging out

Click your username or the settings icon and choose **Log out** when you're done. This is good practice on shared
devices.

---

## Next steps

- [Help & Support](/docs/help) — troubleshooting and how to get in touch
- [Security Guide](/docs/security-guide) — passwords, backups, and limits
- [How It Works](/docs/how-it-works) — local-first explained plainly
- [Google Takeout](/docs/google-takeout) — moving Photos/Drive exports onto Quark
