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

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/nodejs/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Service Lifecycle

- MUST implement readiness and liveness checks.
- MUST handle shutdown signals gracefully.
- SHOULD complete in-flight requests on shutdown where possible.

---

## Observability

- MUST emit structured logs with correlation ids.
- MUST expose metrics for latency, errors, and throughput.
- SHOULD include traces around critical paths.

---

## Configuration

- MUST use explicit config with validated environment variables.
- SHOULD keep secrets in secure stores, not in code.

---

## Related Rules

- `.rulesync/rules/stacks/nodejs/overview.md`
- `.rulesync/rules/stacks/nodejs/operations.md`
- `.rulesync/rules/stacks/nodejs/security.md`
