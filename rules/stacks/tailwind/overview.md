---
targets:
  - '*'
root: false
description: Utility-first CSS principles and consistency
summary: Composition, tokens, and design system alignment
stack: tailwind
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/*.vue'
  - '**/*.css'
cursor:
  description: Utility-first CSS principles and consistency
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
    - '**/*.vue'
---

# Tailwind Overview Rules

## Purpose

- Define the architectural contract for Tailwind work in this repo.
- Keep rules focused on predictable behavior, testability, and operational
  safety.
- Treat all guidance here as defaults unless a narrower rule overrides it.

---

## Core Principles

- MUST separate concerns: UI/transport, application flow, domain logic, and
  infrastructure.
- MUST keep side effects explicit and traceable.
- MUST prefer composable units over large multi-purpose modules.
- SHOULD optimize for clarity before micro-optimization.
- SHOULD design for change with clear extension points.

---

## Data Flow and Boundaries

- MUST keep inputs validated at boundaries before use.
- MUST keep outputs shaped and documented at boundaries.
- SHOULD prevent data leakage across layers (no direct model/ORM exposure).
- SHOULD define stable interfaces for cross-module calls.

---

## Reliability and Observability

- MUST handle errors intentionally with typed or structured error shapes.
- MUST emit logs/metrics for user-impacting paths and background work.
- SHOULD include tracing or correlation identifiers when possible.
- SHOULD keep performance budgets for critical workflows.

---

## Evolution and Change

- MUST avoid breaking changes to public APIs without a migration plan.
- SHOULD deprecate gradually with clear replacement guidance.
- MAY provide compatibility shims when external consumers exist.

---

## Related Rules

- `.rulesync/rules/stacks/tailwind/overview.md`
