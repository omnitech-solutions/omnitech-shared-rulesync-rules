---
targets:
  - '*'
root: false
description: PHP non-negotiable architectural constraints
summary: Absolute rules that define acceptable PHP architecture
stack: php
globs:
  - '**/*.php'
  - '**/src/**'
---

# PHP Non-Negotiables

Violations of these rules indicate **architectural drift** and must be
corrected. These constraints take precedence over all other PHP rules.

---

## Language Discipline

- **MUST** use `declare(strict_types=1);` in all new PHP files.
- **MUST NOT** rely on implicit type coercion.
- **MUST NOT** use `mixed` or untyped arrays outside explicit boundaries.

---

## Boundary Integrity

- **MUST** separate concerns strictly: Transport / Framework → Application →
  Domain → Infrastructure.
- **MUST NOT** leak framework, ORM, or IO concerns into domain code.
- **MUST** keep domain logic executable without a framework.

---

## Error & Control Flow

- **MUST NOT** use sentinel values (`false`, `null`) to signal errors.
- **MUST** use exceptions for error conditions.
- **MUST** make failure paths explicit and observable.

---

## State & Mutation

- **MUST** favor immutability for domain objects.
- **MUST NOT** mutate shared state implicitly.
- **MUST** make side effects explicit and intentional.

---

## Persistence Discipline

- **MUST NOT** treat ORM entities as domain entities.
- **MUST** isolate persistence behind repositories/adapters.
- **MUST NOT** expose persistence models across boundaries.

---

## Authority

If any rule in:

- `overview.md`
- `types.md`
- `errors.md`
- `structure.md`
- `data-access.md`
- `performance.md`
- `testing.md`

conflicts with this document, **this document takes precedence**.
