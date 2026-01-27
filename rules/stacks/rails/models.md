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

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/rails/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Model Responsibilities

- MUST represent domain state and invariants.
- SHOULD keep business workflows in services, not models.
- SHOULD keep callbacks minimal and explicit.

---

## Validations and Constraints

- MUST validate critical invariants at the model level.
- SHOULD back validations with database constraints.
- SHOULD use clear, actionable validation messages.

---

## Associations and Queries

- MUST avoid N+1 queries with explicit includes.
- SHOULD keep associations intentional and documented.

---

## Related Rules

- `.rulesync/rules/stacks/rails/overview.md`
- `.rulesync/rules/stacks/rails/models.md`
- `.rulesync/rules/stacks/rails/persistence.md`
