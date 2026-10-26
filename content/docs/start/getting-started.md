---
title: Getting Started
description: Set up your Quark, open it from your phone or laptop, and find your way around
navigation:
  title: Getting Started
  order: 2
---

# Getting Started

This guide covers Quark day to day. You set up the box, open it from your phone or laptop, and move files around. You
won't need a terminal.

## How to use it

1. Plug Quark into power and into your router, then wait a minute.
2. On a phone or computer on your home WiFi, open a browser and go to **quark.local**.
3. Agree to the terms, create your owner account, and save your recovery phrase.
4. Pick a theme. You land in **Files**, ready to upload.

The rest of this page walks through each step, then shows you around.

---

## Set up the hardware

What you need:

- Your Quark device (or a supported box you've installed Quark on)
- A free ethernet port on your home router (preferred) or WiFi if your setup uses that
- A phone or computer on the same home network

Worth having, though not required to finish setup:

- **A spare USB drive or external hard drive.** Quark works fine without one, but then everything lives on a single
  device. If that device fails, the files go with it. A second drive you back up onto is the cheapest insurance there
  is. See [Storage and Backups](/docs/system/storage-and-backups).

Steps:

1. Plug Quark into power and into your router.
2. Attach any extra storage you want Quark to manage.
3. Wait a minute for it to come up.
4. On a phone or computer already on that home WiFi, open a browser and go to **`https://quark.local`**. If that
   doesn't open, [Connecting](/docs/start/connecting#finding-your-quark) lists the other addresses to try.
5. Your browser warns you that the connection is not private. That is expected, and
   [explained below](#your-browser-warns-you-the-connection-is-not-private). Continue past it.
6. Read the terms. They are the first screen. The page opens with a plain-language summary: "Your files stay on your
   Quark", "Keep your own backup", and "It's for your household". The full terms follow, and they are what you accept.
   Click **I Agree**.
7. Create your owner account. The setup screen asks for a **Username**, a **Password** of at least 8 characters, and
   **Confirm password**. Click **Create account**. Pick a password you will remember, and write it down.
8. Save your recovery phrase. Quark shows a list of words under **Save your recovery phrase**. It is the only way to
   reset your password if you forget it, and it is not shown again. Write it down, or tap **Copy to a password
   manager**. Tick **I have saved my recovery phrase somewhere safe.** and click **Continue**.
9. When you reach **Choose your theme**, pick **System**, **Light**, or **Dark** and click **Get started**. You can
   change it later in Settings. On a Quark device this step can also offer **Name this Quark**, the name it uses on
   your network.
10. You land on **Files**, with a welcome card offering **Upload**, **New folder**, and **Open Vault**. The card stays
    until you dismiss it.

The account you create here is the owner. It is the first admin: the account that manages the Quark. Everyone else in
the house gets their own account, which an admin adds from **Settings → Account → Users and groups**.

The terms come up once per Quark. Connect to a different Quark and you are asked again.

If a brand-new Quark shows you the sign-in screen instead of setup, click **First time here? Set up this Quark** under
the form. Setup and sign-in both show which Quark you are connected to, so you can switch if the address is wrong.

If the page won't load, check that you're on the same WiFi as Quark, that Quark is powered on, and that the address
starts with `https://`. Then try restarting the router once. Still stuck? See [Help](/docs/help), or
[Nerd Notes](/docs/nerd-notes) if you're installing from a release yourself.

### Your browser warns you the connection is not private

The first time you open Quark, your browser shows a warning: "Your connection is not private," or a crossed-out
padlock. Click **Advanced**, then **Proceed**. On Safari, click **Show Details**, then **visit this website**.

This is the one place where owning your own hardware is a little less smooth than renting someone else's. It is worth
understanding rather than just clicking through.

Quark encrypts the connection from the moment you plug it in, using a certificate it makes for itself. The encryption
is real. What your browser objects to is that nobody _vouched_ for the certificate. Normally a certificate authority on
the public internet does that, and it can only do so for a public address. Your Quark lives on your WiFi and has no
public address, which is the whole point of it.

So the warning means "this certificate was not countersigned by a stranger," not "this connection is insecure." On your
own network, talking to your own box, you are the one vouching for it. Your browser remembers once you proceed.

The warning comes back on a new browser or device, and about once a year when Quark replaces its certificate.
[Connecting](/docs/start/connecting#the-certificate) lists every time you'll see it. The phone apps never show it.

---

## Accessing Quark day to day

1. Open a browser on a device on your home WiFi.
2. Go to **`https://quark.local`** (or your Quark's own name).
3. Sign in with your username and password.

> **Tip:** Bookmark the address so you don't have to type it every time.

Quark keeps you signed in on that device. A sign-in lasts about a month if you stop using it, and three months at the
most. After that, Quark asks you to sign in again.

Quark works on your home network by default. To reach it when you're away from home, an admin can turn on
[remote access](/docs/settings/remote-access) in **Settings → Network**. It stays off until they do.

---

## Files

Files is the file browser. Open it from the app drawer. It works like Google Drive or iCloud, except the files are on
your drive at home.

### Where Files opens

That depends on your account:

- **A member** lands in their own folder, with shortcuts to **My files** and **Groups** (the folders of the groups you
  belong to). **Shared with me** appears once someone has shared something with you.
- **An admin** lands at the top of everything on the Quark, with shortcuts to **My files**, **Groups**, and
  **All files**. An admin can open every folder, including other people's.

### Browsing your files

You'll see your files and folders listed. You can:

- **Click a folder** to open it.
- **Click a file** to open it. Where Quark has a viewer or editor for that kind of file, it opens there. Otherwise you
  get a details view with **Download** and **Open with…** buttons.
- **Use the breadcrumb bar** at the top to move back up the folder tree. A member's own folder is as far up as it goes.

[File Types](/docs/files/file-types) lists which files open in Quark and which only download.

### Changing the view

- **List**: a compact row-by-row view, good for lots of files
- **Grid**: larger thumbnails, good for photos

The views menu in the top bar holds the rest:

- **Filter devices**: choose which drives to show
- **Layout**: List or Grid again
- **Grouping**: **Unified** shows all your drives together; **Per-device** lists each drive separately

### Searching for a file

Click **Search** in the top bar and type part of a filename. Files finds every file whose name contains what you typed,
across all your drives. It matches names only, not what is written inside a file. To find a word inside a document or
spreadsheet, search from the **Docs** or **Sheets** page instead. See [Files](/docs/files#searching).

---

## Uploading files

1. Open the folder you want to upload into.
2. Click **Upload** in the top bar.
3. Choose your files from your device.
4. Wait for the upload to finish. A progress indicator shows how it's going.

You can upload several files at once. Large files take longer, depending on your connection.

Folder uploads, drag and drop, what happens when a name is already taken, and big files are covered in
[Files](/docs/files#uploading).

---

## Creating folders and files

1. Open the folder where you want the new folder or file.
2. Click **New folder** or **New file** in the top bar. On a phone, tap **Create** to open the **Add to this folder**
   sheet instead.
3. Type a name and confirm.

**New file** asks which kind you want: **Document**, **Spreadsheet**, or **Generic File**.

---

## Moving, renaming, and deleting

Open a file or folder's menu from its three-dot button, with a right-click, or with a long press on mobile. From there
you can:

- **Download**: save a copy to the device you are using
- **Move/Rename**: one entry for both. Change the name, or move it somewhere else
- **Share…**: give another account on this Quark access
- **Version history**: earlier versions of a document, spreadsheet, or presentation, to preview or restore (files on
  the internal drive only; see [Files](/docs/files#version-history))
- **Delete**: send it to Trash

A few entries only appear where they apply: **Extract here** on an archive, **Convert video** on a video, **Open as
presentation** on a PowerPoint file, and **Navigate to folder** on a search result.

Your own home folder and a group's folder stay where they are, so a member is not offered **Move/Rename** or **Delete**
on those. Everything inside them has the full menu.

### Trash

Deleted files and folders go to **Trash**. Open it from the app drawer. Each row shows where the item came from and how
many days are left before Quark removes it for good.

From Trash you can:

- **Restore**: put it back where it was. If something new already sits there, move or rename the new thing first;
  restore will not overwrite it.
- **Delete permanently**: remove it now, after a confirm step
- **Empty trash**: clear everything shown (this asks first too)

You can open folders inside Trash to browse what was inside them. Files in Trash do not preview or open. They are only
there to restore or let go.

Items stay recoverable for about **30 days**. Then an automatic sweep deletes them for good. Treat that window as a
change-your-mind period, not long-term storage.

Trash still takes up space on the drive until it is emptied. More on bulk restore, multiple drives, and who sees what in
[Trash](/docs/trash).

---

## Storage devices

Quark can manage several storage devices (hard drives, USB drives) connected to it. If you have more than one:

- Set **Grouping** to **Unified** in the views menu to see everything in one place.
- Set it to **Per-device** to see what's on each drive separately.
- When you upload, Quark may ask which drive to upload to.

Your drives are listed on the **Storage** tab of the **System** page. Each drive shows a health word, from **Healthy**
to **Replace soon**. A card at the top of the tab says how well protected your files are: **Unprotected**, **Basic**, or
**Protected**, depending on how many backup drives hold a recent copy. It also suggests your next step.

See [Storage and Backups](/docs/system/storage-and-backups) for what each rating means, what Quark does with a
plugged-in drive, and how to back one up.

---

## Photos

Photos shows your images organized by time. See [Photos](/docs/photos) for browsing and uploading from your phone.

---

## Calendar and Books

**Calendar** is one shared calendar for the whole household. **Books** gathers every PDF and EPUB on your Quark into
one list, whatever folder it's in. Both are in the app drawer. See [Calendar](/docs/calendar) and [Books](/docs/books).

---

## Vault

The vault keeps the logins you would rather not memorize. Everyone on your Quark has their own vault. It opens with the
password you already sign in with, so there is no second password to remember.

Your vault is locked on your own phone or computer before anything is saved to the Quark. The Quark only keeps the
locked copy, so nobody else in the house can open your vault, an admin included.

To set it up, open **Vault** from the app drawer, or tap **Open Vault** on the welcome card. Type your sign-in password.
Add your recovery phrase too, so a forgotten password doesn't cost you the vault. See [Vault](/docs/vault) for the
steps, and the [Security Guide](/docs/help/security-guide#the-vault) for what happens if you lose both.

---

## Health

Health is a tab on the **System** page. Open **System** from the app drawer. It has three tabs: **Health**, **Storage**,
and **Jobs**. The Health tab shows how Quark is doing:

- **CPU**: how busy the processor is
- **Memory**: how much memory is in use
- **Disk**: how full the Quark's own disk is
- **Temperature**: the hottest sensor reading, when the Quark has a temperature sensor

A summary at the top says **All systems healthy**, **Some readings are elevated**, or **Issues detected**. If anything
looks off, such as a nearly full disk or a high temperature, this is where you'll see it first. [System](/docs/system)
explains each reading and its limits.

---

## Settings

Settings is split into tabs. Everyone sees **General**, **Account**, **Network**, **Updates**, and **About**.

- **General**: which Quark the app connects to, the theme, and a link to your drives
- **Account**: **Change password**, **Sign out**, and a list of your **Sessions**, where you can sign out a session you
  no longer use
- **Network**: remote access and connected devices. Admins also see the Quark's device name and SSH access.
- **Updates**: the installed version, any newer versions, and where an admin starts an update
- **About**: Help & Support, the terms, and the list of software Quark is built from

Admins also see a **Features** tab, but only while Quark has a beta feature to try. The current release has none, so
the tab doesn't show.

**Change password** asks for your current password, then the new one twice. You stay signed in on the device you're
using, and every other session is signed out. Your vault keeps working with the new password.

Deleting your account and resetting the Quark live behind the **Account and data** row at the bottom of the **Account**
tab, so neither is a stray tap away:

- **Delete account**: removes your login from this Quark (separate from wiping the box). Your files stay on the Quark.
- **Reset this Quark**: admins only. Factory-resets the appliance, for when that is what you actually mean.

Deleting an account and resetting the Quark are different on purpose. One removes your login; the other can wipe data on
the device. Read the confirmations carefully.

### Updates

Quark does not update itself. An admin updates it from **Settings → Updates**: choose a version under **Update Quark to
version**, then click **Start update**. If you're already up to date, the tab says **No updates available**. Look in on
the tab now and then. [Versions](/docs/settings/versions) has more.

Security fixes for the operating system underneath are different. They install on their own, with no setting to turn
on. They leave the kernel (the core of the operating system) as it is, and they never restart the box by themselves.

Quark's routine contact with the public internet is fetching those operating system security fixes. It looks for new
Quark versions only when someone opens the Updates tab. Optional features you choose to use, such as remote access or
an import you start yourself, are separate from that default.

### Remote access

Remote access lets your household reach Quark when you're away from home. It is off until an admin turns it on in
**Settings → Network**, and an admin can turn it off again at any time. Everyone signed in can see whether it's on.
See [Remote Access](/docs/settings/remote-access).

---

## Signing out

Go to **Settings → Account** and choose **Sign out** when you're done. This is good practice on shared devices.

### Where am I signed in?

Under **Sign out**, the **Sessions** card lists everywhere your account is signed in, with when each session signed in
and when it was last used. The one you are using is marked **This session**. Rows show times only. There is no device
or browser name to look for.

- **Sign out** on a row ends that session. Whoever is using it has to sign in again.
- **Sign out everywhere else** ends every session except the one you are using.

---

## Related

- [Files](/docs/files): uploads, downloads and archives, search, Trash, and version history
- [Connecting](/docs/start/connecting): finding your Quark, the phone apps, and the certificate
- [How It Works](/docs/start/how-it-works): local-first, explained plainly
- [Accounts and Sharing](/docs/users): admins and members, homes, groups, and sharing
- [Settings Reference](/docs/settings): every Settings tab, and what Delete account and Reset erase
- [System](/docs/system): what Health's readings and limits mean, and what Jobs shows
- [Storage and Backups](/docs/system/storage-and-backups): drive health, protection, and backups
- [Security Guide](/docs/help/security-guide): passwords, backups, and limits
- [Help & Support](/docs/help): troubleshooting and how to get in touch
- [Google Takeout](/docs/files/google-takeout): moving Photos and Drive exports onto Quark
- [Photos](/docs/photos), [Calendar](/docs/calendar), [Books](/docs/books), and [Vault](/docs/vault)
- [Docs](/docs/docs): writing, saving, and exporting documents
- [Sheets](/docs/sheets): spreadsheets, and bringing in CSV and Excel files
- [Sheets formulas](/docs/sheets/formulas): every function, and where formulas differ from Excel
- [Slides](/docs/slides): presentations, with PowerPoint import and export
- [Chat](/docs/chat): encrypted channels for the people on your Quark

## Nerd Notes

Everything below was checked against Quark `main` at v0.56.2. Paths are relative to `/api/v0`, and every call except
setup needs `Authorization: Bearer <token>`. An unknown `/api/v0/...` path answers `200` with the web app's HTML, not a
`404`, so check `Content-Type` before trusting a `200`.

### First run

- The app shows the terms first, then the three setup steps: **Create account**, **Recovery phrase**, **Theme**. The
  device-name field on the theme step only appears on a Quark running as the installed Linux service, not in Docker.
- `POST /auth/setup` creates the owner. It takes `username`, `authKey` and `recoveryKey`. Both keys are derived on the
  client, so no password or phrase goes over the wire. `quark auth-key` derives them from the shell; see
  [Nerd Notes](/docs/nerd-notes#authentication).
- A session expires after 30 days without use and 90 days after sign-in, whichever comes first. `GET /auth/sessions`
  lists them; `DELETE /auth/sessions/:id` and `DELETE /auth/sessions` sign one or all others out.
- `PUT /auth/password` changes the password, re-wraps the vault and chat keys in the same transaction, and signs out
  every other session of the account.

### Settings

- `GET /settings/features` lists the beta flags. The registry is empty on this release, so it returns
  `{"features":[]}` and the app hides the Features tab.
- `GET /version` is the installed version. `GET /version/available` asks the release feed for newer versions, and only
  runs when the Updates tab asks. `POST /version/update` starts an update (admins only).
- `GET /settings/remote-access` returns `{"enabled":false,"connected":false}` until an admin turns it on with
  `POST /settings/remote-access`. `DELETE /settings/remote-access` turns it off. Both are admin only.

### Storage, Health and Trash

- `GET /storage/protection` returns the protection `level` (`unprotected`, `basic`, `protected`). A backup counts for
  30 days. Details in [Storage and Backups](/docs/system/storage-and-backups#nerd-notes).
- `GET /health` feeds the Health tab.
- Trash keeps items for 30 days before the sweep removes them. `GET /trash` lists them, and `POST /trash/restore`,
  `POST /trash/delete` and `POST /trash/empty` act on them.
