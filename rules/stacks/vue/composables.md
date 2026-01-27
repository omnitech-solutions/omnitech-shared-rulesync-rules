---
targets:
  - '*'
root: false
description: Vue composable patterns
summary: Reusable logic, lifecycle safety, and dependency injection
stack: vue
globs:
  - '**/composables/**'
  - '**/*.vue'
cursor:
  description: Vue composable patterns
  globs:
    - '**/composables/**'
    - '**/*.vue'
---

# Vue Composable Rules

## Composable Design

- MUST keep composables focused on one responsibility.
- MUST return explicit APIs (state + actions).
- SHOULD avoid hidden side effects on import.

---

## Reusability

- SHOULD accept dependencies as parameters.
- SHOULD expose configuration through options objects.

---

## Lifecycle

- MUST clean up effects, listeners, and subscriptions.
- SHOULD avoid leaking state across component instances.

---

## Related Rules

- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/composables.md`
