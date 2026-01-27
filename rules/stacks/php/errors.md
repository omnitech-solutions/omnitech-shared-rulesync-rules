# PHP Error Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/php/non-negotiables.md`. If
> any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Error Strategy

- MUST throw exceptions for exceptional failures only.
- MUST return typed error results for expected failures.
- SHOULD avoid mixing control flow with exceptions.

---

## Logging

- MUST log unexpected errors with context.
- SHOULD sanitize sensitive data in logs.

---

## Related Rules

- `.rulesync/rules/stacks/php/overview.md`
- `.rulesync/rules/stacks/php/errors.md`
