---
targets:
  - '*'
root: false
description: Vue routing boundaries and navigation patterns
summary: Route ownership, lazy boundaries, and navigation state
stack: vue
globs:
  - '**/*.vue'
  - '**/router/**'
  - '**/routes/**'
cursor:
  description: Vue routing boundaries and navigation patterns
  globs:
    - '**/*.vue'
    - '**/router/**'
---

# Vue Routing Rules

## Route Design

- MUST keep routes shallow and feature-focused.
- MUST lazy-load heavy route components.
- SHOULD use route-level data fetching.

---

## Navigation Guards

- MUST keep guards focused on auth and preconditions.
- SHOULD avoid side effects in guards.

---

## Related Rules

- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/routing.md`
