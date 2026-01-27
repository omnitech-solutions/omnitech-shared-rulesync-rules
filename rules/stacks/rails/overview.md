---
targets:
  - '*'
root: false
description: Rails core architecture and application contract
summary: Non-negotiable Rails standards and system-wide guarantees
stack: rails
globs:
  - '**/*.rb'
  - '**/app/**'
  - '**/config/**'
cursor:
  description: Rails architectural overview
  globs:
    - '**/*.rb'
---

# Rails Overview Rules

> **Authority**
>
> Governed by: `.rulesync/rules/stacks/rails/non-negotiables.md`

This document defines the **baseline contract** for Rails applications. All
other Rails rules **specialize or elaborate** on these guarantees.

---

## Rule Strength

- **MUST** — Required. Violations block merge.
- **SHOULD** — Default expectation.
- **MAY** — Optional guidance.

---

## Core Contract

- **Rails as Infrastructure (MUST)**  
  Rails provides delivery mechanisms, not domain structure.

- **Explicit Boundaries (MUST)**  
  Routing → Controllers → Services → Domain → Persistence.

- **Replaceability (MUST)**  
  Domain and application logic must not depend on Rails APIs.

- **Predictability (MUST)**  
  Validation, authorization, transactions, and side effects must be explicit.

---

## Execution Model

- **Thin Controllers (MUST)**
- **Service-Driven Workflows (MUST)**
- **No Hidden Work (MUST)** — callbacks may not hide behavior

---

## Evolution

- **Additive Change (MUST)**
- **Consistency (MUST)** across routing, errors, and responses

---

## Authoritative Index

- non-negotiables.md
- controllers.md
- models.md
- services.md
- persistence.md
- routing.md
- jobs.md
- security.md
- testing.md
