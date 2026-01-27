---
targets:
  - '*'
root: false
description: GraphQL core principles and API contract
summary:
  Non-negotiable GraphQL standards, rule strength, and system-wide guarantees
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/schema.*'
  - '**/resolvers/**'
---

# GraphQL Overview Rules

## Principles

- MUST model the domain, not implementation details.
- MUST keep schema evolution additive.
- SHOULD keep operations predictable and documented.

---

## Safety and Reliability

- MUST enforce authz at field boundaries.
- MUST provide structured error codes.
- SHOULD implement query cost controls.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/schema.md`
- `.rulesync/rules/stacks/graphql/resolvers.md`
- `.rulesync/rules/stacks/graphql/operations.md`
