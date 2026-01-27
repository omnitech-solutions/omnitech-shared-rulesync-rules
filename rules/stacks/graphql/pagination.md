---
targets:
  - '*'
root: false
description: GraphQL pagination canonical contract
summary: Relay connections, cursor rules, and pagination invariants
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/operations/**'
  - '**/*.ts'
  - '**/*.tsx'
  - '**/*.js'
  - '**/*.jsx'
  - '**/*resolver*.*'
cursor:
  description: GraphQL pagination canonical contract
  globs:
    - '**/*.graphql'
    - '**/*.gql'
    - '**/operations/**'
    - '**/*.ts'
    - '**/*.tsx'
---

# GraphQL Pagination Rules

## Canonical Contract: Relay Connections

- **Standard:** MUST follow the Relay Connections specification for cursor-based
  pagination.
- **Unbounded Lists:** MUST avoid unbounded lists; ALL lists returning potential
  collections MUST be paginated.
- **Structure:**
  - `edges`: List of `{ cursor, node }`.
  - `pageInfo`: `{ hasNextPage, hasPreviousPage, startCursor, endCursor }`.
  - `nodes`: (Optional) Helper list of nodes for convenience.

## Arguments

- **Forward:** `first` (int), `after` (cursor).
- **Backward:** `last` (int), `before` (cursor).
- **Validation:** MUST validate that `first` and `last` are within reasonable
  limits to prevent unbounded fetching.

## Cursor Stability

- **Opaque:** Cursors MUST be opaque strings (base64 encoded) to clients.
- **Tie-Breakers:** Cursors MUST include a unique tie-breaker (e.g., ID) along
  with the sort field.
- **Sort Order:** Cursors MUST be tied to the specific sort order of the query.
  Changing sort order MUST invalidate the cursor.

## Invariants

- **Exclusivity:** The `after` cursor item MUST NOT be included in the result
  set.
- **Consistency:** Pagination results MUST be consistent with the underlying
  data source at the time of query.

## Related Rules

- `.rulesync/rules/stacks/graphql/operations.md`
- `.rulesync/rules/stacks/graphql/performance.md`
