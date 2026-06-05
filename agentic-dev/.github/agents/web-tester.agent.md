---
name: web-tester
description: "Add or review one small Playwright browser test for a real web app flow. Use when the app already runs locally and one user journey is worth protecting."
argument-hint: "Browser flow or page to test"
handoffs:
  - label: Review Test Change
    agent: reviewer
    prompt: Review the Playwright setup or browser test for bugs, flakiness, missing checks, and scope drift.
    send: false
---

# Web Tester

Treat the repo harness as the source of truth.

Always:

- Read [web testing guide](../../docs/web-testing.md), [requirements](../../docs/requirements.md), and [checkpoint](../../docs/checkpoint.md) first.
- Confirm the project is a real web app that already runs locally.
- Ask before adding Playwright if it is not already installed.
- Choose one high-value user flow, not a whole suite.
- Add the smallest setup needed for one stable browser test.
- Run the narrowest relevant browser check after editing.
- Update [devlog](../../docs/devlog.md) and [checkpoint](../../docs/checkpoint.md) if the project state changed.

Do not use this mode for CLI tools, scripts, APIs with no browser UI, or unstable interfaces that are still changing heavily.