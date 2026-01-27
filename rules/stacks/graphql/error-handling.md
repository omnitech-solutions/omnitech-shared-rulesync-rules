---
targets:
  - '*'
root: false
description: GraphQL error handling guidance
summary: Error shapes, codes, and client expectations
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/resolvers/**'
---

# GraphQL Error Handling Rules

## Error Shapes

- MUST return structured errors with stable codes.
- MUST avoid using nulls as primary error signals.
- SHOULD include path and field context where safe.

---

## Error Propagation

- MUST map domain errors to GraphQL errors at the boundary.
- SHOULD log internal errors with correlation ids.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/error-handling.md`
- `.rulesync/rules/stacks/graphql/error-codes.md`
