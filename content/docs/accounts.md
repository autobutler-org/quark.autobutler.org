---
title: Accounts, homes, and sharing
description: Member vs admin, homes and groups, share levels, sessions vs storage, and how to get access on your Quark
navigation:
  title: Accounts & sharing
  order: 2.5
---

# Accounts, homes, and sharing

Quark is a household device: more than one person can have a login on the same box. This page is the plain-language map of who sees what, where your files live, and how sharing works between people in the house.

Soft-launch framing still matters: **remote access from outside your home network is not live yet.** Treat Quark as a home-WiFi product until that ships. Sharing here means between accounts on *your* Quark — not a public internet link.

For first-time setup, start with [Getting Started](/docs/getting-started).

## Member vs admin

The **owner** account created at setup is an admin. An admin can promote other logins to admin later.

**Admins** see **Users** and **Vault** in the drawer. On Users they manage accounts and groups: approve requests, add people, turn accounts off, make someone an admin, and manage groups.

**Members** (everyone else) do **not** see Users or Vault. If someone sends you a Users link, Quark sends you to Files instead — only admins manage accounts. Members still get their own home, Files, Photos, Settings, and whatever has been shared with them.

Account invites and the Users page are admin-only. If you need a new login or a password reset for someone else, ask an admin in the house.

## Homes and groups

In Files you will see paths that look like folders. They are the mental model for multi-user Quark:

- **`users/<you>`** — your home. Usually private to you until you share something out of it. Other people's homes are not a place to browse unless they shared with you.
- **`groups/`** — folders belonging to groups. Admins create and manage groups on the Users page. Each group gets a protected folder so members share a place that is not anyone's personal home.
- **`everyone`** — a built-in group that includes every account on this Quark. Its folder is `groups/everyone`. Anything you put there (or share with **everyone**) is for the whole household.

Browsing into `users/` or `groups/` is normal. Sharing from the Share sheet and dropping files into a group folder are two ways to the same idea: other logins on this box can reach the stuff you meant them to reach.

## Sharing

Open a file or folder you own (or can manage), choose **Share…**, and pick a person, a group, or **everyone**.

### Levels

- **Can view** — open and download. Cannot change who has access.
- **Can edit** — change the contents. Still cannot manage sharing unless they are also an owner or an admin.
- **Owner** — can change who has access, including making other owners. Treat Owner carefully; it is more than "edit."

Only an owner of the item (or of a parent folder that grants ownership), or an admin, can change sharing. If you only have Can view or Can edit, the share sheet says so and stops there.

### Inherited access

Share a parent folder and everything inside inherits that access. On a child item you will see **Inherited access** with a note like "Can edit · From Family" — no level menu on that row, because you change it on the parent. Move the child out of the shared folder and the inherited access leaves with it.

### Shared with me

**Shared with me** appears only when someone else (or a group you are in) has shared roots with you. It lists inbound shares — "Shared by …" — so you can open them without hunting. Shares *you* made outbound do not show up there; those stay under your own files and the share sheet.

Sharing is not remote access. It does not put your files on the public internet.

## Sessions vs storage devices

Two different lists, easy to mix up:

- **Settings → Network → connected client devices** — browsers and apps that have talked to this Quark (request count, last seen). Admins can revoke a device from that list when the UI offers Delete/revoke; that client has to sign in again.
- **System → Storage** (from the drawer, or Settings → General → Storage devices) — the USB drives and disks plugged into the box: mount status, space used, rename, backup. That is hardware, not "who is logged in."

If you are looking for "who is signed in on the living-room iPad," start on Network. If you are looking for "is the backup drive mounted," start on Storage.

## Remote access

**Not live for soft launch.** Reaching Quark from outside the house is still coming soon.

When remote access ships, **admins** will be the ones who turn it on and manage it under Settings → Network. Members should not need a setup path for Tailscale or similar — if you only see a status line and no way to configure it, that is expected for a non-admin (and today the feature itself is not turned on for friends-and-family).

Until remote ships, stay on the same home WiFi as the Quark.

## How to get access

1. **Request an account** — on the login screen, on the same home WiFi as the Quark, choose request access. An admin opens **Users**, sees the request, and approves it (or declines it).
2. **Admin creates you** — an admin can **Add user** on Users without waiting for a request, and give you an initial password.
3. **Need help as a member** — you cannot open Users yourself. Ask an admin in the house for a new account, a password reset, or a share. For "I deleted a file," Trash, or other how-tos, see [Help](/docs/help).

Deleting your own account (Settings → Account → Account and data) removes your login. It is not the same as wiping the Quark. Resetting the whole box is admin-only.

## Related

- [Getting Started — Household accounts](/docs/getting-started#household-accounts)
- [Getting Started — Sharing and groups](/docs/getting-started#sharing-and-groups)
- [Help](/docs/help)
- [Vault](/docs/vault) (admins)
