# Changelog

All notable changes to Lavender. Format based on [Keep a Changelog](https://keepachangelog.com/).

Versions up to **v10** used the **chaufa** codename, **v11** and **v12** used **yakisoba**, and **v13** is the **finale**.

> **v13finale is the last version.** There is no roadmap: Lavender is finished.

---

## v13finale · 2026-11-21

The final version. Design only.

### Changed
- **One engine.** yakisoba-1 is now the only Mangosoft engine. The model picker and the chaufa models are gone, and the engine is frozen.
- **Final design pass:** Mangosoft bar with a gradient edge, softer glass and custom selector arrows, a clearer preview, calmer chips, lifted landing cards, thin scrollbars, themed text selection and visible focus rings.
- Landing: "One engine. One goal: your time." and "v13finale: the final version", plus the privacy text now names yakisoba-1.

### Removed
- chaufa-8, chaufa-8-pro and chaufa-9 as selectable models.
- The roadmap. There are no more planned versions.

---

## v12yakisoba · Més Dinàmic · 2026-11-21

### Added
- **Mangosoft is now a bar of selectors, not a chat.**
  - Create: type, name, day (or a date), number of days, time and length, repeat, person, colour, with a live preview and an overlap warning.
  - Change: filter by type, when and name, see the matching items live, then set type, move days, duplicate, person, colour, time, length, star, done or delete for all of them.
  - Ask: day and week summaries, free slots, conflicts, birthdays.
- **Saved bars:** save any bar as a preset (★) and run it again with one tap.
- **Ctrl+K** opens the bar from anywhere.
- Landing rewritten for the bar: new hero, "How the bar works", "Pick it your way" examples that load into the bar, and a "New in v12yakisoba" section. Translated to Catalan, French and Aranese.

### Changed
- **Yakisoba** theme refined: ink violet with a peach and pink glow. It is the new default.
- Springier chips and a live-updating bar.

### Removed
- The Mangosoft chat and its voice input, replaced by the bar.

---

## v11yakisoba · 2026-11-16

New codename: **yakisoba** replaces chaufa. The start of a new universe.

### Added
- **Yakisoba** theme (new default, dark) and **Ginger** (light), with a new noodle-gold, ginger-pink and lavender palette.
- Typography choice in Settings: **Lavender Simple Google** (Google Sans) and **Lavender Github Cubed** (Mona Sans, from Google Fonts).
- **yakisoba-1**, the new Mangosoft model: everything chaufa-9 does, plus daily and weekly summaries that flag overloaded days and missing breaks ("Summarise my week").
- Landing: "New in v11yakisoba" section, translated to Catalan, French, Aranese and Chinese.

### Changed
- New motion: views settle in with a soft focus, Mangosoft messages pop in, event chips spring on hover, the gradient on headlines flows, the logo dot breathes. All of it respects reduced motion.
- Landing colours follow the new palette.
- Mangosoft defaults to yakisoba-1; chaufa-8, chaufa-8-pro and chaufa-9 are still available.

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
