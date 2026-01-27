---
targets:
  - '*'
root: false
description: Node.js HTTP and API boundary rules
summary: Validation, error mapping, and response contracts
stack: nodejs
globs:
  - '**/routes/**'
  - '**/controllers/**'
  - '**/*.js'
---

# Node.js HTTP / API Rules

## Boundary Responsibilities

- **MUST** validate and normalize all external input at the boundary.
- **MUST** map transport concerns to application commands.
- **MUST NOT** leak request/response objects into domain logic.

---

## Responses & Errors

- **MUST** return stable, documented response shapes.
- **MUST** map domain errors to explicit HTTP errors.
- **MUST NOT** leak stack traces or internals.

---

## Safety & Idempotency

- **MUST NOT** perform side effects in GET requests.
- **SHOULD** make retriable operations idempotent.
