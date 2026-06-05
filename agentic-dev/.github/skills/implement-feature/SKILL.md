---
name: implement-feature
description: 'Implement a small feature slice from project requirements or a checkpoint. Use for scoped coding tasks, tiny increments, and test-backed progress.'
argument-hint: 'Describe the feature slice to implement'
---

# Implement Feature

## When To Use

- A requirement is clear enough to build.
- The next step can fit in one small commit.
- You want code and one relevant validation check.

## Procedure

1. Read [requirements](../../../docs/requirements.md) and [checkpoint](../../../docs/checkpoint.md).
2. Restate the slice in one sentence.
3. Name the check that should fail if the slice is wrong.
4. Make the smallest code change that satisfies the slice.
5. Run the check.
6. Update [devlog](../../../docs/devlog.md) if behaviour or decisions changed.

## Stop If

- The slice needs a new dependency, a new framework, or a bigger design choice.
- The requirement is still vague after one clarification pass.