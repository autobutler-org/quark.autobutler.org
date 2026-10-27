---
title: Chat (Beta)
description: Message the people on your Quark — channels, roles, unlocking on the web, and what the Quark can see
navigation:
  title: Chat (Beta)
  order: 1
---

# Chat (Beta)

Chat is messaging between the accounts on your Quark. Messages are encrypted on your device before they are sent, so
the Quark stores them without being able to read them. It is on by default and marked **Beta**: it works, and the
limits it still has are listed at the end of this page.

## Getting around

Open **Chat** from the app drawer. It carries a **Beta** badge. Chat opens on `general`, the channel every account is
in.

On a wide window the channels, the messages and the members sit side by side. On a phone the messages fill the
screen, the channel list opens as a drawer, and the members open as a sheet.

The top bar has two ways to start talking:

- **New channel** — give it a name and an optional topic, then choose who can see it. **Private** means only the
  people you add; this is the default. **Everyone** means every account on this Quark can read and post in it. Two
  channels can't share a name, ignoring capital letters.
- **Message someone** — pick an account, and Quark opens a private channel with just the two of you. It is created the
  first time and reused after that. It is an ordinary private channel, named after both of you (`ada, bob`).

## Sending and reading

Type in the box at the bottom. Press Enter on a computer, or tap the send button. Your message shows up straight away.
If it can't be sent, a row above the box says so, with **Retry** and **Discard**.

Messages from others arrive while you watch, without a refresh. A phone or laptop that was offline picks up what it
missed when it reconnects.

Each message has a menu. Long-press it on a phone or tablet, right-click it on a computer, or use the three-dot button
at its end. The menu has **Copy text**, **Add reaction** and, where you are allowed, **Delete**. On a computer you can
also drag across messages to select text and copy it.

Reactions come from a short list of emoji. Tap a reaction under a message to add yours; tap it again to take it back.

The magnifier in a channel's header is **Search messages**. Search runs on your device, over the messages already
loaded there. **Load older messages** reaches further back. The Quark never sees what you search for.

A few limits:

- A message can be up to 16 KiB once encrypted. Past that, chat says "That message is too long. Split it into shorter
  ones."
- There are no file attachments in chat. Share files from Files instead.
- Sending very fast hits a limit: "Too many requests. Wait a moment and try again."

## Roles in a channel

What someone can do in a channel is set by a role:

- **Viewer** reads.
- **Member** also sends messages and reacts.
- **Moderator** also deletes other people's messages and manages members.
- **Owner** also renames and deletes the channel.
- **Custom** lets you tick each permission on its own.

You can't hand out a permission you don't have yourself. Anyone can delete their own messages. You can add a group as a
member too, so everyone in, say, `Family` gets the channel.

### Channel settings

Open them with the gear beside the channel's name. Which entries you see depends on your role:

- **Edit name and topic**
- **Members** — add people or groups, change their role, or remove them
- **Leave channel**
- **Delete channel for everyone** — you type the channel's name to confirm. Its messages and keys are gone for
  everyone.

`general` can't be left or deleted.

## What you might see

**"Unlock your messages"** — on the web only. After you reload the browser tab, chat asks for a password before it can
read your messages. It is your **account password**, the one you sign in to Quark with. It is not your vault master
password. A wrong password changes nothing; chat stays locked until you enter the right one. The phone apps keep your
keys between restarts, so they don't ask.

**"Waiting for the key to this channel"** — you were just added to a private channel, and no member has passed you its
key yet. Earlier messages read "Waiting for the key to read this message", and in place of the message box you see
"You can write here once a member shares this channel's key with you". Nothing is wrong. The key arrives the next time
someone in the channel opens Quark, and the channel opens by itself. The Quark can't give you the key; only a member
can.

**"You are not a member of this conversation"** — you can see the channel but not read it. This is what an admin sees
in a private channel they aren't in (listed under **Other channels**), and what someone sees who can manage a channel's
members but not read it.

**"You can read this channel but not send messages in it"** — you are a Viewer.

**System lines** in the timeline record changes, such as "ada gave bob Moderator" or "ada made a new key for this
channel". One that Quark can't check came from the person it names is marked **Unverified**.

## What's private in chat

Encrypted on your device, so the Quark stores only scrambled text it can't read:

- what each message says
- which emoji each reaction is

Not encrypted. The Quark, and anyone who controls it, can see:

- who is in which channel
- who sent a message in which channel, when, and how long it is
- who reacted to which message, and when
- which message each person has read up to in each channel
- channel names and topics. Admins can see the names and topics of private channels they are not in.

When someone is removed from a channel, or loses the right to read it, the channel gets a new key. Messages from then
on are sealed against them. Anything they already downloaded stays with them.

Being an admin doesn't open old messages. An admin who adds themselves to a channel gets no key to what was said
before, and the members see them join in the timeline.

### Why it is still Beta

Quark says these limits out loud:

- **The web app is served by the Quark itself.** In a browser, the code that does the encryption comes from the box it
  is meant to protect you from. Only the phone and desktop apps are outside its reach.
- **Nobody checks members' keys yet.** The Quark hands out everyone's public keys, and nothing compares them outside
  the Quark. A tampered Quark could slip in a key of its own and read what follows.
- **A signed-in phone or computer can read chat.** The apps keep your keys unlocked while you are signed in, so anyone
  who can use the signed-in app can read your messages.

## For admins: turning chat off

**Settings → Features → Chat** turns chat off for everyone. The drawer row and the chat pages go away, but nothing is
deleted: messages, channels and keys are kept. Turn it back on and everything is as it was.

This switch is not a security measure. It hides chat; it does not protect anything.

## Related

- [Security Guide](/docs/help/security-guide) — passwords, backups, and limits
- [Getting Started](/docs/start/getting-started)
