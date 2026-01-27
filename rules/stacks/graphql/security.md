---
targets:
  - '*'
root: false
description: GraphQL security guidance
summary: Authorization, exposure controls, and safe defaults
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/resolvers/**'
cursor:
  description: GraphQL security guidance
  globs:
    - '**/*.graphql'
    - '**/*.gql'
---

# GraphQL Security Rules

## Authorization

- Enforce authorization at resolver boundaries, not just at the gateway.
- Ensure nested fields respect the same access rules as parent objects.
- Avoid exposing sensitive fields through relationships or fragments.

---

## Input Safety

- Validate inputs and enforce allowlists for enums and IDs.
- Guard against overly complex queries and abuse patterns.
- Treat file uploads and URLs as untrusted data.

---

## Exposure Control

- Be deliberate about which fields are public vs internal.
- Avoid leaking implementation details in error messages.

---

## Related Rules

- `.rulesync/rules/security.md`
- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/resolvers.md`
