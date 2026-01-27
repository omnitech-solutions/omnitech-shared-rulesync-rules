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

## Pagination Requirement

- **MUST** paginate all unbounded lists.
- **MUST NOT** expose full collections without limits.
- **MUST** document default and maximum page sizes.

---

## Cursor Semantics

- **MUST** use opaque cursors.
- **MUST** tie cursors to a stable, documented sort order.
- **MUST NOT** expose database identifiers directly as cursors.
- **MUST** treat cursors as immutable once issued.

---

## Ordering Guarantees

- **MUST** define deterministic ordering for paginated results.
- **MUST** ensure pagination behaves correctly under inserts and deletes.
- **SHOULD** prefer monotonic ordering keys where possible.

---

## Pagination Shape

- **SHOULD** use a consistent connection-style shape across the schema.
- **MUST** include pagination metadata indicating:
  - presence of next/previous pages
  - cursor boundaries

---

## Client Expectations

- **MUST** guarantee cursor validity for at least one pagination window.
- **MUST NOT** require clients to infer ordering rules.
- **SHOULD** document any non-obvious pagination behavior.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/operations.md`
- `.rulesync/rules/stacks/graphql/schema.md`
- `.rulesync/rules/stacks/graphql/testing.md`
