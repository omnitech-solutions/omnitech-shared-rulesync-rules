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
---

# GraphQL Resolver Rules

## Responsibilities

- **MUST** keep resolvers thin and delegate business logic to services.
- **MUST NOT** introduce side effects in read operations.
- **MUST** map backend errors to stable, documented GraphQL errors.

---

## Data Access

- **MUST** batch data access to prevent N+1 queries.
- **MUST** scope batching and caching to a single request context.
- **MUST NOT** share cached data across users unless explicitly safe.
- **SHOULD** keep dependencies explicit for testability.
- **SHOULD** respect service and domain boundaries.

---

## Auth & Permissions

- **MUST** enforce authorization at resolver boundaries.
- **MUST** apply authorization consistently to nested fields.
- **MUST NOT** rely on parent object presence for access control.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/security.md`
- `.rulesync/rules/stacks/graphql/error-handling.md`
