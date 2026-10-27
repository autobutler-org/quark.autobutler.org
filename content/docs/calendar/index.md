---
title: Calendar
description: One shared household calendar on your Quark, for appointments, birthdays and everything in between
navigation:
  title: Calendar
  order: 1
---

# Calendar

Calendar is one shared calendar for your whole household. Everyone who signs in to your Quark sees the same events,
and anyone can add, change or delete them. Put the dentist, the school play and the bin day in one place, and the
whole family sees it.

Your events stay on your Quark. They are not sent to Google, Apple or anyone else.

## How to use it

1. Open the app menu and tap **Calendar**. It opens on this week, with today highlighted and a line at the current
   time.
2. Tap an empty hour to add an event there. Or tap **New event** at the top.
3. Type a title, such as "Soccer practice".
4. Tap **Save**. The event shows up for everyone straight away.

To change an event, tap it, make your change and tap **Save**. To remove it, tap it, tap **Delete** and confirm.

## Finding your way around

- **Day**, **Week**, **Month** and **Upcoming** switch how much you see. On a phone, tap the chip that names the view
  to pick another.
- The arrows step back and forward a day, a week or a month, depending on the view. On a phone you can also swipe
  left or right.
- **Today** brings you back to today.
- In Month, tap a date to open that day.
- **Upcoming** lists the next seven days under **Today**, **Tomorrow** and each weekday. It's a good place to check
  what's coming.

The address in your browser follows along, so you can bookmark a view or send the link to someone at home.

## Adding events

The event form has:

- **Title**: the only thing you must fill in.
- **All day**: for birthdays, holidays and anything without a time.
- **Starts** and **Ends**: the date and time. The end must come after the start.
- **Repeat**: **Never**, **Daily**, **Weekly** or **Monthly**. Below it, the form says in words when the event
  repeats, such as "Every week on Thursday."
- **Repeat ends**: shows once an event repeats. Leave it on **Never**, or choose **On a date** and pick the last day.
- **Remind me**: see [Reminders](#reminders) below.
- **Color**: Sky, Green, Amber, Violet, Rose or Slate, to tell kinds of events apart at a glance.
- **Location** and **Notes**: anything else worth writing down.

Some quicker ways in:

- **An all-day event:** in Month, press and hold a date. On a computer, point at the date and click the **+** in its
  corner.
- **A monthly event** keeps its date. An event on the 31st skips the months that don't have one.

## Moving events

In Day or Week, you can move an event without opening it.

- **With a mouse:** drag the event to a new time, or to another day in Week. Drag its bottom edge to make it longer or
  shorter.
- **On a phone or tablet:** press and hold the event first, then drag. Hold its bottom edge to change when it ends.
- **With a keyboard:** see the [Calendar shortcuts](/docs/help/keyboard-shortcuts#calendar-beta).

Events move in 15-minute steps. If the move can't be saved, Quark tells you and puts the event back.

When you move one event in a repeating series, Quark asks which ones to move:

- **This event** moves only this one. The rest stay where they were.
- **This and following** moves this one and every one after it.
- **All events** moves the whole series by the same amount.

Changed your mind? Tap **Undo** on the message, or press **Ctrl+Z** (**Cmd+Z** on a Mac).

To move an all-day event, open it and change its date in the form.

## Reminders

Under **Remind me**, choose **At start**, or **5 min**, **15 min**, **30 min** or **1 hour** before. An all-day event
can remind you on the day or the day before, at 9 AM unless you pick another time.

When a reminder comes due, a bar appears above the calendar with **Open** and **Dismiss**. In Upcoming, the event shows
a bell and "Starts in 15 min".

Reminders show inside Quark only, while you have it open. They don't buzz your phone yet.

## My events, or someone else's

The row above the calendar has **Everyone** and **My events**. **My events** shows only the events you added.
**Everyone** shows them all again.

Admins also get **Person**, to see one family member's events.

This is a filter, not privacy. Everyone can still see and change every event.

## Choosing the view it opens on

Calendar opens on Week. To change that, go to **Settings → General → Calendar opens on** and choose **Day**,
**Week**, **Month** or **Upcoming**. Quark remembers this on each phone or browser separately.

## If something goes wrong

- **Save is greyed out.** The event needs a title, and it has to end after it starts.
- **I can't drag an event.** All-day events don't drag; open them and change the date. In a crowded Week, tap the day
  first and drag the event in Day view, where it has more room.
- **A repeating event won't stop.** Open it and set **Repeat ends** to **On a date**.
- **Someone else's event changed.** Anyone signed in can edit any event. That's by design: it's one calendar for the
  household.

## Related

- [Settings](/docs/settings): where you choose the view Calendar opens on
- [Keyboard shortcuts](/docs/help/keyboard-shortcuts): moving events from the keyboard
- [Accessibility](/docs/help/accessibility): touch targets and how events are told apart
- [Google Takeout](/docs/files/google-takeout): what comes out of a Google export

## Nerd Notes

There is one calendar, named Personal, stored in the Quark's database. Every signed-in account reads and writes it. No
route is admin-only.

The API lives under `/api/v0/calendar` and takes the usual bearer token:

| Method   | Path                           | What it does                                           |
| -------- | ------------------------------ | ------------------------------------------------------ |
| `GET`    | `/calendar/events?from=…&to=…` | Events overlapping a span, as RFC 3339 instants        |
| `GET`    | `/calendar/events/{id}`        | One event                                              |
| `POST`   | `/calendar/events`             | Create an event                                        |
| `PUT`    | `/calendar/events/{id}`        | Replace an event                                       |
| `POST`   | `/calendar/events/{id}/move`   | Move one occurrence, it and the following ones, or all |
| `DELETE` | `/calendar/events/{id}`        | Delete an event, every repeat included                 |

- **Times** are RFC 3339 in UTC. An all-day event's start and end are midnight UTC standing for the calendar date, and
  the end is exclusive. So a one-day all-day event on the 29th ends at midnight on the 30th, in every time zone.
- **Repeats** are stored once, as a series: `repeat` is `none`, `daily`, `weekly` or `monthly`. The app expands the
  occurrences in the viewer's local time, so a repeat keeps its time of day across a daylight saving change.
  `repeatUntil` is the last date, inclusive, or `null` for forever. `excludedStarts` lists occurrences the series
  skips.
- **Moves** send a `scope` of `one`, `following` or `all`. `one` adds the occurrence to `excludedStarts` and creates a
  one-off event. `following` ends the series the day before and starts a new one. The response carries the series and
  any event the move created.
- **Reminders** are `reminderMinutes` before the start, or `null` for none. For an all-day event they count back from
  midnight, so 9 AM on the day is `-540`.
- **Ownership:** each event has an `owner` (the username that created it, empty for events older than owners) and a
  `mine` flag for the caller. **My events** and **Person** filter on these in the app. They don't restrict access.
- **Live updates:** a change broadcasts a `calendar_changed` event on the WebSocket, and open calendars fetch again.
- **Views** have their own routes: `/calendar/day`, `/calendar/week`, `/calendar/month` and `/calendar/upcoming`, with
  the date in `?date=2026-09-29`. Filters add `mine=true` or `person=<name>`.
- The **Calendar opens on** choice is stored on the device, not on the Quark.
- There is no `.ics` import or export, and no CalDAV, yet. Phone push alerts for reminders aren't built yet either.
