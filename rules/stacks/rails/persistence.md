---
targets:
  - '*'
root: false
description: Rails persistence and ActiveRecord patterns
summary: Queries, scopes, N+1 prevention, migrations
stack: rails
globs:
  - '**/app/models/**'
  - '**/db/**'
  - '**/migrate/**'
cursor:
  description: Rails persistence and ActiveRecord patterns
  globs:
    - '**/app/models/**'
---

# Rails Persistence Rules

## ActiveRecord Queries

- Prefer ActiveRecord query APIs over raw SQL.
- Keep query logic in scopes or query objects for reuse.
- Keep complex queries in dedicated query objects.

```ruby
scope :active, -> { where(active: true) }
```

---

## N+1 Prevention

- Use `includes`/`preload` for eager loading.
- Avoid loading associations in loops without eager loading.
- Prefer `select` to limit columns for large payloads.

---

## Migrations

- Keep migrations small and reversible.
- Backfill large data changes with background jobs.
- Avoid long‑running data migrations during deploys.

---

## Data Integrity

- Add DB constraints for critical invariants (uniqueness, foreign keys).
- Treat validations as user‑level guarantees; DB constraints as final guards.
