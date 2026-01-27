---
targets:
  - '*'
root: false
description: Node.js operational readiness and lifecycle
summary: Observability, configuration, and graceful shutdown
stack: nodejs
globs:
  - '**/*.js'
  - '**/*.mjs'
  - '**/server.js'
  - '**/app.js'
cursor:
  description: Node.js operational readiness and lifecycle
  globs:
    - '**/*.js'
    - '**/*.mjs'
---

# Node.js Operations Rules

## Observability

- Emit structured logs with request or job identifiers.
- Record latency, error rate, and throughput for key endpoints and jobs.
- Add health checks and readiness signals that reflect real dependencies.

---

## Lifecycle & Shutdown

- Handle termination signals and stop accepting new work.
- Drain in-flight requests and background tasks before exit.
- Prefer idempotent shutdown steps to avoid partial cleanup failures.

---

## Resilience

- Apply timeouts and retries with backoff for external calls.
- Isolate failing dependencies with circuit breaker patterns when needed.
- Avoid global retries that amplify load or error storms.

---

## Related Rules

- `.rulesync/rules/performance.md`
- `.rulesync/rules/security.md`
- `.rulesync/rules/stacks/nodejs/overview.md`
- `.rulesync/rules/stacks/nodejs/runtime.md`
