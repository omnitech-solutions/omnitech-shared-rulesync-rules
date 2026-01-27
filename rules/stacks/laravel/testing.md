---
targets:
  - '*'
root: false
description: Laravel testing practices
summary: Contract, feature, and domain testing
stack: laravel
globs:
  - '**/tests/**'
---

# Laravel Testing Rules

## Test Coverage

- **MUST** cover domain logic with unit tests.
- **MUST** cover HTTP behavior with feature tests.
- **MUST** assert authorization boundaries.

---

## Determinism

- **MUST** fake external systems.
- **SHOULD** keep tests isolated and repeatable.
