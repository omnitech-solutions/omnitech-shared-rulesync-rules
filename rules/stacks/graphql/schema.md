---
targets:
  - '*'
root: false
description: GraphQL schema design rules
summary: Type modeling, nullability, and deprecation strategy
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/schema.*'
  - '**/*.ts'
  - '**/*.tsx'
  - '**/*.js'
  - '**/*.jsx'
  - '**/*resolver*.*'
  - '**/*graphql*.*'
cursor:
  description: GraphQL schema design rules
  globs:
    - '**/*.graphql'
    - '**/*.gql'
    - '**/schema.*'
    - '**/*.ts'
    - '**/*.tsx'
---

# GraphQL Schema Rules

## Type Modeling

- **Domain Concepts:** MUST use object types to represent domain concepts, not
  database tables.
- **Input/Output Separation:** MUST keep input types distinct from output types
  to avoid accidental exposure.
- **Explicit Naming:** MUST prefer explicit field names over overloaded or
  ambiguous semantics.

## Nullability Policy

- **Non-Null Guarantees:** MUST use non-null (`!`) ONLY when you can guarantee
  value presence under expected failures (auth, downstream timeouts, partial
  outages).
- **Recoverable Errors:** SHOULD prefer nullable fields + typed errors for
  recoverable issues (validation, not-found, permissions), rather than "turning
  everything non-null" and causing hard-to-debug null cascades.
- **Documentation:** MUST document nullability expectations in descriptions.

## Naming & Ergonomics

- **Input Suffixes:** MUST use `XyzInput` for input types.
- **Payload Suffixes:** MUST use `XyzPayload` for mutation return types.
- **Typed Arguments:** MUST avoid overloaded arguments like `filter: JSON`;
  require typed filter inputs.

## Evolution

- **Breaking Changes:** MUST avoid breaking changes; use deprecation and
  additive fields.
- **Semantics:** MUST preserve field meanings; do not repurpose existing fields.
- **Self-Documentation:** MUST add descriptions for types, fields, and arguments
  to keep the schema self-explanatory.

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/operations.md`
- `.rulesync/rules/stacks/graphql/governance.md`
