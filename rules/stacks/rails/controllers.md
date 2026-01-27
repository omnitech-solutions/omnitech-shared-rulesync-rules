---
targets:
  - '*'
root: false
description: Rails controller patterns
summary: Thin controllers, strong params, explicit delegation
stack: rails
globs:
  - '**/app/controllers/**'
cursor:
  description: Rails controller patterns
  globs:
    - '**/app/controllers/**'
---

# Rails Controller Rules

## Responsibilities

- **MUST** validate and normalize input.
- **MUST** enforce authorization explicitly.
- **MUST** delegate all business behavior to services.
- **MUST** shape responses only.

---

## Prohibited

- **MUST NOT** contain domain logic.
- **MUST NOT** manage transactions.
- **MUST NOT** enqueue jobs implicitly.
- **MUST NOT** return ActiveRecord models directly.

---

## Filters

- **MUST NOT** hide business logic in filters or concerns.
