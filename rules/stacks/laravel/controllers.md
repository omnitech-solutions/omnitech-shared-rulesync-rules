---
targets:
  - '*'
root: false
description: Laravel controller patterns
summary: Boundary validation, orchestration, and response shaping
stack: laravel
globs:
  - '**/app/Http/Controllers/**'
  - '**/controllers/**'
---

# Laravel Controller Rules

## Responsibilities

- **MUST** validate input at the boundary.
- **MUST** map requests to application commands/handlers.
- **MUST** return resources or DTOs — never domain internals.
- **MUST** keep controller actions short and intention-revealing.

---

## Prohibited Behavior

- **MUST NOT** contain business rules.
- **MUST NOT** open database transactions.
- **MUST NOT** return Eloquent models directly.
- **MUST NOT** perform authorization implicitly.

---

## Design Guidance

- **SHOULD** use single-action controllers.
- **SHOULD** inject handlers explicitly.
