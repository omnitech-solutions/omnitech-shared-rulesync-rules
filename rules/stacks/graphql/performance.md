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
  - '**/*.ts'
  - '**/*.tsx'
  - '**/*.js'
  - '**/*.jsx'
  - '**/*resolver*.*'
  - '**/*graphql*.*'
cursor:
  description: GraphQL performance guidance
  globs:
    - '**/*.graphql'
    - '**/*.gql'
    - '**/resolvers/**'
    - '**/*.ts'
    - '**/*.tsx'
---

# GraphQL Performance Rules

## Query Cost Management

- **Edge Enforcement:** MUST enforce query cost/complexity at the edge
  (reject/throttle expensive queries early).
- **Resource Protection:** MUST enforce query depth or cost limits to protect
  resources.
- **Documentation:** MUST document any "expensive" fields (e.g., full-text
  search, deep aggregations) and provide alternatives (summary vs detail split).

## Caching & Batching

- **Batching:** MUST batch resolver data access across fields and requests.
- **Caching:** Cache stable, frequently accessed data with clear invalidation
  rules.
- **Scope:** MUST avoid caching personalized data without strict scoping.

## Data Shaping

- **Lightweight Lists:** Keep list fields lightweight; provide detail fields
  separately.
- **Fan-Out:** Avoid nested traversal that causes multi-hop fan-out.

## Production Security

- **Persisted Operations:** SHOULD consider persisted operations/allowlists for
  production clients to reduce abuse and improve caching.
- **Introspection:** SHOULD gate introspection/playground in production.

## Related Rules

- `.rulesync/rules/performance.md`
- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/resolvers.md`
