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

- MUST model domain concepts, not database tables.
- MUST separate input and output types.
- SHOULD use descriptive, explicit names.

---

## Nullability

- MUST mark fields non-null only when guarantees exist.
- SHOULD document nullability assumptions.
- SHOULD prefer nullable fields plus structured errors.

---

## Evolution

- MUST evolve via additive changes and deprecations.
- MUST include descriptions for public fields and args.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/schema.md`
- `.rulesync/rules/stacks/graphql/governance.md`
