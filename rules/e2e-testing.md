---
targets:
  - '*'
root: false
description: End-to-end testing best practices
summary: Focused E2E testing guidance
---

# E2E Testing Rules

## Purpose

- Provide focused guidance for end-to-end tests.
- Complement `.rulesync/rules/testing.md` with user-flow coverage.

---

## Core Principles

- MUST test real user workflows end-to-end.
- MUST keep test data isolated and repeatable.
- SHOULD minimize flakiness with stable selectors and waits.
- SHOULD limit E2E scope to critical flows.

---

## Structure

- Use clear scenario names.
- Keep setup minimal and reusable.
- Prefer page objects or helpers for repeated steps.

---

## Reliability

- Avoid time-based sleeps; wait for conditions.
- Ensure test environments reset cleanly.

---

## Related Rules

- `.rulesync/rules/testing.md`
- `.rulesync/rules/performance.md`
