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
  - '**/*.ts'
  - '**/*.tsx'
  - '**/*.js'
  - '**/*.jsx'
  - '**/*resolver*.*'
  - '**/*graphql*.*'
cursor:
  description: GraphQL core principles and API contracts
  globs:
    - '**/*.graphql'
    - '**/*.gql'
    - '**/schema.*'
    - '**/*.ts'
    - '**/*.tsx'
    - '**/*.js'
    - '**/*.jsx'
---

# GraphQL Overview Rules

## Rule Strength

- **MUST:** Required; violations block merge.
- **SHOULD:** Expected default; deviations require justification.
- **MAY:** Optional guidance.

## Core Principles

- **Schema as Contract:** MUST treat the schema as the authoritative source of
  truth for clients and services.
- **Predictable Shapes:** MUST favor consistent, stable response shapes over
  ad-hoc fields.
- **Strong Boundaries:** MUST keep data access, authorization, and business
  rules separate from transport details.
- **Evolvable APIs:** MUST prefer additive changes and deprecations over
  breaking changes.

## Stability Guarantees

- **Contract Stability:** MUST define what is contractually stable (field names,
  enum values, error codes) vs. what is not.
- **Breaking Changes:** MUST NOT introduce breaking changes without a
  deprecation window.

## Client Ergonomics

- **Predictable Patterns:** MUST enforce patterns to ensure consistency:
  - List fields MUST always be paginated (see `operations.md`).
  - Mutations MUST return a payload type with `success` | `errors` | `result`.
- **Naming:** MUST keep naming consistent and descriptive across types and
  fields.
- **Documentation:** MUST optimize for discoverability with clear descriptions.

## Observability

- **Tracing:** MUST propagate request IDs / trace IDs.
- **Logging:** MUST log `operationName` and normalized cost/complexity to aid in
  operations and abuse defense.
- **Performance:** MUST NOT hide performance costs behind convenient fields (see
  `performance.md`).

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
