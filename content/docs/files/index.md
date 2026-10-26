---
title: Files
description: Upload, download, search, and recover files on your Quark — archives, Trash, and version history
navigation:
  title: Files
  order: 1
---

# Files

This page goes deeper than [Getting Started](/docs/getting-started#files): how uploads behave, what a folder download
gives you, what search can and can't find, and how to get something back from Trash or an earlier version. Which kinds
of file open inside Quark is covered in [File Types](/docs/file-types).

---

## Uploading

### Where the Upload button is

- **On a wide screen**, use the **Upload** chip in the Files top bar. Where there is more than one source, it opens a
  menu: **Files**, plus **Folder** and **Photos** where they apply.
- **On a phone**, tap the **Create** button, then pick from the **Add to this folder** sheet: **Upload files**, plus
  **Upload folder** and **Upload photos** where they apply.

Files go into the folder you have open.

### Files, folders, and photos

- **Files** opens your device's file picker. You can pick several at once.
- **Folder** uploads a whole folder, with the folders inside it. It is offered in a web browser. The iPhone and
  Android apps don't offer it.
- **Photos** shows up only on iPhone and iPad. The Files picker there can't see your Camera Roll, so this opens the
  Photos library instead. Android's picker already includes your gallery.

### Drag and drop

In a web browser on a computer, you can drag files from your desktop onto the Files list. The list highlights while you
hold them over it, and they upload when you let go. An empty folder reminds you: "Upload files using the button above,
or drag and drop here."

### More than one drive

If your Quark has more than one drive switched on, an **Upload to device** sheet asks where the files should go. It
starts on your default drive, if you have set one. A drive that is plugged in but not switched on is listed as
unavailable, with a note to mount it under **System → Storage**. If you've filtered Files to a single drive, uploads go
there without asking.

### When the name is already taken

Quark never renames a file behind your back. If the folder already holds a file with the same name, you get a dialog
titled **That name is taken**:

- **Keep both** — the new file lands beside the old one with a number added: `soup.txt` becomes `soup_(1).txt`.
- **Replace** — the new file overwrites the old one. The file keeps the owner it already had.
- **Cancel** — skips just that file. The rest of the upload carries on.

Uploading several files at once and more than one clashes? Tick **Do the same for the rest of this upload**, and you
answer once.

Uploads from the [Photos](/docs/photos) page never ask. Camera names like `IMG_0001.jpg` clash all the time, so those
always keep both.

A blank name, or one that is too long, is refused with a message saying so.

### Big files

Large files are sent in pieces. If your connection drops partway, Quark tries again on its own before it gives up on
that file. In a web browser, if the page reloads in the middle of a big upload, upload the same file to the same folder
again and Quark picks up where it stopped instead of starting over.

While an upload runs, the **Upload** chip shows how many files are done out of the total, such as `3/10`. Its menu then
offers **Cancel upload**.

Keep Quark powered on until a big upload finishes. Your home network speed decides how long it takes.

### Seeing new files

New files show up on every open phone and computer without a refresh. If you upload from your laptop, they appear on
your phone too. If something you uploaded is missing, check the **Upload** chip first. Refreshing the page is the
fallback.

---

## Downloading

**Download** is in every file's and folder's menu — the three-dot button, a right-click, or a long press on a phone.

- **A file** downloads as it is.
- **A folder** downloads as a `.zip` named after the folder. Quark builds the zip while it sends it, so the download
  starts right away. Photos, videos, and archives inside it are not squeezed again, so a zip of a photo folder is about
  as big as the photos. It doesn't save space.

If your Quark is already zipping other folders, it may turn a folder download away. Try again in a moment.

There is no download or move for several files at once yet. **Select** in the Files top bar only offers **Delete
selected**. To get a lot of files in one go, download the folder they are in.

---

## Archives

### Looking inside without extracting

Click an archive and Files opens it like a folder. You can open the folders inside it, preview pictures and text, and
download single files out of it. Nothing is unpacked onto your drive. You can't rename, move, share, or delete anything
inside an archive. Work on the archive itself, or extract it first.

An archive inside an archive doesn't open this way. Extract the outer one first.

Quark reads these kinds:

- `.zip`, `.rar`, `.7z`, `.tar`
- Compressed tars: `.tar.gz` / `.tgz`, `.tar.bz2` / `.tbz2` / `.tbz`, `.tar.xz` / `.txz`, `.tar.zst` / `.tzst`
- Single compressed files: `.gz`, `.bz2`, `.xz`, `.zst`
- Comic book archives: `.cbz`, `.cb7`
- Zip files under another name: `.jar`, `.apk`, `.whl`

### Extract here

Open an archive's menu and choose **Extract here**. The entry reads **Extracting...** while it works.

- The contents land in a **new folder beside the archive**, named after it without the extension: `photos.zip` becomes
  a `photos` folder in the same place.
- If a `photos` folder is already there, Quark doesn't mix the two. The new folder gets a number: `photos_(1)`.
- A single compressed file, such as `notes.txt.gz`, comes out as one file beside it: `notes.txt`.
- Nothing shows up under the new name until the whole archive is out. If extraction fails partway, nothing is left
  behind.
- The archive stays where it was. Delete it yourself once you have what you need.

You need permission to add files to the archive's folder. You own what comes out.

### What Quark refuses

Quark won't open an archive that:

- is password-protected — Quark has nowhere to type a password
- has more than 100,000 entries
- holds a single file bigger than 10 GiB once unpacked
- would unpack to far more than any real archive needs, as a booby-trapped "zip bomb" does

You get a message saying which one it was. Nothing is half-extracted.

---

## Searching

### Files search finds names

Click **Search** in the Files top bar and type into the **Search files…** box. It finds files whose **name** contains
what you typed:

- Capitals don't matter: `tax` finds `Taxes 2025.pdf`.
- It looks across every drive, and only shows files you are allowed to open.
- It finds files, not folders.
- A result's menu has **Navigate to folder**, which opens the folder the file is in.

A very short search, like one or two letters, can match thousands of files, and only part of them are shown. Type more
of the name to narrow it down.

Nothing found shows **No matches**. Try fewer words, or part of the name.

Files search does **not** look inside files. Searching for a word you know is in a document finds nothing unless the
word is also in the file's name.

### Searching inside documents

The **Docs**, **Sheets**, and **Slides** pages have their own search. Besides names, it finds words written inside
documents, spreadsheets, and presentations you made in Quark. Matches show under **Content matches**. On Docs, matching
spreadsheets show under **In Sheets**. On Sheets, matching documents show under **In Docs**.

What content search can't read:

- PDFs, Word and other Office files, and EPUB books — search can't read inside them yet
- Pictures, video, and audio
- Anything past the first 512 KB of a file's text

When Quark starts, it reads the files already on your drives in the background, and new files as they are saved. A
drive you just plugged in may take a while before its contents turn up.

---

## Trash

Trash has its own page: [Trash](/docs/trash).

---

## Version history

Quark keeps earlier versions of the documents, spreadsheets, and presentations you make in Quark, so you can go back to
one.

### What gets kept

When a Quark document, spreadsheet, or presentation is saved over, Quark keeps a copy of what it held before. It saves
at most one of these every 10 minutes per file, and skips a copy that is identical to the last one. Uploading or moving
another file over one of these does the same, so a replace can be undone.

Other kinds of file — photos, PDFs, text files — don't get automatic versions.

### Looking back

Open a file's menu and choose **Version history**. A sheet lists versions newest first, with when each was saved,
whether it is **Automatic** or **Named**, its size, and who saved it: "You", another person's username, or "System".

**Preview** opens a version read-only, so nothing can be saved over by accident. Pictures, SVGs, and text, code, or CSV
files preview. Other kinds say a preview isn't available, and a version over 25 MB is too large to preview. You can
still restore either.

### Restoring

**Restore** asks you to confirm. Before it puts the old version back, Quark saves what the file holds now as a version
called "Before restore". Changed your mind? Restore that one.

### Limits

- **Internal drive only.** Version history isn't offered on folders, files on a USB drive, files inside an archive, or
  anything in Trash.
- **Quark trims old versions on its own.** It keeps the newest 50 automatic versions of a file, none older than 90
  days, and no more than 256 MiB of versions per file. There is no setting to change that yet.
- **No side-by-side compare** yet, and no screen showing how much space versions use. They do count toward your
  drive's used space.
- **It is not a backup.** Versions live on the same drive as the file. If that drive fails, both go. Keep a copy of
  what matters on a second drive — see the [Security Guide](/docs/security-guide).

Deleting a file to Trash keeps its history. Restore the file and the history comes back with it.

---

## Related

- [Getting Started](/docs/getting-started) — the Files basics
- [File Types](/docs/file-types) — which kinds of file open in Quark
- [Photos](/docs/photos) — uploading and browsing pictures
- [Google Takeout](/docs/google-takeout) — moving a Google export onto Quark
