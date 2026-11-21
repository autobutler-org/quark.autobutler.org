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

### Message one person, or a few

1. In Chat, tap **Message someone** in the top bar and pick one account or a few. You can also tap **Message** on
   someone in a channel's member list, or on the [Users](/docs/users) page, in that account's menu. You cannot message
   your own account.
2. Quark opens a direct message. The same people always reopen the same conversation.

Direct messages are listed under **Direct messages**, named for the other people, with a person icon rather than a
`#`. If you are the only account, the button says no one else has an account yet.

A direct message has one setting: **Add people**. Adding people starts a new conversation. The first line reads
"ada started this conversation by adding people to an earlier one. Messages from before stay there." The new person
never reads the earlier messages. You cannot name a direct message, leave it, or delete it.

An admin does not see a direct message they are not in. An older private channel that happens to be named for two
people stays an ordinary private channel. It is not turned into a direct message.

### Add people to a channel

1. Open the channel, then tap the gear beside its name.
2. Tap **Members**.
3. Search for a person or a group, pick a role, and tap **Add**.

Adding a group, such as `Family`, gives everyone in it the channel. In a direct message, **Add people** starts a new
conversation instead of growing this one.

## Getting around

On a wide window, the channels, the messages and the members sit side by side. On a phone, the messages fill the
screen. The channel list opens as a drawer, and the members open as a sheet.

When there is something new, the **Chat** row in the drawer shows a dot. In the channel list, a channel with unread
messages is in bold, with a count beside it. Reading the channel on one device clears it on your others too.

## Reading and replying

Each message has a menu. Long-press it on a phone or tablet, right-click it on a computer, or use the three-dot button
at its end. The menu has **Copy text**, **Reply**, **Add reaction**, **Edit** on your own messages, and **Delete** if
you are allowed. On a computer you can also drag across messages to select the text. A Viewer gets no **Reply**.

**Reply.** **Reply** quotes that message. A strip above the box says **Replying to** and the person's name. The quote
sits above your message. Tap it to jump to the original. If that message was deleted, the quote reads **Original
message unavailable**. This is not a thread. The quote is taken from the copy already on your device. Only the
message's id travels inside the locked text.

**Edit.** **Edit** is only on your own messages. A strip says **Editing message**. The message then shows **(edited)**.
Quark does not keep the earlier wording. It learns that the message was edited, and when, not what changed. A poll
cannot be edited. Editing does not count as typing, and it does not mark the channel unread. A mention you add while
editing is drawn the same way as any other mention.

**Reactions.** Tap the reaction button on a message and pick an emoji. Tap a reaction under a message to add yours.
Tap it again to take it back.

**Typing.** While someone else is typing, a line says "carol is typing", "carol and dave are typing", or "Several
people are typing". It goes away after a few seconds, or when the message arrives. It says who, never what they are
writing. Quark keeps no record of it. A Viewer is never shown as typing.

**Mentions.** Type `@` and the first letters of a name, then pick the person from the list. Their name is highlighted
in the message, and the whole message is highlighted for them. A mention does not send a notification.

**@everyone** mentions every other member of the channel. It is highlighted, and it counts as an unread mention, only
when the sender has the **Mention everyone** permission. Otherwise it is ordinary text. Moderator and Owner have that
permission. Member does not, unless someone grants it. Nobody can take the username `everyone`. Your Quark cannot
enforce this, because it cannot read the message. Each reader's app checks the sender's permission. **@everyone**
does not send a notification.

**Attach.** The paperclip is **Attach**. On a phone that needs a photo picker, it offers **File** and **Photo or
video**. Elsewhere it picks a file directly. The words already in the box become the caption. A picture shows in the
channel. A video has a play button. Another file shows its name and size. **Save to device** puts a picture or video
in the phone's photo library, and otherwise opens a save dialog. **Save to my files** asks for a folder and keeps
both files if the name is already there. The file is unlocked on your device before it is saved. A picture over 20
MB can be sent and saved, but the viewer will not open it.

**Search.** Tap the magnifier in the channel's header, **Search messages**. Search runs on your device, over the
messages already loaded there. Tap **Load older messages** to look further back. Your Quark never sees what you search
for.

A few things chat does not do:

- A very long message won't send. Chat says "That message is too long. Split it into shorter ones."
- If you send a lot of messages very fast, chat asks you to wait: "Too many requests. Wait a moment and try again."

If a message can't be sent, a row above the box says so, with **Retry** and **Discard**.

## Polls

Tap **New poll** beside the message box.

Turn on **Anonymous** when the channel should not see who picked what. The switch says no member, you included, sees
who answered what, and that someone with access to the Quark device itself could still find out.

That is the rule, in both directions:

- In the app, nobody sees who answered an anonymous poll. That includes you, and it includes an admin. There is no
  admin view that names voters.
- Your Quark does not store your account next to an anonymous answer. It stores a tag it can match to "this person
  already answered" without writing the account name in the database.
- Someone who can read the Quark's disk can still match those tags, because the key that makes them sits on the
  device, beside the database. An admin who can only use the app cannot.
- A backup from before this change can still name who answered. Restoring onto another Quark, or losing that key
  file, keeps the counts and forgets who answered. Those people can answer again.
- While you send an answer, the running Quark sees your account long enough to refuse a second one. It does not keep
  that name on the answer.
- An export of an anonymous poll names nobody.

Until the poll closes, the person who wrote it sees the tally. Everyone else sees only their own answer, and the line
"Results appear when the poll closes." A poll that is not anonymous shows who answered.

## Roles in a channel

Each person in a channel has a role. It decides what they can do there:

- **Viewer** can read.
- **Member** can also send messages, react, and attach files.
- **Moderator** can also delete other people's messages, manage members, and use **@everyone**.
- **Owner** can also rename and delete the channel.
- **Custom** lets you tick each permission on its own, including **Mention everyone** and **Attach files**.

You can't hand out a permission you don't have yourself. Anyone can delete their own messages.

### Channel settings

Tap the gear beside the channel's name. What you see depends on your role:

- **Edit name and topic**
- **Members**: add people or groups, change their role, or remove them
- **Leave channel**
- **Delete channel for everyone**: type the channel's name to confirm. Its messages are gone for everyone.

`general` can't be left or deleted. A direct message offers only **Add people**.

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
- channel names and topics. Admins can see the names and topics of private channels they are not in. A direct
  message is not in that list. An admin who is not in it does not see it.
- for a poll that is not anonymous, who answered what. An anonymous poll does not store the account. See
  [Polls](/docs/chat#polls). Typing is not stored. An edit replaces the text. Quark records that it was edited and
  when, not the earlier wording.

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

Checked against quark v0.63.0 (`64f9789e`). Quark's own write-up is
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
decrypting, so the Quark never learns who was mentioned. `@everyone` is honored on the reader only when the author
holds `mention_everyone` (bit 256, `#4301`). Moderator and Owner presets include it. Member does not. Search runs in
memory over the decrypted messages a channel has loaded, and writes nothing to disk. Read markers are a message id
per account per channel; `GET /api/v0/chat/channels` carries `unreadCount`.

**Anonymous polls.** An anonymous answer stores an HMAC-SHA256 voter tag instead of the account id
(`pkg/util/chatutil/poll_voters.go`). The key is `<dataDir>/secrets/chat-poll-voter.key`, mode `0600`. It is not in
the database, a snapshot, the chat backup, or a bundle. The database alone cannot tie an answer to an account. The
database plus that key file can. The request handler still sees the account, so it can refuse a second answer and
mark "mine". No admin API names voters. Snapshots from before the upgrade can still hold account ids. SQLite free
pages may retain old bytes. Deleting an account removes that account's anonymous answers by computing the tags. A
restore that lacks the key keeps the counts, breaks "mine", and lets those people answer again. The poll's anonymous
flag is plaintext. The question, options, and answers stay encrypted.

**Direct messages.** The same set of accounts reopens the same DM. **Add people** forks a new channel and posts the
`dm_forked` line. A newcomer has no key to the earlier messages.

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
