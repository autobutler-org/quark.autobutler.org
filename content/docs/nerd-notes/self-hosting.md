---
title: Self-Hosting
description: Run Quark on a Linux computer you already have, or in a container, and where to look when it will not start
navigation:
  title: Self-Hosting
  order: 2
---

# Self-Hosting

Most people run Quark on a Quark device. [Getting Started](/docs/start/getting-started) covers that first evening. This
page is for running the same Quark on hardware you already have.

There are two ways. One is a Linux computer you can give over to Quark, such as a spare PC, a mini PC, or a Pi. The
other is a container, on a machine that already runs them. You get the same Quark either way: your files stay on that
machine. Releases of the server are for Linux only. The AppImage files on a release page are the Linux desktop app.

The commands, addresses, and settings are in Nerd Notes. A shorter container recipe is also on
[Nerd Notes](/docs/nerd-notes#with-docker). This page is the longer one.

## How to use it

1. Pick a route in Nerd Notes. **Your Linux machine** is the spare computer. **In a container** is the container.
2. Open the address Nerd Notes gives for that route. The browser may warn that the connection is not private. That is
   expected on a machine you set up yourself.
   [Getting Started](/docs/start/getting-started#your-browser-warns-you-the-connection-is-not-private) explains the
   warning. Then you get the same first-run setup a Quark device shows: the terms, your owner account, and a theme.
3. Later, an admin opens **Settings → Updates**, picks a version under **Update Quark to version**, and chooses
   **Start update**. An admin starts each update. Quark restarts to finish it.

## If something goes wrong

- **The installer prints a message.** [Nerd Notes](#messages-from-sudo-quark-install) lists what each one means.
- **The page will not open.** Something else may be using the address, or Quark did not start. See
  [Quark won't start](#quark-wont-start-failed-to-bind-tls-listener-on-443).
- **A container is empty after a restart.** Its data was not kept. Nerd Notes explains
  [how to keep that data](#mount-the-whole-varlibquark) and
  [which user the container runs as](#dont-override-the-user).
- **Everyone is locked out of sign-in behind a proxy.** See [Behind a proxy](#behind-a-proxy).
- **An update from Settings leaves a container stopped.** Something has to start it again. See
  [I updated from Settings and the container is gone](#i-updated-from-settings-and-the-container-is-gone).
- **Mounting a drive in a container is refused.** See
  [Mounting a drive in the container](#mounting-a-drive-in-the-container-says-permission-denied).

## Related

- [Getting Started](/docs/start/getting-started): the first evening, including the browser warning
- [Nerd Notes](/docs/nerd-notes): the stack, the API, and the short container recipe
- [SSH Access](/docs/settings/ssh): an admin's command-line sign-in, off until someone turns it on
- [Remote Access](/docs/settings/remote-access): opening the app away from home
- [Help & Support](/docs/help): everyday troubleshooting
- [Security Guide](/docs/help/security-guide): backups and what every owner should do

## Nerd Notes

Checked against quark v0.56.2. `main` was one commit ahead (`c0f4eefc`), a performance-test change that does not touch
install, rate limits, or the container. The published image `ghcr.io/autobutler-org/quark:0.56.2` and `:latest` share
one manifest (`sha256:9f35e163…`), for `linux/amd64` and `linux/arm64`. The image label
`org.opencontainers.image.version` is `0.56.2`.

| Route                                     | Good for                      | How you reach it                     |
| ----------------------------------------- | ----------------------------- | ------------------------------------ |
| [Your Linux machine](#your-linux-machine) | A spare PC, mini PC, or Pi    | `https://<hostname>.local`, port 443 |
| [A container](#in-a-container)            | Docker, Podman, or Kubernetes | `http://<host>:8080`, behind TLS     |

Both run the same binary from the same release. Releases are built for Linux on `x86_64` and `arm64` only. There is no
macOS, Windows, or 32-bit server build (`.goreleaser.yaml` builds `linux` / `amd64` and `arm64`). The `.AppImage`
files on a release page are the Linux desktop app, not the server. v0.56.2 publishes
`quark_Linux_x86_64.tar.gz`, `quark_Linux_arm64.tar.gz`, and `quark_0.56.2_checksums.txt`, plus the AppImage files.

### Your Linux machine

#### What the machine needs

- **Linux on `x86_64` or `arm64`, with systemd.** `quark install` writes a systemd unit.
- **Port 443 free.** With TLS on, Quark serves HTTPS on `HTTPS_PORT` (443) and does not listen on port 80. The unit
  still sets `PORT=80` so an older unit file keeps working. Nothing redirects `http://` to `https://`, so type
  `https://`.
- **A machine you can give to Quark.** `quark install` changes system settings, listed
  [below](#what-quark-install-sets-up). Locking the root password, and limiting who can sign in over SSH, are a good
  fit on a dedicated box and a surprise on an everyday computer.

Optional, each for one thing:

| Package                        | What it adds                                                                     |
| ------------------------------ | -------------------------------------------------------------------------------- |
| apt and dpkg (Debian-based OS) | Automatic Debian security updates and the kernel hold. Skipped without them.     |
| `avahi-daemon`                 | `<hostname>.local` on your network, and the iOS and Android apps finding the box |
| `dcraw` or `exiftool`          | Previews of camera RAW photos                                                    |
| `openssh-server`               | The admin SSH access setting                                                     |

Video needs nothing extra. Quark handles it in its own code. The container image installs no `ffmpeg`.

#### Install

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

#### First open

On a phone or computer on the same network, open `https://<hostname>.local` (with `avahi-daemon` running) or
`https://<the machine's IP address>`. Your browser warns that the connection is not private. That is expected.
[Getting Started](/docs/start/getting-started#your-browser-warns-you-the-connection-is-not-private) explains why. Then
you get the same first-run setup a Quark device shows: the terms, your owner account, and a theme.

#### Where things live

| What                        | Where                                                      |
| --------------------------- | ---------------------------------------------------------- |
| The binary                  | `/opt/quark/bin/quark`, linked from `/usr/local/bin/quark` |
| Database                    | `/var/lib/quark/data/quark.db`                             |
| Your files                  | `/var/lib/quark/data/files/`                               |
| The self-signed certificate | `/var/lib/quark/data/certs/`                               |
| Logs                        | The journal: `journalctl -u quark`                         |
| Remote-access state         | `/var/lib/quark/tsnet`, once an admin has turned it on     |

Quark uses `/var/lib/quark/data` only when it runs as the user named `quark`, which the service does
(`isRunningAsServiceUser` in `pkg/util/storageutil/dir.go`). Run `quark serve` as anyone else and it keeps its data
in `~/quark/data` instead, and you see an empty Quark.

#### Updating

An admin updates from **Settings → Updates**: pick a version under **Update Quark to version** and click **Start
update**. Quark downloads the archive, checks it against the release's checksums, replaces its own binary, and exits.
systemd starts the new version. Updates are manual. An admin starts each one.

### What `quark install` sets up

`sudo quark install` sets the machine up once. After that, the service re-runs the same setup as root before every
start (`quark install --system-only`), so a fix that ships in an update reaches machines already running. Each file is
written only when its contents differ. If the setup fails, Quark starts anyway.

#### The service

- Installs the binary at `/opt/quark/bin/quark` and links `/usr/local/bin/quark` to it. The directory is owned by root
  and writable by the `quark` group, so the service can replace its own binary during an update.
- Writes and enables `quark.service`. It runs `quark serve` as the `quark` user, with `HTTPS_PORT=443` and `PORT=80`,
  serves HTTPS on 443, restarts on exit, and logs to the journal. It can bind that port without running the server as
  root.
- Caps the service's memory, Quark and the programs it starts together, at 80% of the machine's RAM before throttling
  and 90% as a hard limit (`/etc/systemd/system/quark.service.d/50-memory.conf`). `quark serve` also sets the Go
  runtime's soft limit to 60% of RAM, unless you set `GOMEMLIMIT` yourself (`pkg/util/memutil/memutil.go`).

#### Accounts and permissions

- Creates a `quark` system account with no home directory. Its shell is `/bin/bash` so the SSH access setting can
  work, but nobody can sign in as `quark` until an admin adds a key or sets a password.
- Creates `/var/lib/quark` owned by `quark`.
- Writes `/etc/sudoers.d/quark`. It lets the service run `mount` and `umount` under
  `/var/lib/quark/data/mounts/`, and three fixed helpers in `/usr/local/libexec/quark/`, and nothing else.
- Installs those helpers, owned by root. `ssh-access` turns SSH on and off, opens or closes port 22 in `ufw` when you
  use it, and sets or clears the `quark` password. `set-hostname` renames the machine. `drive-health` runs one health
  read of a whole disk. [SSH Access](/docs/settings/ssh#nerd-notes) has the SSH half.
- **Locks the root password.** Root stays reachable through `sudo`. Armbian images ship with a well-known root
  password, and this is what closes it. The lock runs again before every start.

#### Network

- When the SSH server is installed, writes `/etc/ssh/sshd_config.d/00-quark.conf`: no root login, `AllowUsers quark`,
  `MaxAuthTries 3`, and `LoginGraceTime 30`. If you reach this machine over SSH as your own user, check you still can
  before you close your session. [SSH Access](/docs/settings/ssh#nerd-notes) covers keys, the password, and fail2ban.
- When Avahi is installed, writes `/etc/avahi/services/quark-dns-sd.service`. It advertises the box as
  `Quark on <hostname>` on port 443, which is how the iOS and Android apps find it.

Remote access is off until an admin turns it on in **Settings → Network**. When it is on, the state directory above
holds it, and the proxy connects to Quark over loopback. [Remote Access](/docs/settings/remote-access) is the setup
in the app. Keep loopback in `QUARK_TRUSTED_PROXIES` if you set that variable. [Behind a proxy](#behind-a-proxy) says
why.

#### OS updates

On a host with apt and dpkg:

- Turns on unattended upgrades for **Debian security updates only**
  (`/etc/apt/apt.conf.d/52quark-unattended-upgrades`), and installs `unattended-upgrades` in the background if it is
  missing. The rule names Debian's security archive. On another apt-based system, such as Ubuntu, it matches nothing,
  so patch that system yourself. The drop-in sets `Unattended-Upgrade::Automatic-Reboot` to `"false"`, so this does
  not reboot the machine on its own (`pkg/util/aptutil/helpers.go`).
- **Holds the kernel** at the version the machine booted: every installed `linux-image-`, `linux-dtb-`,
  `linux-headers-` and `linux-u-boot-` package, plus Armbian's board packages (`armbian-bsp-`) and firmware
  (`armbian-firmware`). Neither unattended upgrades nor `apt upgrade` will move them. That keeps a Quark device
  bootable. On your own PC it also means your kernel stops updating.

To lift the hold, run:

```bash
sudo quark install --release-kernel-hold
```

That unholds the packages and writes `/etc/quark/release-kernel-hold`. While that file exists, Quark leaves the
packages alone. Delete it and the hold comes back on the next start.

#### The tradeoff

Root runs, before every start, a binary the `quark` user is allowed to replace. Self-update needs that. It means
someone who takes over the `quark` account gets root at the next restart. The mount permission in the sudoers file is
already close to that.

### In a container

Every release publishes `ghcr.io/autobutler-org/quark:<version>` (the version without the leading `v`) and `:latest`,
for `linux/amd64` and `linux/arm64`. The image downloads that release's Linux archive, checks it, and copies the
binary in. It does not compile Quark. `:latest` moves when a release is published. Pin a version tag when you want to
choose when the image changes. [Nerd Notes](/docs/nerd-notes#with-docker) has the same `docker run` and Compose file
in short form.

```bash
docker run -d --name quark --restart unless-stopped -p 8080:8080 \
  -v quark-data:/var/lib/quark ghcr.io/autobutler-org/quark:latest
```

The same thing in a `compose.yaml`:

```yaml
services:
  quark:
    image: ghcr.io/autobutler-org/quark:latest
    restart: unless-stopped
    ports:
      - "8080:8080"
    volumes:
      - quark-data:/var/lib/quark

volumes:
  quark-data:
```

Then `docker compose up -d`. Open `http://localhost:8080` and you get the setup screen. Your account lives in the
volume, so it survives restarts. The image sets `PORT=8080`, `QUARK_INSECURE=true`,
`QUARK_UPDATE_DIR=/var/lib/quark/bin`, and `GIN_MODE=release`. The entrypoint is `quark` and the default command is
`serve`, so other commands work too: `docker run --rm ghcr.io/autobutler-org/quark:latest version`.

You set nothing else for a basic install. These are the ones you might add:

| Variable                | When to set it                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------- |
| `QUARK_TRUSTED_PROXIES` | Behind a reverse proxy: its IP or range, so sign-in limits apply per real client    |
| `QUARK_DB_BACKEND`      | `postgres` to keep the database in PostgreSQL instead of SQLite                     |
| `QUARK_DATABASE_URL`    | The `postgres://` URL of an empty database, with `QUARK_DB_BACKEND=postgres`        |
| `QUARK_INSECURE`        | `false`, with `HTTPS_PORT` (such as `8443`), to serve Quark's own self-signed HTTPS |

`quark install` does not run in a container. Nothing on the host is changed. The image's sudoers file allows `mount`
and `umount` under `/var/lib/quark/data/mounts/` and nothing else. It does not include the SSH, rename, or drive-health
helpers a Linux install gets.

#### Mount the whole `/var/lib/quark`

Mount `/var/lib/quark`, not just `data/` inside it. `data/` holds the database and every file you upload. Next to it,
the remote-access state lives in `tsnet/`, and `bin/` holds updates you install from Settings. Mount only `data/` and
those are lost each time the container is recreated. The image declares `VOLUME /var/lib/quark` for this reason.

For a folder on the host instead of a named volume, use an absolute path. Docker treats a relative path as the name of
a new volume, and Quark comes up empty.

#### Don't override the user

The container runs as the user named `quark`, uid 999, gid 999, shell `/usr/sbin/nologin`. Quark keeps its data under
`/var/lib/quark` only for that user name. Run it as anyone else (`docker run -u`, or `runAsUser` in Kubernetes) and
the data goes to a folder outside your mount, so Quark comes up empty on every restart.

If a host folder gives a permission error, fix its ownership instead of changing the user:

```bash
sudo chown -R 999:999 /absolute/path/to/quark
```

#### HTTPS

The image serves plain HTTP on port 8080 (`QUARK_INSECURE=true`). Put your reverse proxy, ingress, or load balancer
in front for HTTPS. Do not expose port 8080 straight to the internet. To use Quark's own self-signed certificate
instead, set `QUARK_INSECURE=false` and `HTTPS_PORT` (for example `8443`). Only the value `true` turns TLS off, so
unsetting `QUARK_INSECURE` does the same thing (`cmd/quark/serve/serve.go`).

#### Behind a proxy

Sign-in, setup, and account recovery are rate-limited per client IP address. Unlocking a vault is not part of that
limit. The vault opens in the app with the account's sign-in password, and a wrong password never reaches the server.
There is no `POST /api/v0/vault/unlock`. The limited paths are login, salt, setup, recover, recover keys, the vault
key during recovery, account requests, the recovery phrase, password changes, and a storage device's role, plus `PUT`
of a vault key and `DELETE` of a vault (`authRateLimitedPaths` and `authRateLimitedMethods` in
`internal/server/middleware/middleware.go`). The bucket is 5 requests a second, with a burst of 10.

Behind a proxy, every request comes from the proxy, so set `QUARK_TRUSTED_PROXIES` to the proxy's IP or range
(comma-separated, such as `10.244.0.0/16`). Then Quark reads the real client address from `X-Forwarded-For`. Without
it, all clients share one limit, and one person guessing passwords locks everyone else out of sign-in.

Setting it replaces the default, `127.0.0.1,::1`. Keep those two in the list when the Quark uses remote access. The
remote-access proxy runs on the Quark and connects over loopback (`TrustedProxies` in
`pkg/util/serverutil/serverutil.go`). An entry that is not an IP or a range stops `quark serve` at startup with an
error naming it. Do not set it wider than your proxy: anything inside the range can claim to be any client.

#### USB drives

Mounting a USB drive (**System → Storage**, then **Mount**) needs `--privileged`. Without it the mount fails with
`permission denied`, and everything else works. `--privileged` gives the container root's power over the host's
devices, so leave it off if you do not need drives.

- A drive plugged in after the container starts appears only after `docker restart quark`.
- The image's `quark` user is in the `disk` group, gid 6, so it can read a drive's type. If the host's `disk` group
  isn't gid 6, add `--group-add <gid>`.

#### Updates in a container

Two ways, and they mix:

- **Settings → Updates.** The new binary goes into the volume (`QUARK_UPDATE_DIR`, `/var/lib/quark/bin`), and Quark
  exits to switch to it. Something has to start it again, so run with `--restart unless-stopped` or `always` (a
  Kubernetes Deployment restarts it on its own).
- **A newer image.** Pull it and recreate the container. A newer image wins over an older update in the volume.

#### PostgreSQL

Quark uses SQLite in the volume by default. To use a PostgreSQL database instead, set `QUARK_DB_BACKEND=postgres` and
`QUARK_DATABASE_URL` to a `postgres://` URL for an empty database. Quark creates its tables on first start. It refuses
to start if the URL is missing, the backend name is wrong, or the database already holds tables it did not make. Keep
the volume mounted anyway: your files, the certificate, and remote-access state still live there.

Content search and snapshot backup answer 501 on PostgreSQL. Chat and vault backup and restore are refused for the
same reason: a snapshot includes them. One replica is still the rule. The product's
[container guide](https://github.com/autobutler-org/quark/blob/v0.56.2/docs/container.md#postgresql) lists them, and
so does the
[data notes](https://github.com/autobutler-org/quark/blob/v0.56.2/docs/architecture/data.md).
There is no tool yet to move an existing SQLite install across.

#### Kubernetes

Run one replica with `strategy: Recreate`, on a `ReadWriteOnce` volume mounted at `/var/lib/quark`. A second copy
writing the same files would corrupt them, and scaling out is not supported, with PostgreSQL or without. The product's
[container guide](https://github.com/autobutler-org/quark/blob/v0.56.2/docs/container.md) has a full manifest. Set
`QUARK_TRUSTED_PROXIES` to the ingress range, and keep `127.0.0.1,::1` in that list for remote access.

### Troubleshooting

#### Messages from `sudo quark install`

- **`Skipping security updates and the kernel hold: apt-get is not installed.`** (or `apt-mark`, or `dpkg-query`):
  this isn't a Debian-based system. Quark installs fine. Keep the OS patched yourself.
- **`warning: security updates and the kernel hold are not fully set up: …`**: one apt step failed. The rest of the
  setup worked, and the next start tries again.
- **`The kernel hold is released; delete /etc/quark/release-kernel-hold to restore it.`**: someone ran
  `--release-kernel-hold`. Delete the file to put the hold back.
- **`Installing unattended-upgrades in the background.`**: the package was missing, and a later start installs it.
- **`Skipping the memory ceiling: systemd is not running.`**: no memory cap was written, because systemd isn't the
  running init, as in a chroot. The first start under systemd writes it.
- **`unsupported operating system: …`**: Quark's Linux installer does not run there. Releases of the server are Linux
  only.

#### Quark won't start: `failed to bind TLS listener on :443`

Read the log with `journalctl -u quark`. This line means Quark couldn't open port 443. Either another program has it
(a web server, another proxy), or the service lost its permission to use the port. Free the port, or run
`sudo quark install` to rewrite the service.

#### An update from Settings failed

A server error shows "Your Quark ran into a problem. Try again." The app does not show the server's sentence for that
status. The reason is in the response: open your browser's developer tools, find the `version/update` request in the
Network panel, and read its `error` field. A common one starts with `cannot self-update:` and says the binary's folder
isn't writable. Running `sudo quark install` once fixes that. A 409 says "An update is already in progress. Wait for
Quark to finish restarting." If the new version never reports back, the page says "Quark didn't finish restarting.
Check that it's running, then try again."

#### Something on the machine has drifted

An admin can open **Settings → Updates** and click **Repair installation**. Quark asks **Repair installation?**, then
restarts, and the setup above re-runs. If the page says "This Quark was installed before it could repair itself," run
`sudo quark install` once on the machine. The button is hidden when Quark is not the installed Linux service.

#### The container comes up empty after a restart

The container is running as a different user, or the host path is relative. See
[Don't override the user](#dont-override-the-user) and [Mount the whole `/var/lib/quark`](#mount-the-whole-varlibquark).

#### Mounting a drive in the container says `permission denied`

The container isn't `--privileged`. See [USB drives](#usb-drives).

#### Behind my proxy, everyone is locked out of sign-in

`QUARK_TRUSTED_PROXIES` isn't set to your proxy's range, so every client shares one rate limit. See
[Behind a proxy](#behind-a-proxy).

#### I updated from Settings and the container is gone

Quark exits to finish an update, and nothing started it again. Run the container with `--restart unless-stopped`.
