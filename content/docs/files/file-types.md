---
title: File Types
description: Which files open inside Quark, which only download, and the video and audio tools
navigation:
  title: File Types
  order: 2
---

# File Types

When you tap a file in **Files**, Quark looks at its extension and picks a viewer or an editor. If it has neither, you
get a details page with a **Download** button. This page lists what goes where, so you know before you move your files
over.

For uploading, downloading, archives, search, and trash, see [Files](/docs/files).

---

## At a glance

| Kind of file           | Examples                             | What tapping it does                         |
| ---------------------- | ------------------------------------ | -------------------------------------------- |
| Quark docs and sheets  | `.qdoc`, `.qsheet`                   | Opens the Docs or Sheets editor              |
| Plain text             | `.txt`, `.rst`, `.env`               | Opens the text editor                        |
| Markdown               | `.md`, `.markdown`                   | Opens a rendered view, with **Edit**         |
| Code, config, and logs | `.json`, `.yaml`, `.py`, `.log`      | Opens a read-only code viewer, with **Edit** |
| Pictures               | `.jpg`, `.png`, `.heic`, `.svg`      | Opens the image viewer                       |
| PDF                    | `.pdf`                               | Opens the PDF viewer                         |
| Video                  | `.mp4`, `.mov`, `.mkv`, `.webm`      | Opens the video player                       |
| Audio                  | `.mp3`, `.m4a`, `.flac`, `.wav`      | Opens the audio player                       |
| 3D models              | `.stl`, `.obj`, `.ply`               | Opens the 3D viewer                          |
| CSV and Excel          | `.csv`, `.xlsx`, `.xlsm`             | Offers to convert it to a Quark sheet        |
| Archives               | `.zip`, `.tar`, `.gz`, `.7z`, `.rar` | Opens like a folder                          |
| Everything else        | `.docx`, `.pptx`, `.epub`, `.xls`    | Details page with **Download**               |

Quark decides by the extension, not by what is inside the file.

---

## What does not open in Quark

Word documents, PowerPoint files, EPUB books, older `.xls` workbooks, and any kind not listed above don't open inside
Quark. Tapping one shows its name and type, with:

- **Download** — save a copy to the device you are using.
- **Open with…** — on the phone app, hand the file to another app on your phone. A browser doesn't have this button.

Nothing is converted or changed. The file stays on your drive as it is.

---

## Documents and text

**Quark documents and spreadsheets** (`.qdoc`, `.qsheet`) open in Quark's own editors. Quark slideshows (`.qslide`)
open in the Slides editor while an admin has the Slides beta turned on.

**Plain text** (`.txt`, `.rst`, `.env`) opens in the text editor, ready to type in. There is no formatting and no
syntax coloring there.

**Markdown** (`.md`, `.markdown`) opens rendered, with headings, lists, and links laid out. Then:

- **Source** shows the raw text, and **Rendered** switches back.
- **Edit** opens the file in the text editor.
- A link to another file on your Quark opens that file. A web link opens in your browser.
- A picture from your Quark shows right away. A picture hosted on the web waits until you tap **Load remote image**,
  because loading it tells that website someone opened the file.
- HTML written inside the file shows as plain text.

**Code, config files, and logs** open in a read-only code viewer with syntax coloring, line numbers, **Wrap lines**,
and **Search**. A large log loads 256 KB at a time as you scroll, so it still opens. Search only looks through what has
loaded so far. **Edit** opens the file in the text editor, once the viewer has loaded all of it.

### Spell check

On the iPhone and Android apps, the text editor underlines misspellings in `.txt`, `.md`, `.markdown`, and `.rst` files.
Code, `.log`, and `.env` files are not checked. In a browser, nothing is underlined.

---

## Spreadsheets from elsewhere

Tapping a `.csv`, `.xlsx`, or `.xlsm` file asks **Convert to .qsheet?** Choose **Convert** and Quark makes a new Quark
spreadsheet with the same name next to the original, then opens it. The original file is not changed or deleted.

- If a `.qsheet` with that name is already there, an Excel workbook asks first: **Open existing** or **Replace**.
- A CSV does not ask. Converting it again replaces the `.qsheet` of the same name, including any edits you made to it.

Older `.xls` workbooks are not converted. They get the details page with **Download**.

---

## Photos and pictures

JPEG, PNG, GIF, WebP, HEIC, HEIF, BMP, TIFF, AVIF, and raw camera files open in the image viewer. SVG drawings open in
their own viewer.

- HEIC, HEIF, BMP, TIFF, and the raw formats `.cr2`, `.cr3`, `.nef`, `.arw`, `.dng`, `.orf`, and `.rw2` are turned into
  a JPEG by your Quark for viewing. The original file is not changed.
- Other raw formats, such as `.raf` and `.pef`, are listed as images, but the viewer may not be able to show them.
  Download them to open on your computer.
- Only JPEG, PNG, GIF, WebP, HEIC, and HEIF get thumbnails in the file list. Other pictures show a plain icon.

For albums and favorites, see [Photos](/docs/photos).

---

## PDF

A PDF opens inside Quark. In a desktop browser, it uses the browser's own PDF viewer, with its zoom, search, and
printing. In the phone apps, and in phone browsers without a PDF viewer, Quark shows the pages in a column you can
scroll and zoom. **Download** sits in the top bar, and the phone apps also have **Open with…**.

### Books

**Books**, in the app drawer, lists every PDF and EPUB you can open on the Quark's internal drive, whatever folder it is
in. Books on an attached USB drive are not listed. A PDF opens in the PDF viewer. An EPUB gets the details page with
**Download**, because Quark has no EPUB reader.

---

## 3D models

STL, OBJ, and PLY files open in a 3D viewer you can turn, pan, and zoom. A model over 64 MB, over 500,000 triangles, or
too slow to open shows its details and **Download** instead, with a note saying why.

---

## Video and audio

### Playing

Videos open in the video player, and audio files in the audio player. Both have a **Playback speed** menu, from 0.5x to
2.0x. The audio player has **Download** in its top bar. To save a video to your device, use **Download** on its file
menu in Files.

Quark doesn't change the file to play it. Your browser or phone plays it as it is, so a format it can't play won't
play in Quark either:

- For a `.mov`, `.avi`, `.mkv`, `.wmv`, `.flv`, or `.3gp` that won't play, the player says the format isn't supported
  for in-browser playback and offers **Download**.
- Other videos that won't play say "Unable to play this media. The file may use an unsupported codec/profile."
- Audio that won't play says "Unable to play this audio file. The format may not be supported by this browser."

Quark remembers where you stopped in a video and opens it there next time. A video you stopped near the end counts as
watched and starts from the beginning. **More options** (the three-dot button) has **Mark as watched** and **Mark as
unwatched**. Your place is your own: someone else opening the same video starts at the beginning. Moving or renaming a
video starts it over.

### Video tools

The video player's **More options** menu has three tools. Each one saves a new file next to the video, and none of them
change the original. You need permission to save files in the video's folder.

**Save Frame** saves the picture on screen as a new image. Quark tells you its name: "Frame saved as …".

**Trim Clip** lets you pick a start and an end. **Save Clip** writes the piece as a new file named like
`holiday_trimmed.mp4`, and **Cancel** leaves trim mode. Trimming copies the video without re-encoding it, so it is fast
and keeps full quality. If a video can't be cut at exactly the point you chose, Quark says where the clip starts
instead. MPEG-TS (`.ts`) videos and some MP4s recorded in fragments can't be trimmed.

**Convert…** moves the video into a different container: MP4, MOV, MKV, WebM, M4V, 3GP, 3G2, or TS. It's also on a
video's file menu in Files, as **Convert video**. Quark offers only the containers that can hold that video as it is.
The new file gets the same name with the new extension, like `holiday.mp4` next to `holiday.mkv`.

A conversion runs in the background. Quark says **Conversion started**, and **View** takes you to **System → Jobs**,
where you can follow it.

### What Convert can and can't fix

Convert copies the picture and sound exactly as they are and changes only the wrapper around them. It never re-encodes
the video, so the quality is the same and it is quick.

That fixes a video your device refuses because of the wrapper, such as an `.mkv` that holds ordinary H.264 video when
your phone only takes `.mp4`. It can't fix a video your device refuses because of how the picture itself is encoded. The
new file holds the same encoding, so it won't play there either.

---

## Related

- [Files](/docs/files) — uploads, downloads, archives, search, and trash
- [Getting Started](/docs/getting-started)
- [Photos](/docs/photos)
