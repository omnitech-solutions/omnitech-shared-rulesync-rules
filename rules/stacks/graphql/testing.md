---
targets:
  - '*'
root: false
description: GraphQL testing guidance
summary: Schema validation, resolver behavior, and contract tests
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/test/**'
  - '**/__tests__/**'
  - '**/*.ts'
  - '**/*.tsx'
  - '**/*.js'
  - '**/*.jsx'
cursor:
  description: GraphQL testing guidance
  globs:
    - '**/*.graphql'
    - '**/*.gql'
    - '**/test/**'
    - '**/__tests__/**'
    - '**/*.ts'
    - '**/*.tsx'
---

# GraphQL Testing Rules

## Schema Tests

- **Breaking Changes:** MUST validate schema changes for breaking changes and
  documentation quality.
- **Deprecations:** Ensure deprecations are intentional and communicated.
- **Snapshots:** Keep schema snapshots stable and review deltas carefully.

## Resolver Tests

- **Mocking:** Test resolver logic with mocked data sources.
- **AuthZ:** MUST verify authorization for both direct and nested field access.
- **Error Paths:** Verify error paths explicitly.
- **Behavior:** Ensure pagination, filtering, and sorting behave correctly.

## Contract Coverage

- **Representative Set:** MUST maintain a small set of representative operations
  as contract tests.
- **Golden Queries:** MUST use these "golden queries" to validate schema changes
  and ensure no breaking changes for critical paths.
- **Alignment:** Keep client-facing examples aligned with current schema.

## Invariant Testing

- **Pagination:** SHOULD test pagination invariants (stable order, cursor
  validity across inserts/deletes).

## Related Rules

- `.rulesync/rules/testing.md`
- `.rulesync/rules/stacks/graphql/overview.md`
