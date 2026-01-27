---
targets:
  - '*'
root: false
description: Laravel testing practices
summary: Feature tests, unit tests, factories
stack: laravel
globs:
  - '**/tests/**'
  - '**/*Test.php'
  - '**/*.php'
cursor:
  description: Laravel testing practices
  globs:
    - '**/tests/**'
---

# Laravel Testing Rules

## Test Focus

- **Unit:** Domain logic without Laravel dependencies.
- **Feature:** Full HTTP stack with resources and middleware.
- Use factories/builders for setup.
- Use database transactions or refreshes for isolation.

---

## Fakes

- Fake queues, events, and mailers to keep tests deterministic.
- Assert side effects at boundaries (DB, events, responses).
- Prefer test doubles at service boundaries rather than inside domain logic.
