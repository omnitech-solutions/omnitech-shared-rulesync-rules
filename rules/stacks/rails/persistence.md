---
targets:
  - '*'
root: false
description: Rails persistence patterns
summary: ActiveRecord queries, migrations, and integrity
stack: rails
globs:
  - '**/app/models/**'
  - '**/db/**'
cursor:
  description: Rails persistence patterns
  globs:
    - '**/app/models/**'
---

# Rails Persistence Rules

## Queries

- **MUST** keep complex queries in scopes or query objects.
- **MUST** paginate unbounded reads.
- **MUST** avoid N+1 queries explicitly.

---

## Migrations

- **MUST** be small and reversible.
- **MUST NOT** perform large data backfills inline.
