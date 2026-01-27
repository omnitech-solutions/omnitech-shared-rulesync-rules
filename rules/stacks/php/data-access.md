# PHP Data Access Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/php/non-negotiables.md`. If
> any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Data Access Discipline

- MUST centralize database access behind repositories.
- MUST prevent raw queries in controllers.
- SHOULD keep queries optimized and indexed.

---

## Transactions

- MUST use explicit transactions for multi-step writes.
- SHOULD avoid long-lived transactions.

---

## Related Rules

- `.rulesync/rules/stacks/php/overview.md`
- `.rulesync/rules/stacks/php/data-access.md`
