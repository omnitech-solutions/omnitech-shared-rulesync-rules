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

## Rendering

- MUST avoid unnecessary rerenders by keeping reactive state minimal.
- SHOULD prefer computed properties over watchers for derivations.
- SHOULD use keep-alive only when justified.

---

## Bundling

- SHOULD lazy-load routes and large components.
- SHOULD avoid heavy third-party dependencies in the main bundle.

---

## Related Rules

- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/performance.md`
