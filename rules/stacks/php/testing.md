# PHP Testing Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/php/non-negotiables.md`. If
> any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Coverage

- MUST test domain logic and critical data access.
- SHOULD include integration tests for persistence.

---

## Hygiene

- SHOULD avoid shared mutable test state.
- SHOULD keep tests readable with builders.

---

## Related Rules

- `.rulesync/rules/stacks/php/overview.md`
- `.rulesync/rules/stacks/php/testing.md`
