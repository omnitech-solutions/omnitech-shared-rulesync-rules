---
targets:
  - '*'
root: false
description: Laravel persistence and migrations
summary: Repositories, migrations, transactions
stack: laravel
globs:
  - '**/database/**'
  - '**/app/**/Repositories/**'
  - '**/app/**/Persistence/**'
cursor:
  description: Laravel persistence and migrations
  globs:
    - '**/database/**'
---

# Laravel Persistence Rules

## Repositories

- Keep repository interfaces in Domain; implementations in Infrastructure.
- Map between aggregates and Eloquent models in repositories.
- Keep mapping logic in one place to avoid drift.

---

## Migrations

- Keep migrations small and reversible.
- Add indexes for common query paths.
- Use stable identifiers (UUID/ULID) for aggregates per team standards.
- Add DB constraints for critical invariants.

---

## Transactions

- Keep transaction boundaries in handlers/services.
- Avoid transactions inside controllers.
