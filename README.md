# Lavender · v9chaufa

The calendar that listens. Lavender is a calendar app that lives in **a single HTML file**: no install, no account, no server. Your data stays in your browser.

> Current version: **v9chaufa** (`lavender-9chaufa.html`), with the **Mangosoft** assistant.

---

## Getting started

1. Download `lavender-9chaufa.html`.
2. Open it in any modern browser (Chrome, Edge, Firefox, Safari).
3. Press **Open Lavender** and follow the 30-second tour.

That's it. It also works offline; only the typeface is loaded from Google Fonts.

---

## Tabs

Five tabs sit in the bottom bar on mobile and in the top bar on desktop, with **Mangosoft** in the centre:

| Tab | What it does |
| --- | --- |
| **Calendar** | Day, week, month, year and agenda views. |
| **Focus** | Pomodoro timer with breaks and calm noise. |
| **Mangosoft** | The calendar assistant. |
| **Insights** | Stats about your week. |
| **Countdown** | Days left until your celebrations and tasks. |

---

## Calendar

- **Views:** day, week, month, year and agenda.
- **Item types:** events, celebrations, tasks and other.
- **Editable calendars:** rename them and change their colour.
- **Today strip:** how many items you have today and what comes next.
- **Undo and redo:** the ↶ ↷ buttons, or `Ctrl+Z` / `Ctrl+Y`.
- **Starred items:** mark items with ★ from the editor.
- **Right-click menu** on any item: open, star, duplicate, move to tomorrow, mark as done, delete.
- **Habits and quests** in the habits panel.
- **Themes**, including a custom theme.
- **Reminders** for upcoming items.
- **Share this week**, **Print / PDF**, and **Install app**.
- **Backup:** export and import your data.

---

## Mangosoft

Lavender's assistant. Ask or instruct it in natural language: events, reminders, notes, birthdays, the time and the day.

- **"Let's start?" screen:** a large text box with suggestions underneath.
- **Model picker** inside the text box:
  - `chaufa-9`: the newest and most powerful. Remembers months of your calendar, suggests focus blocks, fixes conflicts and listens while you speak.
  - `chaufa-8`: fast, one calendar action at a time.
  - `chaufa-8-pro`: long instructions, up to 12 steps across Calendar and Diary, with previews and undo.
- **Large conversation** once you start writing.
- **Voice:** dictate instructions, where the browser supports it.
- **Long-term memory vault**, **smart conflict fixes** and **live voice**.
- **Focus block suggestions:** free slots in your calendar, shown as centred cards that refresh on their own.
- **Undo** what Mangosoft did.

> Mangosoft understands commands in English, Catalan, French and Aranese. In Chinese the interface is translated, but instructions must be written in one of the other languages.

---

## Focus

- 25, 50 and 15-minute sessions; 5 and 10-minute breaks.
- Optional calm noise.
- Every finished focus session is saved to your calendar as a **focus block**.
- Shows the minutes you focused today.

## Insights

- Items this week, tasks done and focus this week.
- Your busiest day.
- Events per weekday chart.
- Heatmap of the last 12 weeks.

## Countdown

Cards with the days left until your celebrations, open tasks and starred items.

---

## Languages

English · Català · Français · Aranés · 中文

Switch language from the selector in the header. In Chinese, some long sentences on the landing page are still in English.

---

## Privacy

Lavender is **100% local**. Everything is stored in your browser's `localStorage` and nothing is sent to any server. Back up your data from the settings, because clearing your browser data would erase your calendar.

---

## What's new in v9chaufa

- Mangosoft in the centre of the bottom bar, with five tabs.
- The whole app in **Google Sans**.
- A more dynamic Mangosoft: large text box, model picker, large conversation and "Let's start?".
- Centred, animated focus block suggestions.
- New **Focus**, **Insights** and **Countdown** tabs.
- Calendar: undo and redo, today strip, starred items and a right-click menu.
- Chinese (中文) added.
- The **Contacts** and **Diary** tabs were removed (diary data is kept).

---

## Structure

```
lavender-9chaufa.html   # the whole app: HTML, CSS and JavaScript
README.md
```
