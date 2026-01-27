---
targets:
  - '*'
root: false
description: React error handling patterns
summary: Error boundaries and resilient UI
stack: react
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/components/**'
cursor:
  description: React error handling patterns
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
---

# React Error Handling Rules

## Boundaries

- MUST use error boundaries for component tree failures.
- SHOULD isolate high-risk components behind boundaries.

---

## UX

- MUST provide user-safe fallback UIs.
- SHOULD include retry actions for recoverable errors.

---

## Related Rules

- `.rulesync/rules/stacks/react/overview.md`
- `.rulesync/rules/stacks/react/error-handling.md`
