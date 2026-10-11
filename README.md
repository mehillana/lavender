# Lavender

The open-source calendar that listens.

Type one sentence and Lavender turns it into an event, a celebration or a multi-day task. Notes live inside events, every person gets their own calendar, and small quests teach you the app as you go.

Lavender understands English, Catalan, French and Aranese.

**No account. No ads. No tracking. Your data stays in your browser.**

## Features

- **Smart bar** — Describe what you want in plain text and Lavender finds the date, time, person and type. It works locally without servers or cloud models.
  - Dinner with Marta Friday 8pm
  - Joan's birthday Oct 28
  - Launch plan Monday to Friday
  - Remember to renew passport next Tuesday

- **Five views** — Day, week, month, year and a running agenda

- **Four kinds of time** — Events, celebrations, multi-day tasks and a free "other" category

- **Notes blocks inside events** — Headings, text, checklists and reminders, all editable and reorderable

- **A calendar per person** — Give each person a colour, show or hide them, and use the legend to filter by type

- **Dietary tracking** — Manage and link nutritional preferences and habits directly within your planning ecosystem

- **Contacts integration** — Keep your personal network close and connect contacts to your events

- **Advanced data management** — Full mastery over your local database with a dedicated section to control your privacy

- **Repeating events, locations and reminders** — Daily, weekly, monthly and yearly repeats

- **Seasons, holidays and moon phases** — Equinoxes, solstices, Easter, festive days and moon phases, each of which can be toggled

- **Search** — Find events by title, location or note content

- **Quests** — Eight small missions that teach the app and grow your level from Seedling to Full bloom

- **Five themes** — Lavender, Dawn, Ocean, Mist and Night

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| D W M Y A | Day, week, month, year, agenda |
| T | Jump to today |
| J / K or arrows | Next / previous period |
| C or / | Focus the Smart bar |
| Esc | Close dialogs |

## Getting Started

Lavender is a single static HTML file with no build step and no dependencies.

1. Clone the repository.
2. Open `index.html` in your browser.

Or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

The Google Sans font is loaded from Google Fonts, so an internet connection is needed to see it. Without one, the app falls back to a system font.

## Your Data

Everything is stored in your browser's localStorage. Nothing is sent to any server. Clearing your browser data erases your calendar, so copy anything important elsewhere.

## Notes and Limitations

- Reminders appear as in-app notifications while the tab is open.
- Seasonal dates and moon phases are astronomical approximations and can be off by a day in some years.
- Data is tied to one browser on one device. There is no sync or sharing yet.

## Roadmap

- Drag and resize events
- Import and export (.ics)
- Sharing calendars between people
- Event colours and attachments
- Browser notifications

## Contributing

Contributions are welcome. Open an issue to discuss a bug or an idea, or send a pull request. Keep changes small and focused, and describe what you tested.

## License

This project is licensed under the GNU General Public License v3.0 or later.
See the [LICENSE](LICENSE) file for the full text.
