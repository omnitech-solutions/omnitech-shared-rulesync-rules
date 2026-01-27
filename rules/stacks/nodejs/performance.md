---
targets:
  - '*'
root: false
description: Node.js performance rules
summary: Latency, throughput, and memory discipline
stack: nodejs
globs:
  - '**/*.js'
---

# Node.js Performance Rules

## Latency

- **MUST** minimize synchronous work in hot paths.
- **SHOULD** stream large responses.

---

## Concurrency

- **MUST** bound parallelism.
- **MUST NOT** allow unbounded queues.

---

## Memory

- **MUST** keep request-scoped data short-lived.
- **MUST** monitor and address memory growth.
