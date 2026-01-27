---
targets:
  - '*'
root: false
description: TypeScript configuration principles
summary: Compiler intent, project boundaries, and consistency
stack: typescript
globs:
  - '**/*.ts'
  - '**/*.tsx'
  - '**/tsconfig*.json'
cursor:
  description: TypeScript configuration principles
  globs:
    - '**/*.ts'
    - '**/*.tsx'
---

# TypeScript Configuration Rules

## Compiler Strictness

- MUST enable strict type checking.
- MUST disallow implicit any and unsafe casts.
- SHOULD enable noUncheckedIndexedAccess where feasible.

---

## Module and Build Settings

- MUST align module resolution with runtime environment.
- SHOULD keep tsconfig files small and layered.
- SHOULD avoid path aliases that confuse tooling.

---

## Project Hygiene

- SHOULD include type checking in CI.
- SHOULD keep emitted JS out of source folders.

---

## Related Rules

- `.rulesync/rules/stacks/typescript/overview.md`
- `.rulesync/rules/stacks/typescript/configuration.md`
