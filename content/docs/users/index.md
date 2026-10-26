---
title: Users and sharing
description: Admins and members, homes and group folders, sharing levels, and how accounts are added, turned off and removed
navigation:
  title: Users and sharing
  order: 1
---

# Accounts and Sharing

Everyone in your household gets their own account on the same Quark. This page covers who can do what, where each
person's files live, and how sharing works between accounts.

Sharing here means between accounts on your Quark. It does not put anything on the public internet.

---

## Admins and members

Every account is either an **admin** or a **member**. The account made during setup is the first admin.

An admin can turn any other account into an admin with **Make admin** on the Users page, or back with **Remove admin**.
The change takes effect right away; nobody has to sign out. A Quark always keeps at least one admin. If you try to
remove the last one, Quark says "This Quark needs at least one admin. Make someone else an admin first."

### What everyone can do

- Use their own home folder, their groups' folders, and anything shared with them
- Share what they own with other accounts
- Open the **System** page: Health, the drive list, and the jobs they started
- Change their own password, profile picture and theme color
- See and sign out their own sessions
- Delete their own account

### What only admins can do

- **Open every folder on the Quark**, including other people's homes. Files opens at the top of everything for an
  admin, with an **All files** shortcut. There is no private folder an admin cannot reach.
- Use the **Users** page: add accounts, approve requests, turn accounts off, delete them, and manage groups
- Open the **Vault**. A Quark has one vault, shared by its admins.
- Manage drives on **System → Storage**: **Mount**, **Set Role**, **Back Up** and **Verify**
- See everyone's jobs on **System → Jobs**, not just their own
- Start an update, **Repair installation**, **SSH access** and **Device name** in Settings
- Set **This Quark's default** theme color, and turn betas on and off on the **Features** tab
- Get backup reminders under the bell, and remove devices from **Connected devices**
- **Reset this Quark**
- In the Chat beta: see the name and topic of private channels they are not in, and rename them, change their members
  or delete them. Admins cannot read the messages in a channel they are not in.

A member who opens a Users or Vault link lands on Files instead. The Quark refuses those requests from a member either
way. Settings tells a member "Accounts are managed by an admin" where an admin gets a **Users and groups** shortcut.

---

## Homes and group folders

### Your home

Each account has a home folder, `users/<username>`, which it owns. A member lands there when they open Files. The
shortcuts above the list read **My files** and **Groups**, and **Shared with me** once someone has shared something.

Your home is private from other members until you share something from it. It is not private from admins.

### Group folders

Each group has a folder, `groups/<group name>`. Every member of the group can open it and add, rename and delete things
inside it. Adding someone to a group gives them the folder; removing them takes it away.

The built-in **everyone** group includes every account. Its folder, `groups/everyone`, can be read and written by
everyone on the Quark — a shared drawer nobody has to be added to.

### What members cannot move or delete

Members are not offered **Move/Rename** or **Delete** on `users`, `groups`, a home folder or a group's folder, and the
Quark refuses those requests from them. Everything inside those folders works as usual. Admins can move and delete all
four.

`users` and `groups` themselves can never be shared, by anyone. Share a folder inside them instead.

---

## Sharing

Open a file or folder's menu and choose **Share…**. Pick a person, a group, or **everyone** (listed as **Every
account**), choose a level, and tap **Share**.

### Levels

- **Can view** — open and download.
- **Can edit** — also change what is inside: add, rename and delete.
- **Owner** — also manage who has access, including making other owners.

Sharing with a group follows membership. Someone added to the group later gets the same access, and someone removed
loses it.

### Access is inherited

Access set on a folder reaches everything inside it, and it adds up. A subfolder cannot be more private than the folder
it sits in.

In the share sheet, access that comes from a folder above is listed under **Inherited access**, for example "Can edit ·
From Family". You change it on that folder, not here. Moving an item out of a shared folder drops the access it got
from that folder.

### Who can change sharing

Only an owner of the item, an owner of a folder that holds it, or an admin can see and change who has access. Everyone
else sees "Only the owner or an admin can change sharing."

- You cannot remove or lower your own **Owner** row, so you cannot lock yourself out. Another owner or an admin can.
- Removing the last owner asks first: after that, only admins can manage the item.

### Shared with me

**Shared with me** appears in Files only once something has been shared with you. It lists each share with who shared
it. Admins never get this shortcut; they reach everything through **All files**.

---

## Getting an account

There are two ways.

### Ask for one

On the sign-in page, tap **Need an account? Request one**. Choose a username and a password, enter the password again,
and tap **Send request**. The page then says **Request sent**: an admin of this Quark needs to approve it.

Signing in before then says "Your account request hasn't been approved yet. Ask an admin of this Quark."

Requests are on by default. An admin can turn off **Allow account requests** on the Users page; the sign-in page then
stops offering it. Requests already waiting can still be approved or denied.

On the Users page, admins see waiting requests under **Requests**:

- **Approve** creates the account and its home folder, `users/<username>`.
- **Deny** creates nothing, and the username is free again at once.

**Recent decisions** lists the last 100 approvals and denials, with which admin made each one.

### An admin adds you

An admin taps **Add user** on the Users page, picks your username, and types an initial password twice. Your home
folder is made at the same time. If a folder `users/<username>` already exists, it becomes your home, with everything
already in it.

### Usernames

A username is up to 32 characters: lowercase letters, numbers, dots, dashes or underscores, starting with a letter or
number. Each one can only be used once on a Quark, and a waiting request holds its name until it is denied.

---

## Passwords

Change your own password under **Settings → Account → Change password**. You need your current password, and the new
one needs at least 8 characters. Your other sessions stay signed in, so use **Sign out everywhere else** afterwards if
that matters.

An admin cannot see your password, and there is no button for an admin to reset it. Setup, **Add user** and account
requests all ask for the password twice so a typo cannot lock you out. Write your password down somewhere safe.

---

## Turning off and removing accounts

These live in the actions menu on each row of the Users page, for admins. Your own row is marked **You** and has no
actions; you delete your own account from Settings instead.

- **Disable** signs the person out everywhere. Signing in then says "This account is turned off. Ask an admin of this
  Quark." Their files and shares stay exactly as they were.
- **Enable** lets them sign in again, with everything they had.
- **Delete** removes the account for good. The folders it owned stay where they are, and **the admin who deleted it
  becomes their owner**, including anything of theirs in the trash. Its profile picture is deleted.

When someone deletes their own account from **Settings → Account → Account and data**, their folders go to the
Quark's longest-standing admin. See the [Settings Reference](/docs/settings#delete-account-vs-reset-this-quark) for
that, and for **Reset this Quark**.

### Groups

On the Users page, the **Groups** tab lists every group. Admins can make a **New group**, **Rename** it, change its
**Members**, or **Delete** it. The **everyone** group cannot be changed.

A group name is 1 to 64 characters with no slashes, and two groups cannot share a name, ignoring capitals. Renaming a
group renames its folder too, and what was shared with it stays shared.

Deleting a group removes the access it gave. Its members keep their accounts and their own files. The group's folder
and everything in it stay, and only admins can reach it until an admin shares it with someone or removes it.

---

## Profile picture

Set one under **Settings → Account → Profile**: **Choose picture**, or **Remove** to go back to your initials.

- Up to 10 MB, in a common image format.
- Quark crops it square around the center and keeps only a 256 × 256 copy it made itself. The original's details,
  including where it was taken, are not kept.
- Every signed-in account on the Quark can see it, the same way they can see your username. It is not encrypted.

---

## Related

- [Settings Reference](/docs/settings) — every Settings tab, Delete account and Reset this Quark
- [System](/docs/system) — Health, Storage and Jobs
- [Getting Started](/docs/getting-started)
