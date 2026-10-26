---
title: Self-Hosting
description: Run Quark on your own Linux machine or in a container — what it installs, where it keeps data, and fixes
navigation:
  title: Self-Hosting
  order: 21
---

# Self-Hosting

Most people run Quark on a Quark device, and [Getting Started](/docs/getting-started) covers that. This page is for
running it on hardware you already have. There are two supported routes:

| Route                                         | Good for                      | How you reach it                     |
| --------------------------------------------- | ----------------------------- | ------------------------------------ |
| [Your own Linux machine](#your-linux-machine) | A spare PC, mini PC, or Pi    | `https://<hostname>.local`, port 443 |
| [A container](#in-a-container)                | Docker, Podman, or Kubernetes | `http://<host>:8080`, behind TLS     |

Both run the same binary from the same release. Releases are built for Linux on `x86_64` and `arm64` only. There is no
macOS, Windows, or 32-bit build. The `.AppImage` files on a release page are the Linux desktop app, not the server.

---

## Your Linux machine

### What the machine needs

- **Linux on `x86_64` or `arm64`, with systemd.** `quark install` writes a systemd unit.
- **Port 443 free.** Quark serves HTTPS on 443 and nothing else. Nothing listens on port 80, so type `https://`.
- **A machine you can give to Quark.** `quark install` changes system settings, listed
  [below](#what-quark-install-sets-up). Some of them, like locking the root password and limiting who can sign in over
  SSH, are fine on a dedicated box and surprising on your everyday computer.

Optional, each for one thing:

| Package                        | What it adds                                                                     |
| ------------------------------ | -------------------------------------------------------------------------------- |
| apt and dpkg (Debian-based OS) | Automatic Debian security updates and the kernel hold. Skipped without them.     |
| `avahi-daemon`                 | `<hostname>.local` on your network, and the iOS and Android apps finding the box |
| `dcraw` or `exiftool`          | Previews of camera RAW photos                                                    |
| `openssh-server`               | The admin SSH access setting                                                     |

Video needs nothing extra. Quark handles it in its own code.

### Install

Pick a version from the [releases page](https://github.com/autobutler-org/quark/releases). Download the archive for
your machine and the checksums file, then check the archive before you run anything in it:

```bash
VERSION=X.Y.Z        # the release you picked, without the leading v
ARCH=x86_64          # or arm64
BASE=https://github.com/autobutler-org/quark/releases/download/v$VERSION
curl -LO "$BASE/quark_Linux_$ARCH.tar.gz"
curl -LO "$BASE/quark_${VERSION}_checksums.txt"
sha256sum --ignore-missing -c "quark_${VERSION}_checksums.txt"
```

`sha256sum` should print `quark_Linux_<arch>.tar.gz: OK`. If it prints anything else, stop and download again.

Then unpack and install:

```bash
tar xzf "quark_Linux_$ARCH.tar.gz" quark
sudo ./quark install
```

`sudo ./quark install` copies the binary into place, sets up the machine, and starts the `quark` service. Running it
again is safe: it repairs an existing install, and it never overwrites the binary it is running from.

### First open

On a phone or computer on the same network, open `https://<hostname>.local` (with `avahi-daemon` running) or
`https://<the machine's IP address>`. Your browser warns that the connection is not private. That is expected;
[Getting Started](/docs/getting-started#your-browser-warns-you-the-connection-is-not-private) explains why. Then you
get the same first-run setup a Quark device shows: the terms, your owner account, and a theme.

### Where things live

| What                        | Where                                                      |
| --------------------------- | ---------------------------------------------------------- |
| The binary                  | `/opt/quark/bin/quark`, linked from `/usr/local/bin/quark` |
| Database                    | `/var/lib/quark/data/quark.db`                             |
| Your files                  | `/var/lib/quark/data/files/`                               |
| The self-signed certificate | `/var/lib/quark/data/certs/`                               |
| Logs                        | The journal: `journalctl -u quark`                         |

Quark uses `/var/lib/quark/data` only when it runs as the user named `quark`, which the service does. Run
`quark serve` as anyone else and it keeps its data in `~/quark/data` instead, and you see an empty Quark.

### Updating

An admin updates from **Settings → Updates**: pick a version under **Update Quark to version** and click
**Start update**. Quark downloads the archive, checks it against the release's checksums, replaces its own binary, and
exits. systemd starts the new version. Updates are manual: Quark does not update itself.

---

## What `quark install` sets up

`sudo quark install` sets the machine up once. After that, the service re-runs the same setup as root before every
start (`quark install --system-only`), so a fix that ships in an update reaches machines already running. Each file is
written only when its contents differ. If the setup fails, Quark starts anyway.

### The service

- Installs the binary at `/opt/quark/bin/quark` and links `/usr/local/bin/quark` to it. The directory is owned by root
  and writable by the `quark` group, so the service can replace its own binary during an update.
- Writes and enables `quark.service`. It runs `quark serve` as the `quark` user, serves HTTPS on 443 with permission to
  bind that port without root, restarts on exit, and logs to the journal.
- Caps the service's memory, Quark and the programs it starts together, at 80% of the machine's RAM before throttling
  and 90% as a hard limit (`/etc/systemd/system/quark.service.d/50-memory.conf`). `quark serve` also sets the Go
  runtime's soft limit to 60% of RAM, unless you set `GOMEMLIMIT` yourself.

### Accounts and permissions

- Creates a `quark` system account with no home directory. Its shell is `/bin/bash` so the SSH access setting can work,
  but nobody can sign in as `quark` until an admin adds a key or sets a password.
- Creates `/var/lib/quark` owned by `quark`.
- Writes `/etc/sudoers.d/quark`. It lets the service run `mount` and `umount` under
  `/var/lib/quark/data/mounts/` and two fixed helpers in `/usr/local/libexec/quark/`, and nothing else.
- Installs those helpers, owned by root. One turns SSH on and off (and opens or closes port 22 in `ufw`, if you use it)
  and sets or clears the `quark` password. The other renames the machine.
- **Locks the root password.** Root stays reachable through `sudo`. Armbian images ship with a well-known root
  password, and this is what closes it.

### Network

- When the SSH server is installed, writes `/etc/ssh/sshd_config.d/00-quark.conf`: no root login, and
  `AllowUsers quark`. If you reach this machine over SSH as your own user, check you still can before you close your
  session.
- When Avahi is installed, writes `/etc/avahi/services/quark-dns-sd.service`. It advertises the box as
  `Quark on <hostname>` on port 443, which is how the iOS and Android apps find it.

### OS updates

On a host with apt and dpkg:

- Turns on unattended upgrades for **Debian security updates only**
  (`/etc/apt/apt.conf.d/52quark-unattended-upgrades`), and installs `unattended-upgrades` in the background if it is
  missing. The rule names Debian's security archive. On another apt-based system, such as Ubuntu, it matches nothing,
  so patch that system yourself.
- **Holds the kernel** at the version the machine booted: every installed `linux-image-`, `linux-dtb-`,
  `linux-headers-` and `linux-u-boot-` package, plus Armbian's board and firmware packages. Neither unattended upgrades
  nor `apt upgrade` will move them. That keeps a Quark device bootable. On your own PC it also means your kernel stops
  updating.

To lift the hold, run:

```bash
sudo quark install --release-kernel-hold
```

That unholds the packages and writes `/etc/quark/release-kernel-hold`. While that file exists, Quark leaves the
packages alone. Delete it and the hold comes back on the next start.

### The tradeoff

Root runs, before every start, a binary the `quark` user is allowed to replace. Self-update needs that. It means
someone who takes over the `quark` account gets root at the next restart. The mount permission in the sudoers file is
already close to that.

---

## In a container

Every release publishes `ghcr.io/autobutler-org/quark:<version>` (the version without the leading `v`) and `:latest`,
for `linux/amd64` and `linux/arm64`.

```bash
docker run -d --name quark --restart unless-stopped -p 8080:8080 \
  -v quark-data:/var/lib/quark ghcr.io/autobutler-org/quark:latest
```

Open `http://localhost:8080` and you get the setup screen. Your account lives in the volume, so it survives restarts.
The default command is `serve`, so other commands work too: `docker run --rm ghcr.io/autobutler-org/quark:latest
version`.

`quark install` does not run in a container. Nothing on the host is changed.

### Mount the whole `/var/lib/quark`

Mount `/var/lib/quark`, not just `data/` inside it. `data/` holds the database and every file you upload. Next to it,
`tsnet/` holds remote-access state, and `bin/` holds updates you install from Settings. Mount only `data/` and those
are lost each time the container is recreated.

For a folder on the host instead of a named volume, use an absolute path. Docker treats a relative path as the name of
a new volume, and Quark comes up empty.

### Don't override the user

The container runs as the user named `quark`, uid 999. Quark keeps its data under `/var/lib/quark` only for that user.
Run it as anyone else (`docker run -u`, or `runAsUser` in Kubernetes) and the data goes to a folder outside your mount,
so Quark comes up empty on every restart.

If a host folder gives a permission error, fix its ownership instead of changing the user:

```bash
sudo chown -R 999:999 /absolute/path/to/quark
```

### HTTPS

The image serves plain HTTP on port 8080 (`QUARK_INSECURE=true`). It expects your reverse proxy, ingress, or load
balancer to handle HTTPS. Don't expose port 8080 straight to the internet. To use Quark's own self-signed certificate
instead, unset `QUARK_INSECURE` and set `HTTPS_PORT`.

### Behind a proxy

Sign-in, setup, account recovery, and vault unlock are rate-limited per client IP address. Behind a proxy, every
request comes from the proxy, so set `QUARK_TRUSTED_PROXIES` to the proxy's IP or range (comma-separated, such as
`10.244.0.0/16`). Then Quark reads the real client address from `X-Forwarded-For`. Without it, all clients share one
limit, and one person guessing passwords locks everyone else out.

Setting it replaces the default, `127.0.0.1,::1`. Keep those two in the list if you will use remote access. An entry
that is not an IP or a range stops `quark serve` at startup with an error naming it. Don't set it wider than your
proxy: anything inside the range can claim to be any client.

### USB drives

Mounting a USB drive (**System → Storage**, then **Mount**) needs `--privileged`. Without it the mount fails with
`permission denied`, and everything else works. `--privileged` gives the container root's power over the host's
devices, so leave it off if you don't need drives.

- A drive plugged in after the container starts appears only after `docker restart quark`.
- If the host's `disk` group isn't gid 6, add `--group-add <gid>`.

### Updates

Two ways, and they mix:

- **Settings → Updates.** The new binary goes into the volume, and Quark exits to switch to it. Something has to start
  it again, so run with `--restart unless-stopped` or `always` (a Kubernetes Deployment restarts it on its own).
- **A newer image.** Pull it and recreate the container. A newer image wins over an older update in the volume.

### PostgreSQL

Quark uses SQLite in the volume by default. To use a PostgreSQL database instead, set `QUARK_DB_BACKEND=postgres` and
`QUARK_DATABASE_URL` to a `postgres://` URL for an empty database. Quark creates its tables on first start. It refuses
to start if the URL is missing, the backend name is wrong, or the database already holds tables it did not make. Keep
the volume mounted anyway: your files and certificates still live there. A few features, such as content search, don't
work on PostgreSQL yet.

### Kubernetes

Run one replica with `strategy: Recreate`, on a `ReadWriteOnce` volume mounted at `/var/lib/quark`. A second copy
writing to the same data would corrupt it, and scaling out is not supported, with PostgreSQL or without. The product's
[container guide](https://github.com/autobutler-org/quark/blob/main/docs/container.md) has a full manifest.

---

## Troubleshooting

### Messages from `sudo quark install`

- **`Skipping security updates and the kernel hold: apt-get is not installed.`** (or `apt-mark`, or `dpkg-query`):
  this isn't a Debian-based system. Quark installs fine. Keep the OS patched yourself.
- **`warning: security updates and the kernel hold are not fully set up: …`**: one apt step failed. The rest of the
  setup worked, and the next start tries again.
- **`The kernel hold is released; delete /etc/quark/release-kernel-hold to restore it.`**: someone ran
  `--release-kernel-hold`. Delete the file to put the hold back.
- **`Skipping the memory ceiling: systemd is not running.`**: no memory cap was written, because systemd isn't the
  running init, as in a chroot. The first start under systemd writes it.
- **`unsupported operating system: …`**: Quark installs on Linux. Releases are Linux only.

### Quark won't start: `failed to bind TLS listener on :443`

Read the log with `journalctl -u quark`. This line means Quark couldn't open port 443. Either another program has it
(a web server, another proxy), or the service lost its permission to use the port. Free the port, or run
`sudo quark install` to rewrite the service.

### An update from Settings failed

The app says "Your Quark ran into a problem. Try again." and doesn't show why. The reason is in the response: open your
browser's developer tools, find the `version/update` request in the Network panel, and read its `error` field. A common
one starts with `cannot self-update:` and says the binary's folder isn't writable. Running `sudo quark install` once
fixes it.

### Something on the machine has drifted

An admin can open **Settings → Updates** and click **Repair installation**. Quark restarts, and the setup above
re-runs. If it says the Quark was installed before it could repair itself, run `sudo quark install` once on the
machine.

### The container comes up empty after a restart

The container is running as a different user, or the host path is relative. See
[Don't override the user](#dont-override-the-user) and [Mount the whole `/var/lib/quark`](#mount-the-whole-varlibquark).

### Mounting a drive in the container says `permission denied`

The container isn't `--privileged`. See [USB drives](#usb-drives).

### Behind my proxy, everyone is locked out of sign-in

`QUARK_TRUSTED_PROXIES` isn't set to your proxy's range, so every client shares one rate limit. See
[Behind a proxy](#behind-a-proxy).

### I updated from Settings and the container is gone

Quark exits to finish an update, and nothing started it again. Run the container with `--restart unless-stopped`.

---

## Related

- [Nerd Notes](/docs/nerd-notes) — the stack, the API, and building from source
- [Help & Support](/docs/help) — everyday troubleshooting and how to reach us
- [Security Guide](/docs/security-guide) — backups and the rest of what every owner should do
