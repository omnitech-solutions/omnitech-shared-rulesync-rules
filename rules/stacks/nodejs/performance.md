---
targets:
  - '*'
root: false
description: Node.js performance and scalability guidance
summary: Latency, throughput, and resource efficiency
stack: nodejs
globs:
  - '**/*.js'
  - '**/*.mjs'
  - '**/server.js'
  - '**/app.js'
cursor:
  description: Node.js performance and scalability guidance
  globs:
    - '**/*.js'
    - '**/*.mjs'
---

# Node.js Performance Rules

## Latency & Throughput

- Minimize synchronous work on request paths.
- Prefer streaming responses for large datasets.
- Cache expensive computations when inputs are stable.

---

## Concurrency & Backpressure

- Bound concurrency for external calls and background jobs.
- Apply backpressure when queues grow or downstreams slow.
- Avoid unbounded parallelism that can exhaust the event loop or memory.

---

## Memory & Resource Use

- Keep request-scoped data small and short-lived.
- Avoid retaining large objects in module scope.
- Monitor and address memory growth before it becomes unstable.

---

## Related Rules

- `.rulesync/rules/performance.md`
- `.rulesync/rules/stacks/nodejs/runtime.md`
