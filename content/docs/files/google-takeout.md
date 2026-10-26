---
title: Moving from Google with Google Takeout
description: Download a copy of your Google Photos and Drive, then bring it into Quark
navigation:
  title: Google Takeout Guide
  order: 3
---

# Moving from Google with Google Takeout

Google Takeout lets you download a copy of what you keep with Google: your photos, your Drive files, and more. This
guide walks you through getting that copy and bringing it into Quark, where it lives on your own drive at home.

You will need a computer with a web browser, and some time. Google can take a while to prepare a large export.

## How to use it

### Step 1: Ask Google for your export

1. Go to **[takeout.google.com](https://takeout.google.com)** and sign in if asked.
2. You'll see a list of Google products. Click **Deselect all**, then tick only the ones you want:
   - **Google Photos**: your photos and videos
   - **Google Drive**: your documents, spreadsheets and other files
3. Click **Next step**.
4. Under **Delivery method**, choose **Send download link via email**.
5. Set the file type to **.zip** and pick a size. **2 GB** works well, because smaller files are easier to upload.
6. Click **Create export**.

Google can take a few minutes or a few days, depending on how much you have. It emails you when the export is ready.

> **Good to know:** A large photo library often comes as several zip files, numbered `-001`, `-002` and so on. That's
> normal. Repeat the steps below for each one.

### Step 2: Download your export

1. Open the email from Google.
2. Click the download link for each zip file.
3. Save them somewhere easy to find, such as your **Downloads** folder.

### Step 3: Upload to Quark

Your files go from your computer straight to your Quark. They don't pass through anyone else's cloud on the way.

Do this at home, on your home WiFi. In a web browser, Quark works only at home. Big zip files upload fastest there
anyway.

1. Open Quark in your browser and go to **Files**.
2. If you like, tap **New folder** and make a folder for your Google data, such as `Google Import`. Open it.
3. Tap **Upload** and pick your zip files. If a small menu opens first, choose **Files**. You can pick several zip
   files at once.
4. Wait for the upload to finish. Large files can take a while.

### Step 4: Unpack the zip files

A zip file is a bundle. To get your photos and files out of it:

1. Find the zip file in **Files**.
2. Right-click it, or tap its **⋮** menu.
3. Choose **Extract here**. While it works, the menu reads **Extracting...**. Large zips take a while.

Your files land in a new folder beside the zip, with the same name. For example, `takeout-001.zip` becomes a folder
called `takeout-001`. If a folder with that name is already there, Quark leaves it alone and adds a number to the new
one instead, such as `takeout-001_(1)`. The new folder appears only once everything is unpacked.

Once you have checked the new folder, you can delete the zip to free up space.

> **How Google arranges photos:** Inside the new folder you'll find a `Google Photos` folder, with folders inside it
> such as `Photos from 2022`. Next to each photo there is a small `.json` file. That is Google's notes about the photo.
> You can keep those files or delete them. Your photos are the `.jpg`, `.heic` and `.mp4` files.

### Step 5: Enjoy your files

Your photos and documents now live on your Quark, at home. Anyone in your household who signs in can find what you
share with them.

- Browse everything in **Files**.
- See your pictures in **Photos**. Quark finds them in your files on its own. Videos stay in **Files**.

## Tips

**Start small.** Try one year of photos first, to get comfortable, before you bring over everything.

**Several zip files?** Upload and unpack each one the same way. Each zip holds different files, so you want them all.

**A zip inside a zip?** Sometimes Google puts zips inside the export. Unpack the outer one, then use **Extract here** on
the zips you find inside.

**What about Google Docs, Sheets and Slides?** Google exports them as Microsoft Office files (Word, Excel and
PowerPoint) or as PDFs. Here is what Quark does with each:

- **PowerPoint files** open in [Slides](/docs/slides#powerpoint-in-and-out). Use **Import PowerPoint** in Slides, or
  **Open as presentation** from the file's menu in **Files**.
- **Excel files**: open one in **Files**, and Quark offers to turn it into a spreadsheet you can edit. Your original
  file stays as it is. See [Sheets](/docs/sheets#bring-a-spreadsheet-into-quark).
- **Word files** are kept safe in **Files**, but they don't open inside Quark yet, and [Docs](/docs/docs) can't bring
  them in. Download one to edit it elsewhere, or start a new document in Docs.
- **PDFs** show up in [Books](/docs/books), along with your e-books.

## What about other Google services?

This guide covers Photos and Drive. Takeout can also export other things, such as your Gmail and Google Calendar.
Quark can keep those files safe in **Files**, but it can't open them yet. Calendar can't bring in a Google Calendar
export yet, either. See [Calendar](/docs/calendar).

## If something goes wrong

- **The upload stopped.** Check that you are still on your home WiFi, then upload that zip again.
- **Extract here isn't in the menu.** It only appears on zip files and other archives. A zip that is still inside
  another zip has to come out first.
- **Extract here failed.** Quark refuses zips that are locked with a password. Download a fresh export from Google,
  without a password, and try again.

Still stuck? See [Help & Support](/docs/help).

## Related

- [Files](/docs/files): uploading, folders, and [Extract here](/docs/files#extract-here)
- [Photos](/docs/photos): browsing and sorting your pictures
- [Slides](/docs/slides): presentations, including PowerPoint files

## Nerd Notes

Checked against quark `main` at `c0f4eefc` (v0.56.2 plus one test-only commit).

**Where Extract here puts things.** `POST /api/v0/files/extract` unpacks into a hidden staging folder, then moves it
into place beside the archive, named after the archive without its extension (double extensions such as `.tar.gz`
included). On a name clash it picks a free name in the form `name_(1)` and never merges. A failed run deletes the
staging folder (`pkg/util/fileutil/archive.go`, `pkg/util/storageutil/extract.go`, `storageutil.go`). Links inside the
archive are skipped, and encrypted archives are refused. The menu only offers it on an archive that isn't itself
inside another archive (`lib/widgets/file_browser/file_browser_view/file_menu.dart`).

**Limits.** `DefaultArchiveLimits`: 100,000 entries, 10 GiB per entry, 256 GiB decompressed in total, 128 path segments
deep.

**Archive types.** `.zip`, `.rar`, `.7z`, `.tar`, `.tar.gz`/`.tgz`, `.tar.bz2`/`.tbz2`/`.tbz`, `.tar.xz`/`.txz`,
`.tar.zst`/`.tzst`, single-file `.gz`/`.bz2`/`.xz`/`.zst`, and the zip-based `.cbz`, `.cb7`, `.jar`, `.apk` and `.whl`.

**PowerPoint.** `POST /api/v0/files/import/pptx` converts `.pptx`, `.pptm` or `.ppsx` into a Quark presentation
(`internal/server/api/v0/files/import_pptx.go`, `pkg/util/pptxutil`). The original file is left in place.

**Excel.** Opening a workbook asks **Convert to .qsheet?** and writes a new `.qsheet` beside it. The workbook is not
modified.

**Word.** The server has a `POST /api/v0/files/convert/document` endpoint and a document preview, but the app doesn't
call either in v0.56.2, so a `.docx` opens the generic file viewer.

**Photos.** Photos lists every readable `image/*` file, HEIC included (`pkg/util/photoutil/list.go`). Videos are read
only to pair Live Photos, and are never listed.
