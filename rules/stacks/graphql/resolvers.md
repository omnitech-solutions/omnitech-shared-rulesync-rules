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

## Resolver Responsibilities

- MUST keep resolvers thin and orchestration-only.
- MUST delegate business logic to services.
- SHOULD keep resolvers synchronous in structure when possible.

---

## Data Loading

- MUST batch and cache to avoid N+1 queries.
- SHOULD use dataloader-style batching per request.

---

## Error Handling

- MUST map domain errors to GraphQL error codes.
- SHOULD avoid leaking internal details.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/resolvers.md`
- `.rulesync/rules/stacks/graphql/data-access.md`
