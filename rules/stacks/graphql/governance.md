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
cursor:
  description: GraphQL schema governance guidance
  globs:
    - '**/*.graphql'
    - '**/*.gql'
---

# GraphQL Governance Rules

## Change Management

- Review schema changes for backward compatibility.
- Use deprecation with clear migration guidance.
- Avoid changing field meaning or semantics.

---

## Ownership

- Assign ownership for schema sections and critical fields.
- Require documentation updates for new fields and types.
- Keep schema descriptions current and intentional.

---

## Quality Gates

- Validate schema changes against representative operations.
- Prevent breaking changes from reaching production.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/schema.md`
