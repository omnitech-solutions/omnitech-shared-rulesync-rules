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
  - '**/*.ts'
  - '**/*.tsx'
  - '**/*.js'
  - '**/*.jsx'
  - '**/*resolver*.*'
  - '**/*graphql*.*'
cursor:
  description: GraphQL operations and client usage patterns
  globs:
    - '**/*.graphql'
    - '**/*.gql'
    - '**/operations/**'
    - '**/*.ts'
    - '**/*.tsx'
---

# GraphQL Operations Rules

## Query Design

- **Focused Queries:** MUST keep queries focused; avoid over-fetching nested
  relationships by default.
- **Selection Sets:** MUST favor explicit selection sets with clear field
  purpose.
- **Consistent Filtering:** MUST use consistent filtering and sorting
  conventions across lists.

## Pagination Contract

- **Consistent Contract:** Pagination MUST follow a consistent contract.
- **Relay Connections:** SHOULD prefer Relay Connections (edges/nodes +
  pageInfo) for cursor-based pagination.
- **Required Arguments:** MUST define required args for list fields:
  `first`/`after` (and optionally `last`/`before`).
- **Stability:** MUST ensure cursors are tied to sort order and result
  stability.
- **Unbounded Lists:** MUST avoid returning unbounded lists.

## Mutations as Domain Actions

- **Idempotency:** Mutations MUST be idempotent when feasible (assume client
  retries are reality).
- **Return Data:** Mutations MUST return enough data to update clients without
  extra round-trips.
  - MUST return the mutated entity and any changed aggregates/derived fields the
    client likely displays.
- **Side Effects:** MUST keep side effects explicit and documented.

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/schema.md`
- `.rulesync/rules/stacks/graphql/pagination.md`
