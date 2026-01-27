---
targets:
  - '*'
root: false
description: GraphQL operations and client usage patterns
summary: Queries, mutations, pagination, and filtering
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/operations/**'
---

# GraphQL Operations Rules

## Query Design

- **MUST** keep queries focused and intentional.
- **MUST NOT** expose deeply nested traversal by default.
- **SHOULD** use consistent filtering and sorting conventions.

---

## Pagination

- **MUST** use cursor-based pagination for unbounded datasets.
- **MUST** provide stable, documented pagination metadata.
- **MUST NOT** return unbounded lists.
- **SHOULD** use a consistent connection-style shape across the schema.
- **SHOULD** tie cursors to a stable, documented sort order.

---

## Mutations

- **MUST** model mutations as domain actions, not generic CRUD.
- **MUST** return enough data for clients to update local state without extra
  round-trips.
- **MUST** make side effects explicit and documented.
- **SHOULD** be idempotent when feasible.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/schema.md`
- `.rulesync/rules/stacks/graphql/error-handling.md`
