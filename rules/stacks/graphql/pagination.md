---
targets:
  - '*'
root: false
description: GraphQL pagination rules
summary: Cursor design, ordering guarantees, and list stability
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/operations/**'
---

# GraphQL Pagination Rules

## Pagination Model

- MUST use cursor-based pagination for large collections.
- MUST document pagination arguments and defaults.
- SHOULD include totalCount when it is cheap and accurate.

---

## Consistency

- MUST keep pagination stable across sorting changes.
- SHOULD prevent unbounded page sizes.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/pagination.md`
- `.rulesync/rules/stacks/graphql/performance.md`
