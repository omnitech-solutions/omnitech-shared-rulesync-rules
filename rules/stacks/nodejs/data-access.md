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

## Boundaries

- **MUST** isolate persistence behind repositories/adapters.
- **MUST NOT** embed query logic in domain code.

---

## Transactions

- **MUST** keep transaction boundaries explicit.
- **MUST NOT** span multiple aggregates without coordination.

---

## Safety

- **MUST** paginate unbounded reads.
- **MUST** prevent N+1 access patterns.
