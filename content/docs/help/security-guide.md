---
title: Things You Should Know (Security Guide)
description: The handful of things every Quark owner should do to keep their files and passwords safe, in plain English
navigation:
  title: Security Guide
  order: 2
---

# Things You Should Know

Quark keeps your files on hardware you own. That is not the same as "impossible to lose." This page is the short list
of things every owner should actually do.

None of it is scary. You have already done most of it for other important things in your life.

## The short version

1. Keep your Quark password and your recovery phrase written down, with your important papers.
2. Copy the things you can't replace to a backup drive, and keep one copy out of the house.
3. Use WPA2 or WPA3 on your WiFi.
4. Turn on remote access only if your household needs it.
5. Tell someone you trust how to get in if you can't.

The rest of this page explains each one.

---

## Your password and recovery phrase

Each person on your Quark has their own account, with their own password. When the account was made, Quark also showed
a **recovery phrase**: a list of words that lets you set a new password if you forget the old one. You use it from
**Forgot password** on the sign-in screen.

Nobody else can reset your password for you, an admin included. So the phrase matters. Write it on paper and keep it
somewhere safe.

A good password is:

- Long enough to be a phrase rather than a word
- Not the password you use for your bank or your email
- Something you can write down and recognize later

`correct-horse-battery-staple` beats `P@ssw0rd1`. Longer beats clever.

Be sensible rather than paranoid. Quark sits in your house, so the realistic risk is not a stranger with a powerful
computer. It is you forgetting the password. A phrase you will remember, written on a card in your desk drawer, beats a
thirty-character monster you lose in a week.

---

## The vault

The [vault](/docs/vault) is where Quark keeps your saved logins. Everyone on your Quark has their own vault, and it opens
with the same password you sign in with. There is no second password to remember.

Your vault is locked on your own phone or computer before anything is saved to the Quark. The Quark only ever holds the
locked version. That means nobody else can open your vault: not another person in your house, not an admin, and not us.

The other side of that is simple. If you lose both your password and your recovery phrase, your vault is gone. Nobody
can get it back for you. You can then start a fresh, empty vault with **Start over**.

To keep your vault safe through a forgotten password:

1. Open **Vault** from the app drawer.
2. On **Set up your vault**, type your password, and your recovery phrase into **Recovery phrase (optional)**.
3. Tap **Set up vault**.

If you skipped the phrase, your vault picks it up the next time your account is given a new recovery phrase. Until then,
a forgotten password means a fresh vault.

Changing your password under **Settings → Account → Change password** keeps your vault. It opens with the new password
from then on.

One more thing. **Export** saves a copy of your vault as a normal file that anyone can read. Keep that file somewhere
safe, and delete it when you are done with it.

---

## The 3-2-1 backup rule

Quark stores your files. Quark is also a physical box, and boxes fail, flood, and get stolen.

- **3** copies of anything you would miss
- **2** different kinds of storage, like Quark's drive plus a USB backup drive
- **1** copy that is not in the same building

Quark tells you how you are doing. Open **System** from the app drawer and pick the **Storage** tab. A card at the top
rates your files **Unprotected**, **Basic**, or **Protected**, and tells you the next step.

Quark does not copy to a backup drive on a schedule yet. An admin makes each copy in the app with a
[snapshot backup](/docs/system/storage-and-backups). The copy out of the house is up to you. A drive at a relative's
house that you swap every so often is enough.

There is no backup plan that can save you from _no backup at all._

---

## Physical security

Quark is a small computer holding your files. Treat it like one.

- Keep it indoors, off the floor, somewhere that does not freeze or bake
- Keep it out of casual sight. There's no need to advertise a storage box.
- Do not keep your only backup drive next to Quark. Fire and burglary take pairs.

---

## Network security

Quark is built for your home network. It does not need the internet to do its job.

- Password-protect your WiFi with WPA2 or WPA3.
- Do not hand your WiFi password to people you do not trust.
- On its own, Quark reaches out to the internet for one routine thing: fetching security fixes for the system it runs
  on. It looks for new Quark versions only when someone opens the **Updates** tab in **Settings**. The code is public if
  you want to check.

### Remote access

[Remote access](/docs/settings/remote-access) lets your household reach Quark when you are away from home. It is off
until an admin turns it on in **Settings → Network**, and an admin can turn it off again at any time.

Remote access is a private connection between your Quark and your own devices. It does not open anything on your
router, and your files are not copied to us. Quark's own sign-in still checks every visit.

If nobody in your house needs to reach Quark from outside, leave it off. Everything at home works the same either way.

---

## Estate planning

The hard part is not the photos. It is the passwords. Whoever ends up with your Quark password ends up with your files
and every login in your vault. Treat it like a key to the house.

Handle it like any other important document:

1. Write down your Quark username, password, and recovery phrase. Each person in your house should do the same for
   their own account.
2. Store them where your will is stored: a fireproof box, a safe deposit box, or with the attorney who holds the will.
3. Tell one person you trust that Quark exists, what is on it, and where those papers are.

A trusted-contact feature is on the roadmap but not live yet, so paper and a trusted person are the plan for now.

This is not morbid. It is the same reason you leave a spare key with a neighbor.

---

## If you think someone got in

Quark has no API keys or app passwords to hunt down. Getting in means a username and password. The exception is
[SSH access](/docs/settings/ssh): if an admin turned it on, its keys and password are a way in too. Turn it off and
remove any key you do not recognize.

Then:

1. Open **Settings → Account** and look at the **Sessions** card. It lists everywhere your account is signed in. Tap
   **Sign out everywhere else**. See [Where am I signed in?](/docs/start/getting-started#where-am-i-signed-in).
2. Change your password under **Settings → Account → Change password**. This also signs out every other device on your
   account.
3. If you are an admin, turn off any account you do not trust with **Disable** on the **Users** page. That person is
   signed out everywhere. See [Turning off and removing accounts](/docs/users#turning-off-and-removing-accounts).
4. If remote access is on and you are not sure how they got in, turn it off in **Settings → Network** for now.
5. Change your WiFi password if your network was the likely way in.
6. Look through your files for odd deletions, unfamiliar folders, or changes you did not make.

If things look badly wrong, unplug Quark from your router. Nothing reaches it while it is off the network, and that buys
you time to work out what happened.

Guessing a password is slow. After a few wrong tries, Quark refuses that sign-in for a while, even if the next try is
right.

---

## What Quark does not do

To be direct about the limits:

- It does not scan uploads for viruses. It stores what you give it.
- It does not stop someone carrying the box out of your house. Vaults stay locked, but ordinary files on the drive
  could be read by whoever is holding it. A vault export you saved is ordinary too.
- It does not make your WiFi password safe to share. Someone on your network can reach Quark's sign-in screen, but
  that is where they stop. Seeing your files still means knowing your password.

Knowing the limits helps you decide what to store and how.

## Related

- [Vault](/docs/vault): your saved logins
- [Storage and Backups](/docs/system/storage-and-backups): backup drives and snapshot backups
- [Remote Access](/docs/settings/remote-access): reaching Quark away from home
- [Accounts and Sharing](/docs/users): admins, members, and turning accounts off
- [SSH](/docs/settings/ssh): the one way in besides signing in

## Nerd Notes

**Sign-in keys.** The app never sends your password. It runs Argon2id over the password and the account's salt (t=3,
m=64 MiB, p=1), then uses HKDF-SHA256 to split that into separate keys: `auth` is sent to sign in, `vault-wrap` wraps the
vault key, and `chat-wrap` wraps the chat identity. The recovery phrase works the same way with `recovery-auth`,
`recovery-vault-wrap` and `recovery-wrap`. The Quark stores the auth key as a SHA-256 hash and compares in constant
time. A body carrying a raw `password` gets **426**. See quark's `docs/auth.md` and `lib/services/account_crypto.dart`.

**The vault.** Each account has a random vault key, made in the app. It is stored on the Quark wrapped with
XChaCha20-Poly1305 under the `vault-wrap` key, and also under `recovery-vault-wrap` when the phrase was typed at setup or
the account has had a new phrase since. Entries and folders are `vault_items` rows of ciphertext; the name, URL,
username, password, notes, two-factor secret and folder all live inside it. Every query in `sql/queries/vault.sql` is
scoped to the caller's `user_id`, so an admin's request cannot reach another account's rows. The old household vault and
its master password are gone (`038_drop_household_vault`). The setup screen checks the typed password against the auth
key before it stores anything. It does not check the phrase, so a mistyped phrase is accepted and never opens the vault.

- `GET`/`PUT /api/v0/vault/key`: the wrapped key. An account with no vault gets `404 {"error":"this account has no vault
yet"}`.
- `GET`/`POST /api/v0/vault/items`, `GET`/`PUT`/`DELETE /api/v0/vault/items/:id`: ciphertext items.
- `DELETE /api/v0/vault`: **Start over**.
- `PUT /api/v0/auth/password` sends the vault key re-wrapped under the new password, in the same transaction.
- Exports (`quark_vault.json`, `quark_vault.csv`) are written in the app, in plaintext.
- A snapshot backup copies the ciphertext and wrapped keys into `vault_items_backup.db`.

**Sessions and lockout.** Sessions last 30 days. `GET /api/v0/auth/sessions` lists them and
`DELETE /api/v0/auth/sessions/:id` signs one out. `PUT /api/v0/auth/password` signs out every other session of the
account in the same transaction (since quark v0.53.0). An admin's **Disable** is `PUT /api/v0/admin/disable/:username`.
After five wrong sign-ins, the next one gets **429** with `Retry-After`. The wait starts at 30 seconds and doubles with
each further miss, up to 15 minutes. HTTP Basic shares the same lockout.

**Outbound contact.** Debian's `unattended-upgrades` is set to the security pocket only (`pkg/util/aptutil`). The
version check, `GET /api/v0/version/available`, runs when the Updates tab opens and may only contact `github.com` and
`objects.githubusercontent.com` (`allowedUpdateHosts` in `pkg/util/updateutil/updateutil.go`). Remote access, while it
is on, contacts its provisioning and coordination service and can use third-party relay servers when a direct
connection is not possible. Those relays see IP addresses and cannot read the traffic. It does not upload diagnostic
logs or client metrics. [Remote Access](/docs/settings/remote-access) has the details. Remote requests reach Quark
over loopback, which is why `X-Forwarded-For` is trusted only from loopback (or
`QUARK_TRUSTED_PROXIES`), keeping the sign-in lockout keyed on the real client.

**Backups.** The **Storage** tab's protection card reads `GET /api/v0/storage/protection`.
