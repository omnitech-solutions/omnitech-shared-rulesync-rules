---
targets:
  - '*'
root: false
description: Laravel persistence and migrations
summary: Repositories, transactions, and schema discipline
stack: laravel
globs:
  - '**/database/**'
---

# Laravel Persistence Rules

## Repositories

- **MUST** keep repository interfaces domain-facing.
- **MUST** isolate Eloquent in infrastructure.
- **MUST** centralize mapping logic.

---

## Transactions

- **MUST** define transaction boundaries in application/services.
- **MUST NOT** manage transactions in controllers.

---

## Migrations

- **MUST** keep migrations reversible.
- **MUST** add constraints for invariants.
