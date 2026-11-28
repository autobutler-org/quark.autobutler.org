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

Only admins see the buttons that change things: **Mount**, **Set Role** and **Eject** on a drive, and on a backup
drive **Back up onto this drive**, **Schedule**, **Verify**, **Restore files**, **Restore vaults** and **Restore
chat**.

To back up your Quark (admins only):

1. Plug in the drive you want to back up onto.
2. On its card, choose **Set Role**, then **Backup drive**. Enter your username and password when asked.
3. Choose **Back up onto this drive** on the same card.
4. The window lists your other drives, all ticked. Untick any you want to leave out, then choose **Start Backup**.

Backing up doesn't ask for a password. When it's done, choose **Eject** on the drive's card. Once Quark says the drive
is safe to unplug, unplug it and keep it somewhere else.

**Upgraded from Quark v0.58 or earlier?** Backups are now kept differently, and a backup made before the upgrade is
no longer read. Back up again after you upgrade.

## What the Storage tab shows

At the top, admins get a folded **Where things live** card. Open it for one line each on people, who can open what,
connected devices, disks and passwords, with a link to the page that looks after each. This tab is the **Disks** one,
marked "You are here".

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

- **Default Storage**: uploads and new folders go here, without asking. Only one drive can have this role. If a
  plugged-in drive has it, the storage inside your Quark is also copied onto it as you go.
- **Backup drive**: your other drives are copied onto it when you back up. A plugged-in drive or the storage inside
  your Quark can have this role.
- **Unassigned**: no special role.

Making the storage inside your Quark the backup drive helps if a plugged-in drive fails. Its own files are not copied
anywhere, though, because they are on the same disk. For those, use a plugged-in backup drive.

## Making a backup

A backup copies your other drives onto the backup drive: all of them, or only the ones you leave ticked. One backup
drive is never copied onto another. Your chat and every account's vault are copied too, still locked with the same
encryption. A vault in the backup stays locked under the password its account had when the backup was made, and its
recovery phrase if it had one. Nobody sets a separate backup password.

While the backup runs, the backup drive's card shows its progress, naming the drives being copied and how far along
it is. When it ends, Quark says "Backup completed successfully", or tells you it failed.

The Quark does the work, not your phone or computer. You can close the app, and the backup keeps going. Only one backup
can run onto a drive at a time.

### Back up on a schedule

An admin can have a backup drive back up by itself:

1. On the backup drive's card, choose **Schedule**.
2. Pick **Daily**, **Weekly** or **Monthly**, and tick the drives to copy.
3. Choose **Save**.

Quark checks every 15 minutes whether a backup is due. A drive that is unplugged when its backup comes due says "Due,
will run when plugged in." and starts soon after you plug it back in. A drive that reads **Replace soon** is skipped.
Choose **Off** to stop the schedule.

Without a schedule, choose **Back up onto this drive** again from time to time. Later backups are quicker than the
first.

Quark reminds admins with the bell at the top of the app. **Back up this Quark** appears while there has never been a
backup. **Your backup is out of date** appears once the last one is 30 days old. An admin can turn either reminder off
in **Settings → General**. The reminders only appear in the app.

### Keep a copy somewhere else

A backup drive that sits next to your Quark can be lost along with it in a fire, a flood or a break-in. Plug in, back
up, eject, unplug, and keep the drive somewhere else, such as at a relative's house. The [Security
Guide](/docs/help/security-guide) explains the 3-2-1 rule this is part of.

## What a backup keeps

Each backup is its own complete copy, in a folder named for the date and time it started, inside a **backups**
folder on the backup drive. In it, each drive you backed up has a folder: **Built-in storage** for the storage inside
your Quark, and the drive's name with "(USB …)" for a plugged-in drive. Your files sit in the same folders they had on
Quark. A file that hasn't changed since the last backup takes no extra space on most drives. On a FAT32 or exFAT drive
it is copied again.

Older backups stay, so you can get back a file you deleted or changed months ago. To make room:

- **Delete a backup yourself.** An admin sees the drive's backups on its card and can choose **Delete backup**. It is
  gone for good, not moved to the trash.
- **Let Quark make room.** When the drive is short of space, a new backup first deletes the oldest backups, one at a
  time. It never deletes the newest one. If there still isn't room, the backup fails and says to delete old backups or
  use a bigger drive.

## Checking a backup with Verify

**Verify** on a backup drive's card reads every file in its newest backup. It compares each one with the list Quark
wrote when that backup finished. It tells you which backup it checked and how many files are fine, or how many are
missing or damaged.

Verify only checks. It doesn't fix or restore anything. On a drive with no backup yet, it asks you to back up onto it
first.

## Getting files back

An admin can choose **Restore files** on the backup drive's card. The window, **Restore files from this drive**, says
which backup it reads, and lets you pick another when the drive holds several. It puts each drive's files back onto
that drive. A file that is already there is never overwritten. Files deleted since the backup come back too. If a
drive the files came from isn't plugged in any more, tick the box to put its files on the storage inside your Quark
instead. The restore runs on the Quark and shows on the **Jobs** tab.

You can also copy files back yourself. Plug the backup drive into a laptop, open the **quark** folder, then **data**,
**files**, **backups**, the dated folder you want, and the drive's folder. They are ordinary files, so any computer can
open them.

**Restore chat** and **Restore vaults** put those locked copies back. A chat or vault copy with no proof file beside
it is refused, on every drive, and nothing is restored. A chat that already has messages or channels is refused too,
and a vault restore is refused while anyone here already has vault items.

### Before you reset your Quark

**Reset this Quark** has an option called **Quark data on attached drives**. It is off unless you turn it on. When
it's on, the reset erases Quark's folder on every drive plugged in at that moment, a backup drive included. Eject and
unplug your backup drive before you reset.

## What Quark does with a plugged-in drive

Quark checks for new drives every few seconds and sets them up on its own. You don't need to press anything. If a
drive is listed but not ready, an admin can press **Mount** on its card to try again.

Sometimes a card says "Quark can't reach this drive until it restarts." in place of **Mount**. An admin can choose
**Restart Quark** in **Settings → Updates**. After the restart, the drive can be mounted. On a normal Quark box this is
rare.

Most drives come formatted as exFAT, FAT32 or NTFS. Quark can use all three. It has no button to format or erase a
drive.

Quark makes its own folder on the drive and works inside it. This has two effects worth knowing:

- **Files already on the drive don't show up in Quark.** Plug in a drive full of old photos, and Files shows it empty,
  because the photos are outside Quark's folder. To bring them in, upload or copy them into Quark.
- **On a computer, your files are easy to find.** Open the **quark** folder on the drive, then **data**, then
  **files**. They are ordinary files in ordinary folders.

To unplug a drive safely, an admin chooses **Eject** on its card. Quark asks **Eject drive?** first. On the default
storage drive it also warns that new uploads will fail until the drive is mounted again. Afterwards Quark says the
drive is safe to unplug, and the card reads **Not mounted · safe to unplug** with **Mount**. **Eject** is greyed out
while a backup runs. If the drive's files are in use, Quark refuses and shows why. The storage inside your Quark has no
**Eject**.

### More than one drive in Files

Every file and folder in **Files** has a small colored tag naming the drive it is on. Each drive keeps its own color.
Hover over a tag, or press and hold it, to see the drive's name.

With more than one drive, the views menu in **Files** has a **Grouping** switch. **Unified** shows all your drives
together. **Per-device** lists each drive separately. **Filter devices**, in the same menu, picks which drives Files
shows. When you upload, Quark may ask which drive to put the files on.

## If something goes wrong

- **"I plugged in my drive and my old files aren't there."** Quark only shows its own folder on a drive. Your old files
  are still there, outside that folder. Upload or copy them in.
- **"My drive doesn't show up."** Wait a few seconds, then refresh the **Storage** tab. If the card is there but the
  drive isn't ready, an admin can press **Mount**. If there's no card at all, try another USB port or cable.
- **"I don't see Back up onto this drive."** It appears only for admins, and only on a drive with the **Backup
  drive** role.
- **"Restore can't find my backup."** A backup made before Quark v0.59 is no longer read. Back up again.
- **"My protection level dropped."** Your last backup is probably more than 30 days old, or the backup drive now reads
  **Replace soon**. Back up again, or onto a healthier drive.
- **"A drive says Unknown."** Quark couldn't read its health. The drive may still work, but don't count on it as your
  only copy.
- **"The card says Quark can't reach this drive until it restarts."** An admin can choose **Restart Quark** in
  **Settings → Updates**, then mount the drive.

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

A drive Quark sees in sysfs but has no `/dev` node for is listed with `needsRestart: true` on
`GET /api/v0/storage/devices/status`, and Quark never runs `mount` on it (quark #4268). Its card shows the restart line
in place of **Mount**. In a container this is the normal case without `--privileged`, and a restart alone won't fix it;
see [Self-Hosting](/docs/nerd-notes/self-hosting).

Chat attachments are stored as ciphertext in `chat-attachments/` in the Quark's data directory, beside `files/`, not
inside it. A snapshot copies the `files/` area of each drive, and `chat_backup.db` holds only the `chat_attachments`
rows, so the attachment files themselves are not in a backup (quark `docs/chat-security.md`).

### Snapshot layout

A snapshot copies every managed device except the target into the target's `quark/data/files/`:

| Entry                       | What it is                                                                      |
| --------------------------- | ------------------------------------------------------------------------------- |
| `internal/`                 | the built-in storage's files                                                    |
| `<name>_<serial>/`          | each USB drive's files: its name, `_`, and the first 8 characters of its serial |
| `chat_backup.db`            | the chat tables, as the ciphertext they already are                             |
| `chat_backup.db.mac`        | the proof that this Quark wrote `chat_backup.db`                                |
| `vault_items_backup.db`     | every account's wrapped vault key and vault items, as ciphertext                |
| `vault_items_backup.db.mac` | the proof that this Quark wrote `vault_items_backup.db`                         |
| `backup_manifest.json`      | the SHA-256 and size of every file above, which **Verify** checks against       |

A file is skipped when the target already has it with the same size and a modification time no older than the source.
Nothing on the target is deleted, apart from the temp files the copy itself makes. The rest of the main database
(accounts, sessions, groups, albums, sharing) is not in a snapshot.

The vault export needs no password. Each account's vault key is stored wrapped under that account's password and, when
the client had it, its recovery phrase, so the copy is exactly as private as the live database. Older snapshots may
hold `vault_backup.db`, the retired household vault encrypted under a separate recovery password. This version doesn't
read it.

Restore has app buttons and routes now: **Restore files**, **Restore vaults** and **Restore chat**. A chat or vault
file with no `.mac` beside it is refused on every drive, and nothing is restored (quark #4444). The same refusal
covers a file this Quark did not write, or one changed after the snapshot.

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
| `DELETE /devices/usb/:serial`             | admin    | unmount a USB drive; the card's **Eject**                     |
| `PATCH /devices/rename`                   | admin    | rename a drive; the app has no button for it                  |

With `full: true`, Verify hashes every file. Without it, only sizes are compared.

Setting `default-storage` or `snapshot-backup` on a `replace-soon` drive, or starting a backup onto one, answers 409
unless `acknowledgeHealth` is `true`. A second backup onto a drive that already has one pending or running also
answers 409. Backups run on the Quark's job queue, so reloading the page doesn't stop one.
