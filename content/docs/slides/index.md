---
title: Slides
description: Make and present slide decks on your Quark, and bring PowerPoint files in and out
navigation:
  title: Slides
  order: 1
---

# Slides

Slides lets you make presentations and keep them on your Quark. Build a deck, present it full screen, and share it with
the people in your house. You can open PowerPoint files too, and save your decks back out as PowerPoint.

Each presentation is a file in [Files](/docs/files), next to everything else you keep there. Slides is part of every
Quark. There is nothing to turn on.

## How to use it

### Make a presentation

1. Open **Slides** from the app drawer.
2. Tap **New presentation**.
3. Type a name and tap **Create**.

The editor opens on a new deck with one title slide. It saves as you go.

### Present it

1. In the editor, tap **Present** in the top bar.
2. Tap the right side of the screen, swipe, or press the right arrow to go forward. Tap the left side, or press the left
   arrow, to go back.
3. Press Escape, or tap **End the presentation**, to go back to the editor.

### Open a PowerPoint file

1. On the Slides page, tap **Import PowerPoint** (**Import** on a phone).
2. Choose **From your Quark** or **From this device**, then pick the file.
3. If Quark lists anything it could not bring across, read it, then tap **Open presentation**.

## Your presentations

The Slides page lists every presentation you can open, newest first.

- **Search** finds presentation names straight away. After a short pause it also finds words inside slides and speaker
  notes, listed under **Content matches**.
- Tap a presentation to open it. You can also open one straight from Files.
- An admin's new presentation goes at the top of the Quark. A member's goes in their own folder.

## Editing

The save chip in the top bar shows where you are. It reads **Save** while a change waits, **Saving…** while it is sent,
then **Saved**. Tap **Save** to save at once. If a save fails, your changes stay on screen and the chip reads **Retry
save**.

What you can do:

- **Slides**: add, duplicate, delete and reorder them in the slide panel. Drag a thumbnail, or use its **⋮** menu.
- **On a slide**: text boxes, shapes, lines and arrows, pictures (from your device or from your Quark), tables, and
  charts. Select, move, resize and rotate them on the slide.
- **Look**: five themes (Light, Dark, Warm, Cool and High contrast), slide layouts, backgrounds, and colors that follow
  the theme.
- **Transitions**: none, fade, push, wipe or zoom, for one slide or the whole deck.
- **Find and replace** across every slide.
- **Undo** and **Redo**.
- **Speaker notes** under the slide, one set per slide.
- **Keyboard shortcuts**: press `?` or F1 for the list.

On a phone, the same tools sit under the **Insert** and **Format** menus.

## Presenting

Tap **Present**, or choose **Present from this slide** in a slide's **⋮** menu. The deck fills the window.

- Go forward with the right arrow, Space or Enter. Go back with the left arrow or Backspace. You can also tap either
  side of the screen, or swipe.
- **Presenter view** shows the current slide, the next one, a timer, and your speaker notes. It needs a wide window, so
  phones don't get it.
- **Fullscreen**, or press F, works in a browser and on a phone.
- Press Escape, or tap **End the presentation**, to go back to the editor on the slide you stopped at.

## PowerPoint in and out

**Bringing a file in.** Quark opens `.pptx` files, and the related `.pptm` and `.ppsx`. It does not open the older
`.ppt` format. In Files, a PowerPoint file's menu also has **Open as presentation**, which does the same thing.

The new presentation is saved next to the PowerPoint file. The PowerPoint file itself is not changed. Its pictures stay
out of your Photos library.

Most of a deck comes across: text, shapes, pictures, tables, backgrounds, speaker notes, and fade, push, wipe and zoom
transitions. Some things don't, such as animations, video and audio, SmartArt, and fonts saved inside the file. When
something is left out, Quark tells you what, and on which slides, before the presentation opens.

A Google Slides deck from [Google Takeout](/docs/files/google-takeout) arrives as a PowerPoint file, so you can open it
the same way.

**Saving a file out.** In the editor, tap **Export as PowerPoint (.pptx)**. Quark saves your latest changes first, then
gives you a PowerPoint file named after the presentation. It opens in PowerPoint, Keynote, LibreOffice and Google
Slides. Nothing in your presentation's folder changes.

## Sharing

Tap **Share** in the editor, or choose **Share** from a presentation's menu in the list. This is the same share sheet
Files uses. Pick a person or a group and a level: **Can view**, **Can edit** or **Owner**.

Someone with **Can view** can open the presentation, step through it, present it and export it. They can't change it.
The first time they try, the editor switches to **View only**, with a lock in the top bar.

If two people edit the same presentation at once, the last save wins. Quark does not merge the changes.

## Related

- [Files](/docs/files): where your presentations live
- [Google Takeout](/docs/files/google-takeout): moving Google exports onto Quark
- [Keyboard Shortcuts](/docs/help/keyboard-shortcuts#slides): every key in the editor and while presenting

## Nerd Notes

Checked against quark v0.56.2 (`main` at `c0f4eefc`). The user journeys are
[`docs/user-journeys/slides.md`](https://github.com/autobutler-org/quark/blob/main/docs/user-journeys/slides.md); the
shortcut list is
[`docs/slides-keyboard-shortcuts.md`](https://github.com/autobutler-org/quark/blob/main/docs/slides-keyboard-shortcuts.md).

**Not a beta any more.** Slides left beta in v0.54.0 (quark #3368, #2869). The beta flag registry
(`pkg/util/featureflagutil/registry.go`) is empty, so there is no admin switch and no **Features** tab in Settings. A
flag stored from the beta does not hide Slides, and **Open as presentation** is always offered.

**Files.** A presentation is a `.qslide` file. A new one is `<name>.qslide` at the root for an admin, or in the member's
home folder, and opens at `/slides/<path>` with one 16:9 title slide. Autosave fires about two seconds after the last
change. Presenting is `/slides/<path>/present`, and `?slide=N` starts at slide N. Presenter view needs a window at least
900 pixels wide. Transitions run from 200 to 2000 ms.

**Import.** `POST /api/v0/files/import/pptx` (`internal/server/api/v0/files/import_pptx.go`, converter in
`pkg/util/pptxutil/`). It reads `.pptx`, `.pptm` and `.ppsx`, and writes `Talk.qslide` (or `Talk_(1).qslide`) beside
the source with pictures in `Talk_media/`. A file from the device is streamed into the default upload folder first.
Preset shapes are drawn as themselves and freeform shapes as vector paths (v0.55.2, quark #3654, #3658), and outer
shadows are drawn (#3661). The import warns, slide by slide, about what it drops or approximates: animations, video and
audio, SmartArt, embedded objects, ink, linked pictures, picture fills, unreadable tables or chart data, tables over 500
rows, 100 columns or 5000 cells, oversized pictures, transitions with no match, other shadows, and embedded fonts by name
(#3660). Imported pictures are kept out of Photos (#3669). A damaged or oversized file reads "Quark couldn't read that
PowerPoint file. It may be damaged or too large to import."

**Export.** `GET /api/v0/files/export/pptx` streams the download. It carries the aspect ratio, shapes, lines, text and
formatting, pictures, groups, rotation, stacking order, backgrounds, speaker notes, and fade, push, wipe and zoom
transitions at their durations. A chart goes out as a text summary and a table of its data, not a native chart part. A
picture that is missing, unreadable to the user, or not PNG, JPEG, GIF or BMP becomes a gray box with its alt text.

**Sharing.** The share sheet is the Files one. A **Can view** save is refused by the Quark, and the editor turns view
only on that first refusal. There is no merge: the last save wins.
