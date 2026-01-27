---
targets:
  - '*'
root: false
description: TypeScript testing guidance
summary: Type coverage, runtime behavior, and error cases
stack: typescript
globs:
  - '**/*.ts'
  - '**/*.tsx'
  - '**/test/**'
  - '**/__tests__/**'
cursor:
  description: TypeScript testing guidance
  globs:
    - '**/*.ts'
    - '**/*.tsx'
---

# TypeScript Testing Rules

## Testing Strategy

- MUST test business rules at the unit level with clear input/output.
- MUST include integration tests for IO boundaries (database, HTTP, queues).
- SHOULD include end-to-end tests for critical user paths.
- SHOULD keep the test pyramid balanced and intentional.

---

## Determinism and Stability

- MUST avoid nondeterministic tests (time, randomness, network).
- MUST control time via fakes or clock helpers.
- SHOULD run tests in isolation without cross-test state.
- SHOULD clean up global state and restore mocks.

---

## Test Design

- MUST assert behavior, not implementation details.
- SHOULD use fixtures/builders to keep tests readable.
- SHOULD keep tests small and focused on one behavior.
- MAY use snapshots sparingly for stable UI output.

---

## Tooling Expectations

- MUST run tests in CI and gate merges on failures.
- SHOULD measure coverage on critical modules and regressions.
- SHOULD include linting/type checks in the same pipeline.

---

## Related Rules

- `.rulesync/rules/stacks/typescript/overview.md`
- `.rulesync/rules/stacks/typescript/testing.md`
