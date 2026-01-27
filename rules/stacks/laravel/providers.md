---
targets:
  - '*'
root: false
description: Laravel service providers
summary: Dependency wiring and bootstrapping
stack: laravel
globs:
  - '**/app/Providers/**'
---

# Laravel Provider Rules

## Bindings

- **MUST** bind interfaces to implementations here.
- **MUST NOT** perform business logic.

---

## Boot Logic

- **SHOULD** remain lightweight and deterministic.
