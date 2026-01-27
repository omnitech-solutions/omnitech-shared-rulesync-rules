---
targets:
  - '*'
root: false
description: Vue accessibility guidance
summary: Semantics, focus management, and UI affordances
stack: vue
globs:
  - '**/*.vue'
  - '**/components/**'
cursor:
  description: Vue accessibility guidance
  globs:
    - '**/*.vue'
    - '**/components/**'
---

# Vue Accessibility Rules

## Semantics and Labels

- MUST use semantic HTML and proper labels.
- MUST provide accessible names for icon-only controls.

---

## Keyboard and Focus

- MUST ensure keyboard support for all interactions.
- SHOULD manage focus for modals and route transitions.

---

## Related Rules

- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/accessibility.md`
