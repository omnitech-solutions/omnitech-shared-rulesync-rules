---
targets:
  - '*'
root: false
description: Unit testing best practices
summary: Focused unit/integration testing guidance
---

# Unit Testing Rules

## Purpose

- Provide focused guidance for unit and integration tests.
- Complement `.rulesync/rules/testing.md` with actionable patterns.

---

## Core Principles

- MUST test behavior, not implementation details.
- MUST keep tests isolated and deterministic.
- SHOULD prefer small units and fast feedback.
- SHOULD cover edge cases and error paths.

---

## Structure

- Use Arrange-Act-Assert.
- Keep assertions focused on a single behavior.
- Use descriptive test names that read like specs.

---

## Mocks and Fakes

- Mock external services and side effects.
- Prefer real implementations for core logic when stable.
- Avoid over-mocking internal collaborators.

---

## Coverage Guidance

- Prioritize high-risk or frequently changed areas.
- Treat tests as a merge gate for risky changes.

---

## Related Rules

- `.rulesync/rules/testing.md`
- `.rulesync/rules/code-quality.md`
