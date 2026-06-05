---
description: "Add the smallest possible Playwright smoke test for a web app flow. Use when a project has a working local browser UI and needs one high-value end-to-end check."
name: "Add Playwright Smoke Test"
argument-hint: "Browser flow to protect"
agent: "agent"
---

Read [web testing guide](../../docs/web-testing.md), [requirements](../../docs/requirements.md), and [checkpoint](../../docs/checkpoint.md).

Then:
- confirm whether Playwright is a sensible fit for this project
- if yes, propose the smallest setup for one smoke test only
- keep the focus on one real user flow
- name the command that should run the test
- avoid turning this into a full testing overhaul