---
targets:
  - '*'
root: false
description: PHP data access patterns
summary: Repositories, prepared queries, ORM boundaries
stack: php
globs:
  - '**/*.php'
  - '**/database/**'
  - '**/repositories/**'
cursor:
  description: PHP data access patterns
  globs:
    - '**/*.php'
---

# PHP Data Access Rules

## Access Patterns

- Use prepared statements or ORM APIs for queries.
- Keep persistence concerns out of domain models.
- Keep SQL centralized in repositories/adapters.

---

## Repositories

- Expose aggregate‑centric operations.
- Avoid returning raw database rows from domain interfaces.
- Map persistence models to domain objects at boundaries.
