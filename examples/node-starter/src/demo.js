import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { renderWidget } from "./booking-widget.js";

const exampleSlots = [
  { time: "09:00", available: 0, capacity: 4 },
  { time: "09:30", available: 1, capacity: 4 },
  { time: "10:00", available: 4, capacity: 4 },
  { time: "10:30", available: 2, capacity: 4 }
];

const css = `
  body {
    font-family: Georgia, "Times New Roman", serif;
    background: linear-gradient(160deg, #f6f1e8, #d9e5f2);
    padding: 32px;
  }

  .booking-widget {
    max-width: 420px;
    padding: 24px;
    border-radius: 18px;
    background: #ffffff;
    box-shadow: 0 18px 45px rgba(32, 48, 73, 0.18);
  }

  .booking-widget__heading {
    margin: 0 0 8px;
    font-size: 1.5rem;
  }

  .booking-widget__summary {
    margin: 0 0 16px;
    color: #3a4a5a;
  }

  .booking-widget__stats,
  .booking-widget__list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .booking-widget__stats {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 16px;
    font-size: 0.95rem;
  }

  .booking-widget__slot {
    display: flex;
    justify-content: space-between;
    padding: 12px 14px;
    border-radius: 12px;
    margin-bottom: 10px;
  }

  .booking-widget__slot--sold-out {
    background: #f5d7d5;
  }

  .booking-widget__slot--low {
    background: #f8ebc9;
  }

  .booking-widget__slot--open {
    background: #d8ead7;
  }

  .booking-widget__badge {
    font-weight: 700;
  }
`;

const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Booking Widget Demo</title>
    <style>${css}</style>
  </head>
  <body>
    ${renderWidget(exampleSlots, "Studio booking availability")}
  </body>
</html>`;

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);
const outputDir = join(currentDir, "..", "dist");
const outputFile = join(outputDir, "demo.html");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, page, "utf-8");

console.log(`Demo page written to ${outputFile}`);