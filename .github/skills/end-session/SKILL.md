---
name: end-session
description: 'Wrap up a work session cleanly. Use for checkpoint updates, dev log summaries, next-step prompts, and leaving the repo ready for the next chat.'
argument-hint: 'Summarise what changed in this session'
---

# End Session

## When To Use

- You are about to stop working.
- The task will continue in another session.
- The repo needs a clean handover note.

## Procedure

1. Update [docs/checkpoint.md](../../../docs/checkpoint.md) with the current state.
2. Add one short entry to [docs/devlog.md](../../../docs/devlog.md).
3. Write the next prompt someone should use to continue.
4. List any checks still missing.

## Output Shape

- Current state
- What changed
- Checks run
- Open issues
- Next prompt