---
targets:
  - '*'
root: false
description: Node.js runtime model and async correctness
summary: Event-loop safety, error handling, and cancellation patterns
stack: nodejs
globs:
  - '**/*.js'
  - '**/*.mjs'
  - '**/server.js'
  - '**/app.js'
cursor:
  description: Node.js runtime model and async correctness
  globs:
    - '**/*.js'
    - '**/*.mjs'
---

# Node.js Runtime Rules

## Event Loop Safety

- Treat CPU-heavy work as a separate concern; offload or batch to avoid blocking
  the event loop.
- Prefer streaming and incremental processing for large payloads.
- Keep hot paths allocation-light; avoid unbounded in-memory buffers.

---

## Async Boundaries

- Use consistent async patterns (promises or async/await) across a module.
- Propagate errors with context; avoid swallowing exceptions.
- Timebox external calls and include cancellation signals where possible.

---

## Resource Management

- Always close connections, file handles, and timers.
- Ensure background tasks are drained or stopped on shutdown.
- Avoid global mutable state that spans requests.

---

## Related Rules

- `.rulesync/rules/stacks/nodejs/overview.md`
- `.rulesync/rules/stacks/nodejs/operations.md`
- `.rulesync/rules/stacks/nodejs/performance.md`
