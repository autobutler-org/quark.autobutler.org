---
title: Music
description: Browse the songs on your Quark by album, artist, and genre, and play one in the audio player
navigation:
  title: Music
  order: 1
---

# Music

Music gathers the audio files your account can open, from every drive, into one library. There is no special music
folder. A song you upload in Files shows up here once Quark has read it.

You use Music at home in a web browser, and in the phone and desktop apps. Away from home, the phone apps reach it
once an admin turns on remote access in **Settings → Network**.

## How to use it

1. Open **Music** from the app menu. It sits beside **Photos**.
2. The page opens on **Songs**. The other tabs are **Albums**, **Artists**, and **Genres**.
3. Tap a song. It plays in the audio player. The back button returns to the Music page you came from.
4. Type in **Search music…** above the tabs to find a title, artist, album, or genre.

Each song row shows its cover, or a disc in its place, then the title, the artist, the album, and the length.

## Albums, artists, and genres

- **Albums** is a grid. Each card shows the cover, the title, the album artist, the year when the file has one, and
  how many songs are on it. Tap a card for that album's songs, in disc and track order. **Back to albums** returns
  to the grid.
- **Artists** lists album artists. A song with no album-artist tag is credited to the artist on the song. Each row
  says how many albums and songs credit that artist. Tap one for their albums, and a **Songs** tab of their songs.
- **Genres** lists each genre and how many songs carry it. Tap a genre and Songs shows only those songs, under a
  **Genre:** chip. Clear the chip to see every song again.

## Search

Search matches the title, artist, album artist, album, and genre. After you pause typing, the matches replace the
tabs, best match first, with the tag that matched under each song. Tap a result to play it. Clear the field and the
tabs come back.

Nothing matching says **No matches**.

On a Quark that keeps its database in PostgreSQL, search says "Your Quark doesn't support that yet." The Songs,
Albums, Artists, and Genres tabs still work.

## If the library is empty

- **Scanning your music**, with "Looking for audio files on your devices." Quark is reading the drives.
- **No music yet**, with "Add audio files to your Quark, then scan the library." Add songs in [Files](/docs/files),
  then come back.

An admin also sees **Scan music** on that empty page. It queues a scan, and the page switches to the scanning line.
When the scan finds music, the list appears on its own.

Quark also picks up a song you add, move, or delete in Files, without a refresh, once it has read the file.

On a computer, the refresh button fetches the library again. On a phone, pull the list down.

## Rescan

If a song is missing, an admin can look again:

1. Open **Settings → Updates**.
2. Under **Maintenance**, in **Music library**, tap **Rescan music library**.

Quark says "Scan queued. Its progress shows in Jobs." Other accounts do not see Maintenance, and they do not see
**Scan music**.

## What is included

Music lists audio files you are allowed to open: `.mp3`, `.wav`, `.flac`, `.aac`, `.ogg`, `.m4a`, `.wma`, and
`.opus`. A song in someone else's private folder stays out of your list. The Trash is left out.

Cover art comes from a picture stored in the file, or from `cover`, `folder`, `front`, or `album` as a JPEG or PNG
in the same folder.

There is no queue, shuffle, or play history here. Playing a song opens the same audio player Files uses.

## If something goes wrong

- **"No music yet" after you uploaded songs.** Wait for the scan, or ask an admin to tap **Rescan music library**.
  Check the file's ending, and that it is not in a folder you cannot open.
- **"Couldn't load your music."** Tap **Retry**. If it keeps happening, check that your Quark is on.
- **Search says the Quark doesn't support that yet.** Browse the tabs instead. Search needs the usual database, not
  PostgreSQL.

## Related

- [Files](/docs/files): uploading songs, and the audio player
- [File types](/docs/files/file-types): which audio files open inside Quark
- [Settings](/docs/settings): the admin rescan, under Updates
- [Photos](/docs/photos): the library beside Music in the app menu

## Nerd Notes

Checked against quark v0.65.0 (`43eecd35`). The same Music pages are in v0.64.0. The user journeys are
[`docs/user-journeys/music.md`](https://github.com/autobutler-org/quark/blob/v0.65.0/docs/user-journeys/music.md)
(JN-MU-001 through JN-MU-009).

The beta flag registry (`pkg/util/featureflagutil/registry.go`) is empty. Music is not behind a flag. The drawer
always offers it, beside Photos.

**Library.** `GET /api/v0/music/tracks`, `/albums`, `/artists`, and `/genres` list what the caller can read, paged
at 200. A track's title falls back to the file name when it has no tag. Album identity includes the folder, so two
albums with the same title in different folders stay apart. Artists are album artists, falling back to the track
artist. `GET /api/v0/music/status` returns `trackCount` and `scanJobId` while a scan is queued.

**Search.** `GET /api/v0/music/search?q=` matches title, artist, album artist, album, and genre with FTS5, best
ranked first. Column filters such as `artist:nina` pass through. On PostgreSQL `db.RequireSQLite` answers 501
(#2958), which the app shows as "Your Quark doesn't support that yet." The browse routes run on both databases.

**Scan.** A `music-indexer` subscriber reads tags on upload, drops rows on delete, rewrites paths on move, and
backfills a drive that appears. The first start queues a full scan. `POST /api/v0/music/rescan` (admin only, 202)
queues another. Changes publish `music_library_changed`. The scan skips the Trash and Quark's internal folders.
Nothing looks up tags or fingerprints off the Quark.

**Playback.** A song opens at `/view/<path>` with `?from=` the Music URL, and `?serial=` when it is on an attached
drive.
