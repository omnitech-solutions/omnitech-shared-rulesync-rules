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

## Query Cost Management

- **MUST** enforce query depth or cost limits.
- **MUST** reject or throttle abusive or overly expensive queries early.
- **SHOULD** document cost-heavy fields and expected usage.

---

## Caching & Batching

- **MUST** batch resolver data access.
- **MUST** define clear cache invalidation strategies.
- **MUST NOT** cache personalized data without strict scoping.
- **SHOULD** prefer explicit caches over implicit framework behavior.

---

## Data Shaping

- **MUST** keep list fields lightweight.
- **SHOULD** separate summary vs detail fields.
- **MUST NOT** encourage multi-hop fan-out traversal.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/resolvers.md`
- `.rulesync/rules/stacks/graphql/operations.md`
