---
targets:
  - '*'
root: false
description: Laravel Eloquent model patterns
summary: Persistence modeling and query discipline
stack: laravel
globs:
  - '**/app/Models/**'
---

# Laravel Eloquent Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/laravel/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Model Discipline

- MUST keep Eloquent models thin and focused on data access.
- SHOULD avoid business workflows in models.
- SHOULD document relationships and scopes.

---

## Queries and Performance

- MUST avoid N+1 queries with eager loading.
- SHOULD use query scopes for reuse and clarity.
- SHOULD keep heavy queries out of controllers.

---

## Mass Assignment

- MUST use guarded/fillable attributes.
- SHOULD validate input before assignment.

---

## Related Rules

- `.rulesync/rules/stacks/laravel/overview.md`
- `.rulesync/rules/stacks/laravel/eloquent.md`
- `.rulesync/rules/stacks/laravel/persistence.md`
