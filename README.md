# Lavender — The Open-Source Calendar That Listens

> **v8.0.0 (v8chaufa) · Powered by Mangosoft**

Lavender is a privacy-first, mobile-friendly calendar that runs completely in your browser. No accounts, no ads, and no cloud servers. Everything is processed locally on your device.

With the release of the **v8chaufa** engine, Lavender transitions into a full personal productivity suite, introducing **Mangosoft**—a local intelligence ecosystem that links your Calendar, Contacts, Dietary Planner, and Diary through natural language.

---

## Talk to your calendar. *Watch it move.*

Meet **chaufa**, the local engine behind Mangosoft. Give it a long, messy instruction and it books, moves, and updates your events, contacts, and diary live, right on your calendar screen.

> *"Move dinner with Marta to Friday at 9pm, add her birthday to the calendar and log mood happy."*
> 
> * ✓ **Moved Dinner with Marta** · Fri 21:00
> * ✓ **Birthday of Marta added** to the calendar
> * ✓ **Diary updated** · mood 😄

---

## Two Models. One Goal: Your Time.

Mangosoft runs two highly optimized local processing engines tailored to your pace:

### chaufa-8 (Fast & Focused)
One calendar action at a time. It is instant, lightweight, and perfect for quick edits like adding an event, shifting a time slot, or cancelling a task.

### chaufa-8-pro (Most Powerful)
Built for complex coordination. It handles up to 12 steps in a single message across your **Calendar, Contacts, and Diary**. It intelligently previews risky changes, understands natural conversational follow-ups (e.g., *"move it 1 hour later"*), and lets you revert everything with a **single-tap Undo**.

---

## How chaufa Thinks

The core engine handles natural language processing using a strict 100% local 3-step pipeline:

1. **Understand:** It splits your messy message into individual atomic actions and reads the structural layout of your local data (`IndexedDB`).
2. **Plan:** It builds a safe, step-by-step execution plan using sandboxed tools. It never raw-edits your database directly.
3. **Apply Live:** Each planned action animates and renders directly onto your calendar grid as it happens, keeping a rollback snapshot active.

---

## The Lavender Suite Expansion

Lavender v8.0.0 expands beyond the grid view into a unified client-side ecosystem:
* **Calendar:** Your central schedule featuring smooth navigation, fluid Day/Week/Month/Year/Agenda views, and micro-interactions.
* **Contacts:** A local address book to manage relationships, automatically injecting birthdays and custom milestones into your core schedule.
* **Dietary:** A built-in nutritional and meal-planning track synced alongside your daily time-blocking grid.
* **Diary:** A secure personal logger to track mood patterns, notes, and habits via natural syntax execution.

---

## 100% Local. 100% Yours.

* **No Accounts:** Just open the page and start organizing.
* **No Cloud / No Servers:** Your text, voice entries, data, and schedules never leave your local device storage.
* **Zero Tracking:** No telemetry, no algorithms spying on your habits, and no ad trackers.

---

## Getting Started

Since Lavender is a progressive client-side application, you can run it instantly or host your own build.

### Development Setup
```bash
# Clone the repository
git clone https://github.com

# Navigate to the folder
cd lavender

# Install local dependencies
npm install

# Run the local development environment
npm run dev
```

## 📄 License

Lavender is free, open-source software. Everything runs on your hardware, exactly the way software should.
