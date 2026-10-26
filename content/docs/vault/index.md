---
title: Vault
description: Keep your own passwords on your Quark, opened with the password you already sign in with
navigation:
  title: Vault
  order: 1
---

# Vault

The vault is where you keep logins you would rather not memorize. Each person on your Quark has their own. Yours opens
with the password you already use to sign in. There is no second password, and there is no vault shared by the
household.

Quark locks each login on your phone or computer before it saves anything. Your Quark keeps only that locked copy. It
cannot read what you stored. Neither can anyone else in the house, an admin included.

You can open the vault whenever you are signed in. At home, that is your own WiFi. Away from home, it is the same vault
over remote access, once an admin has turned that on in **Settings → Network**.

## How to use it

### Set it up

1. Open **Vault** from the app drawer.
2. The first time, the page says **Set up your vault**. Type the password you sign in with.
3. To keep this vault if you forget that password, type your account recovery phrase in **Recovery phrase (optional)**.
   Quark does not check the phrase. A mistyped one is accepted, and it will not open the vault later. Leave the field
   empty if you do not have the phrase in front of you.
4. Tap **Set up vault**.

You land on an empty list that says **No passwords yet**.

If the password is not the one you sign in with, Quark says "That isn't your account password. The vault opens with the
password you sign in with." Nothing is set up.

### Open it later

The page says **Your vault is locked**. Type the same sign-in password and tap **Unlock**.

A wrong password is checked on your device. Quark says "That password doesn't unlock your vault." The list stays
hidden.

Once it is open, it stays open while you move around Quark. It locks after 15 minutes without using it, when you tap
**Lock vault**, and when you sign out. Locking forgets the open copy on this device. The locked copy on your Quark is
left as it was.

### Add a login

1. Tap **New entry**.
2. Fill in **Name**. That is the only required field. **Website**, **Username or email**, **Password**, **Two-factor
   secret**, and **Notes** are there when you want them.
3. Tap **Generate password** if you want a random password filled in for you.
4. Tap **Save**.

Open a login to read it. The password stays hidden until you tap **Show password**. **Username**, **Password**, and
**Website** each have a copy button.

Quark does not type these into other websites for you. Copy what you need from the login.

A two-factor secret is stored with the login. The details say **Two-factor** is **Set up**. Quark does not show the
changing codes. Keep using the authenticator app that does.

Tap **Edit entry** to change a login, or **Delete entry** to remove it. Deleting asks first. The login is removed from
your vault on every device, and this cannot be undone.

### Folders and search

Tap **New folder**, type a name, and tap **Create**. Folders appear as chips above the list. Tap a chip to see only
that folder, or **All** to see every login.

With a folder selected, **Delete folder** removes the folder on every device and keeps the logins, filed in no folder.

The search box reads **Search the vault**. It matches the name, the site, or the username. A search that finds nothing
says **No matching entries**. The search stays on your device.

The **Folder** field shows up on a login once you have at least one folder.

## Bring logins in, and take a copy out

Tap **Import** and choose a JSON or CSV file. Quark reads:

- A Quark vault export
- A Bitwarden CSV
- A Proton Pass CSV. Logins come in. Notes, aliases, and cards are left out, and Quark tells you how many.
- A Google Password Manager CSV, or another manager's CSV with the usual columns

A login already in the vault, with the same name and the same site, is skipped. It is not copied again, and it is not
overwritten. Quark tells you how many it added, how many it skipped, and how many it left out. A file over 10 MB is
refused.

Tap **Export**, then **Export as JSON** or **Export as CSV**.

An export is an ordinary file. It is not locked, and anyone who has the file can read every login in it. Keep it
somewhere safe, and delete it when you are done with it.

A snapshot backup copies every account's vault too, still locked. A vault in that copy opens only with that account's
password or recovery phrase. Nobody sets a separate password for the backup. The app cannot restore that copy yet. See
[Storage and Backups](/docs/system/storage-and-backups).

## If something goes wrong

**You changed your password.** Open **Settings → Account** and tap **Change password**. The vault stays when that
password still opens it, and from then on it opens with the new password.

**You forgot your password.** On the sign-in screen, tap **Forgot password?** and use your recovery phrase to choose a
new one.

- If you typed that phrase when you set the vault up, the vault comes with you. Unlock it with the new password. The
  same is true when your account was given a new recovery phrase later, while the old password still opened the vault.
- If you skipped the phrase, the vault does not come with you. You can sign in, and the old vault stays locked. Tap
  **Start over** to delete it and set up a fresh one. Until your account is given a new recovery phrase, that is the
  way through a forgotten password.

**The password you sign in with no longer opens the vault.** On the locked page, tap **Start over**. The dialog is
titled **Delete your vault?** and it says:

> Every saved login is deleted, on every device, and nobody can get them back. Do this only if your password no longer
> opens the vault, then set up a new one.

Type the password you sign in with now, then tap **Delete vault**. **Cancel** leaves the vault as it was. A wrong
password deletes nothing. Quark says "That password isn't right. Nothing was deleted."

After that, the page says **Set up your vault** again. Your other signed-in devices show that too.

**You lost both your password and your recovery phrase.** Start over lives on the locked vault page, so you have to be
signed in to use it. Without the password and without the phrase, you cannot sign in, and nobody can open the vault.
There is no admin recovery. The logins stay locked on your Quark.

## Good to know

- Every account has a vault, whether or not you are an admin. You see only yours.
- Quark does not fill passwords into other websites.
- The locked copy stays on your Quark. This is not a password product running on our servers.

## Related

- [Security Guide](/docs/help/security-guide): your password, your recovery phrase, and backups
- [Remote access](/docs/help/security-guide#remote-access): reaching your Quark when you are away from home
- [Storage and Backups](/docs/system/storage-and-backups): snapshot copies of the locked vault
- [Getting Started](/docs/start/getting-started): the first evening with a new Quark

## Nerd Notes

Checked against quark v0.56.2. `main` was one commit ahead (`c0f4eefc`), and that commit does not touch the vault.

The household vault, one master password shared by every account, is gone. Migration `038_drop_household_vault` drops
it. Migration `037_per_account_vault` is the model below. There is no master password.

**Where a vault lives.** The app makes a random 32-byte key (`AccountCrypto.generateVaultKey` in
`lib/services/account_crypto.dart`). The Quark stores that key only wrapped, in `vault_keys`, and stores each item as
ciphertext in `vault_items`. Both tables are in the main database. The vault does not sit on a storage device, and it
does not wait for a drive. An entry and a folder are both items. The name, URL, username, password, notes, two-factor
secret, and folder are inside the ciphertext. No column describes the contents.

**How a password opens it.** One Argon2id run over the login password and the account's auth salt is split with
HKDF-SHA256. The info `vault-wrap` is the key that wraps the vault key. The recovery phrase uses `recovery-vault-wrap`.
Each item is XChaCha20-Poly1305 under the vault key, with a fresh nonce. The password itself is never sent. Setup sends
the password's auth key, and the Quark checks it before storing anything, so the wrap is always under the login
password. A wrong unlock password fails on the device and sends nothing.

A phrase typed at setup is not checked against the account. A mistyped one is stored and never opens the vault. A vault
set up with the phrase field empty has no phrase wrap. It gains one when the account is next given a recovery phrase
(`PUT /api/v0/auth/recovery-key`) and the login password still opens the key. Until then, `POST /api/v0/auth/recover`
cannot carry the vault.

**A password change does not copy a weaker wrap.** `lib/services/auth_service.dart` opens the key with the current
password and sends it back wrapped under the new one. The Argon2id cost is the stored cost raised to
`KdfParams.standard` where the stored cost is lower (`atLeast`, #3648, in the app since v0.55.1). The phrase wrap is
kept as stored. The items are not rewritten. If the current password does not open the key, no new wrap is sent, and
the vault stays under the password it was made with. The same re-wrap is `vaultKey` on `PUT /api/v0/auth/password`,
`PUT /api/v0/auth/recovery-key`, and `POST /api/v0/auth/recover`.

**Who can read a row.** Every query in `sql/queries/vault.sql` is scoped to the caller's `user_id`. Another account's
item reads as not found, for an admin too. `vault_changed` goes only to that account's sessions.

Someone with the database, or with a snapshot, reads ciphertext. An app that has been tampered with can still see the
password as it is typed. Quark's `docs/chat-security.md` states that limit for the vault.

**Idle lock.** `VaultConfig.autoLockAfter` in `lib/utils/vault_config.dart` is 15 minutes. Lock, that idle time, and
sign-out forget the key and the decrypted items on that device.

**Routes.** Each route below acts on the signed-in account and none of them are admin-only. An unknown `/api/v0/...`
path can answer 200 with the web app's HTML, so check `Content-Type` before trusting a 200.

- `GET /api/v0/vault/key` returns the wrapped key. No vault yet is 404 with
  `{"error":"this account has no vault yet"}`.
- `PUT /api/v0/vault/key` stores the first key. The body carries the auth key as `password`, plus the wraps. A wrong
  auth key is 403, a raw password is 426, and an account that already has a vault is 409. Nothing is stored on 403
  or 426.
- `GET /api/v0/vault/items` returns that account's ciphertext. An account with no items gets `[]`.
- `POST /api/v0/vault/items` and `GET`, `PUT`, and `DELETE /api/v0/vault/items/:id` are one ciphertext item.
- `DELETE /api/v0/vault` is **Start over**. The body must include `password` (the auth key). A missing password is 400
  `password is required`. A wrong one is 403 and nothing is deleted. A raw password is 426. It shares the sign-in rate
  limit, so a session alone cannot wipe a vault (v0.55.1, quark #3653). The dialog title is **Delete your vault?**.
- `POST /api/v0/auth/recover/vault-key` fetches the wrapped key during recovery and needs no session. No vault is 404.
- `POST /api/v0/vault/unlock` and `POST /api/v0/vault/import-backup` are gone.

**Import and export.** The app writes the export from the unlocked vault. It is plaintext. JSON is `quark_vault.json`,
with `entries` and `folders`. CSV is `quark_vault.csv`, with the header
`name,url,username,password,notes,totp_secret,folder`. Import recognizes JSON by its first character, Bitwarden and
Proton Pass by their CSV headers, and any other CSV, including Google Password Manager, by its column names. A file
over 10 MiB (`VaultConfig.maxImportBytes` in `lib/utils/vault_config.dart`) is refused. The app's own sentence says 10 MB.
A duplicate is
the same name and URL host, ignoring case. Proton Pass notes, aliases, and cards are counted as left out, not as
errors. A generic CSV does not take a two-factor column. Bitwarden and Proton Pass do. The details view shows **Set
up** for a stored seed and does not derive codes.

**Backups.** A snapshot copies `vault_keys` and `vault_items` as they are into `vault_items_backup.db` and asks for no
password (`ExportVault`). `backup.ImportVault` restores that file only while no account has a vault item, and no HTTP
route calls it yet (quark #2428). An older `vault_backup.db`, the household vault, is not read. Nothing in the vault
routes checks where the request came from, so remote access reaches the same vault once the account is signed in.
