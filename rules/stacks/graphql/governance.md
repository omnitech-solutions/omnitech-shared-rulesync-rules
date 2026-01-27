---
targets:
  - '*'
root: false
description: GraphQL schema governance guidance
summary: Review processes, deprecations, and API stewardship
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/schema.*'
  - '**/*.ts'
  - '**/*.tsx'
  - '**/*.js'
  - '**/*.jsx'
  - '**/*graphql*.*'
cursor:
  description: GraphQL schema governance guidance
  globs:
    - '**/*.graphql'
    - '**/*.gql'
    - '**/schema.*'
    - '**/*.ts'
    - '**/*.tsx'
---

# GraphQL Governance Rules

## Change Management

- **Breaking Change Detection:** MUST detect breaking changes via schema checks
  against a representative operation set.
- **Breaking Changes:** MUST require explicit approval and a documented
  migration plan for any breaking change.
- **Deprecation Policy:** MUST maintain deprecated fields for at least one
  release cycle (or agreed timeframe) before removal.
- **Semantics:** MUST avoid changing field meaning or semantics.

## Ownership

- **Assignment:** SHOULD assign ownership for schema sections and critical
  fields.
- **Metadata:** SHOULD attach ownership metadata so changes route to the right
  reviewers.
- **Documentation:** MUST require documentation updates for new fields and
  types.

## Quality Gates

- **Validation:** MUST validate schema changes against representative
  operations.
- **Production Guard:** MUST prevent breaking changes from reaching production.

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/schema.md`
