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
  - '**/*.ts'
  - '**/*.tsx'
  - '**/*.js'
  - '**/*.jsx'
  - '**/*resolver*.*'
  - '**/*graphql*.*'
cursor:
  description: GraphQL error handling guidance
  globs:
    - '**/*.graphql'
    - '**/*.gql'
    - '**/resolvers/**'
    - '**/*.ts'
    - '**/*.tsx'
---

# GraphQL Error Handling Rules

## Contract Guarantees

- **Stable Codes:** MUST expose a stable, machine-readable code in
  `extensions.code`.
- **Immutable Codes:** MUST NOT change error codes once released; they are part
  of the API contract.
- **Human-Readable Messages:** MUST provide messages for developers/operators,
  but these MUST be treated as non-contractual (clients MUST NOT parse them).
- **No Leakage:** MUST NOT leak internal details (stack traces, SQL errors,
  internal paths) to clients.

## Error Structure

- **GraphQLError:** MUST use `GraphQLError` with `extensions` for machine
  handling.
- **Standardized Extensions:** MUST use a consistent structure in `extensions`
  (e.g., `code`, `reason`).
- **Categories:** MUST differentiate error types:
  - **User/Validation:** Bad input.
  - **AuthZ/AuthN:** Permission or authentication failure.
  - **Not Found:** Resource missing.
  - **Rate Limited:** Cost or rate limit exceeded.
  - **System:** Dependency failure.
- **Safe Fields:** SHOULD include extension fields that are safe and actionable
  (e.g., `argumentName`, `reason`, `retryable`, `correlationId`).

## Security & Leakage

- **Internal Details:** MUST NOT leak implementation details (stack traces, raw
  DB errors) in error messages.
- **Sensitive Data:** MUST avoid leaking sensitive details in error messages.

## Partial Failures

- **Explicit Contracts:** MUST be explicit about which fields may return partial
  data.
- **Interpretation:** MUST document error behavior for nullable vs. non-nullable
  fields.
- **Critical Failures:** MUST avoid masking critical failures behind nulls.

## Client Experience

- **Actionable Messages:** MUST provide actionable error messages for clients.
- **Stability:** MUST keep error codes stable to support client logic.

## Related Rules

- `.rulesync/rules/security.md`
- `.rulesync/rules/stacks/graphql/overview.md`
- `.rulesync/rules/stacks/graphql/resolvers.md`
- `.rulesync/rules/stacks/graphql/error-codes.md`
