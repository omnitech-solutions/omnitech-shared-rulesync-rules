---
targets:
  - '*'
root: false
description: GraphQL error code registry rules
summary: Stable error codes and classification guarantees
stack: graphql
globs:
  - '**/resolvers/**'
  - '**/*.graphql'
  - '**/*.gql'
---

# GraphQL Error Codes Rules

## Error Code Contract

- **MUST** expose a machine-readable error code for all non-success outcomes.
- **MUST** treat error codes as part of the public API contract.
- **MUST NOT** change or repurpose an existing error code.
- **MUST NOT** encode semantic meaning in human-readable messages.

---

## Error Code Categories

Error codes **MUST** fall into one of the following categories:

### Client / User Errors

- Validation failures
- Invalid input
- Unsupported operations

### Authorization Errors

- Authentication required
- Permission denied
- Object-level access violations

### Not Found Errors

- Missing resources
- Deleted or inaccessible entities

### Conflict Errors

- Version conflicts
- State violations
- Idempotency failures

### System Errors

- Dependency failures
- Timeouts
- Internal exceptions

---

## Stability Guarantees

- **MUST** keep error codes stable across releases.
- **MUST** document error codes and their meanings.
- **SHOULD** include retryability or severity metadata where useful.

---

## Client Expectations

- **MUST** support client logic based on error codes.
- **MUST NOT** require clients to parse error messages.
- **SHOULD** allow graceful degradation based on error class.

---

## Related Rules

- `.rulesync/rules/stacks/graphql/error-handling.md`
- `.rulesync/rules/stacks/graphql/schema.md`
