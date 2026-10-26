---
title: System
description: Read the System page — what each Health reading means and when it turns orange or red, drives, and Jobs
navigation:
  title: System
  order: 1
---

# System

The **System** page is about the Quark itself: how hard it is working, which drives it can see, and what long-running
work it is doing. Open **System** from the app drawer. Every account can open it.

It has three tabs, each with its own address:

- **Health** — `/system/health`. Live readings. The page opens here.
- **Storage** — `/system/storage`. The drives the Quark can see.
- **Jobs** — `/system/jobs`. Long-running work, such as converting a video.

Older `/health` and `/jobs` links still work; they open the matching tab.

---

## Health

Health shows up to four readings, each with a bar:

- **CPU** — how busy the processor is, with how many of its cores that adds up to. Below the bar, one chip per core
  shows that core's load.
- **Memory** — how much memory is in use, as used of total.
- **Disk** — how full the Quark's own disk is: the one that holds its data, system software included. Drives you plug
  in are not counted here; their space is on the **Storage** tab.
- **Temperature** — the hottest sensor reading, in °C. Shown only when the Quark has a temperature sensor.

Above the readings, a summary says **All systems healthy**, **Some readings are elevated**, or **Issues detected**.
When the Quark itself raises an alert, the alert is listed under the summary.

### When a bar turns orange or red

Each reading has a limit. A bar turns orange at three quarters of its limit, and red at the limit.

| Reading     | Orange from | Red (the limit) |
| ----------- | ----------- | --------------- |
| CPU         | 67.5%       | 90%             |
| Memory      | 71.25%      | 95%             |
| Disk        | 67.5%       | 90%             |
| Temperature | 60 °C       | 80 °C           |

A CPU core chip turns orange at 67% and red at 90%.

Under an orange bar the card reads "Elevated. The summary counts this as a warning. An alert is raised at …". Under a
red one it reads "Over the … limit — this raises an alert."

Two details worth knowing:

- **CPU has to stay high.** The CPU bar turns red the moment it reaches 90%, but the Quark only raises its own CPU alert
  after 60 seconds at or above 90%. A short spike while a photo uploads is normal.
- **80 °C is where a Raspberry Pi 5 starts slowing itself down** to cool off. If Temperature sits near the limit, give
  the Quark more air.

### How often it updates

Health refreshes itself every 15 seconds by default, only while the Health tab is on screen. Change the interval under
**Settings → General → Auto-refresh interval**. The refresh button in the top bar updates it right away.

---

## Storage

The **Storage** tab lists every drive the Quark can see, with how much space each one uses.

Every account sees the list. The buttons on each drive — **Mount**, **Set Role**, **Back Up** and
**Verify** — are admins only. A member sees the same list with no buttons.

**Settings → General → Storage devices** opens this tab too.

---

## Jobs

The **Jobs** tab lists long-running work on the Quark, newest first, each with its status — **Queued**, **Running**,
**Completed**, **Failed** or **Canceled** — and its progress.

Today the only kind of job listed here is a video conversion: **Convert video** in Files. A snapshot backup is not
listed here; its progress shows on the drive's card on the **Storage** tab.

- **Cancel** stops a job that is queued or running.
- **Retry** runs a failed job again.

An admin sees everyone's jobs. Everyone else sees the jobs they started themselves, for files they can still open.

Quark keeps each account's last 100 finished jobs, for up to 30 days. Queued and running jobs are never cleared.

### Ways into Jobs

- While a job is running, a badge in the top bar counts the running jobs. Tap it to open the Jobs tab.
- Starting a conversion shows "Conversion started" with **View**, which opens the Jobs tab.
- When a conversion finishes, a message says so with **Show**, which opens the folder holding the new file.
- When a job fails, a message says so with **View**, which opens the Jobs tab.

---

## Quark will not alert you

Quark has no push notifications, no emails and no text messages. A full disk or a hot Quark shows up on the Health
tab, and nowhere else. Nobody gets a message about it.

The bell in the top bar is in-app only, and today it carries one kind of notice: backup reminders, for admins. It
reminds an admin when the Quark has never been backed up, or when its last snapshot backup is 30 or more days old.
Turn either reminder off under **Settings → General → Notifications**.

So open **System → Health** now and then, especially before a big upload. If something is red, see
[Help](/docs/help#im-having-performance-issues).

---

## Related

- [Settings Reference](/docs/settings) — the auto-refresh interval and notification switches
- [Accounts and Sharing](/docs/accounts) — what admins can do that members cannot
- [Getting Started](/docs/getting-started)
