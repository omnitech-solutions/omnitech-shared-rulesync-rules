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
  - '**/*.ts'
  - '**/*.tsx'
  - '**/*.js'
  - '**/*.jsx'
  - '**/*resolver*.*'
  - '**/*graphql*.*'
cursor:
  description: GraphQL security guidance
  globs:
    - '**/*.graphql'
    - '**/*.gql'
    - '**/resolvers/**'
    - '**/*.ts'
    - '**/*.tsx'
---

# GraphQL Security Rules

## Authorization

- **Boundary Enforcement:** MUST apply authorization at every entity access
  boundary.
- **No Inference:** MUST NOT infer authorization from parent object presence
  (prevents "nested leakage").
- **Object-Level Checks:** MUST treat IDs as capability-bearing and do
  object-level auth checks (not just "user is logged in").
- **Consistency:** Ensure nested fields respect the same access rules as parent
  objects.

## Input Safety

- **Validation:** MUST validate inputs and enforce allowlists for enums and IDs.
- **Abuse Prevention:** MUST guard against overly complex queries and abuse
  patterns.
- **Untrusted Data:** MUST treat file uploads and URLs as untrusted data.

## Exposure Control

- **Public vs. Internal:** MUST be deliberate about which fields are public vs
  internal.
- **Introspection:** SHOULD gate introspection/playground in production.
- **Error Messages:** MUST avoid leaking implementation details in error
  messages.

## Related Rules

- `.rulesync/rules/security.md`
- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/resolvers.md`
