---
title: Sheets
description: Spreadsheets on your Quark — tabs, toolbars, filters, freezing, formatting, and bringing in CSV and Excel files
navigation:
  title: Sheets
  order: 1
---

# Sheets

Sheets is Quark's spreadsheet editor. A spreadsheet is a `.qsheet` file on your Quark, so it sits in Files like
anything else and opens from any browser or phone on your home network.

Formulas have their own page: [Sheets formulas](/docs/sheets/formulas).

---

## Find your spreadsheets

Open **Sheets** from the app drawer. It lists every spreadsheet your account can reach.

The search box matches spreadsheet names first. It also searches inside spreadsheets and lists those hits under
**Content matches**. Documents whose name matches show up under **In Docs**.

Each row has a menu with **Rename**.

---

## Create a spreadsheet

1. In **Sheets**, click **New spreadsheet** in the top bar.
2. Type a name and confirm.

It is saved in your own home folder. If you are an admin, it goes in the top-level folder instead. You can also make
one from Files: **New file**, then **Spreadsheet**, which puts it in the folder you are looking at.

A spreadsheet opens at its own address, `/sheets/` followed by its path, so you can bookmark it.

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

Two toolbars sit above the grid. Each scrolls sideways when it does not fit. Hover over a button for its name.

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

The Quark converts the workbook itself. If a spreadsheet with that name is already there, Quark asks: **Open
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

A `.qsheet` is an ordinary file in Files. You can move it, rename it, share it with another account from its
**Share…** menu, delete it to Trash, and restore it, like any other file. Its contents are included in search.

---

## Related

- [Sheets formulas](/docs/sheets/formulas) — every function, and where formulas differ from Excel
- [Docs](/docs/docs) — the document editor
- [Google Takeout](/docs/files/google-takeout) — moving files over from Google
