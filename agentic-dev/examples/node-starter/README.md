# Node Starter

This demo is a small booking-slot availability web widget.

It represents a believable early app slice for a frontend product feature. It is not about project planning. It takes a short list of booking slots, works out the next available slot, and renders a compact widget that could sit on a booking page or admin dashboard.

## What The Demo Does

The demo works with slots that each have:

- a time label
- available spaces
- total capacity

From that, it can:

- summarise how many slots are available, low availability, or sold out
- highlight the next available slot
- render the widget as reusable HTML
- generate a small demo page to open in a browser

This is concrete enough to feel useful, but still small enough to inspect and extend.

## Example Output

Running the demo writes a small preview page and renders a widget with output shaped like this:

```html
<section class="booking-widget">
  <h2 class="booking-widget__heading">Studio booking availability</h2>
  <p class="booking-widget__summary">Next available: 09:30</p>
  ...
</section>
```

That gives the user an immediate answer to a real question: when is the next slot available and what is already filling up?

## Why This Fits The Harness

This is the kind of result you could plausibly get after the first few prompts with this template:

1. tighten the app requirements
2. plan the smallest useful slice
3. implement one real behaviour with tests

The harness stays focused on requirements, checkpoints, and workflow. The demo code becomes a genuine part of the app.

## Plausible Prompt Sequence

First prompt, after typing `/` and choosing `Tighten Requirements`:

```text
The project is a booking slot availability widget.
I want must-have features, things the first version will deliberately leave out, and success checks for a simple first release.
```

Second prompt, after typing `/` and choosing `Plan Next Slice`:

```text
I want one practical feature that gives the user value quickly.
For this project, the next slice should focus on showing the next available slot and basic slot status labels.
Name one validation check too.
```

Third prompt:

```text
Read requirements.md and checkpoint.md, then implement a small Node widget for booking availability.
Use a list of slots with times, availability, and capacity.
Show the next available slot, summarise slot states, add focused tests, and run the narrowest relevant check.
```

Using a saved prompt here is helpful because it keeps the early workflow consistent and reduces the chance of drifting into vague one-off requests.

## Files

- `src/booking-widget.js`: documented summary and rendering helpers
- `src/demo.js`: writes a small demo HTML page with sample data
- `test/booking-widget.test.js`: focused tests for the core behaviour

## Run

```powershell
npm.cmd test
npm.cmd run demo
```

After running the demo, open `dist/demo.html` in a browser.