---
targets:
  - '*'
root: false
description: Rails service objects
summary: Orchestration, transactions, and workflows
stack: rails
globs:
  - '**/app/services/**'
cursor:
  description: Rails service objects
  globs:
    - '**/app/services/**'
---

# Rails Services Rules

## Responsibilities

- **MUST** orchestrate multi-step workflows.
- **MUST** define transaction boundaries.
- **MUST** raise domain-specific errors.

---

## Side Effects

- **MUST** make side effects explicit.
- **SHOULD** trigger jobs/events after commit.
