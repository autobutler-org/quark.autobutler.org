---
title: Remote Access
description: Use Quark away from home, the same way you do on your WiFi, once an admin turns it on in Settings → Network
navigation:
  title: Remote Access
  order: 2
---

# Remote Access

Remote access lets your household use Quark when you are away from home: on mobile data, at a friend's house, or on a
trip. It works the same way it does on your WiFi. Your files stay on your drive at home.

It is off until an admin turns it on. One switch covers the whole household. You don't change anything on your router,
and there is no extra account, subscription or software to install.

At home, the app still talks to your Quark directly. Remote access is only used when you are away.

## How to use it

### Turn it on (admins)

1. Open **Settings → Network**.
2. On the **Remote access** card, tap **Set up remote access**.
3. Read the sheet, then tap **Turn on remote access**. **Not now** leaves it off.
4. Wait about 30 seconds. The sheet ticks off **Preparing a private connection** and **Connecting your Quark**, then
   says **Remote access is on**. Tap **Done**.

You can close the sheet early. Setup keeps going on your Quark. The card shows **Connecting…**, then **On**, with the
line **Reachable away from home**.

### Use it on your phone

Remote access works in the iPhone and Android apps.

1. Open the Quark app once while you are at home, on your WiFi, after remote access is on. The app gets your phone
   ready by itself.
2. Leave home and use the app as usual. It switches to remote access on its own, and back again when you come home.

In a web browser, Quark still works only on your home WiFi.

### Pause it on one phone

In the iPhone and Android apps, **Settings → Network** has a **This phone** section. **Remote access on this phone**
pauses remote access for that phone alone. Pick **For 1 hour**, **Until I'm back on home Wi‑Fi**, or **Until I turn it
back on**. Everyone else keeps remote access.

### Turn it off (admins)

1. Open **Settings → Network**.
2. Turn off the **Your Quark** switch on the **Remote access** card.
3. Quark asks **Turn off remote access for everyone?** Tap **Turn off** to confirm, or **Cancel** to keep it on.

Every device away from home loses access. At home, everything keeps working. Phones you have already used stay set up,
so turning it back on later brings them straight back.

## Who can change it

Everyone who is signed in sees the same card and whether remote access is on. Only an admin can change it. If you are
not an admin, the card says "An admin turns this on for the whole household. Ask an admin of your Quark to turn it
on." Once it is on, the card says "Only admins can change this. It affects everyone in your household."

Remote access does not skip signing in. Everyone still signs in with their own account, just as at home.

## If something goes wrong

**The card says Couldn't connect.** Remote access is still switched on, but your Quark could not connect. The card
says "Remote access is still switched on, but your Quark couldn't connect. It keeps trying, but you can't reach it away
from home yet." Then:

1. Make sure your home internet works. Try opening any website on your home WiFi.
2. An admin taps **Try again**. If the problem was short-lived, this fixes it.

Still stuck? Tap **Get help**, or see [Help](/docs/help). An admin can also tap **Turn off**.

**The app doesn't reach Quark away from home.** Check that remote access shows **On** in **Settings → Network**. Check
that **Remote access on this phone** isn't paused. If you haven't opened the app at home since remote access was turned
on, do that once.

**The card shows an error with Retry.** The app could not read the card. Tap **Retry**. If it says **Not connected**,
the app cannot reach your Quark at all. See [Connecting](/docs/start/connecting#when-it-wont-connect).

## Related

- [How It Works](/docs/start/how-it-works): why Quark keeps your files at home
- [Connecting](/docs/start/connecting): finding your Quark on your home WiFi
- [Settings Reference](/docs/settings#network): everything else on the Network tab
- [Security Guide](/docs/help/security-guide#remote-access): when to leave remote access off

## Nerd Notes

Checked against quark `main` at `c0f4eefc` (v0.56.2 plus one test-only commit).

**What leaves the box.** Only while remote access is on, and each time the Quark starts with it on:

- Each time an admin turns it on, the Quark asks AutoButler's provisioning service at `quark.ts.autobutler.org` for a
  single-use key (`defaultProvisioningURL` in `pkg/util/provisionutil/provisionutil.go`). The request carries a device
  ID, the SHA-256 of the hostname and machine ID, not the names themselves (`pkg/util/provisionutil/helpers.go`). The
  first request creates a private network for your household alone. Later requests rejoin it. After a restart, a Quark
  that is already enrolled reconnects with what it saved and does not fetch a new key.
- The Quark then joins that network through AutoButler's coordination server and stays connected so your phones can
  find it.
- Requests that arrive that way are handed to Quark's own server over loopback, so Quark's sign-in still guards every
  one. Your files are not uploaded to AutoButler.

None of this happens while remote access is off.

**Phones.** A signed-in app on iOS or Android that reaches the Quark at home and has no saved pairing calls
`POST /api/v0/settings/remote-access/devices`. That returns a single-use key for the phone and the Quark's private
address. The app keeps them in platform secure storage and starts its own embedded node, with an on-device proxy in
front of the Quark (`lib/controllers/connection_controller.dart`, `lib/services/device_pairing_store.dart`). The app
probes the home address first and the remote address second. The remote address is never shown on screen. The web app
does nothing here: the page is already on whatever address the browser used. Pausing on one phone stops only that
phone's node and never calls the Quark.

**API.** `GET /api/v0/settings/remote-access` returns `enabled`, `connected`, and `needsSetup`, plus `remoteUrl` once
connected. `POST` turns it on and `DELETE` turns it off; both are admin only
(`internal/server/api/v0/settings/{get,enable,disable}_remote_access.go`). Turning it off logs the node out and keeps
its machine key, so turning it on again rejoins as the same node. A failure reason goes to the Quark's log, never to
the screen. The app shows `Errors.remoteAccessFailing` instead.

**Containers.** Keep the whole `/var/lib/quark` directory on a volume, not just `data/` inside it. The node's state
lives there, and losing it means joining again as a new device. If you set `QUARK_TRUSTED_PROXIES`, keep
`127.0.0.1,::1` in it: remote access reaches Quark over loopback, and the sign-in rate limiter needs the real client
address. See `docs/container.md` in the Quark repository.

**Screens.** The card, the setup sheet and the turn-off dialog are `RemoteAccessPanel`, `RemoteAccessSetupView` and
`remote_access_turn_off_dialog.dart` in `packages/quark_widgets`. The user journeys are JN-ST-011 and JN-ST-012 in
`docs/user-journeys/settings.md`.
