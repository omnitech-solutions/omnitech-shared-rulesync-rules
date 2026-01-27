---
targets:
  - '*'
root: false
description: Node.js background jobs and queues
summary: Job boundaries, retries, and idempotency
stack: nodejs
globs:
  - '**/*.js'
  - '**/*.mjs'
  - '**/jobs/**'
  - '**/queues/**'
cursor:
  description: Node.js background jobs and queues
  globs:
    - '**/*.js'
    - '**/*.mjs'
---

# Node.js Jobs Rules

## Job Boundaries

- Keep job handlers small and focused on a single responsibility.
- Treat jobs as independent from request lifecycle state.
- Ensure jobs can run safely on multiple workers.

---

## Retries & Idempotency

- Make job handlers idempotent to support retries.
- Use explicit retry policies with backoff.
- Avoid infinite retries without alerts or dead-letter paths.

---

## Observability

- Emit logs and metrics per job type and outcome.
- Track job latency, failure rates, and queue depth.

---

## Related Rules

- `.rulesync/rules/stacks/nodejs/operations.md`
- `.rulesync/rules/stacks/nodejs/runtime.md`
- `.rulesync/rules/stacks/nodejs/performance.md`
