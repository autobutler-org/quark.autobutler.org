---
title: Sheets
description: Spreadsheets on your Quark — tabs, toolbars, filters, freezing, formatting, and bringing in CSV and Excel files
navigation:
  title: Sheets
  order: 1
---

# Sheets

Sheets is Quark's spreadsheet editor. Use it for budgets, lists, schedules, and anything else that fits in rows and
columns. It can also open the CSV and Excel files you already have.

Each spreadsheet is a file on your Quark, so it sits in Files like anything else. At home you can open it from any web
browser or the Quark app. Away from home, the iPhone and Android apps can open it too, once an admin turns on
[remote access](/docs/settings/remote-access).

Formulas have their own page: [Sheets formulas](/docs/sheets/formulas).

## How to use it

1. Open **Sheets** from the app menu.
2. Click **New spreadsheet** in the top bar.
3. Type a name and confirm. The spreadsheet opens with one empty tab, **Sheet 1**.
4. Click a cell and start typing. Press **Enter** to confirm.
5. Quark saves on its own a couple of seconds after each change.

To come back to it later, open **Sheets** and pick it from the list.

---

## Find your spreadsheets

**Sheets** lists every spreadsheet your account can reach.

Type in the search box at the top. Quark looks at names and at what is inside your files, including tab names and
formulas:

- Spreadsheets whose **name** matches are listed first. If the contents also match, a short extract shows under the
  name.
- Spreadsheets that match only by their **contents** are listed under **Content matches**.
- Documents that match, by name or by contents, are listed under **In Docs**. You can open one from there.

Only Docs, Sheets and Slides search inside files. The search in Files looks at names only.

Each row has a menu with **Rename**.

---

## Where new spreadsheets go

A spreadsheet you make in **Sheets** is saved in your own home folder. If you are an admin, it goes in the top-level
folder instead. You can also make one from Files: **New file**, then **Spreadsheet**, which puts it in the folder you
are looking at.

Each spreadsheet has its own web address. Bookmark it to open it again in one click.

To rename the file, click its title in the top bar.

---

## Saving

Sheets saves on its own about 2 seconds after each change. There is no switch to turn that off. **Save** in the top
bar saves now, and its icon fills in while there are unsaved changes.

Sheets does not ask before you leave. If you close a spreadsheet within a couple of seconds of a change, click
**Save** first.

---

## Tabs

A spreadsheet holds one or more sheets, shown as tabs along the bottom. A new spreadsheet starts with **Sheet 1**.

- The **+** button (**Add sheet**) adds a tab.
- Each tab's menu has **Rename**, **Duplicate**, **Move left**, **Move right**, and **Delete**. Open it with the three
  dots on the tab, by tapping the tab you are already on, or with a long press.
- Two tabs cannot share a name, ignoring capitals.
- **Delete** asks first, and is not offered while only one tab is left.

---

## The two toolbars

Two toolbars sit above the grid. Hover over a button for its name. Each scrolls sideways when it does not fit.
On a narrow screen, such as a phone, the second folds into one **Format** button with the same choices in its menu.

The first does the editing:

- **Undo** and **Redo**, up to 100 steps back
- **Insert row before** / **after** and **Insert column before** / **after**
- **Delete row**, **Delete column**, **Duplicate row**, **Duplicate column**, **Clear row**, **Clear column**
- **Copy**, **Cut**, **Paste**, and **Clear selected cells**
- **Fill down** and **Fill right**
- **Sort…** by one column, ascending or descending
- **Remove duplicate rows**
- **Find & replace…** with a **Case sensitive** option. It replaces every match at once.
- **Go to cell…** by row and column number
- **Filter column…** and **Clear filters**
- **Freeze rows and columns**
- **Export CSV**, **Export Excel workbook**, and **Import CSV…**

The second does the formatting:

- **Bold** and **Italic**
- **Text color** and **Fill color**
- **Align left**, **Align center**, **Align right**
- **Number format**: Automatic, Number (`1,234.56`), Currency (`$1,234.56`), Percent (`12.34%`), or Date (a day
  number shown as `2025-01-31`)
- **Decrease decimal places** and **Increase decimal places**, from 0 to 10
- **Clear formatting**, which keeps the values

Formatting changes how a value looks, not the value. Formulas, sorting, and filters all use the value underneath.

---

## Selecting cells

Drag across cells, Shift+click, use Shift and the arrow keys, or click a row or column header. On a touch screen,
long-press and then drag. The box at the left of the formula bar shows what is selected, like `B2:D9`.

Copy, cut, paste, clear, and fill act on the whole selection.

Copy and paste use your device's clipboard as tab-separated text, so you can paste to and from other spreadsheet
apps. Where the browser blocks the clipboard, Quark keeps its own copy inside the app. Formulas copy as formulas, and
their cell references do not shift.

---

## Filters

Each column header has a funnel. It opens a list of the column's values with a search box, **Select all**, and
**(Blanks)** for empty cells. You can add one condition: **Text contains**, **Text does not contain**, **Is equal
to**, **Greater than**, or **Less than**. Click **Apply**.

- Filtering hides rows. It does not delete them, and row numbers keep their place.
- Frozen rows count as headers and are never filtered out.
- **Clear filters** shows everything again. A badge on it counts the filtered columns.

---

## Freeze, resize, and fit

- **Freeze rows and columns** keeps the top rows or left columns in place while the rest scrolls: none, 1, 2, or up to
  the row or column you have selected.
- Drag the edge of a column header or a row number to resize it. Double-click or double-tap the edge to fit the
  contents.

Column widths, row heights, frozen rows and columns, filters, and formatting are all saved with the file.

---

## Keyboard

| Keys                        | What it does                               |
| --------------------------- | ------------------------------------------ |
| Arrow keys                  | Move one cell                              |
| Tab / Shift+Tab             | Move right / left                          |
| Enter                       | Confirm an edit                            |
| Start typing, or F2         | Edit the cell                              |
| Esc                         | Cancel the edit                            |
| Delete or Backspace         | Clear the selected cells                   |
| Home / End                  | First / last column in the row             |
| Ctrl+Home / Ctrl+End        | First / last cell                          |
| Ctrl+A                      | Select every cell                          |
| Ctrl+C / Ctrl+X / Ctrl+V    | Copy / cut / paste                         |
| Ctrl+Z                      | Undo                                       |
| Ctrl+Y or Ctrl+Shift+Z      | Redo                                       |
| Ctrl+D / Ctrl+R             | Fill down / fill right                     |
| Ctrl+= / Ctrl+-             | Insert a row / delete the selected rows    |
| Ctrl+Shift+= / Ctrl+Shift+- | Insert a column / delete the selected ones |

On a Mac, Cmd works wherever the table says Ctrl. The plus and minus keys on a number pad work in place of = and -.
Page Up and Page Down do nothing yet.

---

## CSV and Excel inside the editor

These act on the tab you are looking at, except the Excel export.

- **Export CSV** opens a box with the tab as CSV text. It does not download a file: select the text and copy it.
- **Import CSV…** opens a box to paste CSV text into. Clicking **Import** replaces everything on the current tab and
  clears its filters and formatting.
- **Export Excel workbook** saves the whole spreadsheet as an `.xlsx`, one worksheet per tab. In a browser it
  downloads; elsewhere you pick where to save it. Bold, italic, colors, alignment, number formats, column widths, and
  frozen rows and columns come along. Formulas arrive as plain text, like `=SUM(A1:A3)`, not as working formulas,
  because Quark's formulas are not written the same way as Excel's.

---

## Bring a spreadsheet into Quark

Open a `.csv`, `.xlsx`, or `.xlsm` file in Files and Quark asks **Convert to .qsheet?** Click **Convert**. Quark
makes a new spreadsheet with the same name beside the original and opens it in Sheets. The original file is not
changed or deleted.

### From CSV

The CSV becomes a spreadsheet with one tab. The conversion runs on the phone or computer you are using, so a very
large CSV is limited by that device's memory.

If a spreadsheet with that name is already in the folder, converting a CSV replaces it without asking.

### From Excel

Your Quark converts the workbook itself. If a spreadsheet with that name is already there, Quark asks: **Open
existing**, **Replace** with a fresh conversion, or **Cancel**.

What comes across:

- Every worksheet, as a tab
- Text as it was
- Numbers as Excel stores them, without their formatting. A cell that showed `$1,234.50` arrives as `1234.5`.
- Dates and times as text, like `2025-01-31` or `2025-01-31 09:30:00`
- TRUE and FALSE

What does not:

- **Formulas.** Each formula cell keeps the last value Excel calculated. Quark understands fewer functions than
  Excel, so bringing the formulas across would turn some of them into errors.
- Formatting, column widths, charts, and comments

Quark refuses a workbook bigger than any of these: 64 sheets, 100,000 rows on one sheet, 16,384 columns, or
1,000,000 cells in all. It also refuses one that is not a real workbook.

Old Excel files (`.xls`, from before 2007) are not converted. Save them as `.xlsx` in Excel first.

Google Sheets files (`.gsheet`) are not converted either. A Google Takeout export gives you `.xlsx` files, and those
convert as above.

---

## What Sheets does not do yet

- No references to another tab. A formula reads only its own tab.
- No charts, comments, conditional formatting, or data validation
- No Page Up or Page Down

---

## A spreadsheet is a file

A spreadsheet is an ordinary file in Files. You can move it, rename it, share it with another account from its
**Share…** menu, delete it to Trash, and restore it, like any other file. Its contents are included in the Docs,
Sheets and Slides search.

---

## If something goes wrong

**A cell shows `#VALUE!`, `#NAME?` or another code.** The formula could not give an answer. Select the cell to read
the reason under the formula bar, then see [Errors](/docs/sheets/formulas#errors).

**Rows seem to be missing.** A filter may be hiding them. Look for the badge on **Clear filters**, and click it to show
every row again.

**My last change is gone.** Sheets saves about 2 seconds after a change and does not ask before you leave. Click
**Save** before you close a spreadsheet you have just changed.

**An Excel file will not convert.** Check that it is `.xlsx` or `.xlsm`, not an old `.xls`, and that it is within the
size limits above.

**I can't open Sheets away from home.** Use the iPhone or Android app, and check that an admin has turned on
[remote access](/docs/settings/remote-access). In a web browser, Quark works only on your home WiFi.

---

## Related

- [Sheets formulas](/docs/sheets/formulas): every function, and where formulas differ from Excel
- [Docs](/docs/docs): the document editor
- [Google Takeout](/docs/files/google-takeout): moving files over from Google
- [Remote access](/docs/settings/remote-access): using Quark away from home

## Nerd Notes

- **File format.** A spreadsheet is a `.qsheet` file: JSON with one entry per tab, roughly
  `{"tabs":[{"name":"Sheet 1","data":{"rows":[["a","b"], …]}}]}`, plus each tab's formatting, sizes, frozen panes and
  filters. The page is `lib/pages/spreadsheet_editor_page.dart`; the grid and toolbars are the `data_table` package,
  and formulas are the `quark_formula` package.
- **Address.** A spreadsheet opens at `/sheets/` followed by its path, for example `/sheets/data/budget.qsheet`.
- **Auto-save.** A fixed 2-second debounce after each change, with no off switch.
- **Narrow screens.** Below 600 pixels wide, the formatting row becomes the single **Format** menu.
- **Excel export.** `GET /api/v0/files/export/xlsx` streams the `.qsheet` back as an `.xlsx`, one worksheet per tab.
  Formulas are written as their text, because the server has no formula engine to supply the cached results Excel
  expects. It only reads; nothing is written beside the sheet.
- **Excel import.** `POST /api/v0/files/convert/xlsx` writes a sibling `.qsheet` and leaves the workbook alone. It
  answers 409 when a `.qsheet` of that name exists and `overwrite` was not set. With `overwrite` on the internal drive,
  the old sheet is saved to its version history first. The limits are in `pkg/util/xlsxutil`: 64 sheets, 100,000 rows,
  16,384 columns and 1,000,000 cells.
- **CSV import.** Parsed on the device and uploaded as a `.qsheet` with overwrite on, which is why it replaces without
  asking.
- **Content search.** The list page calls `GET /api/v0/files/search/content` about 400 ms after typing stops, and shows
  only the `.qsheet` and `.qdoc` hits. For a `.qsheet` the index holds the tab names and every cell's text, formulas
  included, so searching `SUM` finds sheets that use it. See [Docs](/docs/docs#nerd-notes) for the rest of the search.
