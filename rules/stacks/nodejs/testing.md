---
targets:
  - '*'
root: false
description: Node.js testing guidance
summary: Async correctness, boundaries, and deterministic tests
stack: nodejs
globs:
  - '**/*.js'
  - '**/*.mjs'
  - '**/test/**'
  - '**/__tests__/**'
cursor:
  description: Node.js testing guidance
  globs:
    - '**/*.js'
    - '**/*.mjs'
---

# Node.js Testing Rules

## Test Boundaries

- Separate unit tests (pure logic) from integration tests (I/O and adapters).
- Mock external dependencies at the boundary, not deep inside business logic.
- Validate error paths and timeouts explicitly.

---

## Async Correctness

- Ensure tests await all async work and fail on unhandled rejections.
- Use deterministic clocks and controlled timers for time-based logic.
- Keep concurrency tests bounded and repeatable.

---

## Stability

- Avoid shared mutable state across tests.
- Reset fixtures between runs to keep tests order-independent.
- Prefer small, focused tests over large end-to-end scenarios for unit scope.

---

## Related Rules

- `.rulesync/rules/testing.md`
- `.rulesync/rules/stacks/nodejs/overview.md`
- `.rulesync/rules/stacks/nodejs/runtime.md`
