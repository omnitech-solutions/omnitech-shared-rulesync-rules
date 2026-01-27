---
targets:
  - '*'
root: false
description: Node.js runtime and async correctness
summary: Event-loop safety and resource discipline
stack: nodejs
globs:
  - '**/*.js'
  - '**/*.mjs'
---

# Node.js Runtime Rules

## Event Loop Safety

- **MUST** offload CPU-heavy work.
- **MUST** avoid blocking I/O.
- **MUST** bound in-memory buffers.

---

## Async Boundaries

- **MUST** await all promises.
- **MUST** propagate errors explicitly.
- **MUST** timebox external calls.

---

## Resource Management

- **MUST** close connections and timers.
- **MUST NOT** retain request-scoped state globally.
