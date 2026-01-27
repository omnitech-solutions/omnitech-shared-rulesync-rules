# PHP Performance Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/php/non-negotiables.md`. If
> any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Efficiency

- MUST avoid N+1 queries.
- SHOULD cache expensive computations.
- SHOULD keep payload sizes small.

---

## Related Rules

- `.rulesync/rules/stacks/php/overview.md`
- `.rulesync/rules/stacks/php/performance.md`
