---
targets:
  - '*'
root: false
description: Rails testing strategy
summary: Deterministic, boundary-focused tests
stack: rails
globs:
  - '**/spec/**'
cursor:
  description: Rails testing strategy
  globs:
    - '**/spec/**'
---

# Rails Security Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/rails/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Input and Output

- MUST use strong params for all inputs.
- MUST sanitize user-generated output.
- SHOULD encode data in views and serializers.

---

## Auth and Authorization

- MUST authorize every protected action.
- SHOULD centralize authorization policies.

---

## Related Rules

- `.rulesync/rules/stacks/rails/overview.md`
- `.rulesync/rules/stacks/rails/security.md`
