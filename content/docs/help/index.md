---
title: Help
description: What to try when Quark will not open, a file is missing, or a message on screen does not make sense
navigation:
  title: Help
  order: 1
---

# Help

Start here when something is not working. Most of the problems below have a short fix. If yours is not here, the last
section is how to reach a person.

## How to use it

1. Find the heading that matches what you see.
2. Try the steps in order.
3. Still stuck? Note your Quark's version under **Settings → Updates**, and your app's version under **Settings →
   About**. Then use [Get in touch](#get-in-touch).

## If Quark will not open

### The page will not load

- Make sure the Quark is plugged in and switched on.
- Use the same WiFi as the Quark.
- Type `https://quark.local`. If you renamed the Quark during setup, use that name instead.
- Type `https://`, not `http://`. Quark does not answer on `http://`.
- If that name does not open, try `https://quark.lan`, or the address your router lists for the Quark. Phones on
  Android older than Android 12 cannot open `.local` names.
- On a very old browser or tablet, the page may never load. Update the browser, or try a newer device.

Restarting your router, then the Quark, is the last thing to try at home.
[Connecting](/docs/start/connecting#when-it-wont-connect) has the full list, including what the phone apps say.

### The browser says the connection is not private

This warning is expected. Choose **Advanced**, then **Proceed**. On Safari, choose **Show Details**, then **visit this
website**.

Quark made the certificate itself. It is for a name that only exists on your WiFi, and a public certificate authority
cannot sign that, so the browser asks. Continuing is the ordinary next step. You will see the warning again on a new
browser, about once a year when Quark replaces the certificate, and on an address such as `quark.lan`.
[Connecting](/docs/start/connecting#the-certificate) explains each case.

### You are away from home

Remote access is how you open Quark when you are not on your home WiFi. It stays off until an admin turns it on.

1. Open **Settings → Network**.
2. On the **Remote access** card, an admin taps **Set up remote access**.
3. In the sheet, tap **Turn on remote access**. **Not now** leaves it off. It takes about 30 seconds.
4. The card shows **Connecting…**, then **On**, with the line **Reachable away from home**.

Everyone who is signed in sees the same card. Only an admin can change it. If you are not an admin, the card says to
ask an admin of your Quark.

To turn it off, an admin uses the switch, or **Turn off** when it could not connect. Quark asks **Turn off remote
access for everyone?** Devices that are away from home lose access. At home, Quark keeps working. Confirm with **Turn
off**.

If the card says **Couldn't connect**, it also says "Remote access is still switched on, but your Quark couldn't
connect. It keeps trying, but you can't reach it away from home yet." Check that the internet at home works. An admin
can then tap **Try again**.

On an iPhone or Android phone, **Remote access on this phone** can pause remote access for that phone alone. The
choices are **For 1 hour**, **Until I'm back on home Wi-Fi**, and **Until I turn it back on**. If you meant to reach
Quark while you were out, turn that pause off.

You do not change anything on your router. [The security guide](/docs/help/security-guide#remote-access) says when to
leave remote access off.

### A VPN is on

A VPN on your phone or computer can stop that device from seeing the Quark on your home WiFi. Turn the VPN off while
you are at home. When you are away, use remote access if an admin has turned it on.

### The app says you are not connected

The headline is **You're not connected**. The line under it is "You're not connected — the app can't reach your Quark
right now."

Check that you are on the same network, that the Quark is on, and that the address under **Settings → General →
Backend hosts** is right. When the app cannot reach the Quark at home or away, the connection sheet says "The app
can't reach your Quark right now. Check your internet connection, or try again when you're home."

If you are adding a Quark and nothing answers, the app says "Could not connect. Check the address and try again."
Typing `quark.local` also tries `quark.lan` and plain `quark`. If none of those answers, type the address your router
shows.

If the app says the security certificate has changed, do not choose **Forget certificate** until you know why.
[Connecting](/docs/start/connecting#the-certificate) explains the ordinary causes.

### You are installing Quark on a computer

The Quark box has no installer to download. You open it in a browser, or in the phone app.

If you are putting Quark on a computer you already own, the
[install guide](/docs/nerd-notes/self-hosting#messages-from-sudo-quark-install) lists what each message means.

## Files and free space

### A file I uploaded is missing

New files show up on their own. You do not have to refresh.

If one is missing, look at the **Upload** chip in the Files top bar. While an upload is running, it shows how many
files are done, such as `3/10`.

- **That name is taken.** The folder already has a file with that name. Choose **Keep both**, **Replace**, or
  **Cancel**. **Cancel** skips only that file. **Keep both** adds a number to the new name.
- **A large file stopped partway.** Quark sends large files in pieces and tries again on its own. If the page reloaded
  in the middle, upload the same file to the same folder again. Quark continues where it stopped.
- **More than one drive.** The files went to the drive you picked in **Upload to device**, or to the drive Files is
  filtered to. Look there.

Refreshing the page is the last thing to try. [Files](/docs/files#uploading) has the rest.

### I deleted a file

Open **Trash** from the app menu. You can put the file back for about 30 days, or delete it for good. Trash is a
chance to change your mind. It is not a place to keep things. [Trash](/docs/trash) has the details.

### The drive is still full

Deleting a file moves it to **Trash**, and Trash still uses space. Each drive keeps its own trash. Anything still
there is removed after 30 days. To free the space now, open **Trash**, then **Delete permanently** on what you do not
need, or **Empty trash**. See [Trash still uses space](/docs/trash#trash-still-uses-space).

### I'm having performance issues

Open **System** from the app menu. It opens on **Health**. A bar that has turned orange or red is running high. A
short spike while a photo uploads is normal. A temperature bar near the top of its scale means the Quark needs more
air around it.

If a bar stays red, include what Health shows when you [get in touch](#get-in-touch).
[System](/docs/system#when-a-bar-turns-orange-or-red) explains each reading.

## Messages on the screen

Quark uses a fixed set of messages. Find the one you see.

### Signing in

#### "Invalid username or password."

The username or the password is wrong. Quark uses the same sentence when it does not know the username, so the
message does not say which accounts exist. On the sign-in page it also names the Quark you tried, so you can see if
you picked the wrong one.

#### "Too many failed sign-in attempts, try again later."

Too many wrong passwords in a row. Quark pauses sign-in for a while, and the pause gets longer each time. Wait, then
try again. A right password during the pause is refused too.

#### "Your account request hasn't been approved yet. Ask an admin of this Quark."

You asked for an account, and no admin has approved it. An admin does that under **Requests** on the **Users** page.

#### "This account is turned off. Ask an admin of this Quark."

An admin turned your account off. Only an admin can turn it back on.

#### "Your session expired. Sign in again."

Sign in again. A session ends after 30 days without use, and after 90 days no matter what.

#### "This Quark needs an update before this app can sign in to it. Update the Quark, then try again."

Your app is newer than your Quark. Update the Quark first, under **Settings → Updates**. The other way around reads
"This version of the app is too old for this Quark. Update the app to continue." Update the app.

#### "Sign out and sign in again, then try this again."

You asked for something that checks your password again, from a session an older app started. Sign out, sign in, and
try again.

#### "Your current password isn't right. Your password wasn't changed."

You were changing your password, and the current one did not match. Nothing changed.

### Files, photos, and trash

#### "Something is already at that location. Move or rename it, then restore again."

You tried to restore something from **Trash**, and something else now sits where it used to be. Restore never
overwrites. Move or rename what is there, then restore again.

#### "That name is taken" or "There's already a file with that name here."

A file with that name is already in the folder. When you upload, choose **Keep both**, **Replace**, or **Cancel**.

#### "This video format (…) isn't supported for in-browser playback."

The player names the file's format, its container, or its codec, and asks you to download it. `.mov`, `.avi`, `.mkv`,
`.wmv`, `.flv`, and `.3gp` are the usual ones. "Unable to play this media. The file may use an unsupported
codec/profile." means the picture itself is encoded in a way this device cannot play.

**Convert…** in the player, or **Convert video** on the file's menu, changes the wrapper around the video. It does
not re-encode the picture, so it will not fix a codec this device cannot play. Download the file and play it on your
computer. Audio that will not play says "Unable to play this audio file. The format may not be supported by this
browser." [File types](/docs/files/file-types#playing) has the list.

#### "You can't save files in that folder."

**Convert…** writes the new file next to the video, so you need permission to save files in that folder. Copy the
video to a folder you can change, then convert it there.

#### "1 file isn't a photo, so it wasn't uploaded."

You dropped files onto **Photos** that are not images. Photos only takes images. Upload the others in **Files**. With
more than one, the message names the count instead of 1.

#### "There's already an album with that name here." or "Album names can't contain a slash."

Album names have to be unique in their folder, ignoring upper and lower case, and cannot contain `/`. Pick another
name.

#### "The name can't be blank." or "That name is too long. Try a shorter one."

A file or folder needs a name, and the name has a length limit. Type a shorter one.

#### Folder not found, File not found, or Access denied

A link points at something that moved, was deleted, or is no longer shared with you. A file you cannot open says
**File not found** or **File access denied**. A folder says **Folder not found**, **Access denied**, or **Unable to
open folder**.

Tap **Retry**, step up a level (**Go to parent** or **Open containing folder**), or tap **Go to /files**.

#### "Your Quark is busy. Try again in a moment."

Your Quark is busy with other work. Wait, then try again.

#### "Too many requests. Wait a moment and try again."

You asked for too much at once. Wait, then try again.

#### "You don't have permission to …"

You can see this, and you cannot change it. The message names what you were trying to do. A folder shared with you as
**Can view** is read-only. Ask the owner for **Can edit**.

#### "Couldn't … — it's no longer there."

Someone else moved or deleted the item while you had it open. The message names what you were trying to do. Refresh
the page.

### Admins

#### "Only an admin can open that page."

You opened a page only an admin can use. Today that page is **Users**. Quark sends you to **Files** and shows this
message.

**Vault** is not one of those pages. Every account can open its own.

There is no Features tab on screen. Right now nothing is in beta, so Calendar, Books, Chat, and the rest are in the
app menu. A bookmark to the old Features address still sends anyone who is not an admin to **Files**. An admin who
opens that address lands on **General**.

#### "This Quark needs at least one admin. Make someone else an admin first."

You tried to remove, turn off, or delete the last admin. Make another account an admin, then try again.

#### "That password isn't right. Nothing was deleted."

Deleting an account, resetting your Quark, or starting a vault over asks for your password. The one you typed is
wrong. Nothing changed.

### Chat

On the web, after you reload the page, chat asks you to unlock your messages. Type the password you sign in with. It
is the same password that opens your vault. There is no separate vault password.

#### "That password doesn't unlock your messages."

The password you typed does not open your messages. Chat stays locked. Try the password you sign in with.

#### "Waiting for a member to share the key. Try again once they have."

You are new to this channel. Someone who is already in it has to open Quark first. Your messages show up on their own
once they do. [Chat](/docs/chat#what-you-might-see) describes the waiting screen.

#### "That channel doesn't exist, or you aren't in it."

The channel was deleted, or you are not a member. Ask someone in the channel to add you.

#### "That message is too long. Split it into shorter ones."

Send it as two or more messages.

#### "You're sending these too quickly; wait a moment and try again."

Chat limits how fast one account can send. Wait a moment.

### The vault

Every account has its own vault, whether or not you are an admin. It opens with the password you already sign in
with. There is no second password, and there is no vault shared by the household. The steps are on the
[Vault](/docs/vault) page. This is what goes wrong.

**The password is not the one you sign in with.** On **Set up your vault**, Quark says "That isn't your account
password. The vault opens with the password you sign in with." Nothing is set up. If you want the vault to survive a
forgotten password, type your recovery phrase in **Recovery phrase (optional)** before you tap **Set up vault**. Quark
does not check that phrase. A mistyped one is accepted, and it will not open the vault later.

**The vault is locked and the password is wrong.** Quark says "That password doesn't unlock your vault." The list
stays hidden. The check happens on your device.

**You forgot the password you sign in with.** On the sign-in screen, tap **Forgot password?** and use your recovery
phrase to choose a new one.

- If you typed that phrase when you set the vault up, the vault comes with you. Unlock it with the new password. The
  same is true when your account was given a new recovery phrase later, while the old password still opened the vault.
- If you skipped the phrase, you can sign in, and the old vault stays locked. Tap **Start over** to delete it and set
  up a fresh one.

**The password you sign in with no longer opens the vault.** On the locked page, tap **Start over**. The dialog is
titled **Delete your vault?** Type the password you sign in with now, then tap **Delete vault**. **Cancel** leaves the
vault as it was. A wrong password deletes nothing.

**You lost both the password and the recovery phrase.** **Start over** is on the locked vault page, so you have to be
signed in to use it. Without the password and without the phrase, you cannot sign in, and nobody can open the vault
for you. There is no admin recovery.

The vault does not live on a plug-in drive, and it does not wait for one. Reconnecting a drive will not open it.

## Get in touch

**GitHub** for questions, bug reports, and ideas:
[github.com/autobutler-org/quark/issues](https://github.com/autobutler-org/quark/issues)

**Email** for something you would rather not post in public:
[support@autobutler.org](mailto:support@autobutler.org)

Include your Quark's version and your app's version.
[Versions](/docs/settings/versions#see-which-version-you-run) shows where both live. In the phone apps, **Settings →
About → Copy app logs** copies this device's app log so you can paste it into the report. Nothing is sent on its own.

## Related

- [Connecting](/docs/start/connecting): finding your Quark, and the certificate warning
- [Security guide](/docs/help/security-guide): your password, your recovery phrase, and remote access
- [Vault](/docs/vault): saved logins, and starting over
- [Files](/docs/files): uploads, names that clash, and large files
- [Trash](/docs/trash): putting a file back, and freeing space
- [Calendar](/docs/calendar): the household calendar
- [Books](/docs/books): the PDFs and EPUBs on your Quark
- [Chat](/docs/chat): channels and unlocking messages
- [Keyboard shortcuts](/docs/help/keyboard-shortcuts)
- [Accessibility](/docs/help/accessibility)

## Nerd Notes

Checked against quark v0.56.2. `main` was one commit ahead (`c0f4eefc`), a performance-test change that does not touch
these screens.

**Reaching the box.** With TLS on, the server accepts TLS 1.3 only (`MinVersion` in `internal/server/server.go`) and
listens on the HTTPS port, 443 by default (`ServerHttpsPort` in `pkg/util/serverutil/serverutil.go`). Nothing listens
on port 80, and nothing redirects `http://` to `https://`. A browser too old for TLS 1.3 never shows a certificate
page. The connection simply fails. The certificate lasts 365 days and is replaced on startup when it expires within
30 days (`certValidity` and `renewalWindow` in `pkg/util/tlsutil/tlsutil.go`). It does not cover `quark.lan`. The
container image is the exception: insecure mode serves plain HTTP on port 8080. See
[Self-Hosting](/docs/nerd-notes/self-hosting).

**Install.** Releases are Linux archives for `x86_64` and `arm64`, plus a container image. On the device,
`sudo quark install` is the installer. Each of its messages is under
[Messages from `sudo quark install`](/docs/nerd-notes/self-hosting#messages-from-sudo-quark-install).

**Sign-in messages.** User-facing strings are built in `lib/utils/error_text.dart`. The lockout sentence is the
server's `TooManyAttemptsError` ("too many failed sign-in attempts, try again later"), which the app capitalizes.
After five wrong tries from one address against one account (`DefaultPairThreshold`), the next try is HTTP 429. The
wait starts at 30 seconds and doubles, up to 15 minutes (`DefaultBaseLockout`, `DefaultMaxLockout` in
`pkg/util/ratelimitutil/ratelimitutil.go`). A right password during the wait is refused. An unknown username gets the
same "Invalid username or password." sentence (`invalidCredentials`).

**Sessions.** `sessionDuration` is 30 days from last use. `SessionMaxLifetime` is 90 days from creation
(`pkg/util/authutil/service.go`).

**Admin gate.** `adminRoutes` in `lib/router.dart` is `/users` and `/settings/features`. Anyone else is sent to Files,
and a snackbar shows `Errors.adminOnly`. Vault is not in that set. The feature-flag registry in
`pkg/util/featureflagutil/registry.go` is empty. Chat, calendar, and slides have left beta
(`TestEnabled_RetiredFlagsAreOff`). The Features tab renders only while that list is non-empty
(`showFeatures` in `lib/pages/settings_page.dart`). An admin who opens `/settings/features` with an empty registry
lands on General.

**Vault.** One vault per account. The household vault is gone (`038_drop_household_vault`). Keys and items are rows in
the main database, not a file on a storage drive, which is why there is no disconnected-drive state. Setup, unlock,
and **Start over** are on [Vault](/docs/vault#nerd-notes), including `DELETE /api/v0/vault`. The sentences above are
`Errors.vaultNotLoginPassword`, `Errors.vaultWrongPassword`, and `Errors.incorrectPassword`. A wrong unlock password
fails on the device and sends nothing.

**Uploads.** The chip label is `uploadCompleted/uploadTotal` (`file_top_bar_upload_chip.dart`). A 409 opens **That
name is taken** (`upload_conflict_dialog.dart`). Large files use `POST /api/v0/files/upload-session` and can resume
when the same file is sent to the same folder (`upload_manager.dart`).

**Trash.** `TrashRetentionDays` is 30 (`pkg/util/storageutil/trash.go`).

**Chat.** `Errors.chatKeysWrongPassword` is a local decrypt failure, the same account password the vault uses. The
rate-limit text is `errTooManyRequests` in `internal/server/api/v0/chat/types.go`.

**Remote access.** Off until an admin turns it on. The card and the setup sheet are `RemoteAccessPanel` and
`RemoteAccessSetupView` in `packages/quark_widgets`. The failure copy is `Errors.remoteAccessFailing`. The phone pause
choices are in `lib/widgets/layout/remote_access_pause_banner.dart`. This page does not name the network vendor.

**App too old.** A body that still sends a raw password gets HTTP 426 and `ErrAppTooOld` in
`pkg/util/authutil/authutil.go`. The reverse, a Quark with no auth-key salt, is `Errors.quarkTooOld`.
