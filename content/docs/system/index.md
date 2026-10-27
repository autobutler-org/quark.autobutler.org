---
title: System
description: Check how your Quark is doing — what each Health reading means, your drives and backups, and Jobs
navigation:
  title: System
  order: 1
---

# System

The **System** page tells you how your Quark is doing: how hard it's working, which drives it can see, how well your
files are backed up, and what long jobs it's busy with. Everyone in your household can open it.

It's a good place to look now and then, and before a big upload.

## How to use it

1. Open **System** from the app drawer.
2. It opens on the **Health** tab. Pick **Storage** or **Jobs** along the top to switch.
3. Tap the refresh button in the top bar for fresh numbers right away.

The three tabs:

- **Health**: live readings for the processor, memory, disk and temperature.
- **Storage**: your drives, how healthy they are, and how well your files are protected.
- **Jobs**: long-running work, such as converting a video.

---

## Health

Health shows up to four readings, each with a bar:

- **CPU**: how busy the processor is. Below the bar, one small chip per core shows how busy that core is.
- **Memory**: how much memory is in use, out of the total.
- **Disk**: how full the Quark's own disk is, the one that holds its data and its system software. Drives you plug in
  are not counted here. You'll find them on the **Storage** tab.
- **Temperature**: the hottest reading, in °C. Shown only when the Quark has a temperature sensor.

Above the readings, a summary says **All systems healthy**, **Some readings are elevated**, or **Issues detected**.
When the Quark itself raises an alert, it's listed under the summary.

### When a bar turns orange or red

Each reading has a limit. A bar turns orange at three quarters of its limit, and red at the limit.

| Reading     | Orange from | Red (the limit) |
| ----------- | ----------- | --------------- |
| CPU         | 67.5%       | 90%             |
| Memory      | 71.25%      | 95%             |
| Disk        | 67.5%       | 90%             |
| Temperature | 60 °C       | 80 °C           |

A core chip turns orange at 67% and red at 90%.

Under an orange bar, the card says "Elevated. The summary counts this as a warning. An alert is raised at …". Under a
red one it says "Over the … limit — this raises an alert."

Two things worth knowing:

- **CPU has to stay high.** The CPU bar turns red as soon as it reaches 90%. The Quark only raises its own alert after a
  full minute at 90% or more. A short spike while a photo uploads is normal.
- **80 °C is where a Raspberry Pi 5 starts slowing itself down** to cool off. If Temperature sits near the limit, give
  the Quark more room to breathe.

If something stays red, see [I'm having performance issues](/docs/help#im-having-performance-issues).

### How often it updates

Health refreshes itself every 15 seconds, but only while the Health tab is on screen. To change that, go to **Settings
→ General → Auto-refresh interval**.

---

## Storage

The **Storage** tab is about your drives and your backups:

- **How protected your files are**: a card at the top rates your files **Unprotected**, **Basic** or **Protected**,
  depending on how many backup drives hold a recent copy. It also suggests your next step.
- **Each drive**: its name, how full it is, its role, and its health: **Healthy**, **Watch**, **Replace soon** or
  **Unknown**.

Everyone sees the same tab. The buttons that change things are admins only: **Mount**, **Set Role**, **Back Up** and
**Verify**.

[Storage and Backups](/docs/system/storage-and-backups) explains every part of this tab, and walks you through making
a backup.

**Settings → General → Storage devices** opens this tab too.

---

## Jobs

The **Jobs** tab lists long-running work on the Quark, newest first. Each job shows its progress and where it's at:
**Queued**, **Running**, **Completed**, **Failed** or **Canceled**.

Today the only kind of job listed here is a video conversion, started with **Convert video** in Files. A backup isn't
listed here. Its progress shows on the drive's card on the **Storage** tab.

- **Cancel** stops a job that is queued or running.
- **Retry** runs a failed job again.

An admin sees everyone's jobs. Everyone else sees the jobs they started, for files they can still open.

Quark keeps each person's last 100 finished jobs, for up to 30 days. Jobs that are queued or running are never
cleared.

### Ways into Jobs

- While a job is running, a badge in the top bar counts the running jobs. Tap it to open the Jobs tab.
- Starting a conversion shows "Conversion started" with **View**, which opens the Jobs tab.
- When a conversion finishes, a message says so, with **Show** to open the folder holding the new file.
- When a job fails, a message says so, with **View** to open the Jobs tab.

---

## What Quark tells you, and where

Quark only tells you things inside the app. It doesn't send emails, text messages or push notifications to your phone.

- **The bell in the top bar** carries backup reminders, for admins. It reminds you when the Quark has never been backed
  up, or when its last backup is 30 days old or more. Each admin can turn either reminder off under **Settings →
  General → Notifications**.
- **Everything else shows up on this page.** A full disk or a hot Quark turns a bar orange or red on the **Health**
  tab. Nobody gets a message about it.

So open **System → Health** now and then, especially before a big upload.

---

## Related

- [Storage and Backups](/docs/system/storage-and-backups): your drives, their health, and making a backup
- [Settings Reference](/docs/settings): the auto-refresh interval and the reminder switches
- [Accounts and Sharing](/docs/users): what admins can do that members can't
- [Help](/docs/help): troubleshooting

## Nerd Notes

**Tab addresses.** Each tab has its own route: `/system/health`, `/system/storage` and `/system/jobs`. A bare
`/system` opens Health. Older `/health`, `/devices` and `/jobs` links still work and open the matching tab.

**Health.** `GET /api/v0/health` returns the readings and the Quark's own alerts. The limits are constants in
`pkg/util/healthutil`: CPU 90%, memory 95%, disk 90%, temperature 80 °C. The bars warn at 75% of each limit; the
per-core chips warn at a whole 67%. The server raises its CPU alert only after `CPUSustainedDuration`, 60 seconds at or
above the limit. Temperature is the hottest thermal zone, and the card is hidden when that reads 0. The Disk bar
measures the filesystem holding the Quark's data directory.

**Auto-refresh.** The interval is stored on the device, defaults to 15 seconds, and only runs while the tab is visible.

**Jobs.** `GET /api/v0/jobs?kind=…` lists jobs (the app asks for `video-transcode`), `GET /api/v0/jobs/{id}` reads
one, `DELETE /api/v0/jobs/{id}` cancels, and `POST /api/v0/jobs/{id}/retry` retries. Retention is
`MaxFinishedJobsPerAccount = 100` and `FinishedJobMaxAge = 30 days` in `pkg/util/jobutil`. Live progress arrives as
`job_*` events on the event socket. A snapshot backup runs as its own `snapshot-backup` kind and reports through the
`backup_*` events instead.

**Notifications.** `GET /api/v0/notifications` derives the list on each request; nothing is stored. An admin gets
`backup_due` while there is no completed snapshot backup on record, and `backup_stale` once the last one is 30 days
old; other accounts get neither. A type listed in your `disabledNotifications` (`PUT /api/v0/settings/me`) is left
out. Quark has no push, email or SMS channel: there is no notification service dependency in `go.mod` or
`pubspec.yaml`.

**Storage.** The Storage tab's endpoints, drive health readings and backup layout are in the
[Storage and Backups Nerd Notes](/docs/system/storage-and-backups#nerd-notes).
