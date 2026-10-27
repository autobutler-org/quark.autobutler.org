---
title: SSH Access
description: How an admin turns on a command-line sign-in from the home network, and what that gives away
navigation:
  title: SSH Access
  order: 3
---

# SSH Access

SSH access lets an admin sign in to the Quark itself, from a computer on the home network, and run commands there. Most
households never need it. It is off until an admin turns it on, and only admins can see the setting.

Remote access is how you open the Quark app when you are away from home. SSH access is a separate sign-in to the
machine. Remote access does not include it. [Remote Access](/docs/settings/remote-access) covers the app.

## What it gives away

Treat SSH access like handing someone the keys to the Quark.

- **One account.** The sign-in is the `quark` account. The root account cannot sign in this way, and its password stays
  locked.
- **The same account Quark runs as.** Whoever signs in can read the files Quark keeps, for every account. Each account
  has its own vault. That vault opens with the password the account uses to sign in. This sign-in does not open it.
- **A few actions as root.** The account can mount and unmount drives, turn this sign-in on and off, set its own
  password, rename the Quark, and read drive health. Those are the root actions, and the list stops there.
- **Your home network.** Remote access does not carry this sign-in. Leave it on the network the Quark is already on.
  The port and the firewall rule are in Nerd Notes.

## How to use it

1. Open **Settings → Network** and scroll to **SSH access**. It sits below **Connected devices**, and below **Device
   name** when that is shown. Only admins see it.
2. Turn on the **SSH access** switch. Quark asks you to confirm. The warning says that anyone on your network with an
   allowed key, or the password if you set one, can sign in and run commands, and that the firewall will open. Choose
   **Turn on**.
3. Give it a way in. Either one works, and you can use both.
   - Under **Allowed keys**, choose **Add key** and paste a public key. Never paste a private key. Each key is listed
     with its fingerprint. An empty list names the kind of file to copy from.
   - Under **Login password**, choose **Set password**. Type it twice. It needs at least 12 characters. The page says
     Quark does not store it, so keep a copy somewhere you can find.
4. From a computer on the same network, sign in as `quark`. Nerd Notes has the command, including what to use if you
   renamed the Quark.
5. Turn the switch off when you are done. That stops the sign-in and closes the firewall opening. Your keys and the
   password stay where they are.

To take a key away, choose **Remove key** next to it. Quark asks **Remove key?**. Choose **Remove**. To drop the
password and leave keys as the only way in, choose **Clear password**. You can do either whether the switch is on or
off.

## If something goes wrong

In place of the switch, **SSH access** can say it can't be managed. The message names what to run on the Quark. The
exact sentences are in Nerd Notes. In short, one of these is true:

- The Quark is not running Linux.
- Quark is not running as its installed service.
- The SSH server is not installed.
- Quark's helper for this setting is missing.
- The `quark` account cannot sign in yet.

On a container, expect one of those messages. Use your container platform's own shell instead.

## Related

- [Remote Access](/docs/settings/remote-access): opening the app away from home
- [Security Guide](/docs/help/security-guide): what to check if you think someone got in
- [Vault](/docs/vault): each account's vault
- [Self-Hosting](/docs/nerd-notes/self-hosting): installing Quark on a Linux computer
- [Nerd Notes](/docs/nerd-notes): how Quark runs on the box

## Nerd Notes

Checked against quark v0.56.2. `main` was one commit ahead (`c0f4eefc`), a performance-test change that does not touch
SSH, the vault, or remote access.

**The switch and the warning.** The switch title is **SSH access**. The subtitle is "Sign in to this Quark as quark
over SSH, on port 22". The dialog title is **Turn on SSH access?** and the message is:

> Anyone on your network with an allowed key, or the password if you set one, can sign in to this Quark as quark and
> run commands on it. Port 22 opens in the firewall. Turn it off when you are done.

The confirm button is **Turn on**.

**How you sign in.** From a computer that can reach the Quark, run `ssh quark@quark.local`. If an admin renamed the
Quark under **Device name**, use that hostname. sshd listens on port 22 on the machine's interfaces. Remote access
proxies the Quark app to the local web port. It does not forward port 22, and it does not open a port on your router
(`startProxyLocked` in `pkg/util/remoteutil/helpers.go`). Do not forward port 22 yourself.

**Keys.** Paste one OpenSSH public key, such as the contents of `~/.ssh/id_ed25519.pub`. The empty list says "No keys
yet. Add a public key, such as the contents of id_ed25519.pub." Options such as `command=` are dropped. Keys are stored
at `/var/lib/quark/.ssh/authorized_keys`. Each row shows the key type, the SHA256 fingerprint, and the comment.
**Remove key** is the row's button. The dialog names that key's fingerprint and says it will no longer be able to
sign in.

**Password.** At least 12 characters (`MinPasswordLength`), no control characters, and at most 1024. The helper pipes
it to `chpasswd` for the `quark` account. Quark does not store it, and status does not report whether one is set.
**Clear SSH password?** says "Only allowed keys will be able to sign in." Clearing it sets the password field to `*`,
so no password matches and keys still work (`clear-password` in `internal/install/ssh_access.go`). Snack bars say "SSH
password set" and "SSH password cleared".

**What may run as root.** `/etc/sudoers.d/quark` lets the `quark` account run, as root:

- `mount` and `umount` under `/var/lib/quark/data/mounts/`
- `/usr/local/libexec/quark/ssh-access`, which turns SSH on or off and sets or clears the password
- `/usr/local/libexec/quark/set-hostname`, which renames the machine
- `/usr/local/libexec/quark/drive-health`, which runs one health read of a whole disk

Nothing else is in that file (`sudoersContent` in `internal/install/ssh_access.go`). Turning SSH on enables
`ssh.service`, keeps `ssh.socket` off, and, when `ufw` is installed, allows `22/tcp`. Turning it off stops the service
and deletes that rule. The choice survives a restart. `quark install` locks root's password on every start.
`PermitRootLogin no`.

**The vault.** Each account has its own vault, and it opens with the password that account uses to sign in. The
household vault is gone, and there is no master password. Items are ciphertext in the main database, and a query is
scoped to that account. Someone with the database, including this SSH login, reads ciphertext. Unlocking happens in
the app. A wrong password fails on the device and sends nothing. `POST /api/v0/vault/unlock` is gone.
[Vault](/docs/vault#nerd-notes) has the wraps and the routes.

**When Settings can't manage it.** `GET /api/v0/ssh/status` is admin-only. When `available` is false, `reason` is one
of these, and the app shows that sentence (`sshUnavailable` in `lib/utils/error_text.dart`):

- `unsupported_os`: "SSH access can only be managed on a Quark running Linux."
- `not_service`: "Quark isn't running as its installed service. On the device, run `sudo quark install`, then manage
  SSH access here."
- `sshd_missing`: "The SSH server isn't installed. On the device, run `sudo apt install openssh-server`, then
  `sudo quark install`."
- `helper_missing`: "Quark's SSH helper isn't installed yet. On the device, run `sudo quark install` to add it."
- `no_login_shell`: "The quark account can't sign in yet. On the device, run `sudo quark install` to give it a login
  shell."

Anything else shows "SSH access can't be managed on this Quark."

**What `quark install` writes.** On Linux it writes `/etc/ssh/sshd_config.d/00-quark.conf`: `PermitRootLogin no`,
`AllowUsers quark`, `MaxAuthTries 3`, `LoginGraceTime 30`, keys from `/var/lib/quark/.ssh/authorized_keys`, and
password authentication for `quark`. `AllowUsers quark` applies to every SSH sign-in on that machine. If you reach
the machine as your own user, check that you still can before you close the session.

When fail2ban is already installed, install adds the jail `quark-sshd`. It bans an address from port 22 for ten
minutes after five failed passwords in ten minutes. Quark does not install fail2ban. The filter matches failed
passwords and does not count offered keys. The web app is unaffected.

The `quark` account is created with no home directory and with `/bin/bash` as its shell. Nobody can sign in until an
admin adds a key or sets a password.

**In a container.** The published image `ghcr.io/autobutler-org/quark:0.56.2` (the same manifest as `:latest`) has no
SSH server. Its `quark` user is uid 999, gid 999, home `/var/lib/quark`, shell `/usr/sbin/nologin`. It is in the `disk`
group, gid 6. The image's `/etc/sudoers.d/quark` allows only `mount` and `umount` under
`/var/lib/quark/data/mounts/`. The three helpers above are not in the image. Expect one of the messages in the table.
Use the container platform's shell. [Self-Hosting](/docs/nerd-notes/self-hosting#in-a-container) covers the image.

**Routes.** All of these are admin-only, under `/api/v0`. An unknown `/api/v0/...` path can answer 200 with the web
app's HTML, so check `Content-Type` before you trust a 200.

- `GET /ssh/status` reports `available`, `reason`, `enabled`, and `keys`.
- `PUT /ssh/enabled` takes `{"enabled": true}` or `{"enabled": false}`.
- `POST /ssh/keys` takes `{"key": "<one public key line>"}`. A key that is not an OpenSSH public key is 400. A
  duplicate is 409.
- `DELETE /ssh/keys?fingerprint=SHA256:...` removes one key. The fingerprint is a query parameter because it can
  contain a slash. An unknown fingerprint is 404.
- `PUT /ssh/password` takes `{"password": "<the password>"}`. Too short, too long, or a control character is 400.
- `DELETE /ssh/password` clears it.

A change while SSH cannot be managed is 409, "SSH access can't be managed on this Quark."
