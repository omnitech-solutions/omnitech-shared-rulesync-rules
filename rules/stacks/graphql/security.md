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

## Query Safety

- MUST enforce depth/complexity limits.
- MUST authorize access for every resolver.
- SHOULD rate limit expensive operations.

---

## Data Exposure

- MUST avoid leaking internal identifiers when unnecessary.
- SHOULD audit field exposure for sensitive data.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/security.md`
- `.rulesync/rules/stacks/graphql/governance.md`
