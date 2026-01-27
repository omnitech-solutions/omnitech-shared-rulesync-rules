---
targets:
  - '*'
root: false
description: Node.js HTTP/API boundary rules
summary: Request validation, error mapping, and response consistency
stack: nodejs
globs:
  - '**/*.js'
  - '**/*.mjs'
  - '**/routes/**'
  - '**/controllers/**'
cursor:
  description: Node.js HTTP/API boundary rules
  globs:
    - '**/*.js'
    - '**/*.mjs'
---

# Node.js HTTP/API Rules

## Request Boundaries

- Validate and normalize input at the API boundary.
- Keep transport concerns separate from domain logic.
- Prefer explicit status codes and response shapes.

---

## Errors & Responses

- Map domain errors to stable, documented error responses.
- Avoid leaking internal stack traces or implementation details.
- Ensure error responses are consistent across endpoints.

---

## Idempotency & Safety

- Make retriable operations idempotent where possible.
- Avoid side effects in GET requests.
- Document behavior for retries and partial failures.

---

## Related Rules

- `.rulesync/rules/security.md`
- `.rulesync/rules/stacks/nodejs/overview.md`
- `.rulesync/rules/stacks/nodejs/runtime.md`
