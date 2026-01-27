---
targets:
  - '*'
root: false
description: Rails model discipline
summary: Entity behavior, validations, and associations
stack: rails
globs:
  - '**/app/models/**'
cursor:
  description: Rails model discipline
  globs:
    - '**/app/models/**'
---

# Rails Model Rules

## Scope

- **MUST** represent a single aggregate or entity.
- **MUST** expose intention-revealing behavior.
- **MUST NOT** coordinate workflows.

---

## Validations & Callbacks

- **MAY** use validations for user-level guarantees.
- **MUST NOT** rely on callbacks for orchestration.

---

## Associations

- **MUST** avoid deep association chains.
- **MUST** explicitly manage eager loading.
