---
targets:
  - '*'
root: false
description: Node.js testing practices
summary: Async correctness and boundary testing
stack: nodejs
globs:
  - '**/test/**'
  - '**/__tests__/**'
---

# Node.js Testing Rules

## Test Scope

- **MUST** separate unit and integration tests.
- **MUST** mock external systems at boundaries.

---

## Async Correctness

- **MUST** await all async work in tests.
- **MUST** fail on unhandled rejections.

---

## Stability

- **MUST** keep tests deterministic.
- **MUST** reset shared state between tests.
