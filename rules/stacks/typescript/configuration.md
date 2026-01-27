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

## Compiler Intent

- Keep compiler options aligned with desired safety guarantees.
- Avoid weakening strictness for convenience.
- Ensure configuration reflects actual runtime environment.

---

## Project Boundaries

- Use separate configs for distinct build targets when needed.
- Keep shared base config small and intentional.
- Avoid implicit type roots or global leakage.

---

## Consistency

- Keep path aliases stable and well-documented.
- Ensure tooling uses the same config as the build.

---

## Related Rules

- `.rulesync/rules/code-quality.md`
- `.rulesync/rules/stacks/typescript/overview.md`
