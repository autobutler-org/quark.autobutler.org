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

On a new channel, **Anonymous** is off until you turn it on. The switch says members see each other only by an alias,
that admins and people who manage members still see who is who, and that this can't be changed later. **Message
someone** has no such switch. A conversation with one person is never anonymous.

### Anonymous channels

Anonymous means anonymous to the other members. It does not mean anonymous to the Quark, to an admin, or to anyone
who can manage that channel's members.

What other members see:

- Each person is listed by an alias, such as **Anonymous 4821**, until someone renames it. There is no profile
  picture, only initials, and no **Message** button.
- Messages, reactions, and mentions use that alias.
- A member can rename their own alias. The pencil is only on their own row.

What an admin sees, and what a member with **Manage members** sees:

- Each row shows the alias and the real account name beside it.
- They can rename anyone's alias, not only their own. Being given **Manage members** reveals every member.

An alias has to be unique in that channel, ignoring capitals, and it can't be someone's username. A member can pick
a name that hints at who they are. That is their choice. The channel stays anonymous, or not, for good. You can't
turn it off later.

The text of a message is still locked on your device, the same way as in any other channel. The Quark stores who
sent it, and it stores which account is behind each alias. Anyone with the database, or with a backup of it, can
read that mapping. Per-channel keys, described in [Nerd Notes](#nerd-notes), stop other members from matching a
public key to an account. They do not hide the account from the Quark or from an admin.

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

**Reactions.** Tap the reaction button on a message and pick an emoji. **More emoji** opens the full set, with a
search box. Tap a reaction under a message to add yours.
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

### Side conversations

A side conversation is a thread on one message. It stays out of the channel until you choose otherwise.

1. Open the menu on a text message and tap **Start side conversation**. You need to be allowed to send in the
   channel. A viewer can read one, but not start one.
2. On a wide window it opens beside the channel. On a phone it opens as a sheet. The original message is at the
   top, and the box says **Reply**.
3. Send a reply. Until there is a reply, closing the panel leaves nothing behind.

Under a message that has replies, a line such as **2 replies, last 5m ago** opens the same panel. A dot on that
line means replies you have not read. **Side conversations** in the channel header lists them. One with no reply
in the last week is folded under **Quiet**. Unfold that heading to see it. A side conversation whose replies were
all deleted is not listed.

A side conversation is one level deep. A reply in one has no **Start side conversation**.

**Also send to channel**, under the reply box, posts the same text in the channel as well, as an ordinary message.
Editing or deleting one does not change the other. The box is not there while you are editing.

If you wrote the message the thread is on, or you have replied in it, new replies count as unread on the channel,
including the dot beside **Chat** in the app menu. Reading the channel does not mark the thread read, and reading
the thread does not mark the channel read. A mention of you in a thread you have not joined shows on that channel
in the channel list. It does not, by itself, light the **Chat** dot in the app menu.

Deleting the original message keeps the replies. The panel then says the original message is unavailable.

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

If the person who has the key may not be back for a while, an admin who can read the channel can tap the key button on
that notice, **Regenerate channel keys**. It makes a new key and shares it with every member who has set up chat, so
the channel can be used again. Messages sent before stay unreadable until the person who had the old key opens
Quark.

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

- who is in which channel, and, in an anonymous channel, which account is behind each alias
- who sent a message, in which channel, when, and roughly how long it was, including a reply in a side conversation
  and which message it branches from
- who reacted to which message, and when
- how far each person has read in each channel
- channel names and topics. Admins can see the names and topics of private channels they are not in.

When someone leaves a channel or is removed, the channel gets a new key. They can't read anything sent after that.
Messages they already downloaded stay with them.

Being an admin doesn't open old messages. An admin who adds themselves to a channel gets no key to what was said
before, and the members see them join.

### Backups

A backup of your Quark copies chat as it is stored, still locked. If chat on a Quark is empty, an admin can bring it
back from a backup drive with **Restore chat** on **System → Storage**. The backup does not hold accounts, so an admin
makes everyone's account first, with the same usernames. Each person then unlocks chat with the password they had when
the backup was made. A Quark whose chat already has messages or channels refuses the restore and changes nothing. A
chat copy with no proof file beside it is refused too, on every drive, and nothing is restored. See
[Storage and Backups](/docs/system/storage-and-backups).

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

Checked against quark v0.65.0 (`43eecd35`). Quark's own write-up is
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

**API.** Everything is under `/api/v0/chat` (`internal/server/api/v0/chat/`). The only admin-only route is
`POST /chat/channels/:id/keys/regenerate`, and a channel the caller may not see is a 404.

- `GET /api/v0/chat/channels`, plus create, rename, delete, and member routes under `/chat/channels/:id`
- `GET`/`PUT /api/v0/chat/keys/me` and `GET /api/v0/chat/keys/:userId`
- `GET`/`POST /api/v0/chat/channels/:id/keys`, `/keys/pending`, `/keys/grants`
- `GET /api/v0/chat/channels/:id/events`
- `GET`/`POST /api/v0/chat/channels/:id/messages` (`?before=<id>&limit=50`, or `?after=<id>`)
- `DELETE /api/v0/chat/messages/:id`
- `POST /api/v0/chat/messages/:id/reactions` and `DELETE /api/v0/chat/reactions/:id`
- `PUT /api/v0/chat/channels/:id/read`
- `POST /api/v0/chat/dms` (`{userIds, fromChannelId?}`; 200 for an existing direct message, 201 for a new one)
- `PUT /api/v0/chat/messages/:id` edits a message (`{ciphertext, keyVersion}`, its author only; a poll is a 409)
- `POST /api/v0/chat/channels/:id/typing` (no body, 204, needs `send_messages`)
- Polls: `PUT /api/v0/chat/messages/:id/answer`, `GET /api/v0/chat/messages/:id/answers`,
  `POST /api/v0/chat/messages/:id/close`. A closed poll, or a second answer when changing is off, is a 409.
- Attachments: `PUT` / `GET /api/v0/chat/channels/:id/attachments/:attachmentId`
- `POST /api/v0/chat/channels/:id/keys/regenerate` (admin, and the admin must hold `read_messages`; another member gets
  403). It makes the next key version even when `rotationNeeded` is false, and shares the key-version rate limit.

**Backups.** A snapshot writes `chat_backup.db`: channels, members, keys, grants, events, messages, reactions and
polls, all as the ciphertext they already are, plus a `.mac` that binds it to this Quark. The poll voter key in
`secrets/` is not copied. `POST /api/v0/storage/devices/snapshot-backup/restore-chat` (admin, body
`{deviceSerial, run, password}`, where `password` is the admin's auth key) restores it into an empty chat only: a chat
with messages or channels other than `general` gets `409`. Accounts are matched by username; `unmatchedUsers` names the
ones missing here, whose messages keep no author and whose memberships, reactions and chat keys are not restored. A
backup another Quark wrote, one changed since, or one with no `.mac` proof file beside it, is refused on every
drive (quark #4444). On PostgreSQL the route answers 501.

**Side conversations.** A reply stores `rootId` in the clear and is sealed under the channel key with additional
data `quark-chat-msg-v2`, the channel id, the key version, and the root id (`docs/chat-security.md`). The Quark
learns which message a reply belongs to, who sent it, and when. It does not learn the text. A root that is itself
a reply is 409. A poll in a thread is 400. **Also send to channel** stores a second message, a normal channel
message quoting the root, and nothing ties the two rows together. `GET /api/v0/chat/messages/:id/replies` pages a
thread. `GET /api/v0/chat/channels/:id/branches` lists roots that still have a reply. Each channel message may
carry `branch` (`replyCount`, `lastReplyAt`, and for the caller `unreadCount` and `involved`). Quiet is
`ChatConfig.quietBranchAfter`, seven days, and only changes what the list draws.

**Anonymous channels.** Create with `anonymous: true`. The flag never changes, and a direct message cannot set it.
Each account gets a per-channel pseudonym and an alias in `chat_channel_pseudonyms`. A member without
`manage_members` is served the pseudonym as the id and the alias as the name, with no avatar, and no other
account's username. An admin, and anyone with `manage_members`, gets the account beside `pseudonymId` and `alias`,
and may rename any alias with `PUT /api/v0/chat/channels/:id/members/alias`. Every member may rename their own.
Message `authorId`, reactions, and events carry the pseudonym for every viewer, admins included. The account
behind it is the member list.

Per-channel keys are only this: the app derives an X25519 and Ed25519 pair for that channel from the account's
chat seeds and the channel id (`ChatCrypto.channelIdentity`, HKDF-SHA256, labels
`quark-chat-anon-box-v1:<channelId>` and `quark-chat-anon-sign-v1:<channelId>`), and publishes the public halves
with `PUT /api/v0/chat/channels/:id/keys/me`. The Quark
stores them on the pseudonym's row and uses them for grants and events in that channel. They are not a second lock
on the message text, which stays under the channel key. They do not stop the Quark, an admin, or a database backup
from mapping the pseudonym to the account. A signature still verifies against the key the Quark stored, the same
trust as account keys. A channel that is not anonymous rejects that publish with 400.

**Known gaps** (from `docs/chat-security.md`, "What it doesn't protect against"): public keys are not verified out of
band; the web app's crypto code is served by the Quark; a compromised Quark can claim an account is `legacy` once to
get its raw password at that sign-in; phrases made before #2783 are six words (48 bits); and the native apps keep the
unwrapped seeds in the platform keystore while signed in.
