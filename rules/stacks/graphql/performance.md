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
cursor:
  description: GraphQL performance guidance
  globs:
    - '**/*.graphql'
    - '**/*.gql'
---

# GraphQL Performance Rules

## Query Cost Management

- Enforce query depth or cost limits to protect resources.
- Reject or throttle expensive queries early.
- Document cost-heavy fields and their intended usage.

---

## Caching & Batching

- Batch resolver data access across fields and requests.
- Cache stable, frequently accessed data with clear invalidation rules.
- Avoid caching personalized data without strict scoping.

---

## Data Shaping

- Keep list fields lightweight; provide detail fields separately.
- Avoid nested traversal that causes multi-hop fan-out.

---

## Related Rules

- `.rulesync/rules/performance.md`
- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/resolvers.md`
