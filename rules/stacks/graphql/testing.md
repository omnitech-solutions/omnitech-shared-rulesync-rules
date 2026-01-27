---
targets:
  - '*'
root: false
description: GraphQL testing guidance
summary: Contract testing, authorization coverage, and invariants
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/tests/**'
---

# GraphQL Testing Rules

## Schema Tests

- MUST test schema changes for breaking behavior.
- SHOULD include contract tests for core operations.

---

## Resolver Tests

- MUST test resolver error mapping and authorization.
- SHOULD test batching and caching behavior.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/testing.md`
