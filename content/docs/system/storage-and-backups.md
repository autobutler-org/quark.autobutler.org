---
title: Storage and Backups
description: What Quark does with a plugged-in drive, how an admin makes a snapshot backup, and how to get files back
navigation:
  title: Storage and Backups
  order: 12
---

# Storage and Backups

Quark keeps your files on drives you can hold in your hand. This page covers what happens when you plug one in, how an
admin copies everything onto a second drive, and how you get files back from that copy.

## Where drives are listed

Open **System** from the app drawer and pick the **Storage** tab. Each drive gets a card with its name, whether it is
**Inside your Quark** or a **Plugged-in drive**, how full it is, and a badge for its role or for holding the **Vault**.
If nothing is attached, the tab says **No storage devices detected.**

Everyone can see this list. Only admins get the buttons on it: **Mount**, **Set Role**, **Back Up**, and **Verify**.

## What Quark does with a plugged-in drive

Quark makes its own folder on the drive and works inside it. Everything you see for that drive in **Files** lives in
`quark/data/files/` on the drive. Items in its Trash sit next to that, in `quark/data/trash/`.

That has two consequences worth knowing up front:

- **Files already on the drive do not show up in Quark.** Plug in a drive full of old photos and Files shows an empty
  drive, because the photos are outside Quark's folder. To bring them in, upload or copy them into Quark.
- **On a laptop, open `quark/data/files/`.** If you unplug the drive and plug it into a computer, that folder holds
  your files as ordinary files in ordinary folders.

### Plugging in and unplugging

Quark looks for new USB drives every few seconds and mounts them on its own. You do not need to press anything. If a
drive is listed but not mounted, an admin can press **Mount** on its card to try again.

exFAT, FAT32, and NTFS drives, the formats most drives come in, are set up so Quark can write to them. Quark has no
button to format or erase a drive.

There is no **Eject** button in the app. If a backup is running onto a drive, wait for it to finish before you unplug
it.

### Seeing more than one drive in Files

With more than one drive, the views menu in Files has a **Grouping** switch: **Unified** shows everything in one place,
**Per-device** shows each drive separately. **Filter devices**, in the same menu, picks which drives Files shows. When
you upload, Quark may ask which drive to put the files on.

## Drive roles

**Set Role** on a drive's card opens **Set Device Role**. Changing a role asks for your username and password again.

- **Default Storage** — uploads and new folders start here. On a plugged-in drive, the app adds that built-in storage
  is also copied onto it.
- **Snapshot Backup** — "Plug in, back up everything, unplug." This is the backup drive. Only a plugged-in drive can
  have this role.
- **Unassigned** — no special role.

## Making a snapshot backup

A snapshot copies the files from every other drive attached to your Quark onto the backup drive. Only admins can run
one.

1. Plug in the drive you want to back up onto.
2. On **System → Storage**, choose **Set Role** on its card and pick **Snapshot Backup**. Enter your username and
   password when asked.
3. Choose **Back Up** on the same card and enter your username and password again.
4. The **Snapshot Backup** dialog says **Back up all devices to** that drive. Choose **Start Backup**.

A progress card shows **Preparing backup...**, **Scanning files...**, then **Copying files** with a percentage, and ends
with **Backup complete** or **Backup failed**. The backup runs on the Quark, so you can close the app while it works.
A second backup onto the same drive cannot start until the first one finishes.

The dialog also offers to include your vault, protected by a separate recovery password of at least 8 characters.
Leave it empty to back up files only. See [Vault](/docs/vault) for what that copy is for.

### It runs when you start it

Nothing starts a snapshot on a schedule. To keep the copy current, run **Back Up** again every so often. Later runs only
copy what is new or changed, so they are faster than the first.

Admins get a reminder in the app's notifications: **Back up this Quark** while there has never been a backup, and
**Your backup is out of date** once the last one is 30 days old. Each one can be turned off in **Settings → General**.
These reminders appear in the app only.

### Keep a copy somewhere else

A backup drive that stays plugged in next to the Quark goes wherever the Quark goes in a fire, flood, or burglary. Plug
in, back up, unplug, and keep the drive somewhere else. The [Security Guide](/docs/security-guide) has the 3-2-1 rule
this is part of.

## What a snapshot keeps

Inside the backup drive's own `quark/data/files/` folder, a snapshot makes one folder per drive it copied from:

- `internal` for the storage inside your Quark
- the drive's name, an underscore, and the first 8 characters of its serial number for each plugged-in drive

Inside each folder are your files, in the same folders they had on Quark. Next to them the snapshot writes
`backup_manifest.json`, the list of files that **Verify** checks against, plus `chat_backup.db` and, if you included
the vault, `vault_backup.db`.

A snapshot only adds and updates. It skips files that have not changed and copies the rest. It never removes anything
from the backup drive, so a file you delete or rename on Quark stays in the backup under its old name. That is useful
when you need something you deleted months ago. It also means the backup drive fills up over time, and you clear out
what you no longer want by hand.

## Checking a backup with Verify

**Verify** on a backup drive's card reads every file on it and compares it with the list written when the last backup
finished. It reports **Backup verified** with a count of files that are fine, or **Issues found** with how many are
missing or corrupted. Only admins see **Verify**.

Verify tells you whether the copy is readable. It does not repair or restore anything. If you removed files from the
backup drive yourself, run **Back Up** again first so the list matches what is there.

## Getting files back from a backup drive

There is no restore button for files. You copy them back yourself, in either of two ways:

- **Through Quark.** Plug the backup drive into your Quark. An admin can open it in **Files** like any other drive, find
  the file under `internal` or the drive's folder, and move or copy it back where it belongs.
- **Through a computer.** Plug the backup drive into a laptop, open `quark/data/files/` on it, and copy what you need.
  The files are ordinary files, so any computer can read them.

The vault is the exception: it has its own **Restore from backup drive** in the Vault menu, which needs the recovery
password you set when you made the backup. See [Vault](/docs/vault). The chat copy has no restore in the app yet.

### Before you reset your Quark

**Reset this Quark** has an option, off by default, called **Quark data on attached drives**. It erases Quark's folder
on every drive attached at that moment, a backup drive included. Unplug your backup drive before a reset.

## Troubleshooting

- **"I plugged in my drive and my old files aren't there."** Quark only shows its own `quark/data/files/` folder on a
  drive. Your old files are still on the drive, outside that folder. Upload or copy them in.
- **"My drive doesn't show up."** Give it a few seconds, then refresh the **Storage** tab. If the card says the drive
  is not mounted, an admin can press **Mount**. If there is no card at all, try another USB port or cable.
- **"I don't see Back Up."** It appears only for admins, and only on a drive whose role is **Snapshot Backup**.

## Related

- [How It Works](/docs/how-it-works) — why your files live on the drive and not in the box
- [Security Guide](/docs/security-guide) — the 3-2-1 backup rule
- [Getting Started](/docs/getting-started) — day-to-day use of Files and Trash
