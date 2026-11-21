---
title: Books
description: Every PDF and EPUB on your Quark, in one list, whatever folder it's in
navigation:
  title: Books
  order: 1
---

# Books

Books gathers every PDF and EPUB on your Quark into one list, from every drive. Manuals, recipes, school papers,
e-books: you don't have to remember which folder you put them in. If it's a PDF or an EPUB and you can open it, it's
here.

There is nothing to set up. Add a PDF or EPUB anywhere in Files, and it shows up in Books.

## How to use it

1. Open the app menu and tap **Books**.
2. Find the book you want. Each row shows its name, and under it the folder it's in and its size.
3. Tap the book to open it.
4. When you're done, tap the back button. You land back in Books.

A book you add, move, or delete in Files shows up in Books, or leaves it, on its own. The refresh button at the top
fetches the list again if you want to be sure.

## What opens how

- **A PDF** opens in the PDF viewer, where you can scroll, zoom and download it.
- **An EPUB** opens a details page with **Download**. Quark has no e-book reader of its own yet, so read it in the
  e-book app you already use. In the phone apps, **Open with…** sends it straight there.

## Adding books

Books lists what's already in Files, so add books the way you add any file:

1. Open **Files**.
2. Go to any folder you like, or make a new one called "Books".
3. Tap **Upload** and pick your PDF or EPUB files.

They appear in Books straight away. A book on a USB drive plugged into your Quark is listed too.

## Limits

- You only see books you're allowed to open. A book in someone else's private folder stays out of your list.
- Books lists PDF and EPUB files. Other e-book formats, such as MOBI, aren't included.

## If something goes wrong

- **"No books yet."** There are no PDF or EPUB files you can open, on any drive. Upload one in Files, then come
  back.
- **"Couldn't load your books."** Tap **Retry**. If it keeps happening, check that your Quark is switched on and
  connected.
- **A book I added isn't there.** Tap the refresh button. If it's still missing, check that it ends in `.pdf` or
  `.epub`, and that it isn't in someone else's private folder. If it's on a USB drive, check the drive is plugged in.

## Related

- [File types](/docs/files/file-types): which files open inside Quark, PDFs included
- [Files](/docs/files): uploading, finding and sharing files

## Nerd Notes

Checked against quark v0.63.0 (quark #3954, #3955).

Books has one endpoint: `GET /api/v0/books`, with the usual bearer token. It walks every managed drive's file tree
for `.pdf` and `.epub` files and returns an array of:

| Field          | What it is                                           |
| -------------- | ---------------------------------------------------- |
| `relPath`      | The path under that drive's files root               |
| `fileName`     | The file's name                                      |
| `size`         | Size in bytes                                        |
| `type`         | The file type Quark detects from the extension       |
| `mtime`        | Last modified time                                   |
| `deviceSerial` | The drive the book is on, empty for the internal one |

- The walk covers the internal drive, which answers to the empty device serial, and each attached drive. It skips
  the Trash and Quark's internal folders. An unreadable folder is skipped rather than failing the list.
- Each result is checked against the caller's read access on that drive and path. A read grant on one drive does not
  reveal the same path on another. A file the caller can't read is left out, not flagged.
- A book opens at its `/view/<path>` URL with `?from=/books`, so closing the viewer returns to Books. A book on an
  attached drive adds `?serial=`. Opened without `from`, from Files or a pasted link, the viewer closes into the book's
  folder.
- Nothing is indexed or cached. The list is built fresh on every request. The page fetches it again when a file is
  uploaded, moved, deleted, or restored, even with auto-refresh off.
