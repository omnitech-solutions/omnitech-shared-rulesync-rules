---
targets:
  - '*'
root: false
description: React performance optimization guidelines
summary: Rendering, memoization, code splitting, virtualization
stack: react
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/components/**'
cursor:
  description: React performance optimization guidelines
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
---

# React Performance Rules

## Rendering

- MUST avoid unnecessary rerenders by keeping props stable.
- SHOULD use memoization intentionally, not by default.
- SHOULD avoid expensive computations in render.

---

## Data Loading

- SHOULD batch network requests where possible.
- SHOULD avoid waterfalls in component trees.

---

## Related Rules

- `.rulesync/rules/stacks/react/overview.md`
- `.rulesync/rules/stacks/react/performance.md`
