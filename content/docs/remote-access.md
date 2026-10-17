---
title: Remote Access
description: What Settings → Network shows for remote access today, and what a Quark sends when remote access is on
navigation:
  title: Remote Access
  order: 23
---

# Remote Access

Remote access is how you will reach your Quark when you are away from home. In the current release you cannot turn it
on yet. This page covers what you see in Settings today, and what a Quark does if remote access is already on.

## Where it lives

Open **Settings → Network**. The **Remote access** card sits at the top of the tab once the app is connected to a Quark.

## What the current release shows

With remote access off, the card says **Reach your Quark from anywhere**, shows **Off**, and ends with:

> Coming soon. Your Quark is reachable on your home network in the meantime.

There is no set-up button in release builds, for admins or anyone else. The Quark side works. What is missing is the
app's half: it cannot bring your phone or laptop onto your Quark's private network yet, and we will not ask you to
install separate networking software to get there. Until then, use Quark at home, on your own WiFi.

## If remote access is already on

Releases up to 0.48 let an admin turn remote access on. A Quark that was turned on then stays on after an update, and
the card shows its state and a switch:

- **Connecting…** with "Joining its private network": it is on, and the Quark is still joining. The card checks again
  every few seconds while the page is open.
- **On** with "Reachable away from home": it is on and connected.
- **Couldn't connect**: it is on, but the Quark could not join. The card says "Remote access is still switched on, but
  your Quark couldn't connect. It keeps trying, but you can't reach it away from home yet." Below that are two steps:
  check that your home internet works, then try again. Admins get **Try again** and **Turn off**, and everyone gets
  **Get help**.

Everyone signed in sees the same card. Only an admin can change it, and the card says so: "Only admins can change this.
It affects everyone in your household."

If the card cannot read the state, it shows the error with **Retry**. If the app cannot reach your Quark at all, it
shows **Not connected**.

### Turning it off

An admin turns it off with the switch, or **Turn off** while it is failing. Quark asks first: **Turn off remote access
for everyone?** Every device away from home loses access, and everything at home keeps working. Confirm with **Turn
off**.

Turning it off is one-way in this release. Once it is off, the card shows **Coming soon** like any other Quark, so you
cannot turn it back on from Settings until remote access ships.

## What leaves the box while it is on

While remote access is on, and each time the Quark starts with it on:

- The Quark asks our provisioning service at `quark.ts.autobutler.org` for a single-use key, if it does not already have
  what it needs to reconnect. The request carries a device ID, which is a SHA-256 hash of the Quark's hostname and
  machine ID, not the names themselves. The first request creates a private network for your household alone, and later
  requests present that household's credential to rejoin it.
- The Quark then joins that private network through our coordination server at the same address, and stays connected
  so your devices can find it.
- Requests that arrive that way are handed to Quark itself, so Quark's own sign-in still guards every one of them. Your
  files are not uploaded to us.

None of this happens while remote access is off.

## Running Quark in a container

If remote access is on in a container, keep the whole `/var/lib/quark` directory on a volume, not just `data/` inside it.
The Quark's private network identity is kept there, and losing it means joining again as a new device. If you
set `QUARK_TRUSTED_PROXIES`, keep `127.0.0.1,::1` in it: remote access reaches Quark over loopback.

## Related

- [How It Works](/docs/how-it-works) — why Quark is local first
- [Security Guide](/docs/security-guide) — what Quark talks to on the internet
