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
---

# GraphQL Security Rules

## Authorization

- **MUST** enforce authorization at resolver boundaries.
- **MUST** apply object-level authorization for ID-based access.
- **MUST NOT** assume parent authorization applies to nested fields.

---

## Input Safety

- **MUST** validate all inputs.
- **MUST** guard against query complexity and abuse.
- **SHOULD** treat file uploads and URLs as untrusted.

---

## Exposure Control

- **MUST** explicitly decide which fields are public vs internal.
- **MUST NOT** expose implementation details in errors or descriptions.

---

## Related Rules

- `.rulesync/rules/security.md`
- `.rulesync/rules/stacks/graphql/overview.md`
