---
targets:
  - '*'
root: false
description: Rails service objects
summary: Orchestration, transactions, and workflows
stack: rails
globs:
  - '**/app/services/**'
cursor:
  description: Rails service objects
  globs:
    - '**/app/services/**'
---

# Rails Service Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/rails/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Service Shape

- MUST have a single, well-defined responsibility.
- MUST be explicit about inputs and outputs.
- SHOULD use command-style naming (e.g., CreateUser).

---

## Error Handling

- MUST return structured errors for predictable failures.
- SHOULD avoid raising exceptions for expected outcomes.

---

## Transactions

- SHOULD manage transaction boundaries at the service level.
- MUST avoid transactions in controllers.

---

## Related Rules

- `.rulesync/rules/stacks/rails/overview.md`
- `.rulesync/rules/stacks/rails/services.md`
- `.rulesync/rules/stacks/rails/persistence.md`
