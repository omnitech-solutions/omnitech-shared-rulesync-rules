---
targets:
  - '*'
root: false
description: Laravel API resources and response shaping
summary: Stable, explicit HTTP response contracts
stack: laravel
globs:
  - '**/app/Http/Resources/**'
---

# Laravel Resources Rules

## Response Shaping

- **MUST** use Resources or DTOs for JSON responses.
- **MUST** define explicit output shapes.
- **MUST NOT** leak internal fields or persistence concerns.

---

## Stability

- **MUST** treat resource shapes as public contracts.
- **MUST** evolve resources additively.
