---
title: Vault
description: Keep passwords on your Quark — encrypted on your drive, unlocked with a master password
navigation:
  title: Vault
  order: 9
---

# Vault

Quark's vault is a place to store passwords and other sensitive notes on hardware you own.
It lives on your drive, encrypted. It is not a password manager running on our servers.

## Soft-launch basics

1. Open Vault while you are on your home network and signed in to Quark.
2. Choose a **master password** you will remember. Write it down and store it safely.
3. Add, edit, or remove entries in the app.
4. Import or export when you need to move a backup — if you export a protected backup, you
   choose a recovery password **at export time** (not a one-time phrase from setup).

The import dialog also takes **Proton Pass CSV** and **Google Passwords CSV**, next to
auto-detect and Bitwarden. Proton Pass imports **login** items only — notes, aliases, and
cards are left out. Importing passwords does not replace the vault master password, and it
is not account recovery.

There is no forgot-password button for the vault. If you forget the master password, that
vault data is gone. That is intentional.

## What this is not

- Not a browser-extension autofill suite (do not expect that yet)
- Not reachable from outside your home network unless an admin turns on remote access
- Not a hosted cloud password product

## Related

- [Security Guide](/docs/security-guide) — master password, 3-2-1 backups, limits
- [Getting Started](/docs/getting-started)
