---
targets:
  - '*'
root: false
description: GraphQL data access rules
summary: Data fetching boundaries, batching, and consistency guarantees
stack: graphql
globs:
  - '**/resolvers/**'
  - '**/services/**'
  - '**/*.graphql'
  - '**/*.gql'
---

# GraphQL Data Access Rules

## Access Boundaries

- **MUST** access data through explicit services, repositories, or connectors.
- **MUST NOT** embed persistence logic directly in resolvers.
- **MUST** keep data access aligned to domain boundaries.
- **SHOULD** expose data access via interfaces to allow mocking and testing.

---

## Request Scoping

- **MUST** scope all data loaders, caches, and batching mechanisms to a single
  request.
- **MUST NOT** share request-derived data across users or requests.
- **MUST** treat request context as untrusted and ephemeral.

---

## Batching & Fan-out Control

- **MUST** batch access for list and nested field resolution.
- **MUST NOT** perform per-item queries inside resolver loops.
- **SHOULD** prefetch related data when fan-out is predictable.
- **MUST** ensure batching does not bypass authorization checks.

---

## Consistency & Transactions

- **MUST** define consistency expectations for multi-step reads or writes.
- **SHOULD** prefer transactional boundaries inside services, not resolvers.
- **MUST NOT** rely on resolver execution order for correctness.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/resolvers.md`
- `.rulesync/rules/stacks/graphql/performance.md`
- `.rulesync/rules/stacks/graphql/security.md`
