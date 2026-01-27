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

- Make composables pure where possible: inputs in, outputs out.
- Expose a minimal API; return stable references when feasible.
- Keep composables focused on one responsibility.

---

## Side Effects & Lifecycle

- Attach side effects only when a component uses the composable.
- Clean up subscriptions, timers, and listeners reliably.
- Avoid hidden global state inside composables.

---

## Dependencies

- Accept dependencies as parameters to ease testing and reuse.
- Avoid importing app-specific singletons inside shared composables.

---

## Related Rules

- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/state.md`
- `.rulesync/rules/stacks/vue/testing.md`
