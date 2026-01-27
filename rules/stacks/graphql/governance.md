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
---

# GraphQL Governance Rules

## Change Management

- **MUST** review schema changes for backward compatibility.
- **MUST** use deprecation before removal.
- **MUST NOT** change field meaning or semantics.

---

## Deprecation Policy

- **MUST** keep deprecated fields available for at least one release cycle.
- **MUST** provide migration guidance before removal.
- **SHOULD** track deprecated usage.

---

## Quality Gates

- **MUST** validate schema changes against representative operations.
- **MUST** block breaking changes without explicit approval.

---

## Ownership

- **SHOULD** assign ownership for critical schema areas.
- **SHOULD** keep schema documentation current.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/schema.md`
