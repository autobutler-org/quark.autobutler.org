---
title: Vault
description: Keep passwords on your Quark — encrypted on your drive, unlocked with a master password
navigation:
  title: Vault
  order: 9
---

# Vault

Quark's vault is a place to store passwords and other sensitive notes on hardware you own.
It lives on a drive attached to your Quark, encrypted. It is not a password manager running on our servers.

## Who has a vault

There is one vault per Quark, and it belongs to the Quark's admins. They share it, with one master password. Someone
who is not an admin has no **Vault** in the app drawer; making them an admin adds it.

Because it is shared, anyone who knows the master password can open the vault, and while one admin has it unlocked, any
admin can read it. Keep that in mind when you choose who is an admin.

## Setting it up

1. Make sure a storage drive is connected to your Quark. The vault lives on it.
2. Open **Vault** from the app drawer and choose **Set up your vault**.
3. Choose a **master password** of at least 8 characters, type it twice, and choose **Create Vault**. Write it down and
   store it safely.

There is no forgot-password button for the vault. If you forget the master password, that vault data is gone. That is
intentional. There is also no way to change the master password, or move the vault to another drive, in the app yet, so
choose both carefully.

## Using it

- Each entry holds a name, a username or email, a password, a website, notes, and an optional folder. There is a
  password generator, search, a folder filter, and buttons to copy the username and password.
- The vault locks itself after 5 minutes without vault activity. **Lock vault** locks it right away.
- **System → Storage** marks the drive that holds the vault. If that drive is unplugged, the vault says the device is
  disconnected until you plug it back in.

## Import, export, and backup

- **Import**, in the vault's menu, reads a Quark JSON export, a Bitwarden CSV, a Proton Pass CSV, a Google Passwords
  CSV, or another manager's CSV. An entry with the same name and site as one already in the vault is skipped, not
  overwritten.
- **Export as JSON** and **Export as CSV** write every entry **unencrypted**. Anyone who opens that file can read every
  password in it, so treat it like the passwords themselves and delete it when you are done.
- For an encrypted copy, use a snapshot backup. When an admin chooses **Back Up** for a Snapshot Backup drive on
  **System → Storage**, they can include the vault under a separate **recovery password** (at least 8 characters, and
  not the master password).
- **Restore from backup drive**, in the vault's menu, brings entries back from that drive with its recovery password.
  It works on an unlocked vault, so on a new Quark set up a vault first. Entries already in the vault are left as they
  are.

Forget the backup's recovery password and that copy of the vault cannot be restored either.

## What this is not

- Not a browser-extension autofill suite (do not expect that yet)
- Not a one-time-code app: an imported one-time-code secret is kept with its entry, but the vault does not show codes
- Not a hosted cloud password product

## Related

- [Security Guide](/docs/security-guide) — master password, 3-2-1 backups, limits
- [Getting Started](/docs/getting-started)
