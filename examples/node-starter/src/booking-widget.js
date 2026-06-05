/**
 * Booking-slot availability helpers for a small web widget starter app.
 *
 * This demo models a believable early slice of a product feature. Given a few
 * booking slots, it summarises availability, highlights the next open slot,
 * and renders a compact widget a frontend could drop into a page.
 */

/**
 * Clamp slot values so widget logic stays predictable and easy to inspect.
 *
 * @param {{time: string, available: number, capacity: number}} slot
 * @returns {{time: string, available: number, capacity: number}}
 */
function normaliseSlot(slot) {
  const capacity = Math.max(1, slot.capacity);
  return {
    time: slot.time.trim(),
    available: Math.max(0, Math.min(slot.available, capacity)),
    capacity
  };
}

/**
 * Escape plain text before interpolating it into HTML.
 *
 * @param {string} value
 * @returns {string}
 */
function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/**
 * Classify a slot for display in the widget.
 *
 * @param {{time: string, available: number, capacity: number}} slot
 * @returns {"sold-out" | "low" | "open"}
 */
export function slotStatus(slot) {
  const normalised = normaliseSlot(slot);
  if (normalised.available === 0) {
    return "sold-out";
  }
  if (normalised.available <= 2) {
    return "low";
  }
  return "open";
}

/**
 * Summarise the slot list for a booking availability widget.
 *
 * @param {{time: string, available: number, capacity: number}[]} slots
 * @returns {{availableCount: number, soldOutCount: number, lowAvailabilityCount: number, nextAvailable: string}}
 */
export function availabilitySummary(slots) {
  const normalisedSlots = slots.map(normaliseSlot).filter((slot) => slot.time);
  const nextAvailable = normalisedSlots.find((slot) => slot.available > 0);

  return {
    availableCount: normalisedSlots.filter((slot) => slot.available > 0).length,
    soldOutCount: normalisedSlots.filter((slot) => slot.available === 0).length,
    lowAvailabilityCount: normalisedSlots.filter((slot) => slotStatus(slot) === "low").length,
    nextAvailable: nextAvailable ? nextAvailable.time : "No slots available"
  };
}

/**
 * Render a compact availability widget as an HTML string.
 *
 * @param {{time: string, available: number, capacity: number}[]} slots
 * @param {string} heading
 * @returns {string}
 */
export function renderWidget(slots, heading = "Booking availability") {
  const normalisedSlots = slots.map(normaliseSlot).filter((slot) => slot.time);
  const summary = availabilitySummary(normalisedSlots);
  const slotMarkup = normalisedSlots.map((slot) => {
    const status = slotStatus(slot);
    return `
      <li class="booking-widget__slot booking-widget__slot--${status}">
        <span class="booking-widget__time">${escapeHtml(slot.time)}</span>
        <span class="booking-widget__badge">${slot.available}/${slot.capacity} available</span>
      </li>`;
  }).join("");

  return `
    <section class="booking-widget">
      <h2 class="booking-widget__heading">${escapeHtml(heading)}</h2>
      <p class="booking-widget__summary">Next available: ${escapeHtml(summary.nextAvailable)}</p>
      <ul class="booking-widget__stats">
        <li>${summary.availableCount} slots available</li>
        <li>${summary.lowAvailabilityCount} low availability</li>
        <li>${summary.soldOutCount} sold out</li>
      </ul>
      <ul class="booking-widget__list">${slotMarkup}
      </ul>
    </section>`;
}