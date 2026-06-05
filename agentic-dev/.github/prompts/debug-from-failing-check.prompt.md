---
description: "Debug from one failing check or broken behaviour. Use when a test, command, or manual check has failed and the user needs a small, disciplined next move."
name: "Debug From Failing Check"
argument-hint: "Failing command, test, or broken behaviour"
agent: "agent"
---

Read [checkpoint](../../docs/checkpoint.md) and [definition of done](../../docs/definition-of-done.md).

Then:
- restate the failure clearly
- give one local hypothesis for the cause
- name the smallest code area to inspect first
- name the same check that should be rerun after the fix
- avoid broad rewrites or stack changes