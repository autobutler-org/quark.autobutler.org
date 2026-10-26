---
title: Docs
description: Write documents on your Quark — create, edit, save, find, export to PDF, and print
navigation:
  title: Docs
  order: 1
---

# Docs

Docs is Quark's document editor. Use it for letters, notes, lists, and anything else you would write in a word
processor.

Each document is a file on your Quark, so it sits in Files like anything else. At home you can open it from any web
browser or the Quark app. Away from home, the iPhone and Android apps can open it too, once an admin turns on
[remote access](/docs/settings/remote-access).

## How to use it

1. Open **Docs** from the app menu.
2. Click **New document** in the top bar.
3. Type a name and confirm. The document opens, ready to type.
4. Write. Quark saves on its own a couple of seconds after you stop typing.
5. Click **Done** when you are finished.

To come back to it later, open **Docs** and pick it from the list.

---

## Find your documents

**Docs** lists every document your account can reach.

Type in the search box at the top. Quark looks at names and at the words inside your files:

- Documents whose **name** matches are listed first. If the words inside also match, a short extract shows under the
  name.
- Documents that match only by their **contents** are listed under **Content matches**.
- Spreadsheets that match, by name or by contents, are listed under **In Sheets**. You can open one from there.

Only Docs, Sheets and Slides search inside files. The search in Files looks at names only.

Each row has a menu with **Rename**.

---

## Where new documents go

A document you make in **Docs** is saved in your own home folder. If you are an admin, it goes in the top-level folder
instead.

You can also make one from Files: **New file**, then **Document**. That puts it in the folder you are looking at.

Each document has its own web address. Bookmark it to open it again in one click.

---

## Read, then edit

A document opens read-only, so a stray tap does not change it. The strip under the page says **Read-only**.

- Click **Edit** in the top bar, or tap the page, to start editing.
- Click **Done** when you are finished. Quark saves any changes as you leave edit mode.

The formatting toolbar only appears while you are editing.

---

## Format text

The toolbar above the page has, from left to right:

- **Undo** and **Redo**
- **Bold**, **Italic**, **Underline**, **Strikethrough**, and **inline code**
- **Text color** and **highlight color**. The highlight picker has a **Clear** button to remove a highlight.
- **Clear formatting**
- **Heading style**
- **Numbered list**, **bulleted list**, and **checklist**
- **Code block** and **quote**
- **Decrease indent** and **increase indent**

On a narrow screen the toolbar scrolls sideways.

---

## Saving

Auto-save is on to start with. Quark saves about 2 seconds after you stop typing.

- The cloud button in the top bar turns auto-save off and on. Its tooltip says **Auto-save on** or **Auto-save off**.
  Quark remembers this choice on the device you are using, not for your account.
- **Save** saves now. It only appears while you are editing.
- The strip under the page shows **Unsaved** or **Saved**, plus a word count. A dot after the title also means there
  are unsaved changes.
- If you leave with unsaved changes, Quark asks **Leave without saving?** Choose **Stay** to go back, or **Leave** to
  drop the changes.

---

## Find text

Click the search button in the top bar, or press **Ctrl+F** (**Cmd+F** on a Mac). A find bar opens above the page.
It shows how many matches there are, with **Previous match** and **Next match** buttons. Press **Esc** to close it.

Find works in read-only mode too. There is no replace.

---

## Rename a document

Click the title in the top bar. If there are unsaved changes, Quark saves them first. If that save fails, the rename
does not happen, so nothing is lost.

You can also rename from the row menu in the **Docs** list.

---

## Export to PDF or print

Click **More options** (the three dots) in the top bar to open **Export or print**:

- **Export as PDF** makes an A4 PDF of the document. In a browser it downloads. On a phone, the share sheet opens.
- **Print** opens your device's print dialog.

---

## Dark page

The sun and moon button at the bottom left of the page switches the page between light and dark. It does not change
the rest of the app. Quark remembers your choice on the device you are using.

---

## What Docs does not do yet

- No links, images, or other embedded content
- No choice of font or font size, no text alignment, no subscript or superscript
- No find and replace
- No Word (`.docx`) import or export. PDF is the only export.

---

## A document is a file

A document is an ordinary file in Files. You can move it, rename it, share it with another account from its
**Share…** menu, delete it to Trash, and restore it, like any other file. Its words are included in the Docs, Sheets
and Slides search.

---

## If something goes wrong

**I can't find a document I just wrote.** Search for a word from inside it, not only its name. If you made it from
Files, it is in the folder you were looking at then, not your home folder.

**My changes are gone.** Check whether auto-save was off on that device: the cloud button's tooltip says **Auto-save
off**. Turn it back on, or click **Save** before you leave.

**I can't open Docs away from home.** Use the iPhone or Android app, and check that an admin has turned on
[remote access](/docs/settings/remote-access). In a web browser, Quark works only on your home WiFi.

---

## Related

- [Sheets](/docs/sheets): the spreadsheet editor
- [Getting Started](/docs/start/getting-started): Files, sharing, and Trash
- [Remote access](/docs/settings/remote-access): using Quark away from home

## Nerd Notes

- **File format.** A document is a `.qdoc` file: JSON holding a Quill Delta, `{"ops":[{"insert":"…"}, …]}`. The
  editor is `lib/pages/document_editor_page.dart`, with its toolbar, find bar and status strip in
  `lib/widgets/document_editor/`.
- **Address.** A document opens at `/docs/` followed by its path, for example `/docs/reports/q1.qdoc`.
- **New documents.** **New document** uploads an empty `.qdoc` to the caller's home folder, or to the files root for
  an admin.
- **Auto-save.** A 2-second debounce after the last edit. The on/off choice and the dark page are stored per device,
  not per account.
- **PDF export.** Rendered on the device at A4.
- **Word files.** The server has `POST /api/v0/files/convert/document`, which turns a `.docx`, `.docm` or `.odt` into
  a sibling `.qdoc`. Tables become tab-separated lines and images are dropped. The app does not call it yet, so the
  user-facing part of this page still says there is no Word import.
- **Content search.** The list page calls `GET /api/v0/files/search/content?q=<query>` about 400 ms after typing
  stops, and lists up to 50 hits. The server uses SQLite FTS5 and only returns files the caller can read. For a
  `.qdoc` it indexes the text pulled out of the Delta, not the JSON around it, and reads the first 512 KB of a file.
  The same index covers `.qsheet`, `.qslide` and plain-text formats such as `.txt`, `.md` and `.csv`. The Docs page
  shows only the `.qdoc` and `.qsheet` hits. The Files search (`GET /api/v0/files/search`) matches names only. On a
  PostgreSQL backend, content search answers 501 and the page shows name matches alone.
