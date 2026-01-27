---
targets:
  - '*'
root: false
description: TypeScript runtime validation guidance
summary: Input validation, narrowing, and safe parsing
stack: typescript
globs:
  - '**/*.ts'
  - '**/*.tsx'
cursor:
  description: TypeScript runtime validation guidance
  globs:
    - '**/*.ts'
    - '**/*.tsx'
---

# TypeScript Runtime Validation Rules

## Validation Discipline

- MUST validate all untrusted inputs at runtime.
- MUST fail fast with clear, structured errors.
- SHOULD centralize schemas for reuse and consistency.

---

## Schema Design

- MUST keep schemas aligned with TypeScript types.
- SHOULD treat parse failures as validation errors, not system errors.
- SHOULD include defaults in schema definitions when appropriate.

---

## Error Reporting

- MUST return user-safe messages from boundary validation.
- SHOULD log full details server-side for debugging.

---

## Related Rules

- `.rulesync/rules/stacks/typescript/overview.md`
- `.rulesync/rules/stacks/typescript/runtime-validation.md`
- `.rulesync/rules/stacks/typescript/error-handling.md`
