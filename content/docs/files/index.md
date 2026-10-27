---
title: Files
description: Upload, find, and download the files on your Quark, and get a document back after you save over it
navigation:
  title: Files
  order: 1
---

# Files

Files is the folder view of everything on your Quark. Documents, photos, videos, and the folders you make all live
here. You open a file to look at it, add files from the phone or computer you are holding, and get a Quark document
back if you save over it.

You can use Files at home in a web browser, and in the iPhone and Android apps. Away from home, those phone apps reach
your files once an admin turns on remote access in **Settings → Network**. A web browser still works only on your home
WiFi. A large upload is fastest at home.

Which kinds of file open inside Quark is covered in [File types](/docs/files/file-types).

## How to use it

1. Open **Files** from the app menu.
2. Tap a folder to go into it. Tap a file to open it.
3. To add something, use **Upload** on a wide screen, or **Create** and then **Upload files** on a phone. Files go into
   the folder you have open.
4. To keep a copy on the device you are using, open the file's menu and tap **Download**. The menu is the three-dot
   button, a right-click, or a long press on a phone.
5. To find a file by its name, tap **Search**.

## Uploading

### Where the Upload button is

- **On a wide screen**, use the **Upload** chip in the Files top bar. Where there is more than one source, it opens a
  menu: **Files**, plus **Folder** and **Photos** where they apply.
- **On a phone**, tap the **Create** button, then pick from the **Add to this folder** sheet: **Upload files**, plus
  **Upload folder** and **Upload photos** where they apply.

### Files, folders, and photos

- **Files** opens your device's file picker. You can pick several at once.
- **Folder** uploads a whole folder, with the folders inside it. It is offered in a web browser. The iPhone and
  Android apps don't offer it.
- **Photos** shows up only on iPhone and iPad. The Files picker there can't see your Camera Roll, so this opens the
  Photos library instead. Android's picker already includes your gallery.

### Drag and drop

In a web browser on a computer, you can drag files from your desktop onto the Files list. The list highlights while you
hold them over it, and they upload when you let go. An empty folder says **No files yet**, and under that: "Upload
files using the button above, or drag and drop here."

### More than one drive

If your Quark has more than one drive switched on, an **Upload to device** sheet asks where the files should go. It
starts on your default drive, if you have set one. A drive that is plugged in but not switched on is listed as
unavailable, with a note to mount it under **System → Storage**. If you've filtered Files to a single drive, uploads go
there without asking.

### When the name is already taken

Quark never renames a file behind your back. If the folder already holds a file with the same name, you get a dialog
titled **That name is taken**:

- **Keep both**. The new file lands beside the old one with a number added: `soup.txt` becomes `soup_(1).txt`.
- **Replace**. The new file overwrites the old one. The file keeps the owner it already had.
- **Cancel**. Skips just that file. The rest of the upload carries on.

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

## A photo opened from Files

A picture you open from Files can step through the other pictures in that same folder.

Once the folder's list has loaded, the viewer shows **Previous** and **Next**, and the arrow keys do the same. The
order is by file name, and capital letters don't matter. Folders, files that are not pictures, and files on another
drive are skipped. SVG drawings open in their own viewer and are not part of this sequence.

If the folder can't be listed, you only see that one photo.

Albums, favorites, and the month view are on the [Photos](/docs/photos) page. This stepping is only the folder you
opened the picture from.

## Downloading

**Download** is in every file's and folder's menu.

- **A file** downloads as it is.
- **A folder** downloads as a `.zip` named after the folder. Quark builds the zip while it sends it, so the download
  starts right away. Photos, videos, and archives inside it are not squeezed again, so a zip of a photo folder is about
  as big as the photos. It doesn't save space.

When a download finishes, Quark says **Downloaded** and the file's name. Canceling the save dialog says nothing.

On an iPhone or Android phone, a picture or a video is saved into Apple Photos or the gallery, next to your other
pictures. Quark asks for permission to add photos. That is all a download needs. If you decline, the file is still
saved, through the save dialog, and Quark tells you why: "Quark isn't allowed to add to your photos, so this was saved
as a file instead. You can allow it in Settings."

Some pictures and videos still use the save dialog, because the phone's photo library won't take them. Most raw camera
files, AVIF, and videos such as MKV or WebM are in that group. JPEG, PNG, GIF, WebP, HEIC, TIFF, BMP, DNG, and common
videos such as MP4 and MOV go to the library.

On a computer, or in a web browser, **Download** uses the ordinary save dialog.

If your Quark is already zipping other folders, it may turn a folder download away. Try again in a moment.

There is no download or move for several files at once yet. **Select** in the Files top bar offers **Delete
selected**. To get a lot of files in one go, download the folder they are in.

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

- is password-protected. Quark has nowhere to type a password
- has more than 100,000 entries
- holds a single file bigger than 10 GiB once unpacked
- would unpack to far more than any real archive needs, as a booby-trapped zip bomb does

You get a message saying which one it was. Nothing is half-extracted.

## Searching

### Files search finds names

Click **Search** in the Files top bar and type into the **Search files…** box. It finds files whose **name** contains
what you typed:

- Capitals don't matter: `tax` finds `Taxes 2025.pdf`.
- It looks across every drive, and only shows files you are allowed to open.
- It finds files, not folders.
- A result's menu has **Navigate to folder**, which opens the folder the file is in.

Quark shows at most 500 matching files. A very short search, like one or two letters, can hit that cap. Type more of
the name to narrow it down.

Nothing found shows **No matches**, with "Nothing here matches" and the words you typed. Try fewer words, or part of
the name. The line also suggests checking another device.

Files search does **not** look inside files. Searching for a word you know is in a document finds nothing unless the
word is also in the file's name.

### Searching inside documents

The **Docs**, **Sheets**, and **Slides** pages have their own search. Besides names, it finds words written inside
documents, spreadsheets, and presentations you made in Quark. Matches show under **Content matches**. On Docs, matching
spreadsheets show under **In Sheets**. On Sheets, matching documents show under **In Docs**.

What content search can't read:

- PDFs, Word and other Office files, and EPUB books. Search can't read inside them yet
- Pictures, video, and audio
- Anything past the first 512 KB of a file's text

When Quark starts, it reads the files already on your drives in the background, and new files as they are saved. A
drive you just plugged in may take a while before its contents turn up.

Photo search, which also looks at file names and does not stop at 500, is on the [Photos](/docs/photos) page.

## Trash

Deleted files wait in [Trash](/docs/trash), for about 30 days, before they are removed for good.

## Version history

Quark keeps earlier copies of the documents, spreadsheets, and slideshows you make in Quark, so you can go back to one.

### What gets kept

When a Quark document (`.qdoc`), spreadsheet (`.qsheet`), or slideshow (`.qslide`) is saved over, Quark keeps a copy of
what it held before. It saves at most one of these every 10 minutes per file, and skips a copy that is identical to
the last one. Uploading or moving another file over one of these does the same, so a replace can be undone.

Other kinds of file, such as photos, PDFs, and text files, don't get these automatic copies. **Version history** can
still appear on their menu when they sit on the internal drive. Open it and there is nothing saved there yet.

### Looking back

On a Quark document, spreadsheet, or slideshow on the internal drive, open the file's menu and choose **Version
history**. A sheet lists versions newest first, with when each was saved, whether it is **Automatic** or **Named**,
its size, and who saved it: "You", another person's username, or "System".

**Preview** opens a version read-only, so nothing can be saved over by accident. Pictures, SVGs, and text, code, or CSV
files preview. Other kinds say "A preview isn't available for this kind of file." A version over 25 MB says "This
version is too large to preview." You can still restore either.

### Restoring

**Restore** asks you to confirm. Before it puts the old version back, Quark saves what the file holds now as a version
called "Before restore". Changed your mind? Restore that one.

### Limits

- **Internal drive only.** Version history isn't offered on folders, files on a USB drive, files inside an archive, or
  anything in Trash.
- **Quark trims old automatic versions on its own.** It keeps the newest 50 of a file, none older than 90 days, and no
  more than 256 MB of versions per file. There is no setting to change that yet.
- **No side-by-side compare** yet, and no screen showing how much space versions use. They do count toward your
  drive's used space.
- **It is not a backup.** Versions live on the same drive as the file. If that drive fails, both go. Keep a copy of
  what matters on a second drive. See the [Security Guide](/docs/help/security-guide).

Deleting a file to Trash keeps its history. Restore the file and the history comes back with it.

## If something goes wrong

- **The file I uploaded isn't there.** Look at the **Upload** chip. A name clash offers **Keep both**, **Replace**, or
  **Cancel**. A large file that stopped can be continued by uploading the same file to the same folder again. If you
  have more than one drive, look on the drive you picked.
- **Download went to Files, not Photos.** On a phone, that happens when photo permission was declined, or when the
  photo library won't take that format. The message on screen says which.
- **A photo won't step to the next one.** The folder list didn't load, or the neighbors aren't pictures in that same
  folder. Open the picture from [Photos](/docs/photos) if you want the library's order instead.
- **Version history is empty.** Automatic copies are kept for Quark documents, spreadsheets, and slideshows. A photo or
  a PDF won't have them. A file on a USB drive doesn't offer the menu.

## Related

- [Getting Started](/docs/start/getting-started): the Files basics
- [File types](/docs/files/file-types): which kinds of file open in Quark
- [Photos](/docs/photos): uploading and browsing pictures
- [Trash](/docs/trash): putting a deleted file back
- [Google Takeout](/docs/files/google-takeout): moving a Google export onto Quark
- [Remote Access](/docs/settings/remote-access): using the phone apps away from home

## Nerd Notes

Checked against quark `main` at `c0f4eefc` (v0.56.2 plus one test-only commit).

**Uploads.** `POST /api/v0/files/upload/<folder>?keepBoth=true` takes a multipart field named `files`. A resumed
upload sends the same file to the same folder. The **Upload** chip's `3/10` count is the client upload queue.

**Name search.** `GET /api/v0/files/search?query=` returns at most `MaxSearchResults` (500) readable files, from
`pkg/util/fileutil/list.go`. An empty query returns an empty list. `serial` limits the search to one drive. This does
not read file contents.

**Content search.** `GET /api/v0/files/search/content?q=` is FTS5 over indexed text. `searchutil.MaxExtractBytes` is
512 KB, so bytes past that are not indexed. `limit` defaults to 50 and caps at 200. PDF, Office, EPUB, images, video,
and audio are not indexed. The Docs, Sheets, and Slides pages call this. The PostgreSQL backend answers 501.

**Photo stepping.** `FileViewerPage` in `lib/pages/file_viewer_page.dart` lists the photo's folder on that file's
drive only, keeps entries whose `fileKindForName` is `FileKind.image`, and sorts names with `toLowerCase`. SVG is
`FileKind.svg`, so it is not in the sequence. A failed list, or a name missing from the list, leaves `onLoadImage`
null and the viewer on that one photo.

**Phone downloads.** `downloadDestinationFor` in `lib/services/download_destination.dart` sends `.jpg`, `.jpeg`,
`.png`, `.gif`, `.heic`, `.heif`, `.webp`, `.tif`, `.tiff`, `.bmp`, and `.dng` to the photo library as images, and
`.mp4`, `.m4v`, `.mov`, and `.3gp` as video. Everything else uses the save dialog. iOS asks for add-only access.
Declining calls `Errors.photoLibraryAccessDenied`. Viewers share `downloadViewedFile`, which shows `Downloaded <name>`
unless the dialog is canceled.

**Archives.** `DefaultArchiveLimits` in `pkg/util/fileutil/archive.go`: 100,000 entries, 10 GiB per entry, 256 GiB
total, depth 128. Password-protected archives are refused. The extension list mirrors `file_kind.dart`.

**Versions.** Automatic snapshots run only for `.qdoc`, `.qsheet`, and `.qslide` (`IsVersioned` in
`pkg/util/fileversionutil/fileversionutil.go`), including the upload `BeforeSave` hook. The menu still offers
**Version history** for any non-directory file on the internal drive (empty serial), outside an archive.
`POST /api/v0/versions` snapshots, `GET /api/v0/versions?path=` lists, and restore is
`POST /api/v0/versions/<id>/restore`. Retention is 50 automatic versions, 90 days, and 256 MiB per file, with at most
one automatic snapshot every 10 minutes. Preview refuses kinds without a viewer, and anything over 25 MB
(`FileVersionsSheet.maxPreviewBytes`). Stores live beside the file, so they are not a second copy.
