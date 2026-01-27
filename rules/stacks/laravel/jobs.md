---
targets:
  - '*'
root: false
description: Laravel jobs and async execution
summary: Idempotent background work and reliability
stack: laravel
globs:
  - '**/app/Jobs/**'
---

# Laravel Jobs Rules

## Job Design

- **MUST** be idempotent.
- **MUST** be safe to retry.
- **MUST** pass identifiers, not models.

---

## Responsibilities

- **MUST NOT** contain business logic.
- **SHOULD** delegate to handlers/services.
