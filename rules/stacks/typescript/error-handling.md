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

## Error Modeling

- Prefer typed error objects or result types over throwing strings.
- Keep error types stable and well-documented.
- Avoid exposing infrastructure errors to domain callers.

---

## Boundaries

- Translate low-level errors at module boundaries.
- Preserve root cause context without leaking sensitive details.
- Ensure error handling aligns with public API contracts.

---

## Recovery

- Make failure modes explicit in return types.
- Avoid catching errors without handling or rethrowing with context.

---

## Related Rules

- `.rulesync/rules/code-quality.md`
- `.rulesync/rules/stacks/typescript/overview.md`
- `.rulesync/rules/stacks/typescript/runtime-validation.md`
