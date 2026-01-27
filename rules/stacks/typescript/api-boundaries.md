---
targets:
  - '*'
root: false
description: TypeScript API boundary and module design
summary: Public types, generics, and safe exports
stack: typescript
globs:
  - '**/*.ts'
  - '**/*.tsx'
cursor:
  description: TypeScript API boundary and module design
  globs:
    - '**/*.ts'
    - '**/*.tsx'
---

# TypeScript API Boundary Rules

## Public Interfaces

- Export minimal, well-documented types for public modules.
- Avoid exposing internal implementation types or private generics.
- Keep function signatures stable and predictable.

---

## Generics & Constraints

- Use generics when they simplify reuse, not to hide complexity.
- Constrain generics to prevent invalid states.
- Prefer explicit type parameters in public APIs when inference is ambiguous.

---

## Dependency Direction

- Keep domain types independent of framework or transport types.
- Avoid circular type dependencies across modules.

---

## Related Rules

- `.rulesync/rules/stacks/typescript/overview.md`
- `.rulesync/rules/stacks/typescript/types.md`
