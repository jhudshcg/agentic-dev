---
description: "Use when planning, scoping, sequencing, or rescuing work in this repo. Covers small-slice delivery, validation, and when to update checkpoint notes."
name: "Workflow"
---

# Workflow

- Start from [docs/checkpoint.md](../../docs/checkpoint.md).
- If the task is vague, tighten [docs/requirements.md](../../docs/requirements.md) before writing code.
- Break the work into the smallest slice that changes one behaviour.
- Choose one check that can fail if the slice is wrong.
- After the check passes, record the result in [docs/devlog.md](../../docs/devlog.md).
- If the work will continue later, leave the next prompt in [docs/checkpoint.md](../../docs/checkpoint.md).