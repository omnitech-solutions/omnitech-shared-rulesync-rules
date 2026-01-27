---
targets:
  - '*'
root: false
description: GraphQL operations and client usage patterns
summary: Queries, mutations, pagination, and filtering
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/operations/**'
---

# GraphQL Operations Rules

## Operation Design

- MUST keep queries focused and predictable.
- MUST avoid overly broad selection sets.
- SHOULD use fragments to share common fields.

---

## Naming and Organization

- MUST name operations consistently and descriptively.
- SHOULD group operations by feature.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/operations.md`
- `.rulesync/rules/stacks/graphql/performance.md`
