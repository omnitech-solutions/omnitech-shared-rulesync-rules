---
targets:
  - '*'
root: false
description: Laravel persistence and migrations
summary: Repositories, transactions, and schema discipline
stack: laravel
globs:
  - '**/database/**'
---

# Laravel Persistence Rules

## Persistence Boundaries

- MUST treat persistence as infrastructure, not domain logic.
- MUST keep persistence decisions outside controllers.
- SHOULD isolate persistence behind services or repositories.

---

## Transactions

- MUST use explicit transactions for multi-step writes.
- SHOULD avoid nested transactions.
- SHOULD keep transaction scope minimal.

---

## Query Discipline

- MUST prevent N+1 queries with eager loading.
- SHOULD keep queries readable and indexed.

---

## Related Rules

- `.rulesync/rules/stacks/laravel/overview.md`
- `.rulesync/rules/stacks/laravel/persistence.md`
