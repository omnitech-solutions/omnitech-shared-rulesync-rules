---
targets:
  - '*'
root: false
description: Node.js non-negotiable architectural constraints
summary: Absolute rules that define acceptable Node.js architecture
stack: nodejs
globs:
  - '**/*.js'
  - '**/*.mjs'
  - '**/src/**'
  - '**/server.js'
  - '**/app.js'
---

# Node.js Non-Negotiables

Violations of these rules indicate **architectural drift** and must be
corrected. These constraints take precedence over all other Node.js rules.

---

## Runtime Discipline

- **MUST** design with explicit awareness of the event loop and async execution
  model.
- **MUST NOT** perform CPU-bound work on the event loop.
- **MUST NOT** allow unbounded memory growth or unbounded in-process queues.
- **MUST** treat the Node.js process as a shared, failure-sensitive resource.

---

## Boundary Integrity

- **MUST** separate concerns strictly: Transport → Application → Domain →
  Infrastructure.
- **MUST NOT** leak transport, framework, or runtime objects into domain logic.
- **MUST** keep domain logic executable without Node.js-specific APIs.

---

## Async Correctness

- **MUST** await all asynchronous work.
- **MUST NOT** use fire-and-forget promises in request paths.
- **MUST** propagate errors explicitly; swallowed errors are forbidden.
- **MUST** timebox external I/O with explicit timeouts.

---

## Side Effects & Concurrency

- **MUST** make side effects explicit and intentional.
- **MUST NOT** trigger background work implicitly during request handling.
- **MUST** bound concurrency for all external calls and internal work queues.
- **MUST NOT** rely on implicit framework retries or hidden scheduling.

---

## State & Resource Management

- **MUST NOT** retain request-scoped state in global or module scope.
- **MUST** explicitly manage the lifecycle of connections, file handles, and
  timers.
- **MUST** drain or terminate background work on shutdown.

---

## Failure Containment

- **MUST** isolate external failures using timeouts, retries, and circuit
  boundaries.
- **MUST NOT** allow downstream failures to cascade through the system.
- **MUST** fail fast and visibly when critical invariants are violated.

---

## Observability

- **MUST** emit structured logs for requests, jobs, and background work.
- **MUST** make latency, errors, and throughput measurable.
- **MUST NOT** hide failures through silent retries or swallowed exceptions.

---

## Security & Supply Chain

- **MUST** validate and normalize all external input.
- **MUST** keep secrets out of code, logs, and error messages.
- **MUST** treat dependencies as part of the attack surface.
- **MUST NOT** introduce unreviewed or unused dependencies.

---

## Authority

If any rule in:

- `overview.md`
- `runtime.md`
- `http-api.md`
- `data-access.md`
- `operations.md`
- `performance.md`
- `security.md`
- `testing.md`

conflicts with this document, **this document takes precedence**.

---

## Elaborations

The following documents elaborate on how these constraints are enforced:

- `.rulesync/rules/stacks/nodejs/overview.md`
- `.rulesync/rules/stacks/nodejs/runtime.md`
- `.rulesync/rules/stacks/nodejs/http-api.md`
- `.rulesync/rules/stacks/nodejs/data-access.md`
- `.rulesync/rules/stacks/nodejs/operations.md`
- `.rulesync/rules/stacks/nodejs/performance.md`
- `.rulesync/rules/stacks/nodejs/security.md`
- `.rulesync/rules/stacks/nodejs/testing.md`
