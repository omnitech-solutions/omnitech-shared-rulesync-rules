---
targets:
  - '*'
root: false
description: TypeScript type modeling rules
summary: Unions, intersections, and expressive domain types
stack: typescript
globs:
  - '**/*.ts'
  - '**/*.tsx'
cursor:
  description: TypeScript type modeling rules
  globs:
    - '**/*.ts'
    - '**/*.tsx'
---

# TypeScript Type Modeling Rules

## Domain Modeling

- Prefer domain-specific types over primitives for critical concepts.
- Use discriminated unions for state machines and workflow states.
- Avoid overusing `any`; prefer `unknown` with narrowing.

---

## Type Precision

- Keep types as narrow as possible without harming readability.
- Avoid leaking optional properties when they are required in practice.
- Use readonly types for immutable data structures.

---

## Reuse & Composition

- Prefer small, composable types over large, monolithic interfaces.
- Use utility types sparingly when they improve clarity.

---

## Related Rules

- `.rulesync/rules/stacks/typescript/overview.md`
- `.rulesync/rules/stacks/typescript/api-boundaries.md`
