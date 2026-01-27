---
targets:
  - '*'
root: false
description: Node.js background jobs
summary: Idempotency, retries, and isolation
stack: nodejs
globs:
  - '**/jobs/**'
---

# Node.js Jobs Rules

## Job Design

- **MUST** be idempotent.
- **MUST** be retry-safe.
- **MUST** accept identifiers, not in-memory state.

---

## Isolation

- **MUST** not depend on request lifecycle.
- **MUST** emit logs and metrics per execution.
