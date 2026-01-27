---
targets:
  - '*'
root: false
description: Rails background jobs and async processing
summary: ActiveJob usage, retries, and idempotency
stack: rails
globs:
  - '**/app/jobs/**'
  - '**/jobs/**'
cursor:
  description: Rails background jobs and async processing
  globs:
    - '**/app/jobs/**'
---

# Rails Jobs Rules

## Job Responsibilities

- Jobs perform async work and call services.
- Make jobs idempotent; safe to retry.
- Keep payloads small and serializable.
- Use unique job keys when duplication is harmful.

```ruby
class ProcessUserJob < ApplicationJob
  queue_as :default

  def perform(user_id)
    UserProcessor.call(user_id)
  end
end
```

---

## Retries & Failure

- Configure retry policies for transient failures.
- Log failures with context and surface to monitoring.
- Prefer dead‑letter handling for repeated failures.
