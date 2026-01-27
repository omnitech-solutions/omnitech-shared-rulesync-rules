---
targets:
  - '*'
root: false
description: Laravel validation patterns
summary: Boundary validation and domain safety
stack: laravel
globs:
  - '**/app/Http/**'
---

# Laravel Validation Rules

## Boundary Validation

- **MUST** validate all external input at the boundary.
- **MUST** construct application commands from validated data only.
- **MUST NOT** leak Request objects into domain logic.

---

## Form Requests

- **SHOULD** use Form Requests for MVC-style flows.
- **MUST NOT** embed business rules in Form Requests.

---

## Domain Validation

- **MUST** enforce invariants inside domain entities/value objects.
- **MUST** fail fast with explicit exceptions.
