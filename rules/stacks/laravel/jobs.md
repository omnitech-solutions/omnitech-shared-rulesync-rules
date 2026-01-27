---
targets:
  - '*'
root: false
description: Laravel jobs and listeners
summary: Queues, idempotency, event handling
stack: laravel
globs:
  - '**/app/Jobs/**'
  - '**/app/Listeners/**'
  - '**/app/Events/**'
cursor:
  description: Laravel jobs and listeners
  globs:
    - '**/app/Jobs/**'
---

# Laravel Jobs Rules

## Jobs

- Jobs should be idempotent and safe to retry.
- Keep payloads small; pass IDs rather than full models.
- Delegate business logic to handlers/services.
- Use queue names and priorities deliberately.

---

## Listeners

- Keep listeners thin; dispatch jobs for heavy work.
- Avoid business rules in listeners.
