// index.js

async function render({ target, dataUrl, view = 'monthly' }) {
  const container = document.querySelector(target);
  if (!container) return;

  // Fetch JSCalendar data
  const response = await fetch(dataUrl);
  const calendar = await response.json();

  // Render events as a simple list (MVP)
  const events = Object.values(calendar.events || {});
  container.innerHTML = `
    <div class="popcal-calendar">
      ${events.map(event => `
        <div class="popcal-event">
          <div class="popcal-title">${event.title}</div>
          <div class="popcal-date">${event.start}</div>
          <div class="popcal-location">${event.location?.name || ''}</div>
        </div>
      `).join('')}
    </div>
  `;
}


export default { render };
