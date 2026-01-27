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
  - '**/*.ts'
  - '**/*.tsx'
  - '**/*.js'
  - '**/*.jsx'
  - '**/*resolver*.*'
  - '**/*graphql*.*'
cursor:
  description: GraphQL resolver responsibilities
  globs:
    - '**/resolvers/**'
    - '**/*.graphql'
    - '**/*.ts'
    - '**/*.tsx'
---

# GraphQL Resolver Rules

## Responsibilities

- **Thin Resolvers:** MUST keep resolvers thin; delegate business logic to
  services.
- **Pure Reads:** MUST resolve fields consistently and avoid side effects in
  read operations.
- **Error Mapping:** MUST map backend errors to stable, documented GraphQL
  errors with `extensions.code`.

## Data Access & Batching

- **Batching Policy:** MUST enforce a batching strategy per-request (DataLoader)
  to avoid N+1 queries.
- **Request Scoping:** MUST scope batching and caching to a single request
  context.
- **Shared Cache:** MUST NOT use global/shared caches for user-specific data
  unless explicitly safe (e.g. static content); never share cached data across
  users.
- **Centralized Loaders:** SHOULD centralize loaders in context; resolvers
  SHOULD depend on interfaces, not concrete DB calls.
- **Explicit Dependencies:** MUST keep resolver dependencies explicit for
  testability.

## Auth & Permissions

- **Boundary Enforcement:** MUST enforce authorization at resolver boundaries.
- **Nested Leakage:** MUST avoid leaking sensitive fields through nested
  relationships.

## Related Rules

- `.rulesync/rules/security.md`
- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/security.md`
- `.rulesync/rules/stacks/graphql/performance.md`
- `.rulesync/rules/stacks/graphql/data-access.md`
