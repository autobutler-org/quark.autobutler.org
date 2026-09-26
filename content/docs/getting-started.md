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
4. On a phone or computer already on that home WiFi, open a browser and go to **`https://quark.local`** (or
   `http://quark.home.local` if that is what your install prints). On the iOS or Android app, **Add Quark** can list
   Quarks it finds on the local network — tap one instead of typing an address. Typing remains the fallback (and is how
   the browser and desktop builds work).
5. Create your **owner** account when the setup screen asks. That first account is the admin for this Quark. Pick a
   password you will remember, and write it down.

If the page won't load: same WiFi as Quark, Quark powered on, try restarting the router once. Still stuck? See
[Help](/docs/help), or [Nerd Notes](/docs/nerd-notes) if you're installing from a release yourself.

---

## Accessing Quark day to day

1. Open a browser on a device on your home WiFi
2. Go to **`https://quark.local`** (or your hostname)
3. Log in with your username and password

> **Tip:** Bookmark the address so you don't have to type it every time. On phone apps, use **Add Quark** to pick a
> discovered device, or switch Quarks from the drawer header when you have more than one saved.

Quark is built for your home network by default — that's intentional. Access from outside the house is still
**coming soon** and is not documented as live here.

---

## Household accounts

One Quark on your home network can have more than one login. Soft-launch framing is still a single household device —
remote access from outside the house is not live yet.

- **Owner / admin** — the account created at setup. Admins see a **Users** page in the drawer (accounts and groups).
- **Request an account** — someone else on the same home WiFi can open the login screen and request access. An admin
  approves (or declines) the request from Users.
- **Admin create** — an admin can also add an account directly from Users, without waiting for a request.
- **Disable / re-enable / delete** — admins can turn an account off, turn it back on, or remove the login. Deleting an
  account removes that person's sign-in; it is not the same as wiping the Quark or emptying Trash. Read the
  confirmations in the app carefully.

Each person lands in **their own** files home and sees **their own** Trash list for deletes they can reach.

---

## Sharing and groups

On the same Quark (still your home network):

- **Share a file or folder** — from Cirrus or a viewer, use **Share** to grant another household account access.
- **Shared with me** — when someone has shared roots with you, a shortcut appears so you can open them without hunting.
- **Groups** — admins create and manage groups on the **Users** page (members, rename, delete). Quark creates a
  protected folder for each group so members have a shared place that is not anyone's personal home.

Sharing is between logins on your Quark. It is not a public internet link, and it is not remote access from outside the
house.

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
- **Delete** — send it to Trash
- **Share** — grant another household account access (see [Sharing and groups](#sharing-and-groups))
- **Convert video** — on video files, queue a conversion job (same flow as from the video viewer)

### Trash

Deleted files and folders go to **Trash** — open it from the app drawer. You see the items from your own deletes
(and anything else your login can reach in Trash). Each row shows where the item came from and how many days are left
before Quark removes it for good.

From Trash you can:

- **Restore** — put it back where it was (if something new already sits at that path, move or rename the new thing
  first; restore will not overwrite)
- **Delete permanently** — remove it now, with a confirm step
- **Empty trash** — clear everything shown (also confirms)

You can open folders inside Trash to browse what was inside them. Files in Trash do not preview or open — they are
only there to restore or let go.

Items stay recoverable for about **30 days**, then an automatic sweep deletes them for good. Treat that window as a
change-your-mind period, not long-term storage.

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

## System (devices, health, jobs)

**System** in the drawer combines devices, health, and background jobs in one place with tabs:

- **Storage** — attached drives and related storage info
- **Health** — disk usage, temperature, and other readings that flag when something needs attention
- **Jobs** — queued work such as video conversion

If anything looks off (disk nearly full, temperature very high), Health is where you'll see it first.

---

## Settings

Settings is split into tabs. Day-to-day items include:

- **Automatic updates** — turn on to have Quark update itself overnight when a new version is available; turn off if you
  want to control updates manually
- **Export performance metrics** — saves recent health data to a file you can share if you're troubleshooting with the
  team
- **Account and data** — drill-down for **Delete account** (every login) and, for admins, **Reset this Quark**. Both ask
  for your account password before they proceed. Deleting an account removes your login; resetting can wipe data on the
  device. They are different on purpose — read the confirmations carefully.
- **Repair installation** — admins can re-apply system setup when an install needs fixing (exact label may vary by
  build)

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
