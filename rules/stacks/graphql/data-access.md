---
targets:
  - '*'
root: false
description: GraphQL data access rules
summary: Data fetching boundaries, batching, and consistency guarantees
stack: graphql
globs:
  - '**/resolvers/**'
  - '**/services/**'
  - '**/*.graphql'
  - '**/*.gql'
---

# GraphQL Data Access Rules

## Access Discipline

- MUST keep resolvers orchestration-only.
- MUST fetch data through services or repositories.
- SHOULD use batching to prevent N+1.

---

## Transactions

- MUST keep write operations atomic and consistent.
- SHOULD scope transactions to a single mutation.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/data-access.md`
- `.rulesync/rules/stacks/graphql/resolvers.md`
