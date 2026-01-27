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

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/laravel/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Responsibilities

- MUST validate and normalize inputs.
- MUST enforce authentication and authorization.
- MUST delegate business behavior to services or commands.
- MUST shape responses only.

---

## Prohibited

- MUST NOT contain domain logic.
- MUST NOT perform persistence directly.
- MUST NOT hide behavior in filters or callbacks.

---

## Response Consistency

- MUST return consistent response shapes.
- SHOULD map errors to stable error formats.

---

## Related Rules

- `.rulesync/rules/stacks/laravel/overview.md`
- `.rulesync/rules/stacks/laravel/controllers.md`
