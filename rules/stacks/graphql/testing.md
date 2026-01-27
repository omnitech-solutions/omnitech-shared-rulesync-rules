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

## Contract Testing

- **MUST** maintain a representative set of contract queries and mutations.
- **MUST** detect breaking schema changes via tests.
- **SHOULD** snapshot response shapes for critical operations.

---

## Authorization Testing

- **MUST** test authorization at both top-level and nested fields.
- **MUST** test unauthorized access paths.

---

## Pagination & Invariants

- **MUST** test pagination stability and cursor validity.
- **SHOULD** test behavior under inserts, deletes, and reordering.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/governance.md`
- `.rulesync/rules/stacks/graphql/security.md`
