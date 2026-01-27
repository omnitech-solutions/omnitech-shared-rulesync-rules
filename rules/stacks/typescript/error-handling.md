---
targets:
  - '*'
root: false
description: TypeScript error handling patterns
summary: Typed errors, results, and safe failure modes
stack: typescript
globs:
  - '**/*.ts'
  - '**/*.tsx'
cursor:
  description: TypeScript error handling patterns
  globs:
    - '**/*.ts'
    - '**/*.tsx'
---

# TypeScript Error Handling Rules

## Error Taxonomy

- MUST distinguish between validation, authorization, and system errors.
- MUST use structured error shapes with stable codes.
- SHOULD map errors to user-safe messages at boundaries.

---

## Handling Strategy

- MUST avoid swallowing errors silently.
- MUST log unexpected failures with context.
- SHOULD propagate typed errors rather than raw exceptions.
- SHOULD provide fallbacks for recoverable failures.

---

## User Experience

- MUST avoid exposing sensitive details in errors.
- SHOULD include actionable guidance when possible.
- MAY include retry hints for transient failures.

---

## Related Rules

- `.rulesync/rules/stacks/typescript/overview.md`
- `.rulesync/rules/stacks/typescript/error-handling.md`
