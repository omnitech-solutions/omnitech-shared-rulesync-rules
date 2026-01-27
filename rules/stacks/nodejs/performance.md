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

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/nodejs/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Throughput and Latency

- MUST keep critical paths non-blocking.
- SHOULD use streaming for large payloads.
- SHOULD keep payload sizes small and compressible.

---

## Dependency Management

- SHOULD isolate slow dependencies with timeouts and retries.
- SHOULD cache stable reads when safe.

---

## Related Rules

- `.rulesync/rules/stacks/nodejs/overview.md`
- `.rulesync/rules/stacks/nodejs/performance.md`
