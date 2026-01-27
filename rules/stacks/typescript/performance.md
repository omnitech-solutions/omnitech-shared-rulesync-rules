---
targets:
  - '*'
root: false
description: TypeScript performance and maintainability
summary: Type complexity, build times, and readability
stack: typescript
globs:
  - '**/*.ts'
  - '**/*.tsx'
cursor:
  description: TypeScript performance and maintainability
  globs:
    - '**/*.ts'
    - '**/*.tsx'
---

# TypeScript Performance Rules

## Performance Goals

- MUST define performance budgets for critical paths.
- MUST measure before optimizing and capture baselines.
- SHOULD prioritize user-perceived latency over raw throughput.

---

## Efficiency Practices

- MUST avoid unnecessary work in hot paths.
- MUST batch or aggregate expensive operations where safe.
- SHOULD cache repeatable results with explicit invalidation.
- SHOULD use lazy loading for non-critical features.

---

## Observability

- MUST instrument latency, error rate, and throughput metrics.
- SHOULD add traces around slow or high-impact operations.
- SHOULD log performance regressions with context.

---

## Performance Safety

- MUST prevent unbounded loops or unbounded concurrency.
- SHOULD include backpressure or rate limiting where needed.
- MAY add circuit breakers for unstable dependencies.

---

## Related Rules

- `.rulesync/rules/stacks/typescript/overview.md`
- `.rulesync/rules/stacks/typescript/performance.md`
