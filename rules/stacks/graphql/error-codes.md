---
targets:
  - '*'
root: false
description: GraphQL error code registry rules
summary: Stable error codes and classification guarantees
stack: graphql
globs:
  - '**/resolvers/**'
  - '**/*.graphql'
  - '**/*.gql'
---

# GraphQL Error Code Rules

## Error Code Taxonomy

- MUST use stable, documented error codes.
- MUST separate validation, authorization, and system errors.
- SHOULD keep error codes consistent across services.

---

## Client Safety

- MUST avoid leaking sensitive details in error messages.
- SHOULD include a user-safe message alongside the code.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/error-codes.md`
- `.rulesync/rules/stacks/graphql/error-handling.md`
