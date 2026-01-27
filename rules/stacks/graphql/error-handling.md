---
targets:
  - '*'
root: false
description: GraphQL error handling guidance
summary: Error shapes, codes, and client expectations
stack: graphql
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/resolvers/**'
---

# GraphQL Error Handling Rules

## Error Shape

- **MUST** expose a stable, machine-readable error code.
- **MUST** keep error codes backward compatible once released.
- **MUST NOT** leak internal or sensitive details in error messages.
- **SHOULD** provide human-readable messages for debugging and UX.

---

## Error Categories

- **MUST** distinguish between:
  - User / validation errors
  - Authentication / authorization errors
  - Not-found conditions
  - System or dependency failures

---

## Partial Failures

- **MUST** document which fields may return partial data.
- **MUST** define behavior for nullable vs non-nullable failures.
- **MUST NOT** silently mask critical failures behind nulls.

---

## Client Experience

- **SHOULD** include actionable, non-sensitive context where appropriate.
- **SHOULD** support client logic via stable error codes, not message parsing.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/schema.md`
- `.rulesync/rules/stacks/graphql/resolvers.md`
