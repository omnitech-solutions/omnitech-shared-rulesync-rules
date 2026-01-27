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
cursor:
  description: GraphQL operations and client usage patterns
  globs:
    - '**/*.graphql'
    - '**/*.gql'
---

# GraphQL Operations Rules

## Query Design

- Keep queries focused; avoid over-fetching nested relationships by default.
- Favor explicit selection sets with clear field purpose.
- Use consistent filtering and sorting conventions across lists.

---

## Pagination

- Prefer cursor-based pagination for large datasets.
- Ensure pagination metadata is stable and documented.
- Avoid returning unbounded lists.

---

## Mutations

- Model mutations as domain actions, not generic CRUD.
- Return enough data to update clients without extra round-trips.
- Keep side effects explicit and documented.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/schema.md`
