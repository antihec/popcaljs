# PopCal.js

**PopCal.js** is a framework-agnostic JavaScript library for rendering [JSCalendar (RFC 8984)](https://datatracker.ietf.org/doc/html/rfc8984) event data in accessible, themable calendar views.  
It is designed for easy integration into any web project and supports multiple calendar display modes out of the box.

---

## Features

- **JSCalendar (RFC 8984) Native**: Directly consumes JSCalendar-compliant JSON event data.
- **Framework Agnostic**: No dependencies on frontend frameworks; works with any tech stack.
- **Multiple Views**: Yearly, monthly, weekly, and upcoming events list.
- **Accessible (a11y)**: Semantic HTML, keyboard navigation, and ARIA support.
- **Internationalization (i18n)**: Locale-aware display, customizable date and time formats.
- **Themable**: Easily override styles using CSS variables or custom themes.
- **Lightweight**: Minimal footprint, suitable for embedding in digital signage, intranets, and web apps.
- **CDN Ready**: Available as a standalone bundle for direct use via `` tag.

---

## Quick Start

### 1. Include via CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/popcal.js/dist/popcal.min.css">
<script src="https://cdn.jsdelivr.net/npm/popcal.js/dist/popcal.min.js"></script>
```

### 2. Add a Container

```html
<div id="popcal"></div>
```

### 3. Initialize PopCal.js

```javascript
PopCal.render({
  target: '#popcal',
  dataUrl: 'https://yourdomain.com/events.jscalendar.json',
  view: 'monthly', // 'yearly', 'weekly', 'upcoming'
  locale: 'en-US',
  theme: 'default', // or your custom theme
});
```

---

## JSCalendar Data Example

```json
{
  "@type": "CalendarEvent",
  "uid": "event-123",
  "title": "Team Meeting",
  "start": "2025-07-01T09:00:00Z",
  "duration": "PT1H",
  "location": { "name": "Conference Room A" }
}
```

---

## API Reference

| Option    | Type     | Description                                     |
|-----------|----------|-------------------------------------------------|
| target    | string   | CSS selector for the render container           |
| dataUrl   | string   | URL to fetch JSCalendar JSON data               |
| view      | string   | Initial view: 'yearly', 'monthly', 'weekly', 'upcoming' |
| locale    | string   | Locale code for date/time formatting            |
| theme     | string   | Theme name or custom CSS class                  |

---

## Theming

Override CSS variables or provide a custom stylesheet to change appearance.  
See `themes/` for examples.

---

## Accessibility & i18n

- Uses semantic HTML and ARIA roles for screen reader support.
- Fully keyboard navigable.
- Supports localization of date/time and interface labels.

---

## License

MIT License

---

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

**PopCal.js** is under active development. Issues and feature requests are encouraged via GitHub.
