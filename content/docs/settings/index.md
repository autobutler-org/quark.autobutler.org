---
title: Settings Reference
description: Every Settings tab, the admin-only controls, and exactly what Delete account and Reset this Quark erase
navigation:
  title: Settings Reference
  order: 1
---

# Settings Reference

Settings is where you make Quark look and behave the way you like. You also manage your account and your sessions
there, and turn remote access on or off. Admins look after updates and the household's shared choices there too.

This page goes through each tab in order. Items marked **admins only** don't appear for other accounts. If someone
tries one anyway, Quark refuses.

Not sure whether you are an admin? See [Accounts and Sharing](/docs/users).

## How to use it

1. Open **Settings** from the app drawer.
2. Pick a tab along the top: **General**, **Account**, **Network**, **Updates** or **About**.
3. Make your change. Most settings save the moment you change them. There is no Save button to look for.

Each tab has its own link, so you can bookmark one or send it to someone in your household.

---

## General

- **Backend hosts**: the Quarks this app knows about. Add one, edit it, remove it, or tap one to switch to it. See
  [Adding a Quark by name](#adding-a-quark-by-name) below.
- **Theme**: **System**, **Light** or **Dark**. Saved on this device only.
- **High contrast**: stronger colors and bolder outlines, so text and buttons are easier to see. Saved on this device
  only.
- **Left-handed mode**: moves the menu button and the menu to the right, and floating buttons to the left. Saved on
  this device only.
- **Theme color**: pick a swatch, or drag the hue slider for a color of your own. It belongs to your account on this
  Quark, so it follows you to your other devices. **Use this Quark's default** goes back to the household color.
- **This Quark's default**: admins only. The theme color for everyone who hasn't picked their own.
- **Calendar opens on**: whether [Calendar](/docs/calendar) opens on **Day**, **Week**, **Month** or **Upcoming**.
  Saved on this device only.
- **Notifications**: admins only. One switch for each backup reminder: **No backup yet** and **Backup out of date**.
  Turning one off affects only you. Other admins still get it.
- **Auto-refresh interval**: how often pages that update themselves, like Health and the drive list, check for new
  numbers. It starts at 15 seconds. You can pick anything from 10 seconds to 5 minutes, or **Disabled**. Saved on this
  device only.
- **Demo mode**: Photos shows built-in sample photos and albums instead of your library. The samples come with the app,
  so nothing is fetched from your Quark. Your real files are not affected.
- **Storage devices**: a shortcut to your drives, on the **Storage** tab of the [System](/docs/system) page.

### Adding a Quark by name

When you add a Quark by name, such as `quark.local`, `quark.lan` or just `quark`, the app tries what you typed first. If
that doesn't answer, it tries the other spellings of the same name. This helps when your router names devices its own
way, or when your phone can't look up `.local` names. Older Android phones, before version 12, are one example. The
app saves whichever name answered.

If none of them answers, the form says it couldn't connect and keeps what you typed. Try the Quark's IP address
instead. An IP address, or a full name like `nas.example.com`, is used exactly as you typed it.

---

## Account

From top to bottom:

- **Profile**: your profile picture. See [Accounts and Sharing](/docs/users#profile-picture).
- **Change password**: type your current password, then the new one twice. A new password needs at least 8
  characters. You stay signed in on this device. Every other place your account is signed in is signed out, and has to
  sign in again with the new password. If your [vault](/docs/vault) opens with your current password, it opens with
  the new one from then on.
- **Sign out**.
- **Sessions**: every place your account is signed in. Sign out one of them, or tap **Sign out everywhere else**.
- **Users and groups**: admins only. A shortcut to the Users page. Everyone else sees **Accounts are managed by an
  admin** here instead.
- **Account and data**: set apart at the bottom. It opens a page with **Delete account** and, for admins, **Reset this
  Quark**. Both are explained [below](#delete-account-vs-reset-this-quark).

---

## Network

- **Remote access**: lets your household use Quark away from home, the same way you do on your WiFi. It's off until an
  admin turns it on here. An admin taps **Set up remote access**, then **Turn on remote access**. It takes about 30
  seconds. An admin can **Turn off** remote access again at any time, and that applies to everyone in the household.
  Everyone else sees whether it's on, and a note to ask an admin. See [Remote Access](/docs/settings/remote-access).
- **This phone**: in the iOS and Android apps only. **Remote access on this phone** pauses remote access for this phone
  alone. Pause it **For 1 hour**, **Until I'm back on home Wi‑Fi**, or **Until I turn it back on**.
- **Connected devices**: the browsers and apps that have talked to this Quark, such as "Chrome on macOS" or "Quark
  app", with when each was last active. Admins can **Remove from this list**. That only tidies the list. It doesn't
  sign the device out, and the device shows up again the next time it connects. To sign a device out, use **Sessions**
  on the Account tab.
- **Device name**: admins only. The name your Quark goes by on your home network, such as `quark.local`. Not shown on a
  Quark that can't be renamed.
- **SSH access**: admins only. A command-line login to the Quark, for people comfortable with a terminal. It's off
  until an admin turns it on. Most households never need it. See [SSH Access](/docs/settings/ssh).

---

## Updates

- **Quark version (installed)**: the version your Quark is running, with **What's in this release**.
- **Update Quark to version** and **Start update**: admins only. Pick a newer version and start the update. Quark
  restarts to finish, so it's away for a moment.
- Updates are manual. Quark doesn't update itself: an admin starts each one. There is no automatic updates switch.
- **Repair installation**: admins only, on a Quark installed straight onto its device. It restarts Quark, which sets
  its system setup right again. Quark is unavailable for a few seconds. Use it when support asks you to.

More on versions and release notes: [Versions and release notes](/docs/settings/versions).

---

## About

- The app's version.
- **Help & Support**: **Visit support page** and **Report an issue**. In the iOS and Android apps it also has **Copy
  app logs**, which copies this device's app log so you can paste it into a bug report. Nothing is sent anywhere.
- **Terms of Service**.
- **Software Bill of Materials**: every building block Quark is made from, with its version.

### When a Features tab appears

Sometimes Quark ships a feature in beta. While it does, admins get a sixth tab, **Features**, with a switch to turn
each beta on or off for the whole household. Right now nothing is in beta, so the tab doesn't appear.

Turning a beta off hides it from everyone, but its data is kept. Turning it back on brings everything back. A beta
switch hides a feature; it doesn't lock data away.

---

## Delete account vs Reset this Quark

Both live on **Settings → Account → Account and data**. They do very different things, so read the confirmations
carefully.

### Delete account

Anyone can delete their own account. It asks for your password, then deletes your account and signs you out
everywhere. It can't be undone.

- **Your vault goes with your account.** Every login you saved in it is deleted.
- **Your files stay on the Quark.** The folders you owned are handed to the Quark's longest-standing admin.
- **If yours is the only account,** the Quark goes back to first-time setup. Your files are still on it, and whoever
  sets it up next can open them. To erase them too, use **Reset this Quark** instead.
- **The last admin can't leave others stranded.** If you are the only admin and other accounts exist, Quark says:
  "This Quark needs at least one admin. Make someone else an admin first."

To remove someone else's account, an admin uses the Users page instead. See
[Accounts and Sharing](/docs/users#turning-off-and-removing-accounts).

### Reset this Quark

Admins only. It returns the Quark to first-time setup. Every account goes, yours included. It can't be undone.

You choose what to erase:

- **Accounts and settings**: ticked to start. Every account, album, calendar and setting on this Quark. Every person's
  vault lives here too, so every saved login goes with it.
- **Stored files**: ticked to start. Every photo and document stored on the Quark itself.
- **Quark data on attached drives**: unticked to start. Only Quark's own folder on the drives attached right now.
  Anything else on those drives is left alone.

Before you confirm, the dialog reads back what the reset erases and what it keeps. It needs your password and at least
one box ticked. A wrong password changes nothing: "That password isn't right. Nothing was deleted."

Two warnings before you tap:

- **Unticking a box leaves data on the Quark.** Whoever sets it up next will be able to reach whatever you leave.
- **Quark data on attached drives is the one part nothing can bring back.** That includes a backup, if the backup is on
  one of those drives. That's why it starts unticked.

After a reset, the Quark restarts within a few seconds, so the app may briefly lose touch with it.

---

## Related

- [Accounts and Sharing](/docs/users): admins, members, sharing, and the Users page
- [Remote Access](/docs/settings/remote-access): using Quark away from home
- [SSH Access](/docs/settings/ssh): the admin's command-line login
- [Versions and release notes](/docs/settings/versions): which version you run and what changed
- [System](/docs/system): Health, Storage and Jobs
- [Vault](/docs/vault): your own saved logins

## Nerd Notes

**Tab addresses.** Each tab has its own route: `/settings/general`, `/settings/account`, `/settings/network`,
`/settings/updates`, `/settings/about`, and `/settings/features` while a beta exists. A link to `/settings/features`
with no beta registered opens General. **Account and data** is `/settings/account-and-data`.

**Where each setting lives.** Theme, high contrast, left-handed mode, the Calendar default view, the auto-refresh
interval and demo mode are stored by the app on the device. Your theme color and your disabled notification types are
stored on the Quark, per account. The household default color is stored on the Quark.

**Names tried when adding a Quark.** A name ending in `.local`, `.lan`, `.home` or `.localdomain`, or with no dot at
all, is stripped to its base and also tried as `<base>.local`, `<base>.lan` and the bare `<base>`. That covers routers
that stack the suffixes, like `quark.local.lan`. An IPv4 or IPv6 address, `localhost`, and any other dotted name are
tried as typed only.

**Password change.** `PUT /api/v0/auth/password` re-checks the current auth key, then swaps in the new one. In the same
transaction it re-wraps the account's chat identity and vault key under the new password, and signs out every other
session of the account. The session that made the change stays signed in. This has been the behavior since v0.53.0.

**Features.** `GET /api/v0/settings/features` lists the registered beta flags; `PUT /api/v0/settings/features/:key`
flips one (admin only). In v0.56.2 the registry is empty, so the tab is hidden.

**Delete account and reset.** Both are `DELETE /api/v0/auth/account`, with the password's auth key in the JSON body,
never the URL. Delete account sends `account=true` and nothing else. Reset sends `database`, `files` and `devices`
(admin only; a request selecting none is a `400`). The vault tables reference the account with `ON DELETE CASCADE`, so
deleting an account deletes its vault; a `database` reset drops and re-creates the whole database, every vault
included. `devices=true` reaches only the Quark data directory on drives attached at the time. A reset holds the
database write lock while it runs, then every Quark instance on that install restarts within a few seconds.

**SSH.** Keys and a password are managed under `/api/v0/ssh/*`; the login user is always `quark`, root can't sign in
over SSH, and an SSH password needs at least 12 characters. [SSH Access](/docs/settings/ssh) has the commands.

**Other endpoints.**

| What                             | Endpoint                                                                  |
| -------------------------------- | ------------------------------------------------------------------------- |
| Your settings                    | `GET` / `PUT /api/v0/settings/me`                                         |
| Household default color (admin)  | `PUT /api/v0/settings/theme-color`                                        |
| Settings readable before sign-in | `GET /api/v0/settings/public`                                             |
| Sessions                         | `GET /api/v0/auth/sessions`, `DELETE /api/v0/auth/sessions[/:id]`         |
| Connected devices                | `GET /api/v0/devices`, `DELETE /api/v0/devices/:id` (admin)               |
| Remote access                    | `GET` / `POST` / `DELETE /api/v0/settings/remote-access` (changes: admin) |
| Device name (admin)              | `GET` / `PUT /api/v0/hostname`                                            |
| Installed and available versions | `GET /api/v0/version`, `GET /api/v0/version/available`                    |
| Start an update (admin)          | `POST /api/v0/version/update`                                             |
| Repair installation (admin)      | `GET` / `POST /api/v0/admin/repair`                                       |
| Software Bill of Materials       | `GET /api/v0/sbom`                                                        |
