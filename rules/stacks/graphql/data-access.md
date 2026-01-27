---
targets:
  - '*'
root: false
description: GraphQL resolver data access patterns
summary: Batching, loaders, and N+1 prevention
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
cursor:
  description: GraphQL resolver data access patterns
  globs:
    - '**/resolvers/**'
    - '**/*.graphql'
    - '**/*.gql'
    - '**/resolvers/**'
    - '**/*.ts'
    - '**/*.tsx'
---

# GraphQL Data Access Rules

## Batching

- **Mandatory Batching:** MUST use a batching mechanism (e.g., DataLoader) for
  all field resolvers that fetch related data.
- **Per-Request:** Loaders MUST be instantiated per-request to ensure caching is
  scoped to the current operation and user.

## Resolver Patterns

- **Thin Resolvers:** Resolvers SHOULD only coordinate fetching; business logic
  belongs in domain services.
- **DTOs:** Resolvers SHOULD return DTOs/Entities that match the schema shape or
  are trivial to map.

## Performance

- **Look-Ahead:** SHOULD use info/selectionSet to optimize data fetching (e.g.,
  eager loading) when valid.
- **N+1 Prevention:** MUST NOT trigger database queries inside a loop without
  batching.

## Example (DataLoader)

```typescript
// Good: Grouping keys for batch fetch
const userLoader = new DataLoader(async ids => {
  const users = await userService.findByIds(ids);
  return ids.map(id => users.find(u => u.id === id));
});
```

## Related Rules

- `.rulesync/rules/stacks/graphql/resolvers.md`
- `.rulesync/rules/stacks/graphql/performance.md`
