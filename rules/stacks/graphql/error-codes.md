---
targets:
  - '*'
root: false
description: GraphQL error codes registry
summary: Allowed extensions.code values and usage
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
cursor:
  description: GraphQL error codes registry
  globs:
    - '**/*.graphql'
    - '**/*.gql'
    - '**/resolvers/**'
    - '**/*.ts'
    - '**/*.tsx'
---

# GraphQL Error Codes Registry

## Standard Codes

MUST use one of the following codes in `extensions.code`:

- **BAD_USER_INPUT:** Client sent invalid input (validation errors, malformed
  args).
- **UNAUTHENTICATED:** User is not logged in or token is invalid.
- **FORBIDDEN:** User is authenticated but lacks permission for this
  resource/action.
- **NOT_FOUND:** The requested resource does not exist.
- **INTERNAL_SERVER_ERROR:** Unexpected system failure (bug, crash, downtime).
- **THROTTLED:** Request rejected due to rate limiting or cost limits.

## Extensions

Additional fields in `extensions` SHOULD be used for context:

- `argumentName`: Name of the invalid argument (for `BAD_USER_INPUT`).
- `reason`: Machine-readable reason code (specific sub-error).
- `retryable`: Boolean indicating if the client should retry.

## Example

```json
{
  "errors": [
    {
      "message": "Invalid email format",
      "extensions": {
        "code": "BAD_USER_INPUT",
        "argumentName": "email",
        "reason": "INVALID_FORMAT"
      }
    }
  ]
}
```

## Related Rules

- `.rulesync/rules/stacks/graphql/error-handling.md`
