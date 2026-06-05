# Web Testing

Add Playwright only when your project has browser behaviour that is worth checking end to end.

## Worth Adding When

- A user journey crosses several UI steps.
- Manual checking is slow or easy to forget.
- The app can already start and load in a browser.
- You need evidence that the whole flow works, not just one function.

## Leave It Out When

- The project is mostly a CLI, script, API, or local tool with no browser UI.
- The UI changes heavily every session.
- You do not yet have one stable page or flow to test.

## Good First Tests

- Home page loads.
- User can submit one important form.
- User sees the expected result after one main action.

## Keep It Tight

- Add Playwright after the app can already run locally.
- Start with one or two smoke tests.
- Test real user value, not every button.
- Fix flaky setup before adding more tests.

## Suggested Approach

- For Node web apps, add Playwright in the same project.
- For Python web apps, it is still fine to use the Node version of Playwright for browser tests.
- Keep browser tests in their own folder so they do not get mixed up with unit tests.

## Before You Add It

- Decide which local URL the app should run on during tests.
- Decide the one browser flow most worth protecting.
- Ask the agent to add the smallest possible Playwright setup, not a full testing framework overhaul.

## Tiny Worked Example

Imagine your project already has a local web app running on `http://localhost:3000` and the most important flow is submitting one form.

Good first prompt:

```text
Read requirements.md, checkpoint.md and web-testing.md.
This is a web app that already runs locally on http://localhost:3000.
Add the smallest possible Playwright setup for one smoke test.
Only test this flow: the home page loads and the main form can be submitted successfully.
Keep the setup simple, explain any new dependency briefly, and run the narrowest relevant check.
```

Good outcome:

- One Playwright dependency install.
- One config file if needed.
- One browser test for the named flow.
- One command to run that test.

Bad outcome:

- A whole test framework overhaul.
- Several speculative tests.
- Visual snapshot testing before one basic flow works.