---
targets:
  - '*'
root: false
description: GraphQL resolver responsibilities
summary: Execution boundaries, data access, and error mapping
stack: graphql
globs:
  - '**/resolvers/**'
  - '**/*.graphql'
  - '**/*.gql'
cursor:
  description: GraphQL resolver responsibilities
  globs:
    - '**/resolvers/**'
    - '**/*.graphql'
---

# GraphQL Resolver Rules

## Responsibilities

- Keep resolvers thin; delegate business logic to services.
- Resolve fields consistently and avoid side effects in read operations.
- Map backend errors to stable, documented GraphQL errors.

---

## Data Access

- Batch and cache data access to avoid N+1 queries.
- Keep resolver dependencies explicit for testability.
- Avoid reaching across domains; use service boundaries.

---

## Auth & Permissions

- Enforce authorization at resolver boundaries.
- Avoid leaking sensitive fields through nested relationships.

---

## Related Rules

- `.rulesync/rules/security.md`
- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/security.md`
- `.rulesync/rules/stacks/graphql/performance.md`
