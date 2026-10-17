---
title: Accessibility
description: What to expect from Quark with large text, a screen reader, a keyboard, high contrast, or reduced motion
navigation:
  title: Accessibility
  order: 24
---

# Accessibility

This page says what Quark does today for people who use large text, a screen reader, a keyboard, or reduced motion,
and for the family member who sets Quark up for them. It describes what the app does and what its tests check. It is
not a certificate: Quark does not claim conformance with any accessibility standard.

---

## Large text

Quark follows the text size you set on your phone or computer. Pages are built to wrap, scroll, or grow at 200% text
instead of cutting words off.

Quark's tests set text to 200% on a small phone screen and on a desktop window, and fail if text is clipped. They
cover sign-in, Settings, System, Users, Trash, Vault, Books, the Slides editor, and parts of Files, Calendar and Chat.

## Screen readers

Every icon-only button, image, and custom control in Quark's shared widgets has a name a screen reader reads out.
Quark's tests check that, and check that each one can be pressed.

- In a browser, Quark turns its screen reader support on as the page loads. You don't need to find a hidden
  "enable accessibility" button first.
- Photo and file thumbnails are left out of the reading order. The row or tile around them already names the item,
  so you hear it once.
- In Files, a column header says whether it is the sorted column and which way it sorts: "Sorted ascending" or
  "Sorted descending".

## Touch targets

Quark's buttons and other controls answer taps across at least 48 by 48 points, even when they look smaller. The
buttons in the top bar keep a compact 36-point look inside that larger tap area. Tests check this for Quark's shared
widgets and for pages including sign-in, Files, Photos, Settings, Users, Vault, System, and Trash.

On a touchscreen, calendar events get the same 48-point target, however short the event. In Week view, where
overlapping events are too narrow to tap one by one, the group becomes one target that opens the Day view, where each
event has room.

## Keyboard

You can move through Quark with Tab and Shift+Tab. A focused text field or button gets a visible outline, at least 2
pixels thick, so focus shows as a change in weight and not only a change in color. With **High contrast** on, the
outline is 3 pixels.

Several pages have keyboard shortcuts. See [Keyboard shortcuts](/docs/keyboard-shortcuts) for the full list.

## High contrast

Turn on **High contrast** in **Settings → General** for stronger colors and bolder outlines. If your phone or computer
has its own increased-contrast setting, Quark follows it too.

In high contrast, Quark's tests check that text is at least 7:1 against the background it sits on. The setting is saved
on the device you turn it on from.

## Left-handed mode

Turn on **Left-handed mode** in **Settings → General** to move the menu button and the menu to the right, and floating
buttons to the left. Like High contrast, it is saved per device.

## Reduced motion

When your device asks for less motion, Quark uses less. That covers your browser's "reduce motion" preference, Android's
**Remove animations**, and iOS **Reduce Motion**.

- Quark's loading indicator stops spinning and gently pulses instead, so it never looks frozen.
- The photo viewer jumps to the next photo and rotates a photo at once, without sliding or turning.
- On a phone, Photos jumps to the grid after you pick an album, instead of scrolling there.
- Slide transitions in a presentation are skipped.

## Color is not the only signal

Where color marks a choice, something else marks it too. The selected theme color in **Settings → General** is ringed
and checked. In Calendar, an all-day event is a filled bar and a timed event is a dot, so they differ in shape as well
as color.

## Known gaps

- The Docs and Sheets editors and the photo viewer have only a few of the text-size and touch-target checks so far.
- Some calendar targets stay under 48 points: a Week view on a phone narrower than 360 points, and a Day view with more
  overlapping events than fit side by side.
- The checks above run in Quark's automated tests. If something you use doesn't behave the way this page says, that
  is a bug, and we want to hear about it.

## Report a problem

Tell us what you were doing, on which device, and what got in the way:

- [Open a GitHub issue](https://github.com/autobutler-org/quark/issues)
- Email [support@autobutler.org](mailto:support@autobutler.org) if you'd rather not post in public

See [Help & Support](/docs/help) for other ways to reach us.
