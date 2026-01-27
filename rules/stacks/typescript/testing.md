---
targets:
  - '*'
root: false
description: TypeScript testing guidance
summary: Type coverage, runtime behavior, and error cases
stack: typescript
globs:
  - '**/*.ts'
  - '**/*.tsx'
  - '**/test/**'
  - '**/__tests__/**'
cursor:
  description: TypeScript testing guidance
  globs:
    - '**/*.ts'
    - '**/*.tsx'
---

# TypeScript Testing Rules

## Type Coverage

- Cover public types with usage examples in tests or fixtures.
- Validate that types prevent invalid states, not just happy paths.
- Keep test helpers strongly typed to avoid leaking `any`.

---

## Runtime Behavior

- Test runtime validation for untrusted inputs.
- Ensure error handling aligns with type contracts.
- Avoid tests that only assert type inference without runtime behavior.

---

## Related Rules

- `.rulesync/rules/testing.md`
- `.rulesync/rules/stacks/typescript/overview.md`
