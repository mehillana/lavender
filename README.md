<div align="center">

# lavender.

### the calendar that **listens**. and also, apparently, has feelings about your Tuesday.

![Version](https://img.shields.io/badge/version-v13finale-ff6f9c?style=for-the-badge)
![License](https://img.shields.io/badge/license-GPLv3-e57ba8?style=for-the-badge)
![Price](https://img.shields.io/badge/price-%240%20forever-3fb3a6?style=for-the-badge)
![Tracking](https://img.shields.io/badge/tracking-literally%20none-f2a05a?style=for-the-badge)
![Accounts](https://img.shields.io/badge/accounts-not%20needed-6b9bf2?style=for-the-badge)

![Made in](https://img.shields.io/badge/made%20in-Sant%20Cugat%20del%20Vall%C3%A8s-6dbb72?style=flat-square)
![Runs in](https://img.shields.io/badge/runs%20in-your%20browser-8b6bf0?style=flat-square)
![Servers](https://img.shields.io/badge/servers-0-e57ba8?style=flat-square)
![Ads](https://img.shields.io/badge/ads-0-3fb3a6?style=flat-square)
![PWA](https://img.shields.io/badge/PWA-installable-f2a05a?style=flat-square)
![Languages](https://img.shields.io/badge/languages-EN%20%C2%B7%20CA%20%C2%B7%20FR%20%C2%B7%20OC%20%C2%B7%20%E4%B8%AD%E6%96%87-6b9bf2?style=flat-square)
![Vibes](https://img.shields.io/badge/vibes-immaculate-6dbb72?style=flat-square)

**Open source. Free forever. Yours.**

</div>

---

## 🍜 TL;DR (too long; wanted noodles)

Lavender is a **private, open-source calendar that lives in your browser**. No account. No cloud. No ads. No tracking. No "we value your privacy" popup that values nothing.

You type *"Dinner with Marta Friday 8pm"*. It becomes a real event. You didn't click a single tiny box. Your thumb thanks you.

> Your calendar stays **on your device**. Lavender literally has nowhere to send it. We checked. There is no "where".

---

## 📚 Table of contents (a.k.a. the map of this beautiful chaos)

- [🚀 Quick start](#-quick-start)
- [✨ What can it do?](#-what-can-it-do)
- [🥭 Mangosoft, the bar](#-mangosoft-the-bar)
- [🍜 The engine](#-the-engine)
- [📅 Views, calendars and types](#-views-calendars-and-types)
- [🧘 Focus, Insights, Countdown](#-focus-insights-countdown)
- [📔 Diary, mood and habits](#-diary-mood-and-habits)
- [🎮 Quests](#-quests)
- [🎨 Themes](#-themes)
- [🌍 Languages](#-languages)
- [⌨️ Keyboard shortcuts](#️-keyboard-shortcuts)
- [📦 Import, export and moving house](#-import-export-and-moving-house)
- [🔒 Privacy (the boring part we love)](#-privacy-the-boring-part-we-love)
- [🆚 Lavender vs. the big ones](#-lavender-vs-the-big-ones)
- [🏁 The final version](#-the-final-version)
- [📜 Changelog highlights](#-changelog-highlights)
- [🤝 Contributing](#-contributing)
- [⚖️ License and legal](#️-license-and-legal)
- [💜 Credits](#-credits)

---

## 🚀 Quick start

No installer. No `npm install` that downloads half the internet. No Docker whale.

1. **Open `index.html`** in any modern browser. That's it. That's the whole setup.
2. Type something in the **Smart bar** at the bottom: `Dentist tomorrow at 10:30`.
3. Watch it appear. Feel smug.
4. *(Optional)* Install it as an app from your browser's menu and use it offline.

```text
you      >  Move dinner with Marta to Friday at 9pm, add her birthday
            to the calendar and log mood happy.
lavender >  ✓ Moved Dinner with Marta · Fri 21:00
            ✓ Birthday of Marta added to the calendar
            ✓ Diary updated · mood: happy
you      >  (leans back in chair like a movie villain)
```

Want to host it yourself? It's a static site. Drop the files on any static host, a USB stick, or your cousin's server. It will not complain.

---

## ✨ What can it do?

| 🧩 Thing | 🎉 What you get |
|---|---|
| **Smart bar** | Plain-language events. Dates, times, ranges, people and types are read for you. |
| **Four kinds of time** | Events, celebrations, multi-day tasks and "other" (ideas, notes, reminders that don't fit a box). |
| **Notes inside events** | Every event is a little document: headings, text, checklists and reminders. |
| **A calendar per person** | Partner, team, kids, future you. Each one gets a colour. Show, hide, overlay. |
| **Custom colour per event** | *(new in v10)* Because that one meeting deserves to be angry red. |
| **Starred filter** | *(new in v10)* One tap to see only what matters. |
| **12/24-hour time** | *(new in v10)* Pick your clock. Fight your friends about it. |
| **Add to Google Calendar** | *(new in v10)* A link inside every event, for when you need to mingle with the big kids. |
| **Reminders & repeats** | Daily, weekly, monthly, yearly. Reminders from "at start" to "1 hour before". |
| **Seasons, holidays, moon** | Equinoxes, solstices, Easter, festive days and moon phases glow quietly. Toggle them any time. |
| **Undo / redo** | Buttons, `Ctrl+Z`, `Ctrl+Y`. Mistakes are now just suggestions. |
| **Right-click menu** | Star, duplicate, move to tomorrow, mark done, delete. |
| **Search** | Finds events fast, and notes too. |
| **Install as app** | PWA-friendly, works offline. |

---

## 🥭 Mangosoft, the bar

**Mangosoft** is the bar inside Lavender. You don't chat with it, you **choose**: every field is a selector, a live preview tells you what will happen, and the change lands on your calendar in front of you. Like a very polite magic trick.

- 🎛️ **A bar of selectors** *(new in v12)*. Three modes:
  - **Create:** type, name, day (today, tomorrow, next Monday or any date), how many days, time and length, repeat, person and colour. A live preview shows the result and warns about overlaps.
  - **Change:** filter by type, when (today, this week, next week, past, a date) and name, see the matching items live, then set type, move days, duplicate, set person, colour, time or length, star, mark done or delete, all at once.
  - **Ask:** summaries of your day or week, free slots, conflicts and birthdays.
- ★ **Saved bars:** save any bar as a preset and run it again with one tap.
- ⌨️ **Ctrl+K** opens the bar from anywhere.
- 🗣️ **Natural language, not cloud AI.** It runs locally in your browser. Fast, smart rules. No servers, no model to train, no data leaving your device. Answers in milliseconds.
- 🌐 **Understands** English, Catalan, French and Aranese (and Chinese and Spanish commands are on the roadmap).
- 💬 **Ask it anything about your calendar:** *"What do I have tomorrow?"*, *"When is Marta's birthday?"*, *"When am I free on Friday?"*
- 🧠 **Memory:** *"Move this meeting to the same time we met last month."* It looks back through months of your own history. Locally.
- 🎯 **Focus block suggestions:** it learns when you work best and offers focus blocks in your empty gaps. It **never** books anything without your tap.
- 💥 **Conflicts:** when two events collide it offers three better slots.
- ↩️ **Undo everything** in one tap.

### How Mangosoft thinks (3 steps, no drama)

| Step | What happens |
|---|---|
| **1. Understand** | Splits your message into actions and reads the structure of your local data. |
| **2. Plan** | Builds a step-by-step plan using safe tools. It never edits your data directly. |
| **3. Apply live** | Each step appears on your calendar as it happens, undo one tap away. |

---

## 🍜 The engine

Mangosoft runs on a single engine: **yakisoba-1**. No model picker, no tiers. It powers the bar (create, change, ask), bulk changes, daily and weekly summaries, conflict checks with three alternatives, focus block suggestions and long-term memory over your own history. All local, all in your browser.

> 🍜 **Naming lore:** versions up to **v10** used the **chaufa** codename, **v11** and **v12** used **yakisoba**, and **v13 is the finale**. The noodles were inevitable.

---

## 📅 Views, calendars and types

- **Views:** Day · Week · Month · Year · Agenda (next 60 days), with week numbers and a go-to-date picker.
- **Today strip** so you never wonder what day it is. (We all do. Sometimes.)
- **Types:** Event, Celebration, Task, Other. Auto-detected, or pick one yourself.
- **Calendars:** one per person, each with a colour, each toggleable. The legend explains it all.
- **Multi-day tasks** with a checkbox and a finish line: *"Launch plan Monday to Friday"*.

---

## 🧘 Focus, Insights, Countdown

- ⏱️ **Focus** — a pomodoro timer with breaks and calm noise. Finished sessions are saved as focus blocks on your calendar.
- 📊 **Insights** — weekly stats, events per weekday and a 12-week heatmap. Charts, but make them cosy.
- ⏳ **Countdown** — days left until celebrations, tasks and starred items. Suspense, but useful.

---

## 📔 Diary, mood and habits

Lavender keeps a private diary: pick a mood, write freely, add photos, track sleep, water and energy. The weekly review and mood chart build themselves as you write.

- **Habits** open your day at a glance: events, mood, water, habits and quick time blocks.
- Tick a habit three days in a row and feel like a functional adult.
- *(The standalone Diary tab was retired in v9, but your diary data is kept.)*

---

## 🎮 Quests

Eight tiny missions teach you every feature and grow your level from **Seedling → Sprout → Bud → Bloom → Full bloom** 🌸. Planning, finally, with momentum and a little XP.

---

## 🎨 Themes

Five soft classics and more: **Lavender, Dawn, Ocean, Mist, Night**, plus seasonal sets (**Maple, Harvest, Embers, Frost, Pine, Rain**) and special ones (**Sakura, Meadow, Citrus, Lagoon, Dusk, Snowfall**). Or build your own **Custom theme**. **Yakisoba** is the new default: a refined dark theme in ink violet with a peach and pink glow. **Ginger** is its light sibling.

### 🔤 Typography *(new in v11)*

Pick your typeface in Settings:

| Name | Font |
|---|---|
| **Lavender Simple Google** | Google Sans (the classic) |
| **Lavender Github Cubed** | Mona Sans, loaded from Google Fonts |

---

## 🌍 Languages

| | Language |
|---|---|
| 🇬🇧 | English |
| 🏴 | Català |
| 🇫🇷 | Français |
| 🏔️ | Aranés (Occitan) |
| 🇨🇳 | 中文 (fully translated interface and landing page in v10) |

---

## ⌨️ Keyboard shortcuts

| Key | Does |
|---|---|
| `D` `W` `M` `Y` | Day, Week, Month, Year |
| `T` | Go to today |
| `C` | Create |
| `Ctrl+Z` / `Ctrl+Y` | Undo / redo |
| `Ctrl+K` | Open the Mangosoft bar |

---

## 📦 Import, export and moving house

- 📅 **`.ics`** — import and export. Works with Apple Calendar, Google Calendar and friends.
- 💾 **`.json`** — full backup and restore.
- 📝 **`.txt`** — export your diary.
- 🔗 **Add to Google Calendar** link inside every event.

> Your data lives in your browser's storage. **Download a backup now and then.** Browsers can be dramatic about clearing things.

---

## 🔒 Privacy (the boring part we love)

- ✅ No account
- ✅ No servers receiving your data
- ✅ No analytics, no trackers, no ads
- ✅ Mangosoft is **not** a cloud AI. It's local rules in your browser.
- ✅ Everything is open source, so you can audit it yourself

The only external requests the app makes are loading the fonts (Google Sans and Mona Sans) from Google Fonts. If that bugs you, self-host the font. Free software, free choices.

---

## 🆚 Lavender vs. the big ones

| | Lavender | Google Calendar | Apple Calendar |
|---|:---:|:---:|:---:|
| Talk to it in plain language | ✅ | ➖ | ➖ |
| Works with no account | ✅ | ❌ | ❌ |
| Your data stays on your device | ✅ | ❌ | ➖ |
| Notes and checklists inside events | ✅ | ➖ | ➖ |
| Focus timer, diary and habits | ✅ | ❌ | ❌ |
| Import / export `.ics` | ✅ | ✅ | ✅ |
| Free forever, no ads | ✅ | ➖ | ➖ |

*(Honest note: those two are great at team sharing and cross-device sync. Lavender is going its own way. See the roadmap.)*

---

## 🏁 The final version

**v13finale is the last version of Lavender.** No more features, no more updates: it stays exactly as it is, free, local and yours. Read the full story in [`finale.md`](finale.md).

---

## 📜 Changelog highlights

| Version | Headline |
|---|---|
| **v13finale** | The final version. One engine (yakisoba-1), the final Yakisoba design, and the end of updates. |
| **v12yakisoba · Més Dinàmic** | New universe: refined Yakisoba theme, Mangosoft as a bar of selectors with bulk changes, saved bars and Ctrl+K. |
| **v11yakisoba** | New universe: Yakisoba and Ginger themes, fresh motion, two typefaces (Simple Google / Github Cubed), yakisoba-1 with daily and weekly summaries. |
| **v10chaufa** | Event colours, starred filter, 12/24h, Google Calendar link, complete Chinese, animated landing. |
| **v9chaufa** | Focus, Insights and Countdown tabs. Undo/redo. New Mangosoft screen. Chinese added. |

Full details live in [`CHANGELOG.md`](CHANGELOG.md).

---

## 🤝 Contributing

Lavender is finished: v13finale is the last version, so no new features are planned. You are very welcome to fork it under the GPLv3 and take it somewhere new (please pick your own name).

- Keep the **privacy-first** spirit: no trackers, no accounts, no servers.
- Contributions are licensed under **GPLv3**, like the rest of the project.
- Be kind. It's a calendar, not a battlefield.

---

## ⚖️ License and legal

Lavender is licensed under the **GNU General Public License v3.0**, with the additional terms and attributions in [`LEGAL.md`](LEGAL.md).

The names **Lavender**, **Mangosoft**, **Mango One** and the **chaufa / yakisoba** engine naming belong to the original project. Forks are welcome under the GPLv3, but please pick your own name. Google Calendar and Apple Calendar are trademarks of their respective owners, mentioned here only for comparison.

---

## 💜 Credits

Envisioned, designed and developed with a lot of joy by **Etienne González Zárate (eichi)** in **Sant Cugat del Vallès, Catalonia** 🇪🇸, since September 2026.

<div align="center">

**Made happily. Free of charge. Forever.**

*lavender.* 🪻 *Open your week. Set it on the bar.*

</div>
