---
title: Accessibility
description: What to expect from Quark with large text, a screen reader, a keyboard, high contrast, or reduced motion
navigation:
  title: Accessibility
  order: 3
---

# Accessibility

This page says what Quark does today if you use large text, a screen reader, a keyboard, or reduced motion. It is also
for the family member who sets Quark up for someone else.

It describes what the app does and what its tests check. It is not a certificate. Quark does not claim to meet any
accessibility standard.

## How to use it

Most of this works on its own. Quark follows the text size, contrast and motion settings you already use on your phone
or computer. Two switches live in Quark itself:

1. Open **Settings** from the app menu.
2. Go to the **General** tab.
3. Turn on **High contrast** for stronger colors and bolder outlines.
4. Turn on **Left-handed mode** to move the menu to the right side and floating buttons to the left.

Both are saved on the device you turn them on from. Set them again on each phone or computer you use.

## Large text

Quark follows the text size you set on your phone or computer. Pages are built to wrap, scroll or grow at 200% text,
instead of cutting words off.

Quark's tests set text to 200% on a small phone screen and on a desktop window, and fail if any text is cut off. They
cover sign-in, Settings, System, Users, Trash, Vault, Books, Slides (the list, the editor and the presenter), and parts
of Files, Calendar and Chat.

## Screen readers

Every button that shows only an icon, and every custom control in Quark's shared parts, has a name your screen reader
reads out. Quark's tests check that, and check that each one can be pressed.

- In a web browser, your screen reader may first land on a button named **Enable accessibility**. Press it once, and
  Quark's screen reader support turns on for that page. The phone and desktop apps don't need this step.
- Photo and file thumbnails are left out of what your screen reader reads. The row or tile around them already names
  the item, so you hear it once.
- In Files, the column you sorted by says which way it sorts: "Sorted ascending" or "Sorted descending".

## Touch targets

Quark's buttons and other controls answer taps across at least 48 by 48 points, even when they look smaller. The
buttons in the top bar look compact, but the area you can tap is the full size. Tests check this for Quark's shared
parts and for pages including sign-in, Files, Photos, Settings, Users, Vault, System and Trash.

On a touchscreen, calendar events get the same 48-point target, however short the event. In Week view, where
overlapping events are too narrow to tap one by one, the group becomes one target that opens the Day view, where each
event has room.

## Keyboard

You can move through Quark with Tab and Shift+Tab. A focused text field or button gets a visible outline, at least 2
pixels thick, so you can see focus by its thickness and not only by its color. With **High contrast** on, the outline
is 3 pixels.

Several pages have keyboard shortcuts. See [Keyboard shortcuts](/docs/help/keyboard-shortcuts) for the full list.

## High contrast

Turn on **High contrast** in **Settings → General** for stronger colors and bolder outlines. If your phone or computer
has its own high-contrast setting, Quark follows it too.

Quark's tests check that every high-contrast text color is at least 7:1 against every background it can sit on.

## Left-handed mode

Turn on **Left-handed mode** in **Settings → General**. The menu button and the menu move to the right, and floating
buttons move to the left.

## Reduced motion

When your device asks for less motion, Quark uses less. That covers your browser's "reduce motion" setting, Android's
**Remove animations**, and iPhone's **Reduce Motion**.

- Quark's loading indicator stops spinning and gently pulses instead, so it never looks frozen.
- The photo viewer jumps straight to the next photo, and turns a rotated photo at once, without sliding or spinning.
- On a phone, Photos jumps straight to the grid after you pick an album, instead of scrolling there.
- In a presentation, slide transitions become a quick fade with no movement.

## Color is not the only signal

Where color marks a choice, something else marks it too. The selected theme color in **Settings → General** has a ring
and a check mark. In Calendar, an all-day event is a filled bar and a timed event is a dot, so they differ in shape as
well as color.

## Known gaps

- The Docs and Sheets editors have only a few text-size and touch-target checks so far. The photo viewer has none yet.
- Some calendar targets stay under 48 points: a Week view on a phone narrower than 360 points, and a Day view with more
  overlapping events than fit side by side.
- The checks on this page run in Quark's automated tests. If something you use doesn't behave the way this page says,
  that is a bug, and we want to hear about it.

## Report a problem

Tell us what you were doing, on which device, and what got in the way:

- [Open a GitHub issue](https://github.com/autobutler-org/quark/issues)
- Email [support@autobutler.org](mailto:support@autobutler.org) if you'd rather not post in public

## Related

- [Keyboard shortcuts](/docs/help/keyboard-shortcuts): every shortcut, page by page
- [Settings](/docs/settings): the **General** tab and the rest of Settings
- [Help & Support](/docs/help): other ways to reach us

## Nerd Notes

Checked against quark `main` at `c0f4eefc` (v0.56.2 plus one test-only commit).

**Large text.** The 200% helpers set a 2.0 text scale at 360×640 and 1280×800 and fail on clipped text
(`test/support/text_scale.dart`, `packages/quark_widgets/test/support/pump.dart`, `expectNoClippedText`). Page tests use
`testLargeText` in `test/pages/*_page_test.dart`.

**Names and tap targets.** `expectTapTargetGuidelines` runs Flutter's `androidTapTargetGuideline` and
`labeledTapTargetGuideline`, plus Quark's own `ButtonTapActionGuideline`.
`packages/quark_widgets/test/gallery_a11y_test.dart` runs it over every widget in the shared gallery. It checks tappable
targets, not labels on plain images. The top-bar button is 36 points inside a 48-point (`kMinInteractiveDimension`)
tap area (`quark_bar_icon_button.dart`).

**Web screen readers.** The web build does not force Flutter's semantics tree on at startup. Quark removed that
in #3769, because forcing it on stopped typing in Docs and Slides on the web (#3743). Until that is fixed, Flutter's own
**Enable accessibility** placeholder turns it on. `test/web_index_html_test.dart` guards against the call coming back,
and checks that the page declares `<html lang="en">`.

**Thumbnails.** `excludeFromSemantics: true` on the thumbnail images in `photo_grid_tile.dart`, `photo_thumbnail.dart`,
`file_grid_preview.dart` and `file_list_leading.dart`. Sort state is a semantics value on the active column only
(`file_sort_header_cell.dart`).

**Focus and contrast.** `focusRingWidth` is 2 in the normal tokens and 3 in high contrast (`quark_tokens.dart`).
`quark_tokens_test.dart` and `quark_theme_color_test.dart` check the 7:1 targets on color tokens, not rendered screens.
The app passes `highContrastTheme` and `highContrastDarkTheme` to Flutter, so the platform setting applies. High
contrast and left-handed mode are local preferences (`highContrast`, `leftHanded` in `lib/services/app_settings.dart`),
not account settings.

**Reduced motion.** `packages/quark_widgets/lib/src/theme/reduce_motion.dart` combines `MediaQuery.disableAnimations`
with the platform's reduce-motion flag. Under it, a slide transition becomes a fade at the minimum duration, 200 ms
(`SlideTransitionSpec.reducedMotion` in `packages/quark_slides`).

**Calendar.** Touch targets and the Week view crowd target are in `calendar_time_grid.dart` and `time_grid_column.dart`.
They apply on touch platforms only; with a mouse, events keep their drawn size.
