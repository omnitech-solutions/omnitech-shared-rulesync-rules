---
targets:
  - '*'
root: false
description: GraphQL schema design rules
summary: Type modeling, nullability, and evolution guarantees
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/schema.*'
---

# GraphQL Schema Rules

## Type Modeling

- **MUST** represent domain concepts, not database tables.
- **MUST** keep input types distinct from output types.
- **MUST** avoid ambiguous or overloaded field semantics.
- **SHOULD** use explicit, descriptive names over generic ones.

---

## Nullability & Errors

- **MUST** mark fields non-null only when value presence is guaranteed under
  expected failure modes.
- **MUST NOT** use `null` as a primary error signaling mechanism.
- **SHOULD** document nullability expectations in field descriptions.
- **SHOULD** prefer nullable fields plus structured errors for recoverable
  failures.

---

## Evolution & Deprecation

- **MUST NOT** change the meaning of an existing field.
- **MUST** evolve schemas through additive fields and deprecations.
- **MUST** provide descriptions for all public types, fields, and arguments.
- **SHOULD** include deprecation reasons and migration guidance.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/operations.md`
- `.rulesync/rules/stacks/graphql/governance.md`
