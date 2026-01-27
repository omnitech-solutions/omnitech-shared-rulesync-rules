---
targets:
  - '*'
root: false
description: Vue performance guidance
summary: Rendering efficiency, list handling, and lazy boundaries
stack: vue
globs:
  - '**/*.vue'
  - '**/components/**'
cursor:
  description: Vue performance guidance
  globs:
    - '**/*.vue'
    - '**/components/**'
---

# Vue Performance Rules

## Rendering Efficiency

- Keep render output minimal; avoid heavy computation in templates.
- Prefer computed values over repeated inline expressions.
- Use memoization patterns when rendering large lists or expensive trees.

---

## Lists & Reconciliation

- Use stable keys that map to persistent identities.
- Avoid rendering large lists without pagination or virtualization.
- Keep list item components lightweight.

---

## Async & Code Splitting

- Lazy-load routes or feature modules that are not immediately needed.
- Defer non-critical data fetching until after initial render.

---

## Related Rules

- `.rulesync/rules/performance.md`
- `.rulesync/rules/stacks/vue/components.md`
