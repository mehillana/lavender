# Changelog

All notable changes to Lavender. Format based on [Keep a Changelog](https://keepachangelog.com/).

Versions up to **v10** use the **chaufa** codename. From **v11** the codename is **yakisoba**.

> Everything under *Planned* is a roadmap, not a promise. It can change.

---

## Planned

### v13yakisoba · Polish and portability
- Fully offline installable app (PWA) with background reminders.
- Encrypted backups, plus optional sync through a file you own (no server).
- Accessibility pass: keyboard navigation everywhere, screen-reader labels, high-contrast theme.
- Performance work for years of data.
- Small plugin system for custom views and Mangosoft actions.

### v12yakisoba · Planner
- Auto-scheduling: Mangosoft places your tasks into free slots.
- Goals and habit analytics, with a yearly review in Insights.
- Home-screen widgets and a daily briefing.
- Theme gallery.

### v11yakisoba · Mangosoft 2 (new codename)
- New codename: **yakisoba** replaces chaufa.
- Next Mangosoft model family under the yakisoba name.
- Mangosoft understands commands in Chinese and Spanish.
- Daily and weekly summaries written by Mangosoft.
- More proactive suggestions: conflicts, overloaded days, missing breaks.
- Fully translated landing page in every language.

---

## v10chaufa · 2026-11-11

### Added
- Custom colour per event (event editor).
- Starred filter in the top bar.
- 12/24-hour time switch.
- "Add to Google Calendar" link in every event; .ics import and export (Apple Calendar and others).
- Landing: scroll animations, 3-step explanation, comparison with Google and Apple Calendar, FAQ.

### Changed
- Chinese (中文) interface now covers the whole app and the landing page.

### Still planned
- Week start setting, drag to move and resize, saved filters, task-to-Focus link, better recurring events.

---

## v9chaufa · 2026-11-08

### Added
- **Focus** tab: pomodoro timer with breaks and calm noise; finished sessions are saved as focus blocks.
- **Insights** tab: weekly stats, events per weekday and a 12-week heatmap.
- **Countdown** tab: days left until celebrations, tasks and starred items.
- Calendar: undo and redo (buttons, `Ctrl+Z`, `Ctrl+Y`), today strip, starred items and a right-click menu.
- Mangosoft: large "Let's start?" screen, big text box with the model picker inside, large conversation.
- Focus block suggestions in Mangosoft: centred, animated cards that refresh on their own.
- Chinese (中文) interface language.

### Changed
- Mangosoft sits in the centre of the bottom bar, with five tabs.
- The whole app uses Google Sans.
- Switching model in Mangosoft keeps the text you were typing.

### Removed
- **Contacts** and **Diary** tabs (diary data is kept).

### Fixed
- Crash on load when the saved Mangosoft model was `chaufa-9`.
