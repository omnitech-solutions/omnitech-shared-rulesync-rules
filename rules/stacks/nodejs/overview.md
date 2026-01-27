---
targets:
  - '*'
root: false
description: Node.js core principles and architecture
summary: Runtime-aware design, boundaries, and reliability expectations
stack: nodejs
globs:
  - '**/*.js'
  - '**/*.mjs'
  - '**/server.js'
  - '**/app.js'
cursor:
  description: Node.js core principles and architecture
  globs:
    - '**/*.js'
    - '**/*.mjs'
---

# Node.js Overview Rules

## Core Principles

- **Async-First:** Design flows around non-blocking I/O and explicit async
  boundaries.
- **Small Modules:** Keep modules focused; expose minimal, stable public APIs.
- **Explicit Dependencies:** Pass dependencies explicitly to improve testability
  and reduce hidden coupling.
- **Clear Ownership:** Separate HTTP concerns, domain logic, and infrastructure
  adapters.
- **Operational Awareness:** Assume services need observability, graceful
  shutdown, and predictable failure modes.

---

## Architecture Boundaries

- Keep request parsing, business rules, and persistence concerns isolated.
- Treat adapters (DB, queues, external APIs) as replaceable infrastructure.
- Centralize cross-cutting concerns (auth, validation, logging) in middleware or
  shared services.
- Avoid leaking transport or framework types into domain layers.

---

## Configuration & Environment

- Prefer configuration by environment variables or injected config objects.
- Fail fast on missing or invalid configuration.
- Keep secrets out of code and logs.

---

## Related Rules

- `.rulesync/rules/architecture.md`
- `.rulesync/rules/code-quality.md`
- `.rulesync/rules/performance.md`
- `.rulesync/rules/security.md`
- `.rulesync/rules/stacks/nodejs/runtime.md`
- `.rulesync/rules/stacks/nodejs/http-api.md`
- `.rulesync/rules/stacks/nodejs/data-access.md`
- `.rulesync/rules/stacks/nodejs/jobs.md`
- `.rulesync/rules/stacks/nodejs/operations.md`
- `.rulesync/rules/stacks/nodejs/testing.md`
- `.rulesync/rules/stacks/nodejs/performance.md`
- `.rulesync/rules/stacks/nodejs/security.md`
