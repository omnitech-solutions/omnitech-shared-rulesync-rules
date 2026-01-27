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
cursor:
  description: GraphQL testing guidance
  globs:
    - '**/*.graphql'
    - '**/*.gql'
---

# GraphQL Testing Rules

## Schema Tests

- Validate schema changes for breaking changes and documentation quality.
- Ensure deprecations are intentional and communicated.
- Keep schema snapshots stable and review deltas carefully.

---

## Resolver Tests

- Test resolver logic with mocked data sources.
- Verify authorization and error paths explicitly.
- Ensure pagination, filtering, and sorting behave correctly.

---

## Contract Coverage

- Use representative queries to catch regressions in response shape.
- Keep client-facing examples aligned with current schema.

---

## Related Rules

- `.rulesync/rules/testing.md`
- `.rulesync/rules/stacks/graphql/overview.md`
