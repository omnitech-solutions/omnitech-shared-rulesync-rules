---
targets:
  - '*'
root: false
description: Laravel testing practices
summary: Contract, feature, and domain testing
stack: laravel
globs:
  - '**/tests/**'
---

# Laravel Testing Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/laravel/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Coverage

- MUST test controllers, jobs, and services.
- SHOULD test validation rules and policies.

---

## Isolation

- SHOULD fake queues and external APIs in unit tests.
- SHOULD keep fixtures small and deterministic.

---

## Related Rules

- `.rulesync/rules/stacks/laravel/overview.md`
- `.rulesync/rules/stacks/laravel/testing.md`
