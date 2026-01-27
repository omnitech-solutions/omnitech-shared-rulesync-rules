---
targets:
  - '*'
root: false
description: Laravel security practices
summary: Authentication, authorization, and exposure control
stack: laravel
globs:
  - '**/app/Http/**'
---

# Laravel Security Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/laravel/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Input and Output

- MUST validate all request inputs.
- MUST sanitize user-generated output.

---

## Auth and Authorization

- MUST enforce policies or gates on protected actions.
- SHOULD log authorization failures with safe context.

---

## Related Rules

- `.rulesync/rules/stacks/laravel/overview.md`
- `.rulesync/rules/stacks/laravel/security.md`
