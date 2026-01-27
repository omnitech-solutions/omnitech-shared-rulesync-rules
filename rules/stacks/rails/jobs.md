---
targets:
  - '*'
root: false
description: Rails background jobs
summary: Async execution, retries, idempotency
stack: rails
globs:
  - '**/app/jobs/**'
cursor:
  description: Rails background jobs
  globs:
    - '**/app/jobs/**'
---

# Rails Jobs Rules

## Responsibilities

- **MUST** be idempotent.
- **MUST** accept identifiers only.
- **MUST** delegate work to services.

---

## Failures

- **MUST** log with context.
- **MUST** be retry-safe.
