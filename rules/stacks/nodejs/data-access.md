---
targets:
  - '*'
root: false
description: Node.js data access discipline
summary: Repositories, transactions, and consistency
stack: nodejs
globs:
  - '**/repositories/**'
  - '**/db/**'
---

# Node.js Data Access Rules

## Access Boundaries

- MUST centralize database access behind repositories or services.
- MUST avoid leaking persistence models into domain logic.
- SHOULD keep query building in a dedicated layer.

---

## Query Safety

- MUST avoid N+1 queries via preloading or batching.
- MUST use parameterized queries or ORM bindings.
- SHOULD keep queries deterministic and well-scoped.

---

## Transactions

- MUST scope transactions to a single business unit of work.
- SHOULD avoid long-lived transactions.
- SHOULD document transactional boundaries.

---

## Related Rules

- `.rulesync/rules/stacks/nodejs/overview.md`
- `.rulesync/rules/stacks/nodejs/data-access.md`
