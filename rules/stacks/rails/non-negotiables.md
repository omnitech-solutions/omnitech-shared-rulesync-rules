---
targets:
  - '*'
root: false
description: Rails non-negotiable architectural constraints
summary: Absolute rules that define acceptable Rails architecture
stack: rails
globs:
  - '**/*.rb'
  - '**/app/**'
cursor:
  description: Rails non-negotiable architectural constraints
  globs:
    - '**/*.rb'
---

# Rails Non-Negotiables

These rules define the **hard architectural limits** of Rails applications.
Violations indicate **architectural drift** and must be corrected immediately.

These rules **override all other Rails rules**.

---

## Framework Discipline

- **MUST** treat Rails as an infrastructure and delivery framework.
- **MUST NOT** treat Rails models, controllers, or concerns as the domain model.
- **MUST** keep core domain behavior executable without Rails loaded.

---

## Boundary Integrity

- **MUST** enforce the following boundary order:

  `Routing → Controllers → Services → Domain → Persistence`

- **MUST NOT** pass request, params, session, or controller state beyond
  controllers.
- **MUST NOT** use callbacks, concerns, or filters to orchestrate business
  workflows.

---

## Model Discipline

- **MUST NOT** allow ActiveRecord models to coordinate workflows.
- **MUST NOT** encode cross-aggregate behavior in a single model.
- **MUST** restrict models to persistence + entity-local behavior only.

---

## Transactions & Side Effects

- **MUST** define transaction boundaries explicitly in services.
- **MUST NOT** open transactions in controllers or callbacks.
- **MUST** trigger side effects (jobs, emails, events) explicitly and
  intentionally.

---

## Error Semantics

- **MUST** use exceptions for error signaling.
- **MUST NOT** use `nil`, `false`, or sentinel values to represent failure.
- **MUST** fail fast when invariants are violated.

---

## Persistence Integrity

- **MUST** back critical invariants with database constraints.
- **MUST NOT** rely on validations alone for correctness.
- **MUST NOT** hide expensive queries behind associations or callbacks.

---

## Authority

If any rule in any Rails file conflicts with this document,  
**this document takes precedence**.
