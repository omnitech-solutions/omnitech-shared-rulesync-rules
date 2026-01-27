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
cursor:
  description: GraphQL schema design rules
  globs:
    - '**/*.graphql'
    - '**/*.gql'
---

# GraphQL Schema Rules

## Type Modeling

- Use object types to represent domain concepts, not database tables.
- Keep input types distinct from output types to avoid accidental exposure.
- Prefer explicit field names over overloaded or ambiguous semantics.

---

## Nullability & Errors

- Make fields nullable only when absence is a valid state.
- Avoid null for error signaling; use structured error responses instead.
- Document nullability expectations in descriptions.

---

## Evolution

- Avoid breaking changes; use deprecation and additive fields.
- Preserve field meanings; do not repurpose existing fields.
- Add descriptions for types, fields, and arguments to keep the schema
  self-explanatory.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/operations.md`
