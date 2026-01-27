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
cursor:
  description: GraphQL error handling guidance
  globs:
    - '**/*.graphql'
    - '**/*.gql'
---

# GraphQL Error Handling Rules

## Error Shape

- Use consistent error structures with stable codes.
- Distinguish between user errors, auth errors, and system failures.
- Avoid leaking sensitive details in error messages.

---

## Partial Failures

- Be explicit about which fields may return partial data.
- Document error behavior for nullable vs non-nullable fields.
- Avoid masking critical failures behind nulls.

---

## Client Experience

- Provide actionable error messages for clients.
- Keep error codes stable to support client logic.

---

## Related Rules

- `.rulesync/rules/security.md`
- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/resolvers.md`
