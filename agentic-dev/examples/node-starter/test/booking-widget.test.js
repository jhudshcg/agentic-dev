import test from "node:test";
import assert from "node:assert/strict";

import { availabilitySummary, renderWidget, slotStatus } from "../src/booking-widget.js";

test("slotStatus marks empty slots as sold out", () => {
  assert.equal(slotStatus({ time: "09:00", available: 0, capacity: 4 }), "sold-out");
});

test("availabilitySummary finds the next available slot and counts statuses", () => {
  const slots = [
    { time: "09:00", available: 0, capacity: 4 },
    { time: "09:30", available: 1, capacity: 4 },
    { time: "10:00", available: 4, capacity: 4 },
    { time: "10:30", available: 2, capacity: 4 }
  ];

  assert.deepEqual(availabilitySummary(slots), {
    availableCount: 3,
    soldOutCount: 1,
    lowAvailabilityCount: 2,
    nextAvailable: "09:30"
  });
});

test("renderWidget includes heading, next slot, and slot state classes", () => {
  const widget = renderWidget([
    { time: "09:00", available: 0, capacity: 4 },
    { time: "09:30", available: 1, capacity: 4 },
    { time: "10:00", available: 4, capacity: 4 }
  ], "Studio booking availability");

  assert.match(widget, /Studio booking availability/);
  assert.match(widget, /Next available: 09:30/);
  assert.match(widget, /booking-widget__slot--sold-out/);
  assert.match(widget, /booking-widget__slot--low/);
  assert.match(widget, /booking-widget__slot--open/);
});

test("renderWidget escapes slot and heading text before rendering HTML", () => {
  const widget = renderWidget([
    { time: '<09:30 "priority">', available: 1, capacity: 4 }
  ], 'Studio <script>alert("x")</script>');

  assert.doesNotMatch(widget, /<script>/);
  assert.match(widget, /Studio &lt;script&gt;alert\(&quot;x&quot;\)&lt;\/script&gt;/);
  assert.match(widget, /&lt;09:30 &quot;priority&quot;&gt;/);
});