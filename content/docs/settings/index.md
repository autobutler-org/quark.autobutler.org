---
title: Settings Reference
description: Every Settings tab, the admin-only controls, and exactly what Delete account and Reset this Quark erase
navigation:
  title: Settings Reference
  order: 1
---

# Settings Reference

Open **Settings** from the app drawer. It has five tabs everyone sees: **General**, **Account**, **Network**, **Updates**
and **About**. Admins get a sixth, **Features**, while Quark has something in beta.

Each tab has its own address, such as `/settings/general` or `/settings/account`, so you can bookmark one or send a
link to it. Items marked **admins only** below do not appear for other accounts, and the Quark refuses those requests
from them anyway.

Not sure whether you are an admin? See [Accounts and Sharing](/docs/accounts).

---

## General

- **Backend hosts** — the Quarks this app knows about. Add one, edit it, remove it, or tap one to switch to it. See
  [Adding a Quark by name](#adding-a-quark-by-name) below.
- **Theme** — **System**, **Light** or **Dark**. This is saved on this device only.
- **High contrast** — stronger colors and bolder outlines. Saved on this device only.
- **Left-handed mode** — moves the menu button and the menu to the right, and floating buttons to the left. Saved on
  this device only.
- **Theme color** — pick a swatch, or drag the hue slider for a custom color. Your choice belongs to your account on
  this Quark, so it follows you to your other devices. **Use this Quark's default** goes back to the household color.
- **This Quark's default** — admins only. The theme color for everyone who has not picked their own.
- **Calendar opens on** — which view Calendar opens on. Shown only while the Calendar beta is on.
- **Notifications** — admins only. One switch per reminder type: **No backup yet** and **Backup out of date**. Turning
  one off affects only your account; other admins still get it.
- **Auto-refresh interval** — how often pages that update themselves, like Health and the drive list, check for new
  numbers. 15 seconds by default; you can pick from 10 seconds to 5 minutes, or **Disabled**. Saved on this device only.
- **Demo mode** — Photos shows bundled sample photos and albums instead of your library. The sample photos ship inside
  the app, so the Quark is not asked for them. Your real files are not affected.
- **Storage devices** — a shortcut to the drives, on the **Storage** tab of the [System](/docs/system) page.

### Adding a Quark by name

When you add a Quark and type `quark.local`, `quark.lan`, `quark.local.lan` or just `quark`, the app tries what you
typed first. If that does not answer, it tries the other names. This helps when your router names devices with `.lan`,
or your phone cannot look up `.local` names (Android before version 12, for one). The address that answered is the one
saved.

If none of them answers, the form says it could not connect and keeps what you typed. Enter the Quark's IP address
instead.

An IP address, a full name like `nas.example.com`, and `localhost` are tried exactly as typed.

---

## Account

From top to bottom:

- **Profile** — your profile picture. See [Accounts and Sharing](/docs/accounts#profile-picture).
- **Change password** — enter your current password, then the new one twice. New passwords need at least 8 characters.
  You stay signed in on this device, and your other sessions stay signed in too. Use **Sign out everywhere else** below
  if you want them to sign in again with the new password.
- **Sign out**.
- **Sessions** — everywhere your account is signed in. Sign out one, or **Sign out everywhere else**.
- **Users and groups** — admins only. A shortcut to the Users page. Other accounts see **Accounts are managed by an
  admin** here instead.
- **Account and data** — set apart at the bottom. It opens a page holding **Delete account** and, for admins, **Reset
  this Quark**. Both are described [below](#delete-account-vs-reset-this-quark).

---

## Network

- **Remote access** — shown as **Coming soon** for now.
- **Connected devices** — the browsers and apps that have talked to this Quark, named for what they are ("Chrome on
  macOS", "Quark app") with when each was last active. Admins can **Remove from this list**. That only tidies the list:
  it does not sign the device out, and the device shows up again the next time it connects. To sign a device out, use
  **Sessions** on the Account tab.
- **Device name** — admins only. The name the Quark goes by on your network, such as `quark.local`. Not shown on a Quark
  that cannot be renamed.
- **SSH access** — admins only. See [SSH access](#ssh-access) below. Most households never need it.

### SSH access

SSH is a command-line login to the Quark, for people comfortable with a terminal. It is off until an admin turns it on.

1. Tap **Add key** and paste a public key, such as the contents of `~/.ssh/id_ed25519.pub`. Keys are listed under
   **Allowed keys**.
2. Optionally, tap **Set password** and choose one of at least 12 characters.
3. Switch **SSH access** on and confirm **Turn on**.
4. From a computer on the same network, run `ssh quark@quark.local`.

You always sign in as `quark`. Root can never sign in over SSH. The switch stays where you left it across a restart.
Switching it off closes the port.

On a Quark that cannot manage SSH — not installed as a service, no SSH server, or installed before this feature — the
section says why and shows the command that fixes it, instead of the controls.

---

## Updates

- **Quark version (installed)** — the version the Quark is running, with a link to what is in that release.
- **Update Quark to version** and **Start update** — admins only. Pick a newer version and start the update.
- Updates are manual. Quark does not update itself: an admin starts each one. There is no automatic updates switch.
- **Repair installation** — admins only, on a Quark installed as a Linux service. It restarts Quark, which re-applies
  its system setup. Quark is unavailable for a few seconds. Use it when support asks you to.

---

## About

- The app's version.
- **Help & Support**. In the iOS and Android apps it also has **Copy app logs**, which copies this device's app log so
  you can paste it into a bug report. Nothing is sent anywhere.
- **Terms of Service**.
- **Software Bill of Materials** — every Go and Flutter dependency Quark is built from, with its version.

---

## Features

Admins only, and only while Quark has a feature in beta. Today the betas are **Chat**, **Calendar** and **Slides**.
All three start on.

Each one has a **Beta** badge, a line saying what turning it off does, and a switch. Turning a beta off hides it from
everyone on this Quark, and anyone already on its page is moved to Files. Its stored data is kept, not deleted, so
turning it back on brings everything back.

A beta switch is not a security measure. It hides a feature; it does not lock data away.

---

## Delete account vs Reset this Quark

Both live on **Settings → Account → Account and data**. They do very different things.

### Delete account

Anyone can delete their own account. It asks for your password, then deletes your account and signs you out
everywhere. It cannot be undone.

- **Your files stay on the Quark.** The folders you owned are handed to the Quark's longest-standing admin.
- **If yours is the only account,** the Quark goes back to first-boot setup. Your files are still on it, and whoever
  sets it up next can open them. To erase them too, use **Reset this Quark** instead.
- **The last admin cannot leave others stranded.** If you are the only admin and other accounts exist, Quark refuses:
  "This Quark needs at least one admin. Make someone else an admin first."

To remove someone else's account, an admin uses the Users page instead. See
[Accounts and Sharing](/docs/accounts#turning-off-and-removing-accounts).

### Reset this Quark

Admins only. It returns the Quark to first-boot setup, and every account goes with it, yours included. It cannot be
undone.

You choose what to erase:

- **Accounts and settings** — ticked to start. Every account, album, calendar and setting on this Quark. A vault kept
  on the Quark itself goes with it.
- **Stored files** — ticked to start. Every photo and document stored on the Quark itself.
- **Quark data on attached drives** — unticked to start. Only the Quark data directory on drives attached right now.
  Anything else on those drives is left alone.

Before you confirm, the dialog reads back what the reset erases and what it keeps. It needs your password and at least
one box ticked. A wrong password changes nothing: "That password isn't right. Nothing was deleted."

Read these two warnings before you tap:

- **Unticking Stored files leaves data on the Quark.** Whoever sets it up next will be able to reach whatever you leave.
- **Quark data on attached drives is the one part nothing can bring back** — not even a backup drive, if the backup is
  on it. That is why it starts off.

After a reset, the Quark restarts within a few seconds, so the app may briefly fail to reach it.

---

## Related

- [Accounts and Sharing](/docs/accounts) — admins, members, sharing, and the Users page
- [System](/docs/system) — Health, Storage and Jobs
- [Getting Started](/docs/getting-started)
