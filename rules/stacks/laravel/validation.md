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

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/laravel/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Validation Strategy

- MUST validate all request inputs using Form Requests.
- MUST centralize validation rules for reuse.
- SHOULD keep validation errors user-safe and consistent.

---

## Rule Design

- MUST use explicit rule sets per endpoint.
- SHOULD prefer dedicated rule objects for complex validation.
- SHOULD avoid validation inside controllers.

---

## Related Rules

- `.rulesync/rules/stacks/laravel/overview.md`
- `.rulesync/rules/stacks/laravel/validation.md`
