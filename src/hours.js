// Date and opening-hours helpers. Dates in config.json are 'YYYY-MM-DD' and
// times are 24-hour 'HH:MM', both in the bakery's own time zone.

const TIME_ZONE = 'America/Toronto';

// Today's date in the bakery's time zone, as 'YYYY-MM-DD'.
export function today(now = new Date()) {
  return now.toLocaleDateString('en-CA', { timeZone: TIME_ZONE });
}

// Whether today falls within { start, end }, inclusive of both days.
export function isActive({ start, end }, now = new Date()) {
  const date = today(now);
  return date >= start && date <= end;
}

// '09:00' -> '9am', '15:30' -> '3:30pm'
export function formatTime(time) {
  const [h, m] = time.split(':').map(Number);
  const hour = h % 12 || 12;
  const suffix = h < 12 ? 'am' : 'pm';
  return m ? `${hour}:${String(m).padStart(2, '0')}${suffix}` : `${hour}${suffix}`;
}

// { opens: '09:00', closes: '15:00' } -> '9am–3pm'; no times -> 'Closed'
export function formatHours({ opens, closes }) {
  return opens && closes ? `${formatTime(opens)}–${formatTime(closes)}` : 'Closed';
}

// ['Monday', 'Tuesday'] -> 'Monday & Tuesday'
export function formatDays(days) {
  return days.join(' & ');
}

// The hours entry that covers today's weekday.
export function todaysHours(hours, now = new Date()) {
  const weekday = now.toLocaleDateString('en-US', { weekday: 'long', timeZone: TIME_ZONE });
  return hours.find((entry) => entry.days.includes(weekday));
}
