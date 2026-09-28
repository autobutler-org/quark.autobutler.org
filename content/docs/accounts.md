---
title: Accounts, homes, and sharing
description: Member vs admin, homes and groups, share levels, admin Users lifecycle, sessions vs storage vs Vault, and
how to get access on your Quark
navigation:
  title: Accounts & sharing
  order: 2.5
---

# Accounts, homes, and sharing

Quark is a household device: more than one person can have a login on the same box. This page is the plain-language map
of who sees what, where your files live, and how sharing works between people in the house.

Soft-launch framing still matters: **remote access from outside your home network is not live yet.** Treat Quark as a
home-WiFi product until that ships. Sharing here means between accounts on _your_ Quark — not a public internet link.

For first-time setup, start with [Getting Started](/docs/getting-started).

## Member vs admin

The **owner** account created at setup is an admin. An admin can promote other logins to admin later.

**Admins** see **Users** and **Vault** in the drawer. On Users they manage accounts and groups: approve requests, add
people, turn accounts off, make someone an admin, and manage groups.

**Members** (everyone else) do **not** see Users or Vault. If someone sends you a Users link, Quark sends you to Files
instead — only admins manage accounts. Members still get their own home, Files, Photos, Settings, and whatever has been
shared with them.

Account invites and the Users page are admin-only. If you need a new login or a password reset for someone else, ask an
admin in the house.

## For admins: Users page

Open **Users** in the drawer. Two tabs: **Accounts** and **Groups**.

### Account lifecycle

- **Add user** — create a login with an initial password (no request needed).
- **Make admin** / **Remove admin** — give or take admin. The last active admin cannot remove their own admin — Quark
  needs at least one.
- **Turn off** / turn back on — disables sign-in without deleting the account. Files and shares stay as they were.
- **Delete** (from the account actions) — removes that login. This is not the same as Reset this Quark (see below).

Your own row is marked **You** and has no actions menu on Accounts.

### Account requests

On Accounts, admins can allow people on the home WiFi to **request access** from the login screen.

- Flip the switch that allows requests when you want the household to self-serve asks.
- **Approve** or **Deny** each waiting request. After you act, the row leaves the waiting list.
- Soft-launch note: there is no request history yet — once approved or denied, it is gone from the list. If you need a
  paper trail, write it down yourself for now.

### Groups

On the **Groups** tab, create a group, rename it, delete it, and manage who is in it.

- Each group gets a folder under `groups/` that members can use together.
- **everyone** is built in: every account is in it, it has no actions menu, and its folder is `groups/everyone`.
- Adding or removing someone from a group updates what they see under Groups in Files without them hunting for a share
  sheet — and what was shared with that group follows membership.

## Homes and groups (Files view)

In Files you will see paths that look like folders. They are the mental model for multi-user Quark:

- **`users/<you>`** — your home. Usually private to you until you share something out of it. Other people's homes are
  not a place to browse unless they shared with you.
- **`groups/`** — folders belonging to groups. Admins create and manage groups on the Users page. Each group gets a
  protected folder so members share a place that is not anyone's personal home.
- **`everyone`** — a built-in group that includes every account on this Quark. Its folder is `groups/everyone`. Anything
  you put there (or share with **everyone**) is for the whole household.

Browsing into `users/` or `groups/` is normal. Sharing from the Share sheet and dropping files into a group folder are
two ways to the same idea: other logins on this box can reach the stuff you meant them to reach.

## Sharing

Open a file or folder you own (or can manage), choose **Share…**, and pick a person, a group, or **everyone**.

### Levels

- **Can view** — open and download. Cannot change who has access.
- **Can edit** — change the contents. Still cannot manage sharing unless they are also an owner or an admin.
- **Owner** — can change who has access, including making other owners. Treat Owner carefully; it is more than "edit."

Only an owner of the item (or of a parent folder that grants ownership), or an admin, can change sharing. If you only
have Can view or Can edit, the share sheet says so and stops there.

### Inherited access

Share a parent folder and everything inside inherits that access. On a child item you will see **Inherited access** with
a note like "Can edit · From Family" — no level menu on that row, because you change it on the parent. Move the child
out of the shared folder and the inherited access leaves with it.

### Shared with me

**Shared with me** appears only when someone else (or a group you are in) has shared roots with you. It lists inbound
shares — "Shared by …" — so you can open them without hunting. Shares _you_ made outbound do not show up there; those
stay under your own files and the share sheet.

Sharing is not remote access. It does not put your files on the public internet.

## Clients, storage, Vault, and accounts

Four different places — do not mix them up:

| Looking for…                       | Go here                                                        |
| ---------------------------------- | -------------------------------------------------------------- |
| Logins, requests, groups           | **Users** (admins)                                             |
| Browsers/apps signed in (sessions) | **Settings → Network** → connected clients                     |
| USB drives on the box              | **System → Storage** (or Settings → General → Storage devices) |
| Password vault                     | **Vault** in the drawer (admins)                               |

- **Connected clients** — request count, last seen. Admins can revoke a client when the UI offers Delete/revoke; that
  device signs in again.
- **Storage** — mount status, space, rename, backup. Hardware disks, not people.
- **Vault** — encrypted passwords on your drive, unlocked with a master password. Separate from Files homes and from
  account management. See [Vault](/docs/vault).
- **Accounts** — who may sign in to this Quark. Deleting a login is not unmounting a drive and is not emptying Vault.

## Delete account vs Reset this Quark

Both live under **Settings → Account → Account and data**, which is why they feel close.

- **Delete account** — available to every login. Removes _that_ person's sign-in (and signs them out everywhere). It is
  not a full wipe of the box. Confirmations ask for the account password.
- **Reset this Quark** — **admin only**. Resets the installation / Quark data. Attached drives are left alone unless the
  reset flow says otherwise — read every confirmation carefully. If the UI mentions choosing what happens to drives,
  that choice is in the reset steps themselves, not on the Delete account button.

If you only meant to remove one person's login, use Delete account (or an admin **Delete** on Users). If you meant to
wipe the Quark setup, that is Reset — and only an admin should touch it.

## Remote access

**Not live for soft launch.** Reaching Quark from outside the house is still coming soon.

When remote access ships, **admins** will be the ones who turn it on and manage it under Settings → Network. Members
should not need a setup path — if you only see a status line and no way to configure it, that is expected for a
non-admin (and today the feature itself is not turned on for friends-and-family).

Until remote ships, stay on the same home WiFi as the Quark.

## How to get access

1. **Request an account** — on the login screen, on the same home WiFi as the Quark, choose request access. An admin
   opens **Users**, sees the request, and approves it (or declines it).
2. **Admin creates you** — an admin can **Add user** on Users without waiting for a request, and give you an initial
   password.
3. **Need help as a member** — you cannot open Users yourself. Ask an admin in the house for a new account, a password
   reset, or a share. For "I deleted a file," Trash, or other how-tos, see [Help](/docs/help).

## Related

- [Getting Started — Household accounts](/docs/getting-started#household-accounts)
- [Getting Started — Sharing and groups](/docs/getting-started#sharing-and-groups)
- [Help](/docs/help)
- [Vault](/docs/vault) (admins)
