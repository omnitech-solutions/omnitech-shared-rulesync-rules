---
targets:
  - '*'
root: false
description: Rails persistence patterns
summary: ActiveRecord queries, migrations, and integrity
stack: rails
globs:
  - '**/app/models/**'
  - '**/db/**'
cursor:
  description: Rails persistence patterns
  globs:
    - '**/app/models/**'
---

# Rails Persistence Rules

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

- `.rulesync/rules/stacks/rails/overview.md`
- `.rulesync/rules/stacks/rails/persistence.md`
