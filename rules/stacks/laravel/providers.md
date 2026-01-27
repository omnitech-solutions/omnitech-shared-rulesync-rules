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

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/laravel/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Provider Discipline

- MUST register bindings and configuration in service providers.
- MUST keep providers idempotent and deterministic.
- SHOULD separate boot and register responsibilities.

---

## Dependency Injection

- MUST prefer container bindings over static facades in domain logic.
- SHOULD bind interfaces to implementations explicitly.

---

## Related Rules

- `.rulesync/rules/stacks/laravel/overview.md`
- `.rulesync/rules/stacks/laravel/providers.md`
