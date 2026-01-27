---
targets:
  - '*'
root: false
description: Rails testing practices
summary: Model, controller, and request specs
stack: rails
globs:
  - '**/spec/**'
  - '**/test/**'
  - '**/*.spec.rb'
  - '**/*_spec.rb'
cursor:
  description: Rails testing practices
  globs:
    - '**/spec/**'
---

# Rails Testing Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/rails/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Coverage

- MUST test services and critical controllers.
- SHOULD include model validation tests.

---

## Data

- SHOULD use factories and keep fixtures minimal.
- SHOULD avoid hitting external services in unit tests.

---

## Related Rules

- `.rulesync/rules/stacks/rails/overview.md`
- `.rulesync/rules/stacks/rails/testing.md`
