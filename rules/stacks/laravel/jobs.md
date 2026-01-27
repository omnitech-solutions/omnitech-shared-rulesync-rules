---
targets:
  - '*'
root: false
description: Laravel jobs and async execution
summary: Idempotent background work and reliability
stack: laravel
globs:
  - '**/app/Jobs/**'
---

# Laravel Job Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/laravel/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Job Design

- MUST make jobs idempotent and safe to retry.
- MUST validate inputs and enforce authorization if needed.
- SHOULD keep job payloads small and stable.

---

## Reliability

- MUST configure timeouts and retry policies.
- MUST handle partial failures explicitly.
- SHOULD record job outcome and retry counts.

---

## Observability

- MUST log job start/finish and failures with context.
- SHOULD emit metrics for queue depth and latency.

---

## Related Rules

- `.rulesync/rules/stacks/laravel/overview.md`
- `.rulesync/rules/stacks/laravel/jobs.md`
