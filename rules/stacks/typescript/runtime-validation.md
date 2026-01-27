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

## Untrusted Inputs

- Validate all external data before use (HTTP, storage, queues, user input).
- Treat unknown data as `unknown` until validated and narrowed.
- Prefer fail-fast parsing with clear error reporting.

---

## Runtime Guarantees

- Keep parsing and validation close to the boundary of the system.
- Avoid assuming runtime shape from compile-time types.
- Use schema or guard-based validation that is easy to audit.

---

## Related Rules

- `.rulesync/rules/security.md`
- `.rulesync/rules/stacks/typescript/overview.md`
