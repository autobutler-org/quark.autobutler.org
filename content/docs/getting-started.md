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
4. On a phone or computer already on that home WiFi, open a browser and go to **`https://quark.local`** (or the
   hostname you were given at setup).
5. Your browser will warn you that the connection is not private. That is expected — see
   [below](#your-browser-warns-you-the-connection-is-not-private). Continue past it.
6. Read the terms. They are the first screen, before anything else. The page opens with a plain-language summary —
   "Your files stay on your Quark", "Keep your own backup", "It's for your household" — and then the full terms, which
   are what you accept. Click **I Agree**.
7. Create your owner account. The setup screen asks for a **Username**, a **Password** of at least 8 characters, and
   **Confirm password**. Click **Create account**. Pick a password you will remember, and write it down.
8. When you reach **Choose your theme**, pick **System**, **Light**, or **Dark** and click **Get started**. You can
   change it later in Settings.
9. You land on **Files**, with a welcome card offering **Upload**, **New folder**, and **Open Vault**. The card stays
   until you dismiss it.

The account you create here is the owner. It is the first admin — the account that manages the Quark. Everyone else in
the house gets their own account, which an admin adds from **Settings → Account → Users and groups**.

The terms come up once per Quark. Connect to a different Quark and you are asked again.

If a brand-new Quark shows you the sign-in screen instead of setup, click **First time here? Set up this Quark** under
the form. Setup and sign-in both show which Quark you are connected to, so you can switch if the address is wrong.

If the page won't load: same WiFi as Quark, Quark powered on, try restarting the router once. Still stuck? See
[Help](/docs/help), or [Nerd Notes](/docs/nerd-notes) if you're installing from a release yourself.

### Your browser warns you the connection is not private

The first time you open Quark, your browser shows a warning — "Your connection is not private," or a crossed-out
padlock. Click **Advanced**, then **Proceed**. On Safari, **Show Details**, then **visit this website**.

This is the one place where owning your own hardware is slightly less smooth than renting someone else's, so it is worth
understanding rather than just clicking through.

Quark encrypts the connection from the moment you plug it in, using a certificate it generates for itself on first boot.
The encryption is real. What your browser is objecting to is that nobody _vouched_ for the certificate — normally a
certificate authority on the public internet does that, and it can only do so for a public address. Your Quark lives on
your WiFi and has no public address, which is the entire point of it.

So the warning means "this certificate was not countersigned by a stranger," not "this connection is insecure." On your
own network, talking to your own box, you are the one vouching for it. Your browser will remember once you proceed.

---

## Accessing Quark day to day

1. Open a browser on a device on your home WiFi
2. Go to **`https://quark.local`** (or your hostname)
3. Sign in with your username and password

> **Tip:** Bookmark the address so you don't have to type it every time.

Quark keeps you signed in on that device. A sign-in lasts about a month if you stop using it, and three months at the
most. After that, Quark asks you to sign in again.

Quark is built for your home network by default — that's intentional.

---

## Files

Files is the file browser — open it from the app drawer. Same idea as Google Drive or iCloud, except the files are on
your drive at home.

### Where Files opens

That depends on your account:

- **A member** lands in their own folder, with shortcuts to **My files** and **Groups** (the folders of the groups you
  belong to). **Shared with me** appears once someone has shared something with you.
- **An admin** lands at the top of everything on the Quark, with shortcuts to **My files**, **Groups**, and
  **All files**. An admin can open every folder, including other people's.

### Browsing your files

You'll see your files and folders listed. You can:

- **Click a folder** to open it
- **Click a file** to open it. Where Quark has a viewer or editor for that kind of file, it opens there. Otherwise you
  get a details view with **Download** and **Open with…** buttons.
- **Use the breadcrumb bar** at the top to move back up the folder tree. A member's own folder is as far up as it goes.

### Changing the view

- **List** — a compact row-by-row view, good for lots of files
- **Grid** — larger thumbnails, good for photos

The views menu in the top bar holds the rest:

- **Filter devices** — choose which drives to show
- **Layout** — List or Grid again
- **Grouping** — **Unified** shows all your drives together; **Per-device** lists each drive separately

### Searching for a file

Click the search icon in the top bar and type a filename. Files will search across all your connected storage.

---

## Uploading files

1. Navigate to the folder you want to upload into
2. Click the **Upload** button in the top bar
3. Choose your files from your device
4. Wait for the upload to complete — a progress indicator will show you how it's going

You can upload multiple files at once. Large files may take a moment depending on your home network speed.

---

## Creating folders and files

1. Navigate to where you want the new folder or file
2. Click **New folder** or **New file** in the top bar. On a phone, tap **Create** to open the **Add to this folder**
   sheet instead.
3. Type a name and confirm

**New file** asks which kind you want: **Document**, **Spreadsheet**, or **Generic File**.

---

## Moving, renaming, and deleting

Open a file or folder's menu from its three-dot button, with a right-click, or with a long press on mobile. From there
you can:

- **Download** — save a copy to the device you are using
- **Move/Rename** — one entry for both: change the name, or move it somewhere else
- **Share…** — give another account on this Quark access
- **Delete** — send it to Trash

A few entries only appear where they apply: **Extract here** on an archive, **Convert video** on a video, and
**Navigate to folder** on a search result.

Your own home folder and a group's folder stay where they are, so a member is not offered **Move/Rename** or **Delete**
on those. Everything inside them has the full menu.

### Trash

Deleted files and folders go to **Trash** — open it from the app drawer. Each row shows where the item came from and
how many days are left before Quark removes it for good.

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

- Set **Grouping** to **Unified** in the views menu to see everything in one place
- Set it to **Per-device** to see what's on each drive separately
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

Health is a tab on the **System** page. Open **System** from the app drawer; it has three tabs: **Health**, **Storage**
and **Jobs**. The Health tab shows you how Quark is doing:

- **Disk usage** — how much storage space is used vs. available
- **Temperature** — the device's current temperature (important for small devices like a Raspberry Pi)
- **Uptime** — how long the device has been running

If anything looks off (disk nearly full, temperature very high), this is where you'll see it first.

---

## Settings

Settings is split into tabs. Everyone sees **General**, **Account**, **Network**, **Updates** and **About**. Admins also
get a **Features** tab while something is in beta.

- **General** — which Quark the app connects to, theme, and a link to your drives
- **Account** — **Sign out** and a list of your **Sessions**, where you can sign out a session you no longer use
- **Network** — remote access and connected devices
- **Updates** — the installed version and available updates, and where an admin installs one. There is also an
  **Automatic updates** switch (admins only), but it does not make Quark update itself yet; see below
- **About** — the app's version, Help & Support, and the terms
- **Features** — admins only, and only while Quark has a beta feature: a switch to turn each one on or off

Deleting your account and resetting the Quark live behind the **Account and data** row at the bottom of the **Account**
tab, so neither is a stray tap away:

- **Delete account** — removes your login from this Quark (separate from wiping the box). Your files stay on the Quark.
- **Reset this Quark** — admins only. Factory-resets the appliance when that is what you actually mean.

Deleting an account and resetting the Quark are different on purpose: one removes your login; the other can wipe data on
the device. Read the confirmations carefully.

Quark does not update itself in this version, and the **Automatic updates** switch on the Updates tab does not change
that. Updating is a manual step an admin starts from that tab, so look in on the Updates tab now and then.

Security fixes for the operating system underneath are different: they install on their own, with no setting to turn
on. They leave the kernel — the core of the operating system — as it is, and they never restart the box by themselves.

Quark's routine contact with the public internet is fetching those operating system security fixes. It looks for new
Quark versions only when someone opens the Updates tab. Optional features (remote access, which is off until an admin
turns it on; imports you start yourself) are separate from that default.

---

## Signing out

Go to **Settings → Account** and choose **Sign out** when you're done. This is good practice on shared devices.

### Where am I signed in?

Under **Sign out**, the **Sessions** card lists everywhere your account is signed in, with when each session signed in
and when it was last used. The one you are using is marked **This session**. Rows show times only — there is no device
or browser name to look for.

- **Sign out** on a row ends that session. Whoever is using it has to sign in again.
- **Sign out everywhere else** ends every session except the one you are using.

---

## Next steps

- [Help & Support](/docs/help) — troubleshooting and how to get in touch
- [Security Guide](/docs/security-guide) — passwords, backups, and limits
- [How It Works](/docs/how-it-works) — local-first explained plainly
- [Google Takeout](/docs/google-takeout) — moving Photos/Drive exports onto Quark
