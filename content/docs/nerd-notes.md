---
title: Nerd Notes
description: Technical overview of Quark — stack, architecture, installation, and development.
navigation:
  title: Nerd Notes
  order: 7
---

# Nerd Notes

A technical mirror of the [Quark README](https://github.com/autobutler-org/quark).
If you want to understand what's running in your house, this is the page.

---

## Stack

| Layer         | Technology                                                             |
| ------------- | ---------------------------------------------------------------------- |
| Backend       | Go + [Gin](https://github.com/gin-gonic/gin)                           |
| Frontend      | [Flutter](https://flutter.dev) (web, iOS, Android)                     |
| Database      | SQLite via [modernc.org/sqlite](https://pkg.go.dev/modernc.org/sqlite) |
| Migrations    | [golang-migrate](https://github.com/golang-migrate/migrate)            |
| DB queries    | [sqlc](https://sqlc.dev)                                               |
| API docs      | [Swagger/swag](https://github.com/swaggo/swag)                         |
| Observability | [OpenTelemetry](https://opentelemetry.io)                              |

The backend is a single Go binary that serves both the REST API and the Flutter web build.
On first boot it runs database migrations automatically.

---

## Installation

### On a Quark device

The device runs Quark as a systemd service (`quark serve`), set up by `quark install`. It serves HTTPS on `:443`
with a self-signed certificate it generates on first boot. Open `https://quark.local` (or your hostname) and expect a
certificate warning; [Getting Started](/docs/getting-started) explains why.

### In a container

Every release publishes a `linux/amd64` and `linux/arm64` image to GHCR:

```bash
docker run -d --name quark --restart unless-stopped -p 8080:8080 \
  -v quark-data:/var/lib/quark ghcr.io/autobutler-org/quark:latest
```

Then open `http://localhost:8080`. Everything Quark keeps lives in the `quark-data` volume. See
[docs/container.md](https://github.com/autobutler-org/quark/blob/main/docs/container.md) for Kubernetes and updates.
To run your own build instead, see [Development](#development).

### First boot

On first boot, the web UI shows a setup screen. Create your owner account there.

---

## API

The REST API is at `/api/v0/`. Swagger UI is at `https://<host>/swagger`.

### Authentication

All endpoints require a session token except `/auth/setup`, `/auth/salt`, `/auth/login`,
`/auth/status`, and a few other sign-in routes.

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

The key is `HKDF-SHA256(Argon2id(password, salt, t=3, m=64 MiB, p=1), info="auth")`, sent as standard base64. A
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

---

## Architecture notes

**Single binary.** The Go backend embeds the Flutter web build at compile time and serves it
alongside the API. No separate web server needed.

**SQLite.** All state lives in a SQLite database at `/var/lib/quark/data/quark.db`.
Migrations run on startup — safe to upgrade without manual intervention.

**Device detection.** On Linux, Quark reads `/proc/mounts` to discover storage devices.
USB device detection uses the `usbutil` package. Mounting/unmounting USB storage requires
root — run with `AS_ROOT=1` in development.

**Auth.** The server never sees the password: the client derives an auth key from it (Argon2id, then HKDF-SHA256),
and the server stores a bcrypt hash (cost 12) of that key. Session tokens are 32 bytes of
`crypto/rand` (256-bit entropy).

**Updates.** The device can update itself in-place via the `/version/update` API. It downloads
the new binary as a tarball, extracts it, and atomically renames it over the running binary.
The process exits and systemd restarts it. Separately, `quark install` turns on Debian security-only unattended
upgrades and holds the kernel and board packages at the version the device booted.

---

## Development

**Prerequisites:** Go, Flutter, Make, [air](https://github.com/air-verse/air), sqlc, swag

```bash
git clone https://github.com/autobutler-org/quark.git
cd quark
make setup      # install dev tools
make generate   # sqlc + swag + flutter icons + sbom
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
