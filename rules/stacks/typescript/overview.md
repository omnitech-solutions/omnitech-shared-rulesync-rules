---
targets:
  - '*'
root: false
description: TypeScript core principles and patterns
summary: Type safety, API boundaries, and runtime validation
stack: typescript
globs:
  - '**/*.ts'
  - '**/*.tsx'
cursor:
  description: TypeScript core principles and patterns
  globs:
    - '**/*.ts'
    - '**/*.tsx'
---

# TypeScript Overview Rules

## Core Principles

- **Type Safety First:** Prefer precise types over broad or implicit shapes.
- **Explicit Boundaries:** Define clear public interfaces between modules.
- **Runtime Alignment:** Validate untrusted data at runtime; types alone are not
  enough.
- **Maintainability:** Keep types readable and avoid unnecessary complexity.

---

## Design Expectations

- Model domain concepts explicitly with types and interfaces.
- Keep type changes backward-compatible for public APIs.
- Avoid leaking infrastructure types into domain models.

---

## Related Rules

- `.rulesync/rules/code-quality.md`
- `.rulesync/rules/stacks/typescript/types.md`
- `.rulesync/rules/stacks/typescript/api-boundaries.md`
- `.rulesync/rules/stacks/typescript/runtime-validation.md`
- `.rulesync/rules/stacks/typescript/error-handling.md`
- `.rulesync/rules/stacks/typescript/configuration.md`
- `.rulesync/rules/stacks/typescript/testing.md`
- `.rulesync/rules/stacks/typescript/performance.md`
