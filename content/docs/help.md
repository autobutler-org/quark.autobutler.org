---
title: Help & Support
description: Get help and support for Quark
navigation:
  title: Help
  order: 3
---

# Help & Support

---

## Troubleshooting

### I can't reach Quark in my browser

- Make sure Quark is powered on
- Make sure you're on the same WiFi network as your Quark device
- Try `https://quark.local` — if you changed the hostname during setup, use that instead
- Try restarting your router and your Quark device

### My browser says the connection is not private

Expected, and safe to continue past. Click **Advanced**, then **Proceed** (on Safari, **Show Details**, then **visit this
website**). Quark encrypts the connection with a certificate it makes for itself on first boot; the warning means no
public certificate authority countersigned it, which none can do for a device on your own WiFi. The
[Getting Started guide](/docs/getting-started#your-browser-warns-you-the-connection-is-not-private) explains it at
length.

### I'm getting an error when I try to install Quark

Make sure you're using the installer for your operating system and architecture. The [nerd notes](/docs/nerd-notes)
page has installation details. If you're still stuck,
[open a GitHub issue](https://github.com/autobutler-org/quark/issues) and someone will help.

### Quark doesn't work with my VPN

This is expected. Quark runs entirely on your local network — connecting through a VPN routes traffic outside your
home, so the two conflict. Disable your VPN when accessing Quark on your home network. (We're working on built-in
remote access so you won't need a third-party VPN to reach it from outside your home.)

### I'm having performance issues

1. Open **System** from the app drawer and check the **Health** tab — high disk usage or high temperatures can cause
   slowdowns
2. Share what you see in a [GitHub issue](https://github.com/autobutler-org/quark/issues) or email it to
   [support@autobutler.org](mailto:support@autobutler.org) and we'll take a look

### My files aren't showing up after I uploaded them

Try refreshing the page. If they still don't appear, check that your upload completed successfully (the progress
indicator should have reached 100%). Very large files can take a minute.

### I deleted a file

Open **Trash** from the app drawer. You can restore it for about 30 days, or delete it permanently.
Trash is a change-your-mind window, not a forever recycle bin. See
[Getting Started](/docs/getting-started).

---

## Get Help

**GitHub Issues** for questions, bug reports, and feature requests:
→ [github.com/autobutler-org/quark/issues](https://github.com/autobutler-org/quark/issues)

**Email** for private matters:
→ [support@autobutler.org](mailto:support@autobutler.org)
