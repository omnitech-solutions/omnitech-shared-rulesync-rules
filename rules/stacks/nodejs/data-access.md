---
targets:
  - '*'
root: false
description: Node.js data access boundaries
summary: Repository patterns, transactions, and consistency
stack: nodejs
globs:
  - '**/*.js'
  - '**/*.mjs'
  - '**/repositories/**'
  - '**/db/**'
cursor:
  description: Node.js data access boundaries
  globs:
    - '**/*.js'
    - '**/*.mjs'
---

# Node.js Data Access Rules

## Access Boundaries

- Keep persistence concerns out of domain logic.
- Use repositories or adapters to isolate storage details.
- Avoid leaking query syntax into business rules.

---

## Consistency & Transactions

- Keep transactional boundaries explicit and minimal.
- Avoid cross-aggregate writes without a coordination strategy.
- Handle partial failures with compensating actions when needed.

---

## Performance & Safety

- Prefer bounded queries and pagination over unbounded reads.
- Avoid N+1 access patterns in request paths.
- Ensure migrations and data changes are reversible.

---

## Related Rules

- `.rulesync/rules/architecture.md`
- `.rulesync/rules/stacks/nodejs/overview.md`
- `.rulesync/rules/stacks/nodejs/performance.md`
