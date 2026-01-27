---
targets:
  - '*'
root: false
description: PHP testing practices
summary: PHPUnit focus and deterministic tests
stack: php
globs:
  - '**/tests/**'
  - '**/*Test.php'
  - '**/*.php'
cursor:
  description: PHP testing practices
  globs:
    - '**/tests/**'
---

# PHP Testing Rules

## Test Focus

- Test pure domain logic without frameworks.
- Use integration tests for persistence boundaries.
- Use deterministic fixtures and builders.
- Keep tests isolated and order‑independent.
