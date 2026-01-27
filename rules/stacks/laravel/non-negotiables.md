---
targets:
  - '*'
root: false
description: Laravel non-negotiable architectural constraints
summary: Absolute rules that define acceptable Laravel architecture
stack: laravel
globs:
  - '**/*.php'
---

# Laravel Non-Negotiables

Violations of these rules indicate architectural drift and must be corrected.

## Framework Boundaries

- Laravel is infrastructure, not the domain.
- Domain code MUST NOT depend on Laravel types.

## Transaction Ownership

- Transactions MUST live in application/services.
- Controllers MUST NOT manage transactions.

## Persistence Discipline

- Eloquent models are not domain entities.
- HTTP responses MUST NOT expose Eloquent models.

## Boundary Integrity

- Validation occurs at HTTP boundaries only.
- Authorization is explicit and testable.
- Side effects are never implicit.
