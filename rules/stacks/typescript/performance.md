---
targets:
  - '*'
root: false
description: TypeScript performance and maintainability
summary: Type complexity, build times, and readability
stack: typescript
globs:
  - '**/*.ts'
  - '**/*.tsx'
cursor:
  description: TypeScript performance and maintainability
  globs:
    - '**/*.ts'
    - '**/*.tsx'
---

# TypeScript Performance Rules

## Type Complexity

- Keep types understandable; avoid deeply nested conditional types.
- Prefer simpler types over clever type gymnastics.
- Split large type definitions into smaller, named parts.

---

## Build Health

- Avoid exporting huge unions or inferred types that slow compilation.
- Keep module boundaries clean to reduce incremental build churn.

---

## Related Rules

- `.rulesync/rules/performance.md`
- `.rulesync/rules/stacks/typescript/overview.md`
