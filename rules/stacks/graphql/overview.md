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

This document defines the **non-negotiable baseline** for all GraphQL APIs. All
other GraphQL rules specialize or elaborate on the principles defined here.

---

## Rule Strength

All rules use the following strength levels:

- **MUST**  
  Required. Violations block merge or release.

- **SHOULD**  
  Expected default. Deviations require explicit justification.

- **MAY**  
  Optional guidance.

---

## Core Contract

- **Schema as Contract (MUST)**  
  The GraphQL schema is the public API contract.  
  Clients must be able to rely on schema stability independent of
  implementation.

- **Backward Compatibility (MUST)**  
  Released fields, arguments, and error codes must not change meaning or
  behavior. Breaking changes require explicit approval and a migration plan.

- **Predictable Shapes (MUST)**  
  APIs must favor consistent response shapes across queries, mutations,
  pagination, and errors. Similar concepts must behave the same everywhere.

- **Explicit Behavior (MUST)**  
  Performance costs, side effects, pagination behavior, and error semantics must
  be explicit and documented—never implicit or surprising.

---

## Architectural Boundaries

- **Separation of Concerns (MUST)**  
  GraphQL is a transport and orchestration layer only. Business logic,
  persistence, authorization policy, and transactions live outside resolvers.

- **Resolver Discipline (MUST)**  
  Resolvers coordinate execution but do not own domain logic or data modeling.

- **Data Access Isolation (MUST)**  
  All data access flows through explicit services, repositories, or connectors.
  Request-scoped batching and caching are mandatory.

---

## Client Experience Guarantees

- **Consistency (MUST)**  
  Pagination, filtering, sorting, mutation shapes, and error handling must
  follow consistent conventions across the schema.

- **Discoverability (SHOULD)**  
  Schemas should be self-explanatory via clear naming and descriptions. Clients
  should not need out-of-band knowledge to use the API correctly.

- **Performance Transparency (MUST)**  
  Expensive operations must not be hidden behind cheap-looking fields. Costly
  fields and behaviors must be documented and intentional.

---

## Error & Failure Model

- **Structured Errors (MUST)**  
  All non-success outcomes must expose stable, machine-readable error codes.
  Error codes are part of the API contract.

- **Partial Data Semantics (MUST)**  
  The schema must clearly define which fields may return partial data and how
  errors interact with nullability.

- **Client-Safe Messaging (MUST)**  
  Error messages must not leak internal details or implementation specifics.

---

## Pagination & Collections

- **Bounded Lists (MUST)**  
  Unbounded lists are forbidden.

- **Stable Pagination (MUST)**  
  Cursor-based pagination must define stable ordering and cursor semantics.

- **Consistent Shapes (SHOULD)**  
  Paginated fields should follow a consistent connection-style structure across
  the schema.

---

## Evolution & Governance

- **Additive Evolution (MUST)**  
  APIs evolve via additive changes and deprecations only.

- **Deprecation Discipline (MUST)**  
  Deprecated fields remain available for at least one release cycle and include
  migration guidance.

- **Quality Gates (MUST)**  
  Schema changes must be validated against representative operations and
  contract tests before release.

---

## Testing Expectations

- **Contract Testing (MUST)**  
  Each API must maintain a small set of representative queries and mutations
  used to detect breaking changes.

- **Authorization Coverage (MUST)**  
  Authorization must be tested at both top-level and nested-field boundaries.

- **Pagination Invariants (MUST)**  
  Pagination behavior must be validated under inserts, deletes, and reordering.

---

## Related Rules (Authoritative Index)

- `.rulesync/rules/stacks/graphql/schema.md`
- `.rulesync/rules/stacks/graphql/operations.md`
- `.rulesync/rules/stacks/graphql/pagination.md`
- `.rulesync/rules/stacks/graphql/resolvers.md`
- `.rulesync/rules/stacks/graphql/data-access.md`
- `.rulesync/rules/stacks/graphql/error-handling.md`
- `.rulesync/rules/stacks/graphql/error-codes.md`
- `.rulesync/rules/stacks/graphql/performance.md`
- `.rulesync/rules/stacks/graphql/security.md`
- `.rulesync/rules/stacks/graphql/governance.md`
- `.rulesync/rules/stacks/graphql/testing.md`
