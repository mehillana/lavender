# Lavender Roadmap

Strategic vision for Lavender's evolution. Updated regularly as priorities shift.

## Current Status

**v0.1.0** — Core calendar with smart parsing, five views, repeating events, themes and quests.

---

## Version Milestones

### v0.2.0 — **Polish & Interactivity** (Next)

**Goal:** Smooth interactions and rich visual feedback.

- [ ] **Drag and resize events** — Reorganize your calendar by dragging
- [ ] **Event colours** — Custom colours per event or per type
- [ ] **Improved mobile responsiveness** — Better touch interactions and layout
- [ ] **Visual polish** — Animations, transitions and feedback
- [ ] **Bug fixes from v0.1** — Stability and edge cases

**Timeline:** 4-6 weeks  
**Priority:** High

---

### v0.3.0 — **Data Portability & Backup**

**Goal:** Full control over your data with easy export and import.

- [ ] **Import from .ics files** — Load calendars from other apps
- [ ] **Export to .ics** — Share calendar data portably
- [ ] **Export to JSON** — Full data backup in Lavender's native format
- [ ] **One-click backup** — Download all your calendar data
- [ ] **Import JSON** — Restore from backups
- [ ] **Clear data with confirmation** — Safer data management

**Timeline:** 2-3 weeks  
**Priority:** High

---

### v0.4.0 — **Sharing & Collaboration**

**Goal:** Safely share calendars with others while preserving privacy.

- [ ] **Read-only share links** — Generate shareable calendar links
- [ ] **Calendar sharing settings** — Choose what to share (public/private)
- [ ] **Shared event comments** — Notes between shared users
- [ ] **Merge shared calendars** — Import someone else's events
- [ ] **Permission granularity** — Share by date range or event type

**Timeline:** 6-8 weeks  
**Priority:** Medium

---

### v0.5.0 — **Smart Notifications & Reminders**

**Goal:** Keep you informed without distraction.

- [ ] **Browser notifications** — Alerts even when tab is closed
- [ ] **Notification settings** — Per-event or global reminder timing
- [ ] **Sound alerts** — Optional audio cues
- [ ] **Snooze reminders** — "Remind me in 5 minutes"
- [ ] **Email-style digests** — Daily or weekly summaries (local only)

**Timeline:** 3-4 weeks  
**Priority:** Medium

---

### v0.6.0 — **Advanced Search & Filtering**

**Goal:** Find what you need instantly.

- [ ] **Advanced search** — Search by date range, person, type, tags
- [ ] **Saved filters** — Favorite views (e.g., "All birthdays", "Joan's events")
- [ ] **Tagging system** — Organize events with custom tags
- [ ] **Search history** — Quick access to recent searches
- [ ] **Full-text search** — Search inside notes and descriptions

**Timeline:** 3-4 weeks  
**Priority:** Medium

---

### v0.7.0 — **Integrations & Attachments**

**Goal:** Connect Lavender to your other tools.

- [ ] **Attachments** — Add files, images or links to events
- [ ] **Calendar integrations** — Sync with Google Calendar, Outlook (read-only initially)
- [ ] **Contact integrations** — Link phone contacts to people in your calendar
- [ ] **Weather integration** — Show weather forecasts on events
- [ ] **Location maps** — Display event locations on maps

**Timeline:** 6-8 weeks  
**Priority:** Low

---

### v0.8.0 — **Offline-First Enhancements**

**Goal:** Work seamlessly with or without internet.

- [ ] **Service Worker support** — Fully functional offline
- [ ] **PWA (Progressive Web App)** — Installable on desktop and mobile
- [ ] **Sync queue** — Queue changes when offline, sync when online
- [ ] **Conflict resolution** — Handle local edits when syncing later

**Timeline:** 4-6 weeks  
**Priority:** Medium

---

### v1.0.0 — **Stable Release & Cloud Sync** (Future)

**Goal:** Multi-device sync while maintaining privacy-first principles.

- [ ] **Optional cloud sync** — End-to-end encrypted sync across devices
- [ ] **Account-optional authentication** — Sign in to enable sync (no tracking)
- [ ] **Device management** — See and revoke access from other devices
- [ ] **Backup to cloud** — Encrypted backups
- [ ] **Performance optimization** — Handle large calendars (1000+ events)

**Timeline:** 3-4 months  
**Priority:** Low (breaking change)

---

## Under Consideration

**Low priority or experimental ideas:**

- Dark mode refinements and custom themes
- Calendar analytics — Event statistics and patterns
- Habit tracking — Link habits to events
- AI-powered summaries — Smart event suggestions (local only)
- Calendar templates — Pre-made event sets for planning
- Buddy system — Accountability partnerships with shared visibility
- Native apps — Electron/Cordova wrappers
- Calendar import from photos — Event extraction from images

---

## Known Issues

- Reminders only work while tab is open
- Astronomical dates (moon phases, seasons) can be off by a day
- No data sync between browsers or devices
- Mobile experience needs refinement

---

## Contributing to the Roadmap

Have an idea? Open an issue to discuss it. High-impact, low-effort features are prioritized first.

---

**Last updated:** October 12, 2026  
**Next review:** When v0.2.0 is released
