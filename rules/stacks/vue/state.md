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

- MUST colocate state with the component or module that owns it.
- MUST lift state only when multiple consumers require coordination.
- SHOULD avoid global state when local state suffices.

---

## State Shape

- MUST model state with explicit, typed structures.
- SHOULD use discriminated unions for multi-state workflows.
- SHOULD avoid storing derived data; compute it instead.

---

## Updates and Effects

- MUST keep state updates predictable and atomic.
- SHOULD batch updates to avoid intermediate inconsistent state.
- SHOULD avoid side effects inside state mutations.

---

## Related Rules

- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/state.md`
