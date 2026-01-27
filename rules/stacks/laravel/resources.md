---
targets:
  - '*'
root: false
description: Laravel API resources and response shaping
summary: Stable, explicit HTTP response contracts
stack: laravel
globs:
  - '**/app/Http/Resources/**'
---

# Laravel Resource Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/laravel/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Response Shaping

- MUST use API Resources to shape external responses.
- MUST avoid returning raw models from controllers.
- SHOULD keep resources stable and versioned.

---

## Consistency

- MUST keep response fields consistent across endpoints.
- SHOULD include links and meta data where appropriate.

---

## Related Rules

- `.rulesync/rules/stacks/laravel/overview.md`
- `.rulesync/rules/stacks/laravel/resources.md`
