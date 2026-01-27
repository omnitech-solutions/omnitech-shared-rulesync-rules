---
targets:
  - '*'
root: false
description: Rails background jobs
summary: Async execution, retries, idempotency
stack: rails
globs:
  - '**/app/jobs/**'
cursor:
  description: Rails background jobs
  globs:
    - '**/app/jobs/**'
---

# Rails Job Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/rails/non-negotiables.md`.
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

- `.rulesync/rules/stacks/rails/overview.md`
- `.rulesync/rules/stacks/rails/jobs.md`
