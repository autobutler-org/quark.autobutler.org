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

Everyone can look at this tab. Only admins see the buttons that change things: **Mount**, **Set Role**, **Eject**,
**Back up now**, and on a backup drive **Back up onto this drive**, **Schedule**, **Verify**, **Restore files**,
**Restore vaults** and **Restore chat**.

To back up your Quark (admins only):

1. Plug in the drive you want to back up onto.
2. On its card, choose **Set Role**, then **Backup drive**. Enter your username and password when asked.
3. Choose **Back up onto this drive** on the same card.
4. The window lists your other drives, all ticked. Untick any you want to leave out, then choose **Start Backup**.

Backing up doesn't ask for a password. When it's done, tap **Eject** on the drive's card, wait until it says the
drive is safe to unplug, then unplug it and keep it somewhere else.

> **Upgrading from v0.58 or earlier?** Quark v0.59.0 changed where backups are kept. A backup made before you
> upgraded is no longer read by **Restore files**, **Restore vaults**, **Restore chat** or **Verify**, and it doesn't
> count toward your protection level. Back up again after you upgrade. Once the new backup is done, you can delete the
> old folders by hand (see [What a backup keeps](#what-a-backup-keeps)).

## What the Storage tab shows

### How protected your files are

Quark sorts your drives into two kinds. A **data drive** holds your files: the storage inside your Quark, your
**Default Storage** drive, and any drive with no role. A **backup drive** holds copies of them.

Each data drive gets one of three levels, and the card at the top of the tab shows the weakest one for the whole
Quark:

- **Unprotected**: no recent copy. One broken drive could take those files.
- **Basic**: one backup drive holds a recent copy.
- **Protected**: two or more backup drives, on different disks, hold a recent copy.

A copy counts as recent for 30 days. A copy only counts when it sits on a different physical disk from the drive it
copies, and not on a drive that reads **Replace soon**. Each data drive's card has a chip that opens to show every
copy of it and, for any copy that doesn't count, why.

The card also suggests one next step. An admin can tap it to **Assign the backup role** or **Start a backup**. Once
every drive is protected, it reminds you to **Keep one backup drive somewhere else**. **Back up now** starts a backup
onto every backup drive that is plugged in. Tap **Why two backup drives?** to see what a fire, a theft or a failed
drive does to one copy compared with three.

### Each drive's card

Every drive gets a card with:

- its name, and whether it is **Inside your Quark** or a **Plugged-in drive**
- how full it is, and what kind of files fill it
- its role, if it has one
- its health

A backup drive's card says which drives it holds copies of and when the newest one was made, for example "Holds
copies of Built-in storage, Photos. Newest Nov 2." If it has a schedule, it says so, for example "Backs up weekly."
Admins also see the drive's list of backups, each with its time, size and drives.

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
- **Backup drive**: your other drives are copied onto it when you back up. A plugged-in drive or the storage inside
  your Quark can have this role.
- **Unassigned**: no special role.

A backup onto the storage inside your Quark helps if a plugged-in drive fails, but it can't protect the Quark's own
files, because they are on the same disk. For those, use a plugged-in backup drive.

## Making a backup

A backup copies your data drives onto the backup drive: all of them, or only the ones you leave ticked. One backup
drive is never copied onto another. Your chat and every account's vault are copied too, still locked with the same
encryption. A vault in the backup opens only with the password or recovery phrase of the account it belongs to.
Nobody sets a separate backup password.

While the backup runs, its progress shows on the backup drive's card and names the drives being copied. Backups are
also listed on the **Jobs** tab, by name, such as "Back up Built-in storage, Music and 2 more onto Backup". If a backup
fails, a message says so.

The Quark does the work, not your phone or computer. You can close the app, and the backup keeps going. Only one backup
can run onto a drive at a time.

### Back up on a schedule

An admin can have a backup drive back up by itself:

1. On the backup drive's card, choose **Schedule**.
2. Pick **Daily**, **Weekly** or **Monthly**, and tick the drives to copy.
3. Choose **Save**.

Quark checks every 15 minutes whether a backup is due. A drive that was unplugged when its backup came due shows
"Due, will run when plugged in." and starts soon after it is plugged back in. Scheduled backups show on
the **Jobs** tab, for admins only. A drive that reads **Replace soon** is skipped. Choose **Off** to stop
the schedule.

Without a schedule, choose **Back up onto this drive** or **Back up now** from time to time. Later backups only copy
what is new or changed, so they are quicker than the first.

Quark also reminds admins with the bell at the top of the app. **Back up this Quark** appears while there has never
been a backup. **Your backup is out of date** appears once the last one is 30 days old. An admin can turn either
reminder off in **Settings → General**. The reminders only appear in the app.

### Keep a copy somewhere else

A backup drive that sits next to your Quark can be lost along with it in a fire, a flood or a break-in. Plug in, back
up, eject, unplug, and keep the drive somewhere else, such as at a relative's house. The [Security
Guide](/docs/help/security-guide) explains the 3-2-1 rule this is part of.

## What a backup keeps

Each backup is kept in its own folder named after the date and time it started, inside a **backups** folder on the
backup drive. Inside it, each drive you backed up has its own folder: **Built-in storage** for the storage inside your
Quark, and the drive's name with "(USB …)" for a plugged-in drive. Your files sit in the same folders they had on
Quark.

Every backup is complete on its own. A file that hasn't changed since the last backup takes no extra space on most
drives, because Quark links it to the earlier copy. On a FAT32 or exFAT drive it is copied again instead.

Older backups stay, so you can get back a file you deleted or changed months ago. To make room:

- **Delete a backup by hand.** On the backup drive's card, an admin opens the list of backups and deletes one. It is
  gone for good, not moved to the trash. Deleting one backup can free less space than its listed size, because
  unchanged files are shared with other backups.
- **Let Quark clear space.** When the drive is short of room, a new backup first deletes the oldest backups, one at a
  time. It never deletes the newest backup, the newest copy of any drive, or a backup being restored. If there still
  isn't enough room, the backup stops before copying anything and says so. Delete old backups or use a bigger drive.

**Backups made before v0.59.0** sit loose in the drive's **quark → data → files** folder, in an **internal** folder
and one folder per drive, beside **backup_manifest.json**, **chat_backup.db** and **vault_items_backup.db**. Quark no longer
reads them. After you make a new backup, you can delete those old folders and files by hand from a computer.

## Checking a backup with Verify

**Verify** on a backup drive's card reads every file in its newest backup. It compares each one with the list Quark
wrote when that backup finished. You'll see which backup it checked and how many files are fine, or **Issues found**
with how many are missing or damaged.

Verify only checks. It doesn't fix or restore anything. If the drive has no backup yet, it asks you to back up onto it
first.

## Getting files back

An admin can restore from the backup drive's card. When the drive holds more than one backup, each restore window
lets you pick which one to read. It starts with the newest.

### Restore files

**Restore files** puts each drive's files back onto that drive. A file that is already there is kept as it is, so
nothing is overwritten. A backup also keeps files that were deleted since it was made, so the restore brings those
back too. If a drive the files came from isn't plugged in, tick **Put the files of a drive that is not attached on
built-in storage** to get them back into a folder of the same name inside your Quark. The restore runs on the Quark
and shows on the **Jobs** tab.

You can also copy files back yourself. Plug the backup drive into a laptop, open the **quark** folder, then **data**,
**files**, **backups**, the dated folder you want, and the drive's folder. They are ordinary files, so any computer
can open them.

### Restore vaults

**Restore vaults** brings back every account's vault from the backup. It works only while no account on this Quark
has anything in its vault. Usernames must match letter for letter, and every backed-up vault needs its account on this
Quark first. A restored vault opens with the password its account had when the backup was made.

### Restore chat

**Restore chat** brings back the chat's channels and messages. It works only while chat on this Quark is empty: if
there are any channels or messages, it refuses and changes nothing. The backup doesn't carry accounts, so people are
matched by username and their accounts must be created first. When it finishes, it says how many channels and
messages came back and names any username that matched no account.

Both ask for your password again.

### Restoring onto a new Quark

The vault and chat copies in a backup are tied to the Quark that made them. A Quark you set up fresh on new hardware
refuses them, and nothing changes. A Quark moved to new hardware with `quark bundle` keeps restoring its own
backups. **Restore files** isn't tied to one Quark, so your files come back either way.

### Before you reset your Quark

**Reset this Quark** has an option called **Quark data on attached drives**. It is off unless you turn it on. When
it's on, the reset erases Quark's folder on every drive plugged in at that moment, a backup drive included. **Eject**
and unplug your backup drive before you reset.

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

To unplug a drive safely, an admin taps **Eject** on its card. Quark asks first. On the default storage drive it
also warns that new uploads will fail until the drive is mounted again. After **Eject**, a message says the drive is
safe to unplug, and the card reads **Not mounted · safe to unplug** with **Mount**. **Eject** is greyed out while a
backup runs onto that drive. If the drive's files are still in use, Quark refuses and the page shows the error. The
built-in drive has no **Eject** button.

### More than one drive in Files

With more than one drive, the views menu in **Files** has a **Grouping** switch. **Unified** shows all your drives
together. **Per-device** lists each drive separately. **Filter devices**, in the same menu, picks which drives Files
shows. **Upload** and **New folder** go straight to the **Default Storage** drive. To
put them on another drive, tap the ▾ beside the button on a wide screen, or long-press it on a phone. If no Default
Storage drive is plugged in and enabled, Quark asks which drive to use.

## If something goes wrong

- **"I plugged in my drive and my old files aren't there."** Quark only shows its own folder on a drive. Your old files
  are still there, outside that folder. Upload or copy them in.
- **"My drive doesn't show up."** Wait a few seconds, then refresh the **Storage** tab. If the card is there but the
  drive isn't ready, an admin can press **Mount**. If there's no card at all, try another USB port or cable.
- **"I don't see Back up onto this drive."** It appears only for admins, and only on a drive with the **Backup drive**
  role.
- **"Restore can't find my backup."** A backup made before v0.59.0 is no longer read. Back up again.
- **"My backup says there isn't enough space."** Delete old backups from the drive's list of backups, or use a bigger
  drive.
- **"My protection level dropped."** Your last backup is probably more than 30 days old, you deleted a backup, you
  added a drive, or the backup drive now reads **Replace soon**. Back up again, or onto a healthier drive.
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

Since v0.59.0 (quark #4046) each snapshot is a **run**: its own folder under `backups/` in the backup drive's
`quark/data/files/`, named after the minute it started in the Quark's local time.

```text
backups/
  2026-11-07 21.57/
    Built-in storage/
    Photos (USB 90C82C65)/
    backup_manifest.json
    chat_backup.db
    chat_backup.db.mac
    vault_items_backup.db
    vault_items_backup.db.mac
```

| Entry                                          | What it is                                               |
| ---------------------------------------------- | -------------------------------------------------------- |
| `Built-in storage/`, `<name> (USB <serial8>)/` | each source drive's files                                |
| `chat_backup.db`                               | the chat tables, as ciphertext (SQLite installs only)    |
| `vault_items_backup.db`                        | wrapped vault keys and items (SQLite installs only)      |
| `*.db.mac`                                     | HMAC-SHA256 binding each file to the Quark that wrote it |
| `backup_manifest.json`                         | `completedAt`, each folder's drive, every file's SHA-256 |

A second run in the same minute gets a `(2)`, `(3)` and so on suffix. A run is written as `backups/.<run>.partial/` and
renamed once its manifest is written; nothing reads a partial run. A file unchanged since the newest run holding its
drive is hard-linked from it; on FAT and exFAT it is copied. Every run is complete on its own. Sources are the data
drives only (every managed drive that isn't a `snapshot-backup` drive), optionally narrowed by `sourceSerials`.
`backups/` is never a source and live sync leaves it alone. The rest of the main database (accounts, sessions, groups,
albums, sharing) is not in a snapshot.

The root layout older versions wrote (`internal/`, `<name>_<serial8>/` and the files beside them, rewritten in place)
is not read by restore, verify, the run list or protection status, and nothing deletes it.

Before copying, a snapshot estimates the bytes it can't hard-link. While free space is short it deletes the oldest
complete run, never the newest run, any drive's newest copy, or a run a restore is reading. If that still isn't enough
it fails with "not enough space on <drive> for this backup: delete old backups or use a bigger drive". A drive that
can't report free space is never pruned.

The vault export needs no password. Each account's vault key is stored wrapped under that account's password and, when
the client had it, its recovery phrase, so the copy is exactly as private as the live database. `vault_backup.db`, the
retired household vault, is not read.

### Restore and binding

Restore files, restore vaults, restore chat and verify each take an optional `run` (a folder name from the run list);
empty means the newest complete run, and each answer names the run it used. Restore files never overwrites a file;
with `missingToBuiltIn` a gone drive's files go to a same-named folder on built-in storage. Restore vaults refuses
while any account has a vault item or a backed-up account here already has a vault key, and matches usernames exactly.
Restore chat refuses (409) while chat has any channel or message. Both re-confirm the admin's auth key, share the
sign-in rate limit, and log every attempt. On PostgreSQL a run has no chat or vault file and those routes answer 501.

The `.mac` key is HKDF-SHA256 over the install's `authSaltSecret`, which no snapshot copies (quark #4028). A restore
refuses a file this Quark didn't write, a changed file, or a missing MAC on a drive it has bound, with a 400 and no
change. A Quark rebuilt on new hardware has a new secret and refuses the bound files of the one it replaces; a Quark
moved with `quark bundle export` keeps the secret and keeps restoring its own snapshots.

### Schedules

A schedule is a settings row per backup drive, `backupSchedule:<serial>`: `cadence` (`off`, `daily`, `weekly`,
`monthly`) and `sourceSerials`. It is due when the newest run holding any of its sources is older than 24 hours, 7 days
or 30 days. A check runs every 15 minutes and on every device change, and starts a system job onto each due, attached
drive that isn't Replace soon. A failed scheduled backup isn't retried for 6 hours, or the cadence if that is shorter.
Saving the schedule resets that wait.

### Protection and reminders

`GET /api/v0/storage/protection` returns `level` (`unprotected`, `basic`, `protected`) for the whole Quark, which is
the weakest data drive's, plus `sentence`, `nextStep` (`assign-backup-role`, `start-backup`, `keep-one-elsewhere`),
`dataDrives` (each with its level and copies) and `backupDrives` (each with a state: `no-copies`, `receiving`,
`current`, `behind`, `away` or `retired`, what it holds, and its newest copy). The old `drives` field is gone.

Copies are read from the run folders. An attached backup drive is scanned on each request; an away one answers from
its cached `backupRuns:<serial>` row. A copy counts when the backup drive isn't `replace-soon`, the copy finished inside
30 days (`protectionutil.StaleAfter`), and the backup drive is on a different physical disk from the data drive.
Partitions of one disk count once. Offsite isn't tracked.

`GET /api/v0/notifications` gives an admin `backup_due` (no complete run on any backup drive) or `backup_stale` (the
newest run is at least 30 days old, `notificationutil.BackupStaleAfter`). Non-admins get an empty list. The list is
worked out on request, so reminders never pile up.

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
| `POST /devices/snapshot-backup`           | admin    | `targetDeviceSerial`, `sourceSerials`, `acknowledgeHealth`    |
| `POST /devices/snapshot-backup/verify`    | admin    | `deviceSerial`, `full`, `run`; the app sends `full: true`     |
| `POST /devices/usb/:serial`               | admin    | mount a USB drive                                             |
| `DELETE /devices/usb/:serial`             | admin    | unmount a USB drive; Storage **Eject**                        |
| `POST .../snapshot-backup/restore-vault`  | admin    | `deviceSerial`, `password`, `run`; restore vaults             |
| `POST .../snapshot-backup/restore-chat`   | admin    | `deviceSerial`, `password`, `run`; restore chat (v0.60.0)     |
| `POST .../snapshot-backup/restore-files`  | admin    | `deviceSerial`, `run`, `missingToBuiltIn`; returns a job      |
| `GET .../snapshot-backup/runs`            | admin    | `?deviceSerial=`; complete runs, newest first, with sizes     |
| `DELETE .../snapshot-backup/runs`         | admin    | `deviceSerial`, `run`; deletes one run for good               |
| `GET .../snapshot-backup/schedule`        | admin    | `?deviceSerial=`; cadence, sources, `due`, `waitingForDrive`  |
| `PUT .../snapshot-backup/schedule`        | admin    | `deviceSerial`, `cadence`, `sourceSerials`                    |
| `PATCH /devices/rename`                   | admin    | rename a drive; the app has no button for it                  |

With `full: true`, Verify hashes every file. Without it, only sizes are compared.

Setting `default-storage` or `snapshot-backup` on a `replace-soon` drive, or starting a backup onto one, answers 409
unless `acknowledgeHealth` is `true`. A second backup onto a drive that already has one pending or running also
answers 409. Backups run on the Quark's job queue, so reloading the page doesn't stop one.
