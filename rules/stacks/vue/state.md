---
targets:
  - '*'
root: false
description: Vue state management guidance
summary: Local vs shared state, derived data, and updates
stack: vue
globs:
  - '**/*.vue'
  - '**/stores/**'
  - '**/state/**'
cursor:
  description: Vue state management guidance
  globs:
    - '**/*.vue'
    - '**/stores/**'
---

# Vue State Rules

## State Placement

- Keep state close to where it is used; lift only for coordination.
- Separate server state from client UI state.
- Avoid duplicating derived values in state.

---

## Updates & Side Effects

- Centralize state transitions and keep them predictable.
- Avoid implicit side effects in watchers; use explicit actions instead.
- Keep async state updates cancellable when possible.

---

## Shared State Boundaries

- Use shared stores for cross-feature coordination only.
- Keep shared state normalized and well-typed.
- Guard against stale reads when multiple sources update state.

---

## Related Rules

- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/composables.md`
- `.rulesync/rules/stacks/typescript/overview.md`
