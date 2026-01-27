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

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/nodejs/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Event Loop Discipline

- MUST avoid blocking the event loop.
- MUST timebox all IO and async operations.
- SHOULD prefer streaming for large payloads.

---

## Async Safety

- MUST await all asynchronous work in request paths.
- MUST handle promise rejections explicitly.
- SHOULD avoid fire-and-forget in request flows.

---

## Resource Management

- MUST clean up timers, sockets, and connections on shutdown.
- SHOULD limit concurrency with explicit queues or pools.

---

## Related Rules

- `.rulesync/rules/stacks/nodejs/overview.md`
- `.rulesync/rules/stacks/nodejs/runtime.md`
- `.rulesync/rules/stacks/nodejs/operations.md`
