---
title: File Types
description: Which files open inside Quark, which only download, and what each viewer can do
navigation:
  title: File Types
  order: 2
---

# File Types

When you tap a file in **Files**, Quark looks at the letters after the dot in its name and picks a viewer or an
editor. If it has neither, you get a details page with **Download**. This page is the list, so you know what will
happen before you move a folder over.

For uploading, downloading, archives, search, and Trash, see [Files](/docs/files).

## How to use it

1. Open **Files** and go to the folder that holds the file.
2. Tap the file.
3. Quark opens the matching viewer, or a details page with **Download**.
4. On the iPhone and Android apps, a details page also has **Open with…**, which hands the file to another app on your
   phone. A browser doesn't have that button.

Nothing on the details page converts the file. It stays on your drive as it is.

## At a glance

| Kind of file           | Examples                             | What tapping it does                         |
| ---------------------- | ------------------------------------ | -------------------------------------------- |
| Quark docs and sheets  | `.qdoc`, `.qsheet`, `.qslide`        | Opens the Docs, Sheets, or Slides editor     |
| Plain text             | `.txt`, `.rst`, `.env`               | Opens the text editor                        |
| Markdown               | `.md`, `.markdown`                   | Opens a rendered view, with **Edit**         |
| Code, config, and logs | `.json`, `.yaml`, `.py`, `.log`      | Opens a read-only code viewer, with **Edit** |
| Pictures               | `.jpg`, `.png`, `.heic`, `.svg`      | Opens the image viewer                       |
| PDF                    | `.pdf`                               | Opens the PDF viewer                         |
| Video                  | `.mp4`, `.mov`, `.mkv`, `.webm`      | Opens the video player                       |
| Audio                  | `.mp3`, `.m4a`, `.flac`, `.wav`      | Opens the audio player                       |
| 3D models              | `.stl`, `.obj`, `.ply`, `.3mf`       | Opens the 3D viewer                          |
| CSV and Excel          | `.csv`, `.xlsx`, `.xlsm`             | Offers to convert it to a Quark sheet        |
| Archives               | `.zip`, `.tar`, `.gz`, `.7z`, `.rar` | Opens like a folder                          |
| Everything else        | `.docx`, `.pptx`, `.epub`, `.xls`    | Details page with **Download**               |

Quark decides by the extension, not by what is inside the file. A photo opened from Files can also step through the
other pictures in that folder. See [A photo opened from Files](/docs/files#a-photo-opened-from-files).

## What does not open in Quark

Word documents, older `.xls` workbooks, EPUB books, and any kind not listed above don't open inside Quark. Tapping one
shows its name and type, with **Download** and, on the phone apps, **Open with…**.

A PowerPoint file (`.pptx`, `.pptm`, or `.ppsx`) lands on that same details page when you tap it. Its menu also has
**Open as presentation**, which makes a Quark slideshow beside the file and opens it. The PowerPoint file is left
where it was. You can do the same from **Slides** with **Import PowerPoint**. Pictures that import copies out for the
slideshow stay out of [Photos](/docs/photos).

Quark slideshows (`.qslide`) open in the Slides editor. Slides is part of the app. There is no switch to turn it off.

## Documents and text

**Quark documents, spreadsheets, and slideshows** (`.qdoc`, `.qsheet`, `.qslide`) open in Quark's own editors.

**Plain text** (`.txt`, `.rst`, `.env`) opens in the text editor, ready to type in. There is no formatting and no
syntax coloring there.

**Markdown** (`.md`, `.markdown`) opens rendered, with headings, lists, links, and tables laid out. A quote that starts
with a label in brackets is drawn as a colored callout. These five are recognized:

- `> [!NOTE]`
- `> [!TIP]`
- `> [!IMPORTANT]`
- `> [!WARNING]`
- `> [!CAUTION]`

Each one shows a title, Note, Tip, Important, Warning, or Caution, and the lines you wrote under it.

Then:

- **Source** shows the raw text, and **Rendered** switches back.
- **Edit** opens the file in the text editor.
- A link to another file on your Quark opens that file. A web link opens in your browser.
- A picture from your Quark shows right away, including an SVG drawing. A picture hosted on the web waits until you
  tap **Load remote image**, because loading it tells that website someone opened the file. An SVG on the web uses
  that same button.
- HTML written inside the file shows as plain text. It is not turned into a web page.

**Code, config files, and logs** open in a read-only code viewer with syntax coloring, line numbers, **Wrap lines**,
and **Search**. A large log loads 256 KB at a time as you scroll, so it still opens. Search only looks through what has
loaded so far. **Edit** opens the file in the text editor, once the viewer has loaded all of it.

### Spell check

On the iPhone and Android apps, the text editor underlines misspellings in `.txt`, `.md`, `.markdown`, and `.rst`
files. Code, `.log`, and `.env` files are not checked. In a browser, nothing is underlined.

## Spreadsheets from elsewhere

Tapping a `.csv`, `.xlsx`, or `.xlsm` file asks **Convert to .qsheet?** Choose **Convert** and Quark makes a new Quark
spreadsheet with the same name next to the original, then opens it. The original file is not changed or deleted.

- If a `.qsheet` with that name is already there, an Excel workbook asks first: **Open existing** or **Replace**.
- A CSV does not ask. Converting it again replaces the `.qsheet` of the same name, including any edits you made to it.

Older `.xls` workbooks are not converted. They get the details page with **Download**.

## Photos and pictures

JPEG, PNG, GIF, WebP, HEIC, HEIF, BMP, TIFF, AVIF, and raw camera files open in the image viewer. SVG drawings open in
their own viewer.

- HEIC, HEIF, BMP, TIFF, and the raw formats `.cr2`, `.cr3`, `.nef`, `.arw`, `.dng`, `.orf`, and `.rw2` are turned into
  a JPEG by your Quark for viewing. The original file is not changed.
- Other raw formats, such as `.raf`, `.pef`, and `.x3f`, are listed as images, but the viewer may not be able to show
  them. Download them to open on your computer.
- Only JPEG, PNG, GIF, WebP, HEIC, and HEIF get thumbnails in the file list. Other pictures show a plain icon, unless
  the tile says why a preview is missing. See [Photos](/docs/photos#if-something-goes-wrong).

For albums and favorites, see [Photos](/docs/photos).

## PDF

A PDF opens inside Quark. In a desktop browser, it uses the browser's own PDF viewer, with its zoom, search, and
printing. In the phone apps, and in phone browsers without a PDF viewer, Quark shows the pages in a column you can
scroll and zoom. **Download** sits in the top bar, and the phone apps also have **Open with…**.

### Books

**Books**, in the app menu, lists every PDF and EPUB you can open on the Quark's internal drive, whatever folder it is
in. A PDF opens in the PDF viewer. An EPUB gets the details page with **Download**, because Quark has no EPUB reader.
[Books](/docs/books) has the rest, including books on a USB drive.

## 3D models

STL, OBJ, PLY, and 3MF files open in a 3D viewer you can turn, pan, and zoom. glTF (`.gltf`) and binary glTF (`.glb`)
open there too.

A 3MF file is a package, the kind a 3D printer's software writes. Quark reads the model inside it. The file, and the
model pieces it unpacks, share one size cap with the other formats.

A model over 64 MB, with more than 2 million triangles, or that takes too long to open, shows its details and
**Download** instead. The note says why: too big, too detailed, or too slow to open. The file itself is unchanged.

A `.gltf` file can name other files in the same folder, and those count toward the 64 MB cap. Quark does not follow a
reference outside that folder.

## Video and audio

### Playing

Videos open in the video player, and audio files in the audio player. Both have a **Playback speed** menu, from 0.5x
to 2.0x. The audio player has **Download** in its top bar. To save a video that is playing, use **Download** on its
file menu in Files. If a video won't play, the player offers **Download** there instead.

Quark doesn't change the file to play it. Your browser or phone plays it as it is, so a format it can't play won't
play in Quark either:

- For a `.mov`, `.avi`, `.mkv`, `.wmv`, `.flv`, or `.3gp` that won't play, the player says the format isn't supported
  for in-browser playback and offers **Download**.
- Other videos that won't play say "Unable to play this media. The file may use an unsupported codec/profile."
- Audio that won't play says "Unable to play this audio file. The format may not be supported by this browser."

A download from one of these viewers says **Downloaded** and the file's name. On a phone, a picture or a supported
video goes to Apple Photos or the gallery. See [Downloading](/docs/files#downloading).

Quark remembers where you stopped in a video and opens it there next time. A video you stopped near the end counts as
watched and starts from the beginning. **More options** (the three-dot button) has **Mark as watched** and **Mark as
unwatched**. Your place is your own: someone else opening the same video starts at the beginning. Moving or renaming a
video starts it over.

### Video tools

The video player's **More options** menu has three tools. Each one saves a new file next to the video, and none of them
change the original. You need permission to save files in the video's folder.

**Save Frame** saves the picture on screen as a new image. Quark tells you its name: "Frame saved as …".

**Trim Clip** lets you pick a start and an end. **Save Clip** writes the piece as a new file named like
`holiday_trimmed.mp4`, and **Cancel** leaves trim mode. Trimming copies the video without re-encoding it, so it is
fast and keeps full quality. If a video can't be cut at exactly the point you chose, Quark says where the clip starts
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
your phone only takes `.mp4`. It can't fix a video your device refuses because of how the picture itself is encoded.
The new file holds the same encoding, so it won't play there either.

## If something goes wrong

- **I tapped a Word file and only saw Download.** That is expected. Quark does not open Word, older Excel, RTF, or
  OpenDocument files in the app. Use **Download** or **Open with…**.
- **A PowerPoint didn't open in Slides.** Tap is the details page. Use **Open as presentation** on the file's menu, or
  **Import PowerPoint** on the Slides page.
- **A Markdown alert looks like a quote.** The marker has to be `> [!NOTE]` (or Tip, Important, Warning, Caution) at
  the start of the quote. Other quote styles stay quotes.
- **A picture in a Markdown file is a button.** It is hosted on the web. Tap **Load remote image** if you want it.
  Quark waits so that opening the file does not contact that site on its own.
- **A 3D model shows a note instead of the model.** It is over 64 MB, too detailed, or too slow to open. **Download**
  still works.

## Related

- [Files](/docs/files): uploads, downloads, archives, search, and Trash
- [Photos](/docs/photos): albums, favorites, and a slideshow on a spare screen
- [Books](/docs/books): every PDF and EPUB on the internal drive
- [Getting Started](/docs/start/getting-started): the first hour with Quark

## Nerd Notes

Checked against quark `main` at `c0f4eefc` (v0.56.2 plus one test-only commit).

**Routing.** The client extension table is `lib/utils/file_kind.dart`. The server's `fileType` is a hint for older
clients and is not what picks a viewer. `viewerRouteFor` in `lib/router.dart` sends Markdown to `/markdown/…`, source
and plain text to `/code/…`, and 3D models to `/model/…`. `.qdoc`, `.qsheet`, and `.qslide` open their editors.
`FileKind.docx`, `slideshow` (`.pptx`, `.ppt`), `epub`, `xlsx`, `csv`, and `generic` use the details page
(`usesGenericFileViewer`). CSV and Excel are offered a conversion before that page when you tap them in Files.

**Not wired up.** Server-side readers for Word (`.docx`), OpenDocument (`.odt`, `.ods`, `.odp`), RTF, and older `.xls`
are not called by a viewer. `.odp` import lives in `pkg/util/odputil` and nothing in the app calls it. Those files
stay on the details page. Do not describe them as opening in Quark. PowerPoint import is the exception that is on
screen: `SlidesService.powerPointExtensions` is `.pptx`, `.pptm`, and `.ppsx`, and the file menu entry is **Open as
presentation**.

**Slides.** Migration `035_drop_slides_feature_flag` removed the old admin switch. `.qslide` always opens in the editor.

**Markdown.** Alerts are GitHub's `AlertBlockSyntax`, rendered by `MarkdownAlert` in
`packages/quark_widgets`. The five kinds are NOTE, TIP, IMPORTANT, WARNING, and CAUTION. Raw HTML is shown as text.
`MarkdownViewerImage` loads a Quark-relative image immediately. A remote URL, including one whose path ends in
`.svg`, waits for **Load remote image**. SVG is drawn with `flutter_svg` after `svgWithViewport`. Scripts in the SVG
do not run, and the SVG's own external references are not fetched. An SVG whose URL has no `.svg` suffix shows its
alt text.

**3D.** `modelFormatForName` accepts `.stl`, `.obj`, `.ply`, `.gltf`, `.glb`, and `.3mf`.
`ModelViewerConfig` caps a model at 64 MB and 2,000,000 triangles, and gives up after 10 seconds. While a model
moves, the viewer draws at most 150,000 triangles. A `.gltf` may pull sibling files in the same folder. Those bytes
plus the file count toward the cap (`quarkModelResources`). A 3MF zip is read with random access. Only the model
parts it reaches are decompressed, and those decompressed bytes are held to the same cap
(`parseQuarkModel` in `packages/quark_widgets`).

**Code viewer.** `CodeViewerConfig.pageBytes` is 256 KB.

**Pictures.** `serverConvertedImageExtensions` are the formats asked for as JPEG. `thumbnailImageExtensions` are the
ones that get a file-list thumbnail. Stepping through a folder is `FileKind.image` only, so SVG does not step.
