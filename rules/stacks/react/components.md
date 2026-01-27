---
targets:
  - '*'
root: false
description: React component patterns and composition
summary: Component APIs, composition, rendering patterns
stack: react
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/components/**'
  - '**/features/**'
cursor:
  description: React component patterns and composition
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
---

# React Component Rules

## Component API Design

- MUST keep props/inputs explicit and intention-revealing.
- MUST document defaults and invariants.
- SHOULD favor composition over configuration flags.
- SHOULD keep components single-purpose.
- SHOULD define prop types outside the component body.

---

## Composition and Reuse

- MUST avoid deep prop drilling without justification.
- SHOULD create primitives for repeatable UI patterns.
- SHOULD limit component responsibilities to UI behavior.

---

## Rendering Discipline

- MUST keep rendering pure and side-effect free.
- SHOULD move heavy computation out of render paths.
- SHOULD provide stable keys for list rendering.
- SHOULD use early returns to reduce nested conditional branches.

---

## Styling and Variants

- MUST keep variant logic centralized and consistent.
- SHOULD avoid one-off styles when a shared token exists.
- MAY use a variant utility to control styling combinatorics.

---

## Data and State Discipline

- SHOULD colocate data fetching with the component that renders it.
- SHOULD avoid storing derived state; compute it during render.
- SHOULD keep state as local as possible to reduce re-renders.

---

## Related Rules

- `.rulesync/rules/stacks/react/overview.md`
- `.rulesync/rules/stacks/react/components.md`
