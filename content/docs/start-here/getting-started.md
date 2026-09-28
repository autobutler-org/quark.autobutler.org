---
title: Set up Quark
description: Plug in Quark, open it on your home network, and create your account
navigation:
  title: Set up Quark
  order: 2
---

# Set up Quark

This guide gets the box online and shows you where to go next. No terminal required.

---

## Set up the hardware (non-nerd path)

What you need:

- Your Quark device (or a supported box you have installed Quark on)
- A free ethernet port on your home router (preferred) or WiFi if your setup uses that
- A phone or computer on the same home network

Worth having, though not required to finish setup:

- **A spare USB drive or external hard drive.** Quark works fine without one, but everything
  then lives on a single device. If that device fails, the files go with it. A second drive
  you copy the irreplaceable folders onto is the cheapest insurance there is — see the
  [Security Guide](/docs/nerd-notes/security-guide).

Steps:

1. Plug Quark into power and into your router.
2. Attach any extra storage you want Quark to manage.
3. Wait a minute for it to come up.
4. On a phone or computer already on that home WiFi, open a browser and go to
   **`http://quark.home.local`** (or the hostname you were given at setup).
5. Create your owner account when the setup screen asks. Pick a password you will remember,
   and write it down.

If the page will not load: same WiFi as Quark, Quark powered on, try restarting the router
once. Still stuck? See [Help](/docs/if-something-goes-wrong/help), or
[Nerd Notes](/docs/nerd-notes/overview) if you are installing from a release yourself.

---

## Accessing Quark day to day

1. Open a browser on a device on your home WiFi
2. Go to **`http://quark.home.local`** (or your hostname)
3. Log in with your username and password

> **Tip:** Bookmark the address so you do not have to type it every time.

Quark is built for your home network by default — that is intentional.

---

## What to do next

Once you are signed in, pick a task:

- [Work with files](/docs/things-you-can-do/files) — browse, upload, organize folders
- [Write docs & sheets](/docs/things-you-can-do/docs-sheets) — documents and spreadsheets on
  your drive
- [Back up photos](/docs/things-you-can-do/photos) — upload pictures from your phone on home
  WiFi
- [Keep private files safe](/docs/things-you-can-do/vault) — password vault (master password
  only)
- [Bring photos from Google](/docs/things-you-can-do/google-takeout) — Google Takeout import

---

## Health

The Health page shows you how Quark is doing:

- **Disk usage** — how much storage space is used vs. available
- **Temperature** — the device's current temperature (important for small devices like a
  Raspberry Pi)
- **Uptime** — how long the device has been running

If anything looks off (disk nearly full, temperature very high), this is where you will see
it first.

---

## Settings

The Settings page lets you:

- **Toggle automatic updates** — turn on to have Quark update itself overnight when a new
  version is available; turn off if you want to control updates manually
- **Export performance metrics** — saves recent health data to a file you can share if you
  are troubleshooting with the team
- **Delete account** — under Account, remove your login from this Quark (separate from wiping
  the box)
- **Reset this Quark** — under Reset, factory-reset the appliance when that is what you
  actually mean

Deleting an account and resetting the Quark are different on purpose: one removes your
login; the other can wipe data on the device. Read the confirmations carefully.

Quark's routine contact with the public internet is checking for software updates. Optional
features you turn on later (remote access when it ships, imports you start yourself) are
separate from that default.

---

## Logging out

Click your username or the settings icon and choose **Log out** when you are done. This is
good practice on shared devices.

---

## Next steps

- [Help & troubleshooting](/docs/if-something-goes-wrong/help) — common fixes and how to
  reach us
- [Security Guide](/docs/nerd-notes/security-guide) — passwords, backups, and limits
- [How Quark works](/docs/start-here/how-it-works) — local-first explained plainly
