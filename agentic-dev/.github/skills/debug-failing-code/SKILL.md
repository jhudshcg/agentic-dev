---
name: debug-failing-code
description: 'Debug a failing test, broken behaviour, or agent mistake. Use for reproducing defects, localising causes, and rerunning the same check after a small fix.'
argument-hint: 'Describe the failure or failing check'
---

# Debug Failing Code

## When To Use

- A test fails.
- The app behaves differently from the requirement.
- An agent-made change looks plausible but is wrong.

## Procedure

1. Reproduce the failure with one command or one clear manual step.
2. Identify the smallest part of the code that controls the failure.
3. State one local hypothesis about the cause.
4. Make one small fix.
5. Rerun the same check first.
6. Note the cause and fix in [devlog](../../../docs/devlog.md) if it will matter later.

## Avoid

- Changing several files before rerunning the failing check.
- Treating a passing build as proof when the original failing check was narrower.