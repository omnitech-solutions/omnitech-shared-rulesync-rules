---
targets:
  - '*'
root: false
description: GraphQL schema governance guidance
summary: Review processes, deprecations, and API stewardship
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/schema.*'
---

# GraphQL Governance Rules

## Schema Governance

- MUST review schema changes before release.
- MUST document deprecations and migrations.
- SHOULD enforce linting and schema checks in CI.

---

## Ownership

- MUST assign owners to schema areas and operations.
- SHOULD document SLAs and performance budgets.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/governance.md`
