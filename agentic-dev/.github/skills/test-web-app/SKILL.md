---
name: test-web-app
description: 'Use Playwright to test a real web app flow in the browser. Use for optional end-to-end web testing, smoke tests, page-load checks, and form or navigation flows.'
argument-hint: 'Describe the browser flow to test'
---

# Test Web App

## When To Use

- The project has a browser UI.
- One user journey is important enough to protect with an end-to-end test.
- The app can already run locally.

## Read First

- [web testing guide](../../../docs/web-testing.md)
- [requirements](../../../docs/requirements.md)
- [checkpoint](../../../docs/checkpoint.md)

## Procedure

1. Confirm the app is a web app and can run locally.
2. Ask before adding Playwright if it is not already installed.
3. Choose one high-value user flow, not a whole suite.
4. Add the smallest setup needed to run one browser test.
5. Run that test and fix setup issues before adding more.
6. Record the command and result in [devlog](../../../docs/devlog.md).

## Good Targets

- Page load
- Main form submission
- Login or sign-in flow
- Navigation to a key result page

## Avoid

- Adding Playwright to non-web projects.
- Writing several fragile tests before the first one is stable.
- Testing every visual detail instead of the main outcome.