---
title: Help & Support
description: Get help and support for Quark
navigation:
  title: Help
  order: 1
---

# Help & Support

---

## Troubleshooting

### I can't reach Quark in my browser

- Make sure Quark is powered on
- Make sure you're on the same WiFi network as your Quark device
- Try `https://quark.local` — if you changed the hostname during setup, use that instead
- Type `https://`, not `http://`. Quark doesn't answer on `http://`
- Try `https://quark.lan` or the Quark's IP address from your router's device list. Android phones older than Android 12
  can't open `.local` names
- On an old browser or tablet, the page may never load: Quark needs TLS 1.3
- Try restarting your router and your Quark device
- [Connecting](/docs/start/connecting#when-it-wont-connect) has the full list, including the phone apps' messages

### My browser says the connection is not private

Expected, and safe to continue past. Click **Advanced**, then **Proceed** (on Safari, **Show Details**, then **visit this
website**). Quark encrypts the connection with a certificate it makes for itself; the warning means no
public certificate authority countersigned it, which none can do for a device on your own WiFi. The
[Getting Started guide](/docs/start/getting-started#your-browser-warns-you-the-connection-is-not-private) explains it at
length. It comes back on a new browser, about once a year when the certificate is replaced, and on addresses like
`quark.lan`; [Connecting](/docs/start/connecting#the-certificate) explains each.

### I'm getting an error when I try to install Quark

There is no installer to download. Releases are Linux archives for `x86_64` and `arm64`, plus a container image.
[Self-Hosting](/docs/nerd-notes/self-hosting) covers both, and what each message from `sudo quark install` means. If you're still
stuck, [open a GitHub issue](https://github.com/autobutler-org/quark/issues) and someone will help.

### Quark doesn't work with my VPN

This is expected. Quark runs on your local network, and connecting through a VPN routes traffic outside your home, so
the two conflict. Disable your VPN when accessing Quark on your home network.

Built-in remote access, separate from your VPN, is coming soon — **Settings → Network** shows it as **Coming soon** for
now. See [How It Works](/docs/start/how-it-works) for what it will do.

### I'm having performance issues

1. Open **System** from the app drawer and check the **Health** tab — high disk usage or high temperatures can cause
   slowdowns. [System](/docs/system#when-a-bar-turns-orange-or-red) lists the limits.
2. Share what you see in a [GitHub issue](https://github.com/autobutler-org/quark/issues) or email it to
   [support@autobutler.org](mailto:support@autobutler.org) and we'll take a look

### My files aren't showing up after I uploaded them

New files show up without a refresh. If one is missing, check the **Upload** chip in the Files top bar. While an
upload runs, it shows how many files are done, such as `3/10`.

- **The That name is taken dialog is waiting.** The folder already has a file with that name. Choose **Keep both**,
  **Replace**, or **Cancel**. **Cancel** skips only that file.
- **A big file stopped partway.** Big files are sent in pieces, and Quark retries on its own. If the page reloaded in
  the middle, upload the same file to the same folder again. Quark picks up where it stopped.
- **More than one drive.** Your files went to the drive you picked in **Upload to device**, or to the one Files is
  filtered to. Look there.

Refreshing the page is the last resort. [Files](/docs/files#uploading) has the details.

### I deleted a file

Open **Trash** from the app drawer. You can restore it for about 30 days, or delete it permanently.
Trash is a change-your-mind window, not a forever recycle bin. See
[Getting Started](/docs/start/getting-started).

### My drive is still full after I deleted files

Deleting moves files to **Trash**, and Trash still takes up room. Each drive keeps its own trash, on that drive.
Anything there is deleted for good after 30 days. To free the space now, open **Trash** and choose **Delete
permanently** on what you don't need, or **Empty trash**. See
[Trash still uses space](/docs/trash#trash-still-uses-space).

---

## Error messages

Quark shows a fixed set of error messages. Find the one on your screen below.

### Connecting and signing in

#### "You're not connected — the app can't reach your Quark right now."

The app has a Quark saved but gets no answer from it. Check that you're on the same network as your Quark, that the
address in **Settings** is right, and that the Quark is powered on. See
[I can't reach Quark in my browser](#i-cant-reach-quark-in-my-browser).

#### "Could not connect. Check the address and try again."

You're adding a Quark and nothing answered at that address. If you typed `quark.local`, the app also tries `quark.lan`
and plain `quark`, so some routers still work. If none answers, type the IP address your Quark shows instead.

#### "Invalid username or password."

The username or password is wrong. Quark says the same thing for an unknown username, so the message never reveals
which accounts exist. On the sign-in page it also names the Quark you tried, so you can tell if you picked the wrong
one.

#### "Too many failed sign-in attempts, try again later."

Too many wrong passwords in a row. Quark locks sign-in for a while, and the wait grows with each new failure. Wait,
then try again.

#### "Your account request hasn't been approved yet. Ask an admin of this Quark."

You requested an account and no admin has approved it yet. An admin approves it under **Requests** on the **Users**
page.

#### "This account is turned off. Ask an admin of this Quark."

An admin turned your account off. Only an admin can turn it back on.

#### "Your session expired. Sign in again."

Sign in again. A session ends after 30 days without use, and after 90 days no matter what.

#### "This Quark needs an update before this app can sign in to it. Update the Quark, then try again."

Your app is newer than your Quark. Update the Quark first. The opposite case reads "This version of the app is too
old for this Quark. Update the app to continue." and means you should update the app.

#### "Sign out and sign in again, then try this again."

You asked for something that checks your password again, from a session an older app started. Sign out, sign in, and
repeat what you were doing.

### Files, photos, and trash

#### "Something is already at that location. Move or rename it, then restore again."

You tried to restore something from **Trash**, but something else now sits where it used to be. Restore never
overwrites. Move or rename what's there, then restore again.

#### "That name is taken" or "There's already a file with that name here."

A file with that name is already in the folder. When you upload, choose **Keep both** (the new one gets a number
after its name), **Replace**, or **Cancel**.

#### "This video format (.MKV) isn't supported for in-browser playback. Download the file to watch it locally."

`.mov`, `.avi`, `.mkv`, `.wmv`, `.flv` and `.3gp` files often won't play in the app. Download the file and play it
on your computer.

#### "Unable to play this media. The file may use an unsupported codec/profile."

The video is encoded in a way this device can't play. **Convert…** in the video player puts the same video in a
different file format without re-encoding it, so it won't fix this. Download the file and play it locally. For audio
the message reads "Unable to play this audio file. The format may not be supported by this browser."

#### "You can't save files in that folder."

**Convert…** writes the new file next to the video, so you need permission to save files in that folder. Copy the
video to a folder you can edit, then convert it there.

#### "1 file isn't a photo, so it wasn't uploaded."

You dropped files onto **Photos** that aren't images. Photos only takes images, so videos and other files are left
out. Upload them in **Files** instead. With more than one, it reads "N files aren't photos, so they weren't
uploaded."

#### "There's already an album with that name here." or "Album names can't contain a slash."

Album names must be unique in their folder, ignoring upper and lower case, and can't contain `/`. Pick another name.

#### "The name can't be blank." or "That name is too long. Try a shorter one."

A file or folder needs a name, and the name has a length limit. Type a shorter one.

#### Folder not found, File not found, or Access denied

A link points to something that moved, was deleted, or is no longer shared with you. Click **Retry**, step up a level
(**Go to parent** or **Open containing folder**), or click **Go to /files**.

#### "Your Quark is busy. Try again in a moment."

Your Quark is busy with other work. Wait a moment, then try again. "Too many requests. Wait a moment and try again."
means the same: slow down and retry.

#### "You don't have permission to …"

You can see this, but you can't change it. Folders shared with you as **Can view** are read-only. Ask the owner for
**Can edit**.

#### "Couldn't … — it's no longer there."

Someone else moved or deleted the item while you had it open. Refresh the page.

### Permissions and admins

#### "Only an admin can open that page."

You followed a link to a page only admins can use: **Users**, **Vault**, or the **Features** tab in **Settings**.
Quark sends you to **Files** instead.

#### "This Quark needs at least one admin. Make someone else an admin first."

You tried to remove, turn off, or delete the last admin. Make another account an admin, then try again.

#### "That password isn't right. Nothing was deleted."

Deleting an account or resetting your Quark asks for your password, and the one you typed is wrong. Nothing changed.

### Chat

#### "That password doesn't unlock your messages."

Chat unlocks with your **account** password, the one you sign in with. Not the vault's.

#### "Waiting for a member to share the key. Try again once they have."

You're new to this channel. Another member who already has its key must open the app first. Your messages appear on
their own once they do.

#### "That channel doesn't exist, or you aren't in it."

The channel was deleted, or you aren't a member. Ask someone in the channel to add you.

#### "That message is too long. Split it into shorter ones."

Send it as two or more messages.

#### "You're sending these too quickly; wait a moment and try again."

Chat limits how fast one account can send. Wait a moment.

### Vault

The vault is admin-only. See [Vault](/docs/vault).

#### Vault device disconnected

The vault lives on a storage drive, and that drive isn't plugged in. Reconnect it to open your vault.

#### Incorrect password

The master password is wrong. There is no reset, so if you forgot it, the vault can't be opened.

---

## Get Help

**GitHub Issues** for questions, bug reports, and feature requests:
→ [github.com/autobutler-org/quark/issues](https://github.com/autobutler-org/quark/issues)

**Email** for private matters:
→ [support@autobutler.org](mailto:support@autobutler.org)

When you report a problem, include your Quark's version and your app's version.
[Versions and release notes](/docs/settings/versions) shows where to find both.
