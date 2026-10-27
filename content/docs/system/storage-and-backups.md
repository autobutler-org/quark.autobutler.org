---
title: Storage and Backups
description: See your drives and how healthy they are, back everything up onto a second drive, and get files back
navigation:
  title: Storage and Backups
  order: 2
---

# Storage and Backups

Quark keeps your files on drives you can hold in your hand. The **Storage** tab shows each drive, how full it is, and
how healthy it looks. It also tells you how well protected your files are.

A backup is a second copy of everything, on a separate drive. If the first drive fails, the copy is still there. This
page shows you how to make one, how to check it, and how to get files back from it.

## How to use it

To see your drives:

1. Open **System** from the app menu.
2. Pick the **Storage** tab.

Everyone can look at this tab. Only admins see the buttons that change things: **Mount**, **Set Role**, **Back Up**
and **Verify**.

To back up your Quark (admins only):

1. Plug in the drive you want to back up onto.
2. On its card, choose **Set Role**, then **Snapshot Backup**. Enter your username and password when asked.
3. Choose **Back Up** on the same card.
4. The **Snapshot Backup** window says where the copy is going. Choose **Start Backup**.

Backing up doesn't ask for a password. When it's done, unplug the drive and keep it somewhere else.

## What the Storage tab shows

### How protected your files are

A card at the top of the tab gives your files one of three levels:

- **Unprotected**: your files are only on this Quark. One broken drive could take them.
- **Basic**: one backup drive holds a recent copy.
- **Protected**: two or more backup drives hold a recent copy.

A backup counts as recent for 30 days. After that, the level drops until you back up again. The card lists each backup
drive with the date it was last backed up, or the reason it doesn't count.

The card also suggests one next step. An admin can tap it to **Assign the backup role** or **Start a backup**. Once you
have two backup drives, it reminds you to **Keep one backup drive somewhere else**. Tap **Why two backup drives?** to
see what a fire, a theft or a failed drive does to one copy compared with three.

### Each drive's card

Every drive gets a card with:

- its name, and whether it is **Inside your Quark** or a **Plugged-in drive**
- how full it is, and what kind of files fill it
- its role, if it has one
- its health

If nothing is attached, the tab says **No storage devices detected.**

### Drive health

Each drive shows one of four health words, with a short sentence that explains it:

- **Healthy**: nothing worrying.
- **Watch**: still working, but keep an eye on it. A drive that has run for a very long time, or that has started to
  work around worn spots, shows this.
- **Replace soon**: plan to move your files off this drive and buy a new one.
- **Unknown**: Quark couldn't read the drive's health. That isn't a sign the drive is fine, so treat it with care.

Tap **Show details** to see the readings behind the word, such as how many hours the drive has run and how warm it is.

Quark looks out for you here. If you try to store files or a backup on a **Replace soon** drive, it asks first. Choose
**Use this drive anyway** to go ahead, or **Cancel** to stop. Files already on the drive stay where they are either way.

## Drive roles

A role tells Quark what a drive is for. An admin sets it with **Set Role** on the drive's card, which opens **Set Device
Role**. Changing a role asks for your username and password.

- **Default Storage**: uploads and new folders start here. Only one drive can have this role. If a plugged-in drive has
  it, the storage inside your Quark is also copied onto it as you go.
- **Snapshot Backup**: "Plug in, back up everything, unplug." This is a backup drive. Only a plugged-in drive can have
  this role.
- **Unassigned**: no special role.

The storage inside your Quark can be **Default Storage** or **Unassigned**. Giving it **Default Storage** takes the role
back from a plugged-in drive.

## Making a backup

A backup copies the files from every other drive on your Quark onto the backup drive. Your chat and every account's
vault are copied too, still locked with the same encryption. A vault in the backup opens only with the password or
recovery phrase of the account it belongs to. Nobody sets a separate backup password.

While the backup runs, a progress card shows **Preparing backup...**, **Scanning files...**, then **Copying files** with
a percentage. It ends with **Backup complete** or **Backup failed**.

The Quark does the work, not your phone or computer. You can close the app, and the backup keeps going. Only one backup
can run onto a drive at a time.

### Back up again every so often

Backups don't run on a schedule. To keep your copy current, choose **Back Up** again from time to time. Later backups
only copy what is new or changed, so they are quicker than the first.

Quark reminds admins with the bell at the top of the app. **Back up this Quark** appears while there has never been a
backup. **Your backup is out of date** appears once the last one is 30 days old. An admin can turn either reminder off
in **Settings → General**. The reminders only appear in the app.

### Keep a copy somewhere else

A backup drive that sits next to your Quark can be lost along with it in a fire, a flood or a break-in. Plug in, back
up, unplug, and keep the drive somewhere else, such as at a relative's house. The [Security
Guide](/docs/help/security-guide) explains the 3-2-1 rule this is part of.

## What a backup keeps

On the backup drive, each drive you backed up gets its own folder. The storage inside your Quark is in a folder called
**internal**. Each plugged-in drive's folder starts with that drive's name. Inside, your files sit in the same folders
they had on Quark.

A backup only adds and updates. It never removes anything from the backup drive. If you delete or rename a file on
Quark, the backup keeps the old copy under its old name. That helps when you need something you deleted months ago. It
also means the backup drive slowly fills up, so clear out what you no longer need by hand.

## Checking a backup with Verify

**Verify** on a backup drive's card reads every file on it. It compares each one with the list Quark wrote when the
last backup finished. You'll see **Backup verified** with how many files are fine, or **Issues found** with how many
are missing or damaged.

Verify only checks. It doesn't fix or restore anything. If you removed files from the backup drive yourself, choose
**Back Up** again first so the list matches what is there.

## Getting files back

There is no restore button for files. You copy them back yourself, in one of two ways:

- **Through Quark.** Plug the backup drive into your Quark. An admin can open it in **Files** like any other drive,
  find the file in the **internal** folder or the drive's folder, and copy it back where it belongs.
- **Through a computer.** Plug the backup drive into a laptop. Open the **quark** folder, then **data**, then
  **files**, and copy what you need. They are ordinary files, so any computer can open them.

The app can't restore the chat or vault copies yet.

### Before you reset your Quark

**Reset this Quark** has an option called **Quark data on attached drives**. It is off unless you turn it on. When
it's on, the reset erases Quark's folder on every drive plugged in at that moment, a backup drive included. Unplug your
backup drive before you reset.

## What Quark does with a plugged-in drive

Quark checks for new drives every few seconds and sets them up on its own. You don't need to press anything. If a
drive is listed but not ready, an admin can press **Mount** on its card to try again.

Most drives come formatted as exFAT, FAT32 or NTFS. Quark can use all three. It has no button to format or erase a
drive.

Quark makes its own folder on the drive and works inside it. This has two effects worth knowing:

- **Files already on the drive don't show up in Quark.** Plug in a drive full of old photos, and Files shows it empty,
  because the photos are outside Quark's folder. To bring them in, upload or copy them into Quark.
- **On a computer, your files are easy to find.** Open the **quark** folder on the drive, then **data**, then
  **files**. They are ordinary files in ordinary folders.

There is no **Eject** button. If a backup is running onto a drive, wait for it to finish before you unplug it.

### More than one drive in Files

With more than one drive, the views menu in **Files** has a **Grouping** switch. **Unified** shows all your drives
together. **Per-device** lists each drive separately. **Filter devices**, in the same menu, picks which drives Files
shows. When you upload, Quark may ask which drive to put the files on.

## If something goes wrong

- **"I plugged in my drive and my old files aren't there."** Quark only shows its own folder on a drive. Your old files
  are still there, outside that folder. Upload or copy them in.
- **"My drive doesn't show up."** Wait a few seconds, then refresh the **Storage** tab. If the card is there but the
  drive isn't ready, an admin can press **Mount**. If there's no card at all, try another USB port or cable.
- **"I don't see Back Up."** It appears only for admins, and only on a drive with the **Snapshot Backup** role.
- **"My protection level dropped."** Your last backup is probably more than 30 days old, or the backup drive now reads
  **Replace soon**. Back up again, or onto a healthier drive.
- **"A drive says Unknown."** Quark couldn't read its health. The drive may still work, but don't count on it as your
  only copy.

## Related

- [System](/docs/system): the other System tabs, Health and Jobs
- [How It Works](/docs/start/how-it-works): why your files live on the drive and not in the box
- [Security Guide](/docs/help/security-guide): the 3-2-1 backup rule
- [Getting Started](/docs/start/getting-started): day-to-day use of Files and Trash

## Nerd Notes

### Where files live on a drive

On a plugged-in drive, Quark's data directory is `<mount>/quark/data`. Files are in `quark/data/files/` and the trash is
beside it in `quark/data/trash/`. Nothing outside `quark/data` is shown in Files.

USB drives are polled every 5 seconds and auto-mounted. exFAT, FAT (`vfat`) and NTFS (`ntfs`, `ntfs3`, `ntfs-3g`) are
mounted with the Quark service user's uid and gid so it can write to them.

### Snapshot layout

A snapshot copies every managed device except the target into the target's `quark/data/files/`:

| Entry                   | What it is                                                                      |
| ----------------------- | ------------------------------------------------------------------------------- |
| `internal/`             | the built-in storage's files                                                    |
| `<name>_<serial>/`      | each USB drive's files: its name, `_`, and the first 8 characters of its serial |
| `chat_backup.db`        | the chat tables, as the ciphertext they already are                             |
| `vault_items_backup.db` | every account's wrapped vault key and vault items, as ciphertext                |
| `backup_manifest.json`  | the SHA-256 and size of every file above, which **Verify** checks against       |

A file is skipped when the target already has it with the same size and a modification time no older than the source.
Nothing on the target is deleted, apart from the temp files the copy itself makes. The rest of the main database
(accounts, sessions, groups, albums, sharing) is not in a snapshot.

The vault export needs no password. Each account's vault key is stored wrapped under that account's password and, when
the client had it, its recovery phrase, so the copy is exactly as private as the live database. Older snapshots may
hold `vault_backup.db`, the retired household vault encrypted under a separate recovery password. This version doesn't
read it.

Restore functions for both exports exist in the code, but no API route or app screen calls them yet (quark #2428).

### Protection and reminders

`GET /api/v0/storage/protection` returns `level` (`unprotected`, `basic`, `protected`), `sentence`, `nextStep`
(`assign-backup-role`, `start-backup`, `keep-one-elsewhere`) and `drives`. On a fresh Quark:

```json
{
  "level": "unprotected",
  "sentence": "Your files are only on this Quark. Assign the backup role to another drive.",
  "nextStep": "assign-backup-role",
  "drives": []
}
```

A drive counts when its role is `snapshot-backup`, it isn't the built-in storage, its health isn't `replace-soon`, and
it has a completed snapshot job inside 30 days (`protectionutil.StaleAfter`). Partitions of one physical disk count
once. Offsite isn't tracked.

`GET /api/v0/notifications` gives an admin `backup_due` (never backed up) or `backup_stale` (last backup at least 30
days old, `notificationutil.BackupStaleAfter`). Non-admins get an empty list. The list is worked out on request, so
reminders never pile up.

### Drive health

`GET /api/v0/storage/devices/status` carries `health` on each device: `verdict` (`healthy`, `watch`, `replace-soon`,
`unknown`), a one-sentence `reason`, the readings, and `worseThanDefault`. On Linux it comes from `smartctl` JSON,
through a root helper that `quark install` writes. Quark doesn't install `smartctl`; without it every drive is
`unknown`. On macOS it comes from `diskutil info`. A verdict is cached for 15 minutes.

40,000 or more power-on hours, or reallocated sectors, give `watch`. Pending sectors, a failed SMART status, or a
worn-out SSD give `replace-soon`.

### Endpoints

All paths are under `/api/v0/storage`.

| Method and path                           | Who      | Notes                                                         |
| ----------------------------------------- | -------- | ------------------------------------------------------------- |
| `GET /devices/status`                     | any user | drives, usage, role, health                                   |
| `GET /protection`                         | any user | protection level                                              |
| `GET /devices/snapshot-backup/status/:id` | any user | a backup job's progress                                       |
| `PUT /devices/role`                       | admin    | `serial`, `role`, `username`, `password`, `acknowledgeHealth` |
| `POST /devices/snapshot-backup`           | admin    | `targetDeviceSerial`, `acknowledgeHealth`; returns `jobId`    |
| `POST /devices/snapshot-backup/verify`    | admin    | `deviceSerial`, `full`; the app sends `full: true`            |
| `POST /devices/usb/:serial`               | admin    | mount a USB drive                                             |
| `DELETE /devices/usb/:serial`             | admin    | unmount a USB drive; the app has no **Eject** button yet      |
| `PATCH /devices/rename`                   | admin    | rename a drive; the app has no button for it                  |

With `full: true`, Verify hashes every file. Without it, only sizes are compared.

Setting `default-storage` or `snapshot-backup` on a `replace-soon` drive, or starting a backup onto one, answers 409
unless `acknowledgeHealth` is `true`. A second backup onto a drive that already has one pending or running also
answers 409. Backups run on the Quark's job queue, so reloading the page doesn't stop one.
