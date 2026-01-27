---
targets:
  - '*'
root: false
description: Vue component design and composition
summary: Component APIs, slots, and composition boundaries
stack: vue
globs:
  - '**/*.vue'
  - '**/components/**'
cursor:
  description: Vue component design and composition
  globs:
    - '**/*.vue'
    - '**/components/**'
---

# Vue Component Rules

## Component API Design

- Keep props small, explicit, and intention-revealing.
- Use events for actions, not state mutations.
- Prefer slots for extensibility over large configuration props.

---

## Composition Patterns

- Compose features from smaller components rather than building monoliths.
- Extract shared UI patterns into primitives with consistent APIs.
- Avoid cross-component implicit coupling (shared mutable state, magic events).

---

## Rendering Discipline

- Keep templates free of heavy logic; move computation to computed values.
- Avoid side effects during render.
- Use stable keys for list rendering.

---

## Related Rules

- `.rulesync/rules/ui-ux.md`
- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/state.md`
