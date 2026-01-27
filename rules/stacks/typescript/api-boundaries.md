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

## Boundary Contracts

- MUST validate external inputs at the boundary.
- MUST map external DTOs into internal domain types.
- SHOULD version or scope public APIs explicitly.

---

## Error Mapping

- MUST map domain errors to stable API error shapes.
- SHOULD keep error payloads consistent across endpoints.

---

## Change Management

- MUST avoid breaking changes without a migration plan.
- SHOULD deprecate fields and document replacements.

---

## Related Rules

- `.rulesync/rules/stacks/typescript/overview.md`
- `.rulesync/rules/stacks/typescript/api-boundaries.md`
- `.rulesync/rules/stacks/typescript/runtime-validation.md`
