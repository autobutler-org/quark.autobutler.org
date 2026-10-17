---
title: SSH Access
description: How an admin lets a computer on the home network sign in to the Quark over SSH, and what that gives away
navigation:
  title: SSH Access
  order: 24
---

# SSH Access

SSH access lets someone sign in to your Quark's operating system from a computer on your home network and run commands
on it. Most households never need it. It is off until an admin turns it on, and only admins can see it.

## What it gives away

Treat SSH access like an admin password, because it is at least that much.

- **One account.** SSH lets in only the `quark` account. Signing in as root is refused, and root's own password is locked
  every time Quark starts.
- **The same account Quark runs as.** Whoever signs in as `quark` can read everything Quark keeps on the box, every
  account's files included. The vault stays encrypted with its master password.
- **A few root actions.** The `quark` account may mount and unmount drives, turn SSH access on and off, set its own SSH
  password, and rename the device. Nothing else runs as root.
- **Your home network only.** It listens on port 22 of the Quark. Do not forward that port on your router.

## Turn it on

1. Open **Settings → Network** and scroll to **SSH access**. It is below **Connected devices**, and only admins see it.
2. Turn on the **SSH access** switch ("Sign in to this Quark as quark over SSH, on port 22"). Quark asks first:

   > Anyone on your network with an allowed key, or the password if you set one, can sign in to this Quark as quark and
   > run commands on it. Port 22 opens in the firewall. Turn it off when you are done.

   Choose **Turn on**.

3. Give it a way in. Either one works:
   - Under **Allowed keys**, choose **Add key** and paste a public key, such as the contents of `~/.ssh/id_ed25519.pub`.
     Never paste a private key. Each key is listed with its SHA256 fingerprint.
   - Under **Login password**, choose **Set password**. It needs at least 12 characters. Quark does not store it, so keep
     it somewhere safe.
4. From a computer on your home network, run `ssh quark@quark.local`, or use your Quark's own hostname if you changed
   it.
5. Turn the switch off when you are done.

Turning it on starts the device's SSH server, keeps it on across restarts, and opens port 22 in the device's firewall
if it has one. Turning it off stops the server and closes the port again.

Turning it off does not delete your keys or the password. To take them away, use **Remove key** next to a key, or
**Clear password**, which leaves keys as the only way in. You can do both whether the switch is on or off.

## When Settings says it can't be managed

In place of the switch, the **SSH access** section can show one of these. Each one says what to run on the device.

- "SSH access can only be managed on a Quark running Linux." The Quark is on another operating system, such as macOS.
- "Quark isn't running as its installed service. On the device, run `sudo quark install`, then manage SSH access here."
  Quark was started some other way than its installed service.
- "The SSH server isn't installed. On the device, run `sudo apt install openssh-server`, then `sudo quark install`."
  The device has no SSH server to turn on.
- "Quark's SSH helper isn't installed yet. On the device, run `sudo quark install` to add it." The small root helper
  that turns SSH on and off is missing.
- "The quark account can't sign in yet. On the device, run `sudo quark install` to give it a login shell." The `quark`
  account was made without a login shell.

### In a container

The container image has no SSH server, and its `quark` account has no login shell, so expect one of the messages above.
Use your container platform's own shell access instead.

## For self-hosters

`quark install` sets this up, and the installed service runs it again before every start. On Linux it:

- writes `/etc/ssh/sshd_config.d/00-quark.conf`, which refuses root, allows only `quark`, reads keys from
  `/var/lib/quark/.ssh/authorized_keys`, and allows a password for `quark`
- writes the root-owned helper `/usr/local/libexec/quark/ssh-access` and the one sudoers entry that lets the service run
  it
- gives the `quark` account a login shell and locks root's password

The helper enables `ssh.service` and keeps `ssh.socket` off. If `ufw` is installed, it adds or removes the rule for
22/tcp.

## Related

- [Security Guide](/docs/security-guide) — what to check if you think someone got in
- [Nerd Notes](/docs/nerd-notes) — how Quark runs on the box
