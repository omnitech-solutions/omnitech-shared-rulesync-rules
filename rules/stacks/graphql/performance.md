---
targets:
  - '*'
root: false
description: GraphQL performance guidance
summary: Query cost, caching, and batching strategies
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/resolvers/**'
---

# GraphQL Performance Rules

## Query Cost

- MUST enforce depth/complexity limits.
- MUST batch or cache repeated data fetches.
- SHOULD use persisted queries for critical clients.

---

## Caching

- SHOULD cache stable queries at the edge or service level.
- SHOULD include cache keys that reflect authorization scope.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/performance.md`
- `.rulesync/rules/stacks/graphql/data-access.md`
