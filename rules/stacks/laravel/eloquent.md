---
targets:
  - '*'
root: false
description: Laravel Eloquent model patterns
summary: Persistence modeling and query discipline
stack: laravel
globs:
  - '**/app/Models/**'
---

# Laravel Eloquent Rules

## Model Scope

- **MUST** restrict models to persistence concerns.
- **MUST NOT** encode business rules in models.
- **SHOULD** use casts and accessors for normalization.

---

## Queries

- **MUST** avoid N+1 queries.
- **MUST** paginate unbounded result sets.
- **SHOULD** use query scopes for reuse.

---

## Serialization

- **MUST** control serialization via resources.
- **MUST NOT** expose models directly.
