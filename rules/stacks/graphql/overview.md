---
targets:
  - '*'
root: false
description: GraphQL core principles and API contracts
summary: Schema design, execution boundaries, and client expectations
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/schema.*'
  - '**/resolvers/**'
cursor:
  description: GraphQL core principles and API contracts
  globs:
    - '**/*.graphql'
    - '**/*.gql'
    - '**/schema.*'
---

# GraphQL Overview Rules

## Core Principles

- **Schema as Contract:** Treat the schema as the source of truth for clients
  and services.
- **Predictable Shapes:** Favor consistent, stable response shapes over ad-hoc
  fields.
- **Strong Boundaries:** Keep data access, auth, and business rules separate
  from transport details.
- **Evolvable APIs:** Prefer additive changes and deprecations over breaking
  changes.

---

## Client Experience

- Optimize for discoverability and clear documentation.
- Keep naming consistent and descriptive across types and fields.
- Avoid hiding performance costs behind convenient fields.

---

## Related Rules

- `.rulesync/rules/architecture.md`
- `.rulesync/rules/security.md`
- `.rulesync/rules/stacks/graphql/schema.md`
- `.rulesync/rules/stacks/graphql/resolvers.md`
- `.rulesync/rules/stacks/graphql/operations.md`
- `.rulesync/rules/stacks/graphql/error-handling.md`
- `.rulesync/rules/stacks/graphql/governance.md`
- `.rulesync/rules/stacks/graphql/performance.md`
- `.rulesync/rules/stacks/graphql/security.md`
- `.rulesync/rules/stacks/graphql/testing.md`
