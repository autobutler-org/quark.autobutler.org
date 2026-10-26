---
title: Users and sharing
description: Who can do what on your Quark, where each person's files live, and how you share with each other
navigation:
  title: Users and sharing
  order: 1
---

# Users and sharing

Everyone in your household can have their own account on the same Quark. Each person gets their own files, their own
password, and their own vault.

This page is who can do what, where those files live, and how you share with each other.

A share is between accounts on your Quark. It is not a public link.

Away from home is a separate switch. Remote access stays off until an admin turns it on in **Settings → Network**. An
admin can turn it off again. On your home Wi-Fi, Quark works the same either way.

## How to use it

### Share a file or folder

1. Open the file or folder's menu and choose **Share…**.
2. Pick a person, a group, or **Every account**.
3. Choose **Can view**, **Can edit**, or **Owner**.
4. Tap **Share**.

They find it under **Shared with me** in Files, once something has been shared with them. Each row says who shared it.
An admin does not get that shortcut. An admin already sees every folder, from **All files**.

### Ask for an account

Account requests are on unless an admin has turned them off.

1. On the sign-in page, tap **Need an account? Request one**.
2. Choose a username and a password, and type the password again.
3. Tap **Send request**.

The page then says **Request sent**. An admin has to approve it on the Users page before that person can sign in.

Until then, signing in says "Your account request hasn't been approved yet. Ask an admin of this Quark."

### Add someone

An admin can make the account directly, with no request.

1. Open **Users** from the app drawer. It opens on **Accounts**.
2. Tap **Add user**.
3. Choose a username and type a starting password twice.
4. Tap **Add user**.

Their home folder is ready at the same time. The first time they sign in, Quark shows a recovery phrase. You do not see
that phrase. They should write it down. The [Security Guide](/docs/help/security-guide) says where to keep it.

### Make a folder for a few people

1. Open **Users**, then the **Groups** tab.
2. Tap **New group**, type a name, and tap **Create**.
3. Choose **Members**, and add the accounts that should use the folder.

Everyone in the group can open that folder in Files and add to it. Removing someone takes the folder away from them.

The **everyone** group is already there. It includes every account. Its folder is a shared drawer nobody has to be
added to. The group cannot be renamed, deleted, or have its members changed.

### Turn on remote access

Only an admin can do this. It is off until you do, and it is for the whole household.

1. Open **Settings → Network**.
2. On **Remote access**, tap **Set up remote access**.
3. Tap **Turn on remote access**.

It takes about 30 seconds. You can turn it off again with **Turn off**. Quark asks first, because devices away from
home lose access. At home, nothing changes.

Everyone else sees whether remote access is on, and a note to ask an admin. In the iOS and Android apps, **Remote
access on this phone** pauses it for that phone alone. The [Settings Reference](/docs/settings#network) has the pause
choices.

## Admins and members

Every account is either an **admin** or a **member**. The account made during setup is the first admin.

An admin uses **Make admin** on the Users page to give someone admin, or **Remove admin** to take it back. The change
takes effect right away. Nobody has to sign out. A Quark always keeps at least one admin. If you try to remove the last
one, Quark says "This Quark needs at least one admin. Make someone else an admin first."

### What everyone can do

- Use their own home folder, their groups' folders, and anything shared with them
- Share what they own
- Open their own vault. See [Vault](/docs/vault)
- Open **System**: Health, the list of drives, and the jobs they started on files they can still open
- Change their own password, profile picture, and theme color
- See where they are signed in, and sign a session out
- Delete their own account

### What only an admin can do

- Open every folder in Files, including other people's homes. Files opens at the top for an admin, with an **All
  files** shortcut.
- Use the **Users** page: add accounts, approve requests, turn accounts off, delete them, and manage groups
- On **System → Storage**, use **Mount**, **Set Role**, **Back Up**, and **Verify**. Everyone can see the drives.
  Those buttons are the admin's.
- See everyone's jobs on **System → Jobs**
- In Settings, start an update, use **Repair installation**, turn on [SSH access](/docs/settings/ssh), and set the
  **Device name**
- Set **This Quark's default** theme color
- Get backup reminders under the bell, when the Quark has never been backed up or the last backup is old. The switches
  are **No backup yet** and **Backup out of date**, under **Settings → General → Notifications**. Turning one off
  affects only that admin.
- On **Settings → Network**, remove a row from **Connected devices**. That only tidies the list. It does not sign the
  device out, and the device shows up again the next time it connects. To sign a device out, use **Sessions** on the
  Account tab.
- Turn remote access on or off in **Settings → Network**
- **Reset this Quark**
- In Chat, see private channels they are not in. Those are listed apart, with the name and the topic. An admin can
  rename one, change its members, or delete it. Opening it shows the members and the settings. It does not show the
  messages.

A member who opens a Users link lands on Files. Quark refuses those requests from a member either way. In Settings, a
member sees "Accounts are managed by an admin" where an admin sees **Users and groups**.

An admin cannot open another person's vault. An admin also cannot read Chat messages in a channel they are not in.

Settings has no **Features** tab right now. Nothing is in beta, so there is no switch there to turn a feature off.

## Homes and group folders

### Your home

Each account owns a home folder. A member lands there when they open Files. The shortcuts above the list are **My
files** and **Groups**, plus **Shared with me** once someone has shared something with you. An admin also gets **All
files**.

Your home stays out of other members' way until you share something from it. An admin can still open it.

### A group's folder

Each group has a folder of its own. Every member can open it and add, rename, and delete things inside it. Adding
someone to the group gives them the folder. Removing them takes it away.

The **everyone** folder works that way for every account on the Quark.

### Folders to leave in place

Members are not offered **Move/Rename** or **Delete** on the folder named users, the folder named groups, a home
folder, or a group's own folder. Everything inside those folders works as usual. An admin can move and delete all
four.

The folders named users and groups cannot be shared, by anyone. Share a folder inside them. Sharing the folder itself
would hand over every home, or every group folder, at once.

## Sharing

Open a file or folder's menu and choose **Share…**. Pick a person, a group, or **everyone** (shown as **Every
account**). Choose a level, and tap **Share**.

### Levels

- **Can view.** They can open it and download it.
- **Can edit.** They can also add, upload, rename, move, and delete.
- **Owner.** They can also change who has access, including making other owners. Give this only to someone you trust
  with the item.

Sharing with a group follows membership. Someone added later gets the same access. Someone removed loses it.

### Access from a folder above

Access on a folder reaches everything inside it, and it adds up. A folder inside cannot be more private than the one
it sits in.

In the share sheet, access from a folder above is listed under **Inherited access**. A row looks like "Can edit · From
Family". The sheet says "From a folder this is in. Change it on that folder." Moving an item out of a shared folder
drops the access it got from that folder.

### Who can change sharing

Only an owner of the item, an owner of a folder that holds it, or an admin can change who has access. Everyone else
sees "Only the owner or an admin can change sharing."

- You cannot remove or lower your own **Owner** row. Another owner, or an admin, can.
- Taking **Owner** away from someone asks first. If no other owner is left, only admins can change who has access.

### Shared with me

**Shared with me** shows up in Files only once something has been shared with you. It lists each share and who shared
it, as "Shared by" and their name. Shares you made for other people stay in your own files. An admin never gets this
shortcut. They reach everything through **All files**.

## Passwords

Change your own password under **Settings → Account → Change password**. Type your current password, then the new one
twice. A new password needs at least 8 characters.

You stay signed in on this device. Every other place your account is signed in is signed out, and has to sign in again
with the new password.

If your vault opens with your current password, it opens with the new one from then on. See [Vault](/docs/vault).

You can sign other devices out without changing the password. Open **Settings → Account → Sessions**. The one you are
using is marked **This session**. Sign out one row, or tap **Sign out everywhere else**.

An admin cannot see your password, and there is no button for an admin to choose a new one. If you forget yours, tap
**Forgot password?** on the sign-in screen and use your recovery phrase. See the
[Security Guide](/docs/help/security-guide).

Setup, **Add user**, and account requests all ask for the password twice, so a typo cannot lock you out.

## Turning off and removing accounts

These live in the actions menu on each row of the Users page. Your own row is marked **You** and has no actions. You
change your own account from Settings. Quark tells an admin who tries anyway to use Settings.

- **Disable** signs that person out everywhere. Signing in then says "This account is turned off. Ask an admin of this
  Quark." Their files and shares stay as they were. You cannot turn off your own account here, and you cannot turn off
  the last admin.
- **Enable** lets them sign in again, with everything they had.
- **Delete** asks first: "The files they own stay on this Quark and become yours." The account cannot sign in again.
  The folders it owned stay where they are, and you become their owner, including anything of theirs in the trash. The
  profile picture is deleted. The vault is deleted with the account, and the logins in it are gone.

When someone deletes their own account from **Settings → Account → Account and data**, Quark asks for their password
and signs them out everywhere. Their vault goes with the account. Their folders go to the Quark's longest-standing
admin. If that account is the only one, the Quark goes back to first-time setup. The files stay on it, and whoever sets
it up next can open them.

The last admin cannot leave other accounts without an admin. Quark says "This Quark needs at least one admin. Make
someone else an admin first."

**Reset this Quark** is different. It is admin-only, and every account goes with it. Read the confirmation before you
tap it. See [Delete account vs Reset this Quark](/docs/settings#delete-account-vs-reset-this-quark).

### Groups

On the **Groups** tab, an admin can make a **New group**, **Rename** it, change its **Members**, or **Delete** it. The
**everyone** group is listed first, reads **Every account**, and has no actions.

Two groups cannot share a name, even when the capitals differ. Renaming a group renames its folder, and what was
shared with the group stays shared.

You can add someone only if that account can sign in. A disabled account that is already a member stays a member.

Deleting a group asks first. Whatever was shared with the group stops being shared. Members keep their accounts and
their own files. The group's folder, and everything in it, stays. After that, only an admin can open it, to share it
with someone or to remove it.

## Profile picture

Set one under **Settings → Account → Profile**. Tap **Choose picture**, or **Remove** to go back to your initials.

- Up to 10 MB, in a common image format. A file that is too large, or that Quark cannot read as an image, is refused.
  The picture you already have stays. The message for a large file is "That picture is larger than 10 MB. Pick a
  smaller one."
- Quark crops it square around the center and keeps a 256 by 256 copy it made itself. Details from the original,
  including where the photo was taken, are not kept.
- Every signed-in account on the Quark can see it, the same way they can see your username. It is not locked the way a
  vault login is.

Deleting an account deletes its picture.

## If something goes wrong

**The new account cannot sign in yet.** If the request is still waiting, Quark says "Your account request hasn't been
approved yet. Ask an admin of this Quark." An admin approves or denies it under **Requests** on the Users page.

**Signing in says the account is turned off.** An admin used **Disable**. **Enable** on that row lets them in again.
Their files are still there.

**You cannot leave the Quark with no admin.** Make someone else an admin first. Your own row on Users has no menu, on
purpose.

**The share sheet will not let you change access.** Quark says "Only the owner or an admin can change sharing." Ask an
owner, or an admin.

**You opened Users and landed on Files.** That account is a member. Ask an admin in the house.

**You forgot your password.** Use **Forgot password?** and your recovery phrase. An admin cannot pick a new password
for you.

## Good to know

- Every account has a vault, admin or not. You see only yours. It opens with the password you already sign in with.
  There is no second password, and there is no vault shared by the household.
- **Allow account requests** is on by default. An admin can turn it off on the Users page. The sign-in page then stops
  offering a request. Requests already waiting can still be approved or denied.
- **Approve** creates the account and its home folder. **Deny** creates nothing, and the username is free again right
  away.
- **Recent decisions** lists the last 100 approvals and denials, and which admin made each one. Before any decision it
  reads "No decisions yet".
- A username can be used only once on a Quark. A waiting request holds its name until it is denied. If a home folder
  for that name is already there, it becomes theirs, with everything already in it.
- A username is up to 32 characters: lowercase letters, numbers, dots, dashes, or underscores, and it starts with a
  letter or a number.
- **Sessions**, **Connected devices**, and drives are three different lists. Sessions are the places your account is
  signed in. Connected devices is the browsers and apps an admin can tidy. Drives are on **System → Storage**.

## Related

- [Vault](/docs/vault): your own saved logins
- [Security Guide](/docs/help/security-guide): your password, your recovery phrase, and remote access
- [Settings Reference](/docs/settings): every Settings tab, Delete account, and Reset this Quark
- [System](/docs/system): Health, Storage, and Jobs
- [Getting Started](/docs/start/getting-started): the first evening with a new Quark

## Nerd Notes

Checked against quark v0.56.2. `main` was one commit ahead (`c0f4eefc`, perf upload stress files). That commit does
not touch accounts, sharing, sessions, or the vault.

**Where files live.** On the internal drive, a home is `users/<username>` and a group's folder is
`groups/<group name>`. The built-in group is `groups/everyone`. Members land on their home. Admins land at the drive
root (`landingPath` in `lib/utils/file_browser_path_utils.dart`). **My files**, **Groups**, **Shared with me**, and
**All files** are shortcuts in `lib/pages/file_browser_page.dart`. **Shared with me** reads `GET /api/v0/access/mine`.
An admin bypasses the access table and has no rows loaded, so that answer is always empty (`ListSharedWithMe` in
`pkg/util/accessutil/accessutil.go`).

**Who can open a path.** Admins bypass path grants. Two exceptions: every query in `sql/queries/vault.sql` is scoped
to the caller's `user_id`, and chat messages go only to people who can read that channel (`FilterEvent` in
`pkg/util/accessutil/accessutil.go`). `PUT /api/v0/access` grants `read`, `write`, or `owner`. Nobody, admins
included, may grant on the `users` or `groups` folder itself (`ErrStructuralShare`). A member's move or delete of a
home folder or a group's folder is refused (`refuseHomeRoot` in `internal/server/api/v0/files/helpers.go`). The menu
hides **Move/Rename** and **Delete** on those folders, and hides **Share…** on `users` and `groups`
(`lib/widgets/file_browser/file_browser_view/file_menu.dart`).

**Accounts.** These routes are admin-only. A member gets 403, and opening `/users` sends them to Files.

- `GET` and `POST /api/v0/admin/users`, and `DELETE /api/v0/admin/users/:username`
- `PUT /api/v0/admin/promote/:username`, and the same shape for `demote`, `disable`, `enable`, `approve`, and `deny`
- `GET /api/v0/admin/account-requests/history`, the last 100 decisions (`requestlogutil.MaxEntries`)
- `PUT /api/v0/settings/access-requests`, the **Allow account requests** switch, on by default
- Groups: `GET` and `POST /api/v0/admin/groups`, `PUT` and `DELETE /api/v0/admin/groups/:id`, and `PUT` and
  `DELETE /api/v0/admin/groups/:id/members/:userId`

A username matches `ErrInvalidUsername`: up to 32 lowercase letters, numbers, dots, dashes, or underscores, starting
with a letter or a number. A group name is 1 to 64 characters, is not `.` or `..`, and has no slashes, line breaks, or
tabs (`ErrInvalidGroupName`). Names are unique ignoring case.

An admin action on the caller's own account is refused with "use Settings to change your own account." Removing or
deleting the last active admin is 409, shown as "This Quark needs at least one admin. Make someone else an admin
first."

**Delete.** `DELETE /api/v0/admin/users/:username` hands owned paths to the admin who deleted the account, then
deletes that account's sessions, chat keys, vault items, vault key, and profile picture. Files stay. A self-delete
hands the paths to the longest-standing active admin (`DeleteUser` in `pkg/util/authutil/authutil.go`, with
`ActorUserID` 0). When no accounts remain, the Quark returns to setup. The admin dialog says the files stay and
become theirs. It does not mention the vault. The vault rows are deleted in that same function.

**Passwords and sessions.** The app never sends the password. `PUT /api/v0/auth/password` replaces the auth key and,
in the same transaction, signs out every other session. This session stays (`change_password.go`, since v0.53.0). The
body can also carry a re-wrapped `vaultKey` and `chatKeys`. A raw password is 426. The app requires at least 8
characters. Sessions last 30 days from last use and end 90 days after they were created (`sessionDuration` and
`SessionMaxLifetime` in `pkg/util/authutil/service.go`). `GET /api/v0/auth/sessions` lists them.
`DELETE /api/v0/auth/sessions/:id` signs one out. `DELETE /api/v0/auth/sessions` is **Sign out everywhere else**.
**Disable** ends that account's sessions. There is no admin route that sets another account's password. Recovery is
`POST /api/v0/auth/recover`. `PUT /api/v0/auth/recovery-key` replaces the phrase.

**Profile pictures.** `PUT /api/v0/users/me/avatar` accepts up to 10 MiB (`avatarutil.MaxUploadBytes`), center-crops,
and stores a 256×256 re-encode (`avatarutil.Size`). EXIF does not survive. The app tells the person "That picture is
larger than 10 MB. Pick a smaller one." `GET /api/v0/users/:id/avatar` serves the picture to any signed-in account.
`DELETE /api/v0/users/me/avatar` clears it. Files live at `avatars/<user id>` in the data directory, outside every
home.

**Chat and betas.** No beta flag is registered, so `GET /api/v0/settings/features` returns an empty list
(`TestListFeatures_EmptyForAnyUser`). The **Features** tab is hidden while that list is empty. Chat is a normal
drawer item. An admin's channel list uses `GET /api/v0/chat/channels?all=1`. Channels they are not in come back with
an empty permission set. Admin may rename, change members, or delete, and is not given the right to read messages by
being an admin (`pkg/util/chatutil/helpers.go`).

**Remote access.** Off until an admin turns it on. `GET /api/v0/settings/remote-access` is the card's state. `POST`
turns it on and `DELETE` turns it off. Both changes are admin-only. The buttons are **Set up remote access** and
**Turn on remote access** (`RemoteAccessPanel` and `RemoteAccessSetupView`). The card says about 30 seconds. Members
see the state and a line that an admin turns it on. The phone pause is a separate switch,
**Remote access on this phone**, and it does not turn the household's remote access off.

**Drawer.** **Users** is offered only when the account is an admin (`lib/widgets/layout/app_drawer.dart`). **Vault**
is offered to every account.
