---
targets:
  - '*'
root: false
description: Node.js operational readiness
summary: Observability, lifecycle, and resilience
stack: nodejs
globs:
  - '**/server.js'
  - '**/app.js'
---

# Node.js Operations Rules

## Observability

- **MUST** emit structured logs.
- **MUST** expose health and readiness endpoints.

---

## Lifecycle

- **MUST** handle SIGTERM/SIGINT gracefully.
- **MUST** drain in-flight work on shutdown.

---

## Resilience

- **MUST** apply timeouts and retries.
- **MUST** bound concurrency.
