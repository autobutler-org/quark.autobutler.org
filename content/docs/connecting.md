---
title: Connecting to Your Quark
description:
  Find your Quark on the home network, what differs between the web and the phone apps, and why the certificate
  warning appears
navigation:
  title: Connecting
  order: 21
---

# Connecting to Your Quark

Your Quark lives on your home network. This page covers how to find it, how the browser and the phone apps differ,
and what the certificate warning is about. Everything here is about your own WiFi. Remote access is coming soon and is
not covered here.

---

## Web, iPhone and Android

You can open Quark in any browser on your home network. The iPhone and Android apps are in testing.

|                     | Web browser         | iPhone and iPad app     | Android app             |
| ------------------- | ------------------- | ----------------------- | ----------------------- |
| Finding the Quark   | Type its address    | Tap it in a list        | Tap it in a list        |
| Certificate warning | Yes                 | No                      | No                      |
| Certificate changes | Warns again         | Refuses until forgotten | Refuses until forgotten |
| Several Quarks      | One address each    | **Backend hosts** list  | **Backend hosts** list  |
| Upload a folder     | Yes                 | No                      | No                      |
| Photo library       | Browser file picker | **Photos** under Upload | In the file picker      |

The browser needs no setup beyond the address: the page you open is served by that Quark. The apps work only on your
home network for now. The sections below explain each row.

---

## Finding your Quark

### The address

Your Quark's address is **`https://<name>.local`**, where `<name>` is the device name. The name is `quark` unless you
changed it, so for most people the address is **`https://quark.local`**.

You can pick the name on the last step of setup, under **Name this Quark**. An admin can change it later under
**Settings → Network → Device name**. A name uses lowercase letters, numbers or hyphens. The field shows the address the
Quark is on, for example "On your network as quark.local".

If another device on your network already has the name, your Quark takes a different one, and the field tells you
which. A second Quark is a common reason, for example `quark-2.local`.

After a rename, the old address stops working. Open the new one. If you rename it from a phone app that reaches the
Quark by its `.local` name, that app moves its saved address to the new name for you.

### If `quark.local` doesn't open

Not every device or router handles `.local` names. Try these in order:

1. **`https://quark.lan`** — many routers give the Quark this name too.
2. **`https://quark`** — works where the router hands out a local search domain.
3. **The IP address**, for example `https://192.168.1.20`. Find it in your router's list of connected devices.

Swap `quark` for your device name if you changed it.

Android phones older than Android 12 can't look up `.local` names. Use `.lan` or the IP address there.

### Always `https://`

Quark answers only on `https://`. Nothing listens for `http://`, and nothing redirects you, so `http://quark.local`
just fails to connect. If your browser fills in `http://` on its own, type the `https://` yourself.

---

## In the phone apps

A new app starts out pointed at `https://quark.local`. If your Quark answers there, you go straight to setup or sign-in.
If it doesn't, add the right one with **Add Quark** in the list of Quarks on the sign-in page (see
[below](#more-than-one-quark)).

With no Quark saved at all, the app shows **Connect to your Quark** instead:

- Quarks the app finds on your network are listed. Tap one to fill in its address.
- Or type it into **Quark address**. You can leave off `https://`; the app adds it.
- Tap **Connect**. The app checks the address before saving it. If a local name doesn't answer, it tries the `.local`,
  `.lan` and bare versions of that name, and saves whichever one answered.

If nothing answers, you see "Could not connect. Check the address and try again." Check the troubleshooting list
[below](#when-it-wont-connect).

The browser can't search the network for Quarks, so the web page never shows a list. It doesn't need one: you already
typed the address to open it.

### More than one Quark

The apps keep a list of Quarks under **Settings → General → Backend hosts**. Each row has a menu with **Edit** and
**Remove**. Tap a row to switch to that Quark. **Add Quark** opens the same nearby list and an address field, plus a
nickname such as "Home".

**Add Quark** checks the address too. If the Quark doesn't answer, it offers **Save anyway**, so you can add a Quark that
is switched off and connect later.

The sign-in and setup pages show the same list. If the app is pointing at the wrong Quark, switch there; you don't need
to sign in first.

Each Quark asks you to accept its terms once. Switching to a Quark you haven't used before shows them again.

### "You're not connected"

When the app can't reach the Quark it's set to, pages show **You're not connected** and "The app can't reach your Quark
right now." Check that you're on your home WiFi and the Quark is on. If the address is wrong, fix it under **Backend
hosts**.

---

## The certificate

### Why the browser warns you

Quark encrypts every connection with a certificate it makes for itself. No public certificate authority can vouch for
a device that only exists on your WiFi, so your browser warns you. The encryption is real. The
[Getting Started guide](/docs/getting-started#your-browser-warns-you-the-connection-is-not-private) explains it in full.

You see the warning:

- **Once per browser and device.** A new laptop or a second browser asks again.
- **About once a year.** Each certificate lasts a year. Quark makes a new one when it starts up within 30 days of the
  old one running out, so the warning comes back after a restart or an update around then.
- **After a rename.** A new device name means a new certificate.
- **On names the certificate doesn't list.** It covers the device name, the `.local` name, and the IP addresses the
  Quark had when it made the certificate. It doesn't cover `quark.lan`, or an IP address the Quark got later. Your
  browser warns about the name too. It's still the same box.

Proceeding again is fine in every one of those cases.

### The phone apps handle it themselves

The iPhone and Android apps accept your Quark's certificate on their own, so you never see a warning page. They do
that only for addresses that can't leave your home network: `.local`, `.lan`, `.home`, `.home.arpa` and `.internal`
names, a name with no dots like `quark`, and private IP addresses. They never do it for a public internet name.

The app also remembers the certificate the first time it connects to each saved Quark. If a later connection shows a
different certificate, the app refuses to connect. The Quark's row under **Backend hosts** says:

> This Quark's security certificate has changed, so the app won't connect to it.

That can mean someone on the network is pretending to be your Quark. It can also have an ordinary cause: you reset or
reinstalled the Quark, renamed it, or it made its yearly new certificate. If you know why it changed, open that Quark's
menu under **Backend hosts** and choose **Forget certificate**. The next connection remembers the new one. There is no
confirmation step, so only do it when you know the reason.

If you don't know why it changed, don't forget the certificate. Check that you're on your own WiFi first.

---

## When it won't connect

- **Same network?** Your phone or laptop must be on the same WiFi as the Quark. A VPN on your device can get in the way.
- **`https://`, not `http://`.** See [above](#always-https).
- **Try another name.** `.lan`, the bare name, or the IP address, as [above](#if-quarklocal-doesnt-open).
- **Old browser or tablet?** Quark accepts only TLS 1.3, the current version of the encryption browsers use. A browser
  or operating system too old for it can't connect at all. You won't see a certificate warning, just a page that never
  loads. Update the browser, or use a newer device.
- **Still nothing?** Check that the Quark has power, then restart your router once. [Help](/docs/help) has more.

---

## For the curious

- The certificate is ECDSA P-256, self-signed, issued as "Quark Self-Signed", and valid for 365 days.
- Quark checks it every time it starts. It makes a new one when there is none, when the current one expires within 30
  days, or when it no longer names the device. A rename makes one straight away.
- It covers `localhost`, the device name and `<name>.local`, `127.0.0.1`, `::1`, and every network address the device
  had when it was made.
- It lives in `certs/server.crt` and `certs/server.key` in Quark's data directory. Delete both and Quark makes a new
  pair on its next start.
- The server accepts TLS 1.3 only and listens on port 443. Nothing listens on port 80.
- With Avahi installed, the device advertises a `_quark._tcp` service on port 443, named "Quark on" plus the device
  name. That's what the phone apps look for.
- The container image serves plain HTTP on port 8080 instead, with no certificate. See
  [Nerd Notes](/docs/nerd-notes).

---

## Related

- [Getting Started](/docs/getting-started) — setting up and opening Quark the first time
- [Help & Support](/docs/help) — troubleshooting and how to get in touch
