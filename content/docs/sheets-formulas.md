---
title: Sheets formulas
description: Every function Sheets supports, its operators and error codes, and where formulas differ from Excel
navigation:
  title: Sheets formulas
  order: 14
---

# Sheets formulas

A cell that starts with `=` is a formula. Sheets works it out and shows the result. This page lists every function
and operator Sheets understands today, and the places it behaves differently from Excel or Google Sheets.

For the rest of the editor, see [Sheets](/docs/sheets).

---

## The short version for Excel users

These are the things that trip people up:

- **Equals is `==`.** `=IF(A1=5, "yes", "no")` is an error. Write `=IF(A1==5, "yes", "no")`.
- **There is no `&`.** Join text with `CONCAT`: `=CONCAT(A1, " ", B1)`.
- **`%` means remainder.** `=7%3` is `1`. It is not "percent". Write `=A1*0.2`, not `=A1*20%`.
- **An empty cell is not zero in arithmetic.** If `A1` is empty, `=A1+1` is `#VALUE!`. `SUM` and the other range
  functions skip empty cells, so `=SUM(A1, 1)` works.
- **`SUM`, `AVERAGE`, `MIN`, and `MAX` stop at text.** Excel skips a word in the middle of a column of numbers. Sheets
  shows `#VALUE!` instead.
- **Conditions must be TRUE or FALSE.** `IF`, `AND`, `OR`, and `NOT` do not treat a number as true or false. Use a
  comparison: `=IF(A1<>0, …)`.
- **Text comparisons care about capitals**, in `==`, `<>`, and `COUNTIF` alike. `"Apple"` and `"apple"` are not equal.
- **Comparing a number with text is an error**, not FALSE.
- **`FLOOR` and `CEILING` take one argument** and round to a whole number.
- **References never shift.** `$` is allowed in `$A$1` but does nothing, and a copied formula keeps its text exactly.
- **No references to another tab.** `Sheet2!A1` does not work. A formula reads only its own tab.

---

## Writing a formula

- Start with `=`.
- A cell is `A1`. A range is `A1:B5`. Capitals do not matter: `=sum(a1:a3)` works.
- Text goes in double quotes: `"hello"`. Write a quote inside text as two quotes: `"say ""hi"""`.
- `TRUE` and `FALSE` are logical values.
- A range only works inside a function. `=A1:A3` on its own is an error.

What a cell holds when a formula reads it:

- A plain number, like `42` or `-3.5`, is a number. A number typed with a comma or a currency sign, like `1,234` or
  `$5`, is text. A number format from the toolbar only changes how a value looks, so it is still a number.
- `TRUE` or `FALSE`, in any capitals, is a logical value.
- Anything else is text.

### Operators

| Operator          | Meaning                            |
| ----------------- | ---------------------------------- |
| `+` `-` `*` `/`   | Add, subtract, multiply, divide    |
| `^`               | Power: `=2^3` is `8`               |
| `%`               | Remainder: `=7%3` is `1`           |
| `==`              | Equal to                           |
| `<>` or `!=`      | Not equal to                       |
| `<` `>` `<=` `>=` | Less than, greater than, and so on |
| `( )`             | Grouping                           |

A comparison gives `TRUE` or `FALSE`.

---

## Functions

Sheets has 32 functions. Square brackets mark an argument you can leave out, and `…` means you can add more.

### Math

| Function                 | What it does                                        |
| ------------------------ | --------------------------------------------------- |
| `SUM(value1, …)`         | Adds numbers and ranges                             |
| `AVERAGE(value1, …)`     | The mean of numbers and ranges                      |
| `MIN(value1, …)`         | The smallest of numbers and ranges                  |
| `MAX(value1, …)`         | The largest of numbers and ranges                   |
| `ABS(value)`             | A number without its sign                           |
| `ROUND(value, [places])` | Rounds to a number of decimal places, 0 if left out |
| `FLOOR(value)`           | Rounds down to a whole number                       |
| `CEILING(value)`         | Rounds up to a whole number                         |
| `MOD(dividend, divisor)` | The remainder after division                        |
| `POWER(base, exponent)`  | A number raised to a power                          |
| `SQRT(value)`            | The square root of a number                         |

### Text

| Function                                                   | What it does                                  |
| ---------------------------------------------------------- | --------------------------------------------- |
| `CONCAT(value1, …)`                                        | Joins values into one piece of text           |
| `LEN(text)`                                                | The number of characters                      |
| `UPPER(text)`                                              | Text in capitals                              |
| `LOWER(text)`                                              | Text in lower case                            |
| `TRIM(text)`                                               | Removes spaces at the ends and doubled spaces |
| `LEFT(text, [count])`                                      | The first characters, 1 if left out           |
| `RIGHT(text, [count])`                                     | The last characters, 1 if left out            |
| `MID(text, start, count)`                                  | Characters from the middle, counting from 1   |
| `FIND(search_for, text, [start])`                          | Where text first appears, counting from 1     |
| `SUBSTITUTE(text, search_for, replace_with, [occurrence])` | Replaces text, or only the nth match          |

`FIND` cares about capitals. When the text is not there, it gives `#VALUE!`.

### Logic

| Function                                       | What it does                                       |
| ---------------------------------------------- | -------------------------------------------------- |
| `IF(condition, value_if_true, value_if_false)` | One value when the condition holds, another if not |
| `AND(value1, …)`                               | TRUE when every value is TRUE                      |
| `OR(value1, …)`                                | TRUE when any value is TRUE                        |
| `NOT(value)`                                   | The opposite of a logical value                    |
| `IFERROR(value, value_if_error)`               | A value, or a fallback when it is an error         |

`IF` needs all three arguments.

### Checking and counting

| Function                    | What it does                               |
| --------------------------- | ------------------------------------------ |
| `ISBLANK(value)`            | TRUE when a cell is empty                  |
| `ISNUMBER(value)`           | TRUE when a value is a number              |
| `ISTEXT(value)`             | TRUE when a value is text                  |
| `COUNT(value1, …)`          | How many values are numbers                |
| `COUNTA(value1, …)`         | How many values are not empty              |
| `COUNTIF(range, criterion)` | How many cells in a range meet a condition |

`COUNTIF` takes a criterion like these:

- A number or `TRUE`/`FALSE` counts cells exactly equal to it: `=COUNTIF(A1:A9, 5)`.
- Text counts cells with exactly that text, capitals included: `=COUNTIF(A1:A9, "paid")`. There are no wildcards.
- Text that starts with a comparison compares against what follows: `">=10"`, `"<>paid"`. Here a single `=` works as
  well as `==`.

### Functions Sheets does not have

Some that people look for: `VLOOKUP`, `HLOOKUP`, `XLOOKUP`, `INDEX`, `MATCH`, `SUMIF`, `SUMIFS`, `AVERAGEIF`,
`TODAY`, `NOW`, `DATE`, and other date and time functions, `TEXT`, `VALUE`, and `PI`. Using one shows `#NAME?`.

---

## Errors

When a formula cannot give an answer, the cell shows an error code. Hover over it for the reason. Select the cell and
the reason is spelled out under the formula bar.

| Code      | What it means                                                                                 |
| --------- | --------------------------------------------------------------------------------------------- |
| `#DIV/0!` | Division by zero, including `%` and `MOD` by zero                                             |
| `#NAME?`  | A function Sheets does not know                                                               |
| `#REF!`   | A reference that does not work, or a **circular reference**: a formula that depends on itself |
| `#VALUE!` | The wrong kind of value, the wrong number of arguments, or a formula Sheets cannot read       |

A typo such as a single `=` in the middle of a formula shows `#VALUE!`, with a reason like "Couldn't read the formula:
Standalone = is not allowed."

Sheets has no `#N/A` or `#NUM!`. The square root of a negative number, for example, is `#VALUE!`.

---

## Help while you type

- **Function suggestions.** Type a letter after `=`, an operator, `(`, or `,` and a list of matching functions opens,
  each with its arguments and a one-line description. Up and Down move through it. Tab or Enter picks one. Esc
  closes it.
- **Click to reference.** While you edit a formula, click a cell to write its reference, like `B2`. Drag across cells
  to write a range, like `B2:D9`. On a touch screen, long-press and then drag.
- **Colors.** Each reference in the formula gets its own color, and the cells it points at are outlined in the same
  color.

You can edit a formula in the cell or in the formula bar above the grid.

---

## Formulas in and out of Excel

- **Excel to Quark.** Converting an `.xlsx` keeps the last value each formula calculated, not the formula. See
  [Bring a spreadsheet into Quark](/docs/sheets#bring-a-spreadsheet-into-quark).
- **Quark to Excel.** **Export Excel workbook** writes each formula as plain text, like `=SUM(A1:A3)`. Excel shows
  that text rather than working it out.
