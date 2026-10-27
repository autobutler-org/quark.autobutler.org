---
title: Chat
description: Message the people on your Quark in shared channels or one to one, with messages locked on your own device
navigation:
  title: Chat
  order: 1
---

# Chat

Chat lets the people on your Quark message each other. Talk in a shared channel, such as one for the whole family, or
message one person on their own.

Each message is locked on your phone or computer before it is sent. Your Quark stores the locked copy. It cannot read
what you wrote. Only the people in the channel can.

Chat is part of every Quark. There is nothing to turn on.

## How to use it

### Send your first message

1. Open **Chat** from the app drawer. It opens on `general`, the channel everyone is in.
2. Type in the box at the bottom.
3. Press Enter on a keyboard, or tap the send button.

Your message shows up straight away. Messages from others arrive while you watch, with no need to refresh.

### Start a new channel

1. In Chat, tap **New channel** in the top bar.
2. Give it a name and, if you like, a topic.
3. Choose who can see it. **Private** means only the people you add. That is the default. **Everyone** means every
   account on this Quark can read and post in it.
4. Tap **Create**.

Two channels can't share a name, even with different capital letters.

### Message one person

1. In Chat, tap **Message someone** in the top bar.
2. Pick the person.

Quark opens a private conversation with just the two of you. It shows under the other person's name. The next time you
message them, Quark opens the same conversation again.

### Add people to a channel

1. Open the channel, then tap the gear beside its name.
2. Tap **Members**.
3. Search for a person or a group, pick a role, and tap **Add**.

Adding a group, such as `Family`, gives everyone in it the channel.

## Getting around

On a wide window, the channels, the messages and the members sit side by side. On a phone, the messages fill the
screen. The channel list opens as a drawer, and the members open as a sheet.

When there is something new, the **Chat** row in the drawer shows a dot. In the channel list, a channel with unread
messages is in bold, with a count beside it. Reading the channel on one device clears it on your others too.

## Reading and replying

Each message has a menu. Long-press it on a phone or tablet, right-click it on a computer, or use the three-dot button
at its end. The menu has **Copy text**, **Add reaction** and, if you are allowed, **Delete**. On a computer you can
also drag across messages to select the text.

**Reactions.** Tap the reaction button on a message and pick an emoji. Tap a reaction under a message to add yours.
Tap it again to take it back.

**Mentions.** Type `@` and the first letters of a name, then pick the person from the list. Their name is highlighted
in the message, and the whole message is highlighted for them. A mention does not send a notification.

**Search.** Tap the magnifier in the channel's header, **Search messages**. Search runs on your device, over the
messages already loaded there. Tap **Load older messages** to look further back. Your Quark never sees what you search
for.

A few things chat does not do:

- A very long message won't send. Chat says "That message is too long. Split it into shorter ones."
- You can't attach files. Share them from [Files](/docs/files) instead.
- If you send a lot of messages very fast, chat asks you to wait: "Too many requests. Wait a moment and try again."

If a message can't be sent, a row above the box says so, with **Retry** and **Discard**.

## Roles in a channel

Each person in a channel has a role. It decides what they can do there:

- **Viewer** can read.
- **Member** can also send messages and react.
- **Moderator** can also delete other people's messages and manage members.
- **Owner** can also rename and delete the channel.
- **Custom** lets you tick each permission on its own.

You can't hand out a permission you don't have yourself. Anyone can delete their own messages.

### Channel settings

Tap the gear beside the channel's name. What you see depends on your role:

- **Edit name and topic**
- **Members**: add people or groups, change their role, or remove them
- **Leave channel**
- **Delete channel for everyone**: type the channel's name to confirm. Its messages are gone for everyone.

`general` can't be left or deleted.

## What you might see

**"Unlock your messages."** This appears on the web only, after you reload the browser tab. Type your account
password, the one you sign in with. There is no separate chat password. A wrong password changes nothing, and chat
stays locked until you enter the right one. The phone apps remember your keys between restarts, so they don't ask.

**"Waiting for the key to this channel."** You were just added to a private channel, and nobody in it has been online
since. Older messages say "Waiting for the key to read this message". Nothing is wrong. The key arrives the next time
someone in the channel opens Quark, and the channel opens by itself. Your Quark can't hand you the key. Only a member
of the channel can.

**"You are not a member of this conversation."** You can see the channel, but not read it. An admin sees this in a
private channel they are not in. Those are listed under **Other channels**.

**"You can read this channel but not send messages in it."** You are a Viewer.

**Lines about the channel itself**, such as "ada gave bob Moderator" or "ada made a new key for this channel". These
record changes. A line Quark can't confirm came from the person it names is marked **Unverified**.

## What stays private

These are locked on your device, so your Quark stores only scrambled text:

- what each message says
- which emoji each reaction is
- who you mention in a message

What you search for never leaves your device at all.

These are not locked. Your Quark, and anyone who controls it, can see them:

- who is in which channel
- who sent a message, in which channel, when, and roughly how long it was
- who reacted to which message, and when
- how far each person has read in each channel
- channel names and topics. Admins can see the names and topics of private channels they are not in.

When someone leaves a channel or is removed, the channel gets a new key. They can't read anything sent after that.
Messages they already downloaded stay with them.

Being an admin doesn't open old messages. An admin who adds themselves to a channel gets no key to what was said
before, and the members see them join.

### Limits to know about

Chat is honest about what it can't protect against yet:

- **In a browser, your Quark serves the app.** The code that locks your messages comes from the Quark it is meant to
  protect you from. The phone and desktop apps don't have this gap.
- **Nobody checks people's keys yet.** Your Quark hands out everyone's keys, and nothing double-checks them. A Quark
  that someone had tampered with could slip in a key of its own and read what follows.
- **A signed-in device can read chat.** The apps keep your keys open while you are signed in. Anyone who can use your
  signed-in phone or computer can read your messages.

## Related

- [Vault](/docs/vault): your passwords, opened with the same sign-in password
- [Users](/docs/users): accounts and groups you can add to a channel
- [Keyboard Shortcuts](/docs/help/keyboard-shortcuts#chat): Enter, Shift+Enter and mentions
- [Security Guide](/docs/help/security-guide): passwords, backups, and limits

## Nerd Notes

Checked against quark v0.56.2 (`main` at `c0f4eefc`). Quark's own write-up is
[`docs/chat-security.md`](https://github.com/autobutler-org/quark/blob/main/docs/chat-security.md); the user journeys
are [`docs/user-journeys/chat.md`](https://github.com/autobutler-org/quark/blob/main/docs/user-journeys/chat.md).

**Not a beta any more.** Chat left beta in v0.54.0 (quark #3327). The beta flag registry
(`pkg/util/featureflagutil/registry.go`) is empty, so there is no admin switch for chat and no **Features** tab in
Settings. `GET /api/v0/settings/features` returns `{"features":[]}`.

**Keys.** Each account has an X25519 keypair, for receiving channel keys, and an Ed25519 keypair, for signing key
grants and channel events. Both are made in the app, never on the Quark. Their seeds leave the device only wrapped, under
a key derived from the login password and again under one derived from the recovery phrase. One Argon2id run over the
password and the account's auth salt is split with HKDF-SHA256: the Quark is sent only the `authKey` half, and the
wrapping keys stay on the device. The vault is wrapped by the same scheme, per account, with no master password. All of
it runs on libsodium in the app.

**Channels and messages.** Each channel has a versioned XChaCha20-Poly1305 key. A member holds a version through a key
grant: the key sealed to their X25519 key (`crypto_box_seal`) and signed by the granter. Messages and reactions are
XChaCha20-Poly1305 under the current key, with a random 24-byte nonce, stored as `nonce || ciphertext`. A message is at
most 16 KiB once encrypted; a larger one gets 413. A reaction is padded so every one is the same 104 bytes. When anyone
without `read_messages` still holds the current key, the Quark sets `rotationNeeded` and the next member online makes a
new version.

**Mentions, search and unread counts.** A mention is only the text `@name` inside the ciphertext. The app finds it after
decrypting, so the Quark never learns who was mentioned. Search runs in memory over the decrypted messages a channel has
loaded, and writes nothing to disk. Read markers are a message id per account per channel; `GET /api/v0/chat/channels`
carries `unreadCount`.

**Rate limits.** Posting a message, creating a key version, uploading grants and moving a read marker are each limited
per account and per route: a burst of 100, then 10 a second (`ChatWriteRate`, `ChatWriteBurst` in `pkg/util/deputil`).
Over that is a 429. The limits live in memory and reset when the Quark restarts.

**API.** Everything is under `/api/v0/chat` (`internal/server/api/v0/chat/`). No route is admin-only, and a channel the
caller may not see is a 404.

- `GET /api/v0/chat/channels`, plus create, rename, delete, and member routes under `/chat/channels/:id`
- `GET`/`PUT /api/v0/chat/keys/me` and `GET /api/v0/chat/keys/:userId`
- `GET`/`POST /api/v0/chat/channels/:id/keys`, `/keys/pending`, `/keys/grants`
- `GET /api/v0/chat/channels/:id/events`
- `GET`/`POST /api/v0/chat/channels/:id/messages` (`?before=<id>&limit=50`, or `?after=<id>`)
- `DELETE /api/v0/chat/messages/:id`
- `POST /api/v0/chat/messages/:id/reactions` and `DELETE /api/v0/chat/reactions/:id`
- `PUT /api/v0/chat/channels/:id/read`

**Known gaps** (from `docs/chat-security.md`, "What it doesn't protect against"): public keys are not verified out of
band; the web app's crypto code is served by the Quark; a compromised Quark can claim an account is `legacy` once to
get its raw password at that sign-in; phrases made before #2783 are six words (48 bits); and the native apps keep the
unwrapped seeds in the platform keystore while signed in.
