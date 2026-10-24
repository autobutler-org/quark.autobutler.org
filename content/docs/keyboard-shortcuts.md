---
title: Keyboard Shortcuts
description: Every keyboard shortcut in Quark, grouped by where you are
navigation:
  title: Keyboard Shortcuts
  order: 26
---

# Keyboard Shortcuts

These are the shortcuts Quark has today, grouped by where you are. Outside these places, Tab and Shift+Tab move between
controls, and Enter or Space presses the one that has focus.

**Ctrl/⌘** means Ctrl on Windows, Linux, and Android, and ⌘ (Command) on a Mac or iPad. In Docs, Sheets, and Slides,
Quark accepts either key on any keyboard. **Alt** is Option (⌥) on a Mac.

---

## Photo viewer

Press **?** in the photo viewer to see this list in the app. On a computer, the keyboard button in the top bar opens it
too.

| Keys | Action                  |
| ---- | ----------------------- |
| ← →  | Previous / next photo   |
| F    | Toggle favorite         |
| R    | Rotate 90° clockwise    |
| I    | Show or hide info panel |
| Esc  | Close the viewer        |
| ?    | Show the shortcuts list |

## Photos

| Keys | Action                                                        |
| ---- | ------------------------------------------------------------- |
| Esc  | Leave selection mode, or close the search field if it is open |

## Files

| Keys | Action                                     |
| ---- | ------------------------------------------ |
| Esc  | Close the search field while you are in it |

## 3D model viewer

STL, OBJ, and PLY files open in a 3D viewer. Click the model first so it has focus.

| Keys         | Action                  |
| ------------ | ----------------------- |
| Arrow keys   | Turn the model          |
| Shift+arrows | Move the model          |
| + (or =), -  | Zoom in, zoom out       |
| 0 or Home    | Reset the view          |
| W            | Turn wireframe on / off |

## Docs

| Keys      | Action                             |
| --------- | ---------------------------------- |
| Ctrl/⌘+F  | Open or close the find bar         |
| Esc       | Close the find bar                 |
| Tab       | In a code block, indent the code   |
| Shift+Tab | In a code block, remove one indent |

### Formatting as you type

Type these at the start of an empty line, then a space, and the line changes format:

| Type          | You get       |
| ------------- | ------------- |
| `1.`          | Numbered list |
| `-` `*` `+`   | Bullet list   |
| `#`           | Heading 1     |
| `##`          | Heading 2     |
| `###`         | Heading 3     |
| `>`           | Quote         |
| `[]` or `[ ]` | Checkbox      |

Three backticks (` ``` `) on an empty line start a code block. Inside a line, `**bold**`, `__bold__`, `*italic*`,
`~strike~` (one tilde on each side), and `` `code` `` format as you finish typing them.

### Moving and deleting text in a browser

In the web app, Docs uses the text-editing keys of your system:

| On a Mac    | Elsewhere      | Action                                   |
| ----------- | -------------- | ---------------------------------------- |
| ⌥+← →       | Ctrl+← →       | Move one word                            |
| ⌘+← →       | Alt+← →        | Move to the start or end of the line     |
| ⌘+↑ ↓       | Ctrl+Home/End  | Move to the start or end of the document |
| ⌥+Backspace | Ctrl+Backspace | Delete the word before the cursor        |
| ⌘+Backspace | Alt+Backspace  | Delete to the start of the line          |

Add Shift to a move to select the text it passes over.

## Sheets

### Moving around

| Keys            | Action                         |
| --------------- | ------------------------------ |
| Arrow keys      | Move one cell                  |
| Tab / Shift+Tab | Move right / left              |
| Home / End      | First / last column in the row |
| Ctrl/⌘+Home     | First cell of the sheet        |
| Ctrl/⌘+End      | Last cell of the sheet         |

### Editing

| Keys                       | Action                                        |
| -------------------------- | --------------------------------------------- |
| Start typing               | Edit the highlighted cell                     |
| F2                         | Edit the highlighted cell                     |
| Enter                      | Edit the highlighted cell, or finish the edit |
| Esc                        | Cancel the edit and keep the old value        |
| Delete / Backspace         | Clear every selected cell                     |
| Ctrl/⌘+Z                   | Undo                                          |
| Ctrl/⌘+Y or Ctrl/⌘+Shift+Z | Redo                                          |

### Selecting, copying, and filling

| Keys             | Action                                      |
| ---------------- | ------------------------------------------- |
| Shift+arrows     | Grow or shrink the selection                |
| Ctrl/⌘+A         | Select every cell                           |
| Ctrl/⌘+C / X / V | Copy, cut, paste                            |
| Ctrl/⌘+D         | Fill down from the selection's top row      |
| Ctrl/⌘+R         | Fill right from the selection's left column |

Copy and paste use tab-separated text, so you can paste to and from Google Sheets and Excel. In a browser that needs
Quark's address to start with `https://`, which is how setup connects you.

### Rows and columns

| Keys                      | Action                                  |
| ------------------------- | --------------------------------------- |
| Ctrl/⌘ and + (or =)       | Insert a row above the highlighted cell |
| Ctrl/⌘ and -              | Delete the selected rows                |
| Ctrl/⌘+Shift and + (or =) | Insert a column before it               |
| Ctrl/⌘+Shift and -        | Delete the selected columns             |

### Formulas

While you type a formula, a list of matching functions appears.

| Keys or pointer   | Action                                          |
| ----------------- | ----------------------------------------------- |
| ↑ ↓               | Move through the function list                  |
| Tab or Enter      | Pick the highlighted function                   |
| Esc               | Close the list (press again to cancel the edit) |
| Click a cell      | Insert its reference, such as `B2`              |
| Drag across cells | Insert the range, such as `B2:D9`               |

---

## Beta features

These pages appear once an admin turns them on in **Settings → Features**.

### Slides (beta)

Press **?** or **F1** in the slide editor to see the full list in the app, with a search box.

| Keys                     | Action                                          |
| ------------------------ | ----------------------------------------------- |
| Ctrl/⌘+Z                 | Undo                                            |
| Ctrl/⌘+Shift+Z or Ctrl+Y | Redo                                            |
| Ctrl/⌘+C / X / V         | Copy, cut, paste                                |
| Ctrl/⌘+D                 | Duplicate the selection                         |
| Delete / Backspace       | Delete the selection                            |
| Arrow keys               | Nudge the selection (add Shift to move further) |
| Tab / Shift+Tab          | Select the next / previous element              |
| Enter or F2              | Edit the selected text box or table cell        |
| Esc                      | Finish editing, or clear the selection          |
| Ctrl/⌘+B / I / U         | Bold, italic, underline while editing text      |
| Ctrl/⌘+] / [             | Bring forward / send backward                   |
| Ctrl/⌘+Shift+] / [       | Bring to front / send to back                   |
| Ctrl/⌘+G                 | Group the selection                             |
| Ctrl/⌘+Shift+G           | Ungroup                                         |
| Ctrl/⌘+F                 | Find                                            |
| Ctrl/⌘+H                 | Find and replace                                |
| Enter / Shift+Enter      | In the find bar, next / previous match          |

In a table, the arrow keys move between cells, Shift+arrows grow the cell selection, and Tab moves to the next cell.
With a chart selected, Enter opens its data.

While presenting:

| Keys                           | Action             |
| ------------------------------ | ------------------ |
| → , Space, Page Down, or Enter | Next slide         |
| ← , Page Up, or Backspace      | Previous slide     |
| Home / End                     | First / last slide |
| F                              | Toggle fullscreen  |
| Esc                            | End the show       |

### Calendar (beta)

In Week and Day view, focus an event with Tab, then:

| Keys          | Action                                        |
| ------------- | --------------------------------------------- |
| Alt+↑ ↓       | Move the event 15 minutes earlier / later     |
| Alt+← →       | Move the event a day earlier / later          |
| Alt+Shift+↑ ↓ | Make the event end 15 minutes earlier / later |

### Chat (beta)

| Keys        | Action                                                       |
| ----------- | ------------------------------------------------------------ |
| Enter       | On a computer: send. On a phone or tablet: start a new line. |
| Shift+Enter | On a computer: start a new line                              |

Type `@` to mention someone. A list of names appears: ↑ ↓ move through it, Tab picks a name (so does Enter on a
computer), and Esc closes it.

---

## Related

- [Accessibility](/docs/accessibility) — large text, screen readers, high contrast, and reduced motion
