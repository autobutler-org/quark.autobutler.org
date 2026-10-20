---
title: Nerd Notes
description: Technical overview of Quark — stack, architecture, installation, and development.
navigation:
  title: Nerd Notes
  order: 7
---

# Nerd Notes

A technical mirror of the [Quark README](https://github.com/autobutler-org/quark).
If you want to understand what's running in your house, this is the page. It matches Quark 0.55.0.

---

## Stack

| Layer      | Technology                                                             |
| ---------- | ---------------------------------------------------------------------- |
| Backend    | Go + [Gin](https://github.com/gin-gonic/gin)                           |
| Frontend   | [Flutter](https://flutter.dev) (web, iOS, Android, Linux desktop)      |
| Database   | SQLite via [modernc.org/sqlite](https://pkg.go.dev/modernc.org/sqlite) |
| Migrations | [golang-migrate](https://github.com/golang-migrate/migrate)            |
| DB queries | [sqlc](https://sqlc.dev)                                               |
| API docs   | [Swagger/swag](https://github.com/swaggo/swag)                         |

The backend is a single Go binary that serves the REST and WebSocket API and the Flutter web build. Every start runs
any database migrations the new version brings.

There is no AI in Quark. The binary and the apps carry no models, and nothing calls an AI service.

---

## Installation

For your own Linux machine, the container in depth, and what `quark install` changes, see
[Self-Hosting](/docs/self-hosting).

### On a Quark device

The device runs Quark as a systemd service (`quark serve`), set up by `quark install`. It serves HTTPS on `:443`
with a self-signed certificate it generates on first boot. Open `https://quark.local` (or your hostname) and expect a
certificate warning; [Getting Started](/docs/getting-started) explains why.

### With Docker

Every release publishes an image to the GitHub Container Registry, for `linux/amd64` and `linux/arm64`:

| Tag                                   | What it is                                                |
| ------------------------------------- | --------------------------------------------------------- |
| `ghcr.io/autobutler-org/quark:0.55.0` | One release. The tag is the version without the `v`       |
| `ghcr.io/autobutler-org/quark:latest` | The newest release. It moves each time a release goes out |

The image doesn't build Quark. It downloads that release's Linux archive, checks it against the release's checksums,
and copies the binary in. So the container runs the same binary as a Quark device.

With `docker run`:

```bash
docker run -d --name quark --restart unless-stopped -p 8080:8080 \
  -v quark-data:/var/lib/quark ghcr.io/autobutler-org/quark:latest
```

Or with Docker Compose, in a `compose.yaml`:

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

Then `docker compose up -d`. Either way, open `http://localhost:8080` and you get the setup screen. Pin a version tag
instead of `latest` if you want to choose when the image changes.

What the image expects:

- **One volume, at `/var/lib/quark`.** Mount the whole folder, not just `data/` inside it. `data/` holds the database
  and every file you upload, `tsnet/` holds remote-access state, and `bin/` holds updates you install from Settings.
  For a folder on the host, use an absolute path owned by uid 999: `sudo chown -R 999:999 /path/to/quark`.
- **One port, `8080`.** It's plain HTTP. Put a reverse proxy in front for HTTPS, and don't expose 8080 to the
  internet.
- **The user it ships with.** The container runs as `quark` (uid 999). Don't pass `-u` or `user:`: Quark keeps its
  data in `/var/lib/quark` only when the user is named `quark`, and comes up empty otherwise.
- **A restart policy.** Quark exits to finish an update from Settings, so it needs `unless-stopped` or `always` to
  come back.

The image already sets `PORT=8080`, `QUARK_INSECURE=true`, `QUARK_UPDATE_DIR=/var/lib/quark/bin` and
`GIN_MODE=release`. You set nothing for a basic install. These are the ones you might add:

| Variable                | When to set it                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------- |
| `QUARK_TRUSTED_PROXIES` | Behind a reverse proxy: its IP or range, so sign-in limits apply per real client    |
| `QUARK_DB_BACKEND`      | `postgres` to keep the database in PostgreSQL instead of SQLite                     |
| `QUARK_DATABASE_URL`    | The `postgres://` URL of an empty database, with `QUARK_DB_BACKEND=postgres`        |
| `QUARK_INSECURE`        | `false`, with `HTTPS_PORT` (such as `8443`), to serve Quark's own self-signed HTTPS |

The entrypoint is `quark` and the default command is `serve`, so other commands work too:

```bash
docker run --rm ghcr.io/autobutler-org/quark:latest version
```

USB drives need `--privileged`, which gives the container power over the host's devices.
[Self-Hosting](/docs/self-hosting#in-a-container) covers that, bind mounts, proxies, PostgreSQL and Kubernetes in
full. To run your own build instead, see [Development](#development).

### First boot

On first boot, the web UI shows a setup screen. Create your owner account there.

---

## API

The REST API is at `/api/v0/`. Swagger UI is at `https://<host>/swagger`.

### Authentication

All endpoints require a session token except `/auth/setup`, `/auth/salt`, `/auth/login`,
`/auth/status`, and a few other sign-in routes. HTTP Basic works too, with the auth key below as the password.

The password never leaves the client. The app asks for the account's salt, derives a 32-byte auth key from the
password, and sends that instead:

```bash
# Get the account's salt
curl -s 'http://localhost:8080/api/v0/auth/salt?username=you'
# → {"salt":"<base64, 16 bytes>","legacy":false,"legacyRecovery":false}

# Login with the derived auth key
curl -s -X POST http://localhost:8080/api/v0/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"you","authKey":"<base64 auth key>"}'
# → {"token":"<64-char hex token>","legacyRecovery":false}

# Use the token
curl http://localhost:8080/api/v0/health \
  -H "Authorization: Bearer <token>"
```

The key is `HKDF-SHA256(Argon2id(password, salt, t=3, m=64 MiB, p=1), info="auth")`, sent as standard base64. The
`quark` binary derives it for you and prints only the key. It asks for the password without echoing it:

```bash
KEY="$(quark auth-key --host http://localhost:8080 -u you)"
curl -u "you:$KEY" http://localhost:8080/api/v0/auth/sessions
```

In the container, run it there: `docker exec -it quark quark auth-key --host http://localhost:8080 -u you`. A
login with a raw `password` and no `authKey` gets a `426`: only an app from before auth keys sends one. The examples
use `http://localhost:8080`, the local dev server; on a device the base URL is `https://quark.local`, and `curl`
needs `-k` because the certificate is self-signed. The product's
[docs/auth.md](https://github.com/autobutler-org/quark/blob/main/docs/auth.md) has the full flow.

Tokens are valid for 30 days. Pass them as `Authorization: Bearer <token>` or as a
`session` cookie.

### Key endpoints

| Method | Path                                             | What it does                                   |
| ------ | ------------------------------------------------ | ---------------------------------------------- |
| GET    | `/api/v0/health`                                 | System health (CPU, memory, disk, temperature) |
| GET    | `/api/v0/files`                                  | List files                                     |
| POST   | `/api/v0/files/upload/{rootDir}`                 | Upload files to a directory                    |
| GET    | `/api/v0/storage/devices/status`                 | List storage devices                           |
| PATCH  | `/api/v0/storage/devices/rename?serial={serial}` | Rename a device                                |
| GET    | `/api/v0/version`                                | Installed version                              |
| POST   | `/api/v0/version/update`                         | Update to a given release (admin)              |

Every route sits under `/api/v0/`. The `v0` is part of the path, so keep it in your scripts. The full parameter list
for every route is in Swagger at `/swagger` on your Quark; this page covers what Swagger can't show.

### Moving files with the API

The recipes below assume two variables. On a device, `curl` needs `-k` for the self-signed certificate:

```bash
BASE=https://quark.local/api/v0
AUTH="Authorization: Bearer <token>"
```

Paths are relative to the top of your files. Without a `serial`, a request works on internal storage; add
`serial=<serial>` to work on a USB drive (`GET /api/v0/storage/devices/status` lists the serials). Listing with
`GET /api/v0/files?rootDir=<folder>` and no `serial` merges every drive. You only see what you can read: anything
else answers `404`. Uploads, moves and deletes need write access to the folder.

**Upload a file:**

```bash
curl -k -X POST "$BASE/files/upload/Documents?keepBoth=true" -H "$AUTH" -F files=@report.pdf
# → {"paths":["<where each file landed>"]}
```

A name that's already taken is a `409`, unless you pass `overwrite=true` to replace it or `keepBoth=true` to land as
`report_(1).pdf`. The form field is `files`, plural. A part under any other name is skipped, and the answer is an
empty `paths` list. Add more `-F files=@…` parts to send several files at once.

**Download a folder as a zip:**

```bash
curl -k -OJ --retry 5 "$BASE/files/download?filePath=Photos/2024" -H "$AUTH"
```

A folder is zipped as it streams, so an interrupted zip starts over. When every zip slot is busy for 10 seconds, Quark
answers `503` with a `Retry-After` header, which `--retry` honors. A single file downloads as itself and supports
`Range` requests, so `curl -C -` resumes it. Add `format=jpeg` to get a HEIC photo as a JPEG.

**Resumable upload.** This is how the app sends files of 8 MiB and up. Open a session, then send chunks with a
`Content-Range` header. The chunk that reaches the end commits the file:

```bash
FILE=big.iso
SIZE=$(stat -c %s "$FILE")
CHUNK=$((8 * 1024 * 1024))

ID=$(curl -sk -X POST "$BASE/files/upload-session" -H "$AUTH" -H 'Content-Type: application/json' \
  -d "{\"rootDir\":\"Backups\",\"fileName\":\"$FILE\",\"totalSize\":$SIZE}" | jq -r .sessionId)

# After a dropped connection, ask where to carry on, then run the loop again
OFFSET=$(curl -sk "$BASE/files/upload-session/$ID" -H "$AUTH" | jq -r .offset)

while [ "$OFFSET" -lt "$SIZE" ]; do
  END=$(( OFFSET + CHUNK < SIZE ? OFFSET + CHUNK - 1 : SIZE - 1 ))
  OFFSET=$(tail -c +$((OFFSET + 1)) "$FILE" | head -c $((END - OFFSET + 1)) |
    curl -sk -X PUT "$BASE/files/upload-session/$ID" -H "$AUTH" \
      -H 'Content-Type: application/octet-stream' \
      -H "Content-Range: bytes $OFFSET-$END/$SIZE" --data-binary @- | jq -r .offset)
done
```

- A session belongs to the account that opened it and expires 24 hours after it opens.
  `DELETE $BASE/files/upload-session/$ID` abandons it.
- A `409` with an `X-Upload-Offset` header means the chunk was out of step: that header is the offset to resume from.
  A `409` without it means the name is taken. Set `"overwrite": true` or `"keepBoth": true` when you open the session.
- One account can hold 32 sessions open, and a Quark 256 in all. Past that, opening one answers `429`.
- Quark clears staged chunks when it restarts. A `404` partway through means start again with a new session.

**Download links for a browser.** A plain link can't send an `Authorization` header.
`POST $BASE/files/download-token?filePath=…` returns a token you pass as `downloadToken=` on `/files/download`. Use
it within a minute. It covers one download, retries and `Range` resumes included, until the file is delivered.

**Move and delete.** `PUT $BASE/files` with `{"oldFilePath", "newFilePath", "oldDeviceSerial", "newDeviceSerial"}`
moves or renames, across drives too. `DELETE $BASE/files?filePaths=a.txt&filePaths=b.txt` moves items to that drive's
trash, where they can be restored. It doesn't delete them for good.

Every change made through these routes is announced on the live events stream, so open apps update without a refresh.

### Live events

`GET /api/v0/events` is a **WebSocket**, not Server-Sent Events. Every open app holds one, and it's how a change on
one device shows up on another.

Authenticate with `Authorization: Bearer <token>`, or with `?token=<token>` on the URL, since a browser's
`new WebSocket()` can't set headers. With [websocat](https://github.com/vi/websocat) on a device:

```bash
websocat -k "wss://quark.local/api/v0/events?token=<token>"
```

Each message is one JSON object with `kind`, `path`, `newPath` (on a move), `data` and `deviceSerial`. Empty fields are
left out, and no `deviceSerial` means internal storage.

The kinds, by group:

- **Files:** `upload`, `delete`, `move`, `new_folder`, `trash_changed`
- **Backups:** `backup_started`, `backup_progress`, `backup_completed`, `backup_failed`
- **Background jobs:** `job_queued`, `job_started`, `job_progress`, `job_completed`, `job_failed`, `job_canceled`
- **Vault:** `vault_changed`, when an account's vault key or one of its items changes
- **Music:** `music_library_changed`, when a drive's music library changed and is worth fetching again
- **Accounts and settings:** `account_changed`, `access_changed`, `feature_flag_changed`,
  `public_settings_changed`, `hostname_changed`
- **Chat:** `chat_channel_changed`, `chat_key_needed`, `chat_key_granted`, `chat_message_created`,
  `chat_message_deleted`, `chat_reaction_changed`, `chat_read_marker_changed`
- **Calendar (beta):** `calendar_changed`
- **Catching up:** `resync` means you missed events (`data.dropped` says how many), so fetch again what you hold

The rules:

- A connection hears only events about paths its account can read. Admins hear everything except chat messages,
  reactions and read markers, which go only to the people they concern, and `vault_changed`, which goes only to the
  account whose vault it is. When sharing changes, the server reloads what you can read before it filters the next
  event.
- The server closes the socket when the account is turned off, deleted, promoted or demoted. Treat a close as a cue to
  reconnect, not an error: a removed account is refused, and a changed one is filtered for its new role.
- The origin check is off on purpose, because the web app may be served from a different origin than the API. The
  token is what guards the socket.

---

## Architecture notes

**Single binary.** The Go backend embeds the Flutter web build at compile time and serves it
alongside the API. No separate web server needed.

**Database.** Your files are the main data, and they live on disk as ordinary files. The database holds only what
can't: accounts and sessions, sharing, albums and favorites, job history, settings, and the search index. By default
that's SQLite, in `quark.db` in the data directory. Migrations run on startup, so an upgrade needs no manual step.

To keep it in PostgreSQL instead, set `QUARK_DB_BACKEND=postgres` and
`QUARK_DATABASE_URL=postgres://user:password@host:5432/quark` before Quark starts. A PostgreSQL install starts empty:
there's no tool yet to move an existing SQLite install across. A few features, such as content search and snapshot
backups, refuse with a `501` on PostgreSQL for now. The product's
[docs/architecture/data.md](https://github.com/autobutler-org/quark/blob/main/docs/architecture/data.md) lists them.

**Device detection.** On Linux, Quark finds its own disk from `/proc/mounts` and USB drives from
`/sys/bus/usb/devices`. The service runs as the unprivileged `quark` user. It mounts and unmounts drives through a
sudoers rule `quark install` writes. The rule allows `mount` and `umount` only under `/var/lib/quark/data/mounts`,
plus two fixed helpers, one for SSH access and one for renaming the machine.

**Auth.** The server never sees the password: the client derives an auth key from it (Argon2id, then HKDF-SHA256),
and the server stores the SHA-256 of that key. Argon2id on the client is the slow step, so a second slow hash on the
server would add nothing. The recovery phrase works the same way: the app makes it, shows it to you once, and sends
only a key derived from it. Session tokens are 32 bytes of `crypto/rand` (256-bit entropy).

**Vault.** Every account has its own vault, and there is no master password. The app makes a random vault key and
wraps it under a key derived from your login password, and also under your recovery phrase if you enter it when you
set the vault up. Items are encrypted in the app with XChaCha20-Poly1305. Quark stores only the wrapped key and the
ciphertext, so it can't read any vault, and an admin can't open anyone else's. A password change re-wraps the key,
and a recovery with the phrase keeps the vault when the phrase wraps it. There is no admin recovery: lose both your
password and your phrase and the vault is gone, and **Start over** deletes it so you can make a new one.

**Remote access.** It's off until an admin turns it on in **Settings → Network**, and it's in release builds from
0.55.0. When it's on, a private-network node built into the `quark` binary joins a network AutoButler coordinates at
`quark.ts.autobutler.org` and passes requests to Quark over loopback. Nothing is opened on your router. The node keeps
its state in `/var/lib/quark/tsnet`. [Remote Access](/docs/remote-access) covers what the app shows.

**Updates.** Quark never updates itself, and there's no automatic-update switch. An admin picks a version under
**Update Quark to version** in **Settings → Updates** and clicks **Start update**, or calls
`POST /api/v0/version/update`. Quark downloads the release archive for its platform and checks it against the
checksums file the release publishes. A missing checksums file, a missing entry or a mismatch stops the update. It
fetches only from `quarkrelease.blob.core.windows.net`, `github.com` and `objects.githubusercontent.com`. Releases are
published for Linux on `arm64` and `x86_64`.

Once the archive checks out, Quark renames the new binary over the running one in one atomic step and exits, and
systemd starts it again. Expect a short outage. Before every start, the systemd unit runs
`quark install --system-only` as root. So a release that changes the service account, the sudoers rule, the unit, the
security-update settings or the kernel hold reaches your device on the restart that finishes the update.

In the container, the update is written to `/var/lib/quark/bin` in the data volume, and runs on the next start when
it's newer than the image's own binary. A newer image wins over an older update in the volume. Quark exits to finish
an update, so run the container with `--restart unless-stopped` (or under a Kubernetes Deployment), or it stays
stopped.

Separately, `quark install` turns on Debian security-only unattended
upgrades and holds the kernel and board packages at the version the device booted.

---

## Where your data lives

The data directory is `/var/lib/quark/data`, on a device and in the container alike. In the container it sits inside
the `quark-data` volume.

| What                                    | Where                                                         |
| --------------------------------------- | ------------------------------------------------------------- |
| Your files, and each person's home      | `files/` in the data directory; `quark/data/files/` on drives |
| Trash                                   | `trash/` beside `files/`, on the same drive                   |
| Accounts, sharing, albums, jobs, search | `quark.db` in the data directory, or your PostgreSQL database |
| Settings, sessions, favorites           | The same database                                             |
| Each account's vault, as ciphertext     | The same database; snapshot backups copy it as ciphertext     |
| Remote-access state                     | `/var/lib/quark/tsnet`, beside the data directory             |
| HTTPS certificate and key               | `certs/` in the data directory                                |
| Uploads in progress                     | `tmp/upload-sessions/`, emptied on every start                |
| Logs                                    | The systemd journal (`journalctl -u quark`), or `docker logs` |

If the power goes out, an upload still in progress is lost and has to be started again, but it never shows up as a
broken file. One that finished just before the cut is either there, whole, or not there. A vault change is either
saved or not. Settings live in the database, and the trash's records and the certificate are written so a cut leaves
the previous version whole. A drive that lies about flushing, or fails outright, is a hardware failure no software can
fix.

---

## Development

**Prerequisites:** Go, Flutter, Make, [air](https://github.com/air-verse/air), sqlc, swag

```bash
git clone https://github.com/autobutler-org/quark.git
cd quark
make setup      # install dev tools
make generate   # sqlc + swag + flutter icons + sbom + widget docs
make build      # build everything
```

### Run locally

```bash
make watch/backend          # backend with hot reload
make serve/frontend         # Flutter web
make emulate/android        # Android emulator
make serve/frontend/mobile  # Flutter mobile (after emulator is running)
```

### Useful targets

```bash
make check          # lint (Go + Flutter)
make format          # auto-format
make test            # run all tests
make coverage        # test coverage report
make help            # list all targets
```

Swagger UI is at `http://localhost:8080/swagger` when the backend is running locally.

---

## Source

- GitHub: [autobutler-org/quark](https://github.com/autobutler-org/quark)
- License: [MIT No Attribution (MIT-0)](https://github.com/autobutler-org/quark/blob/main/LICENSE)
- Contributing:
  [CONTRIBUTING.md](https://github.com/autobutler-org/quark/blob/main/CONTRIBUTING.md)
