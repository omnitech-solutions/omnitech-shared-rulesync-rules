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

## Route Ownership

- Keep route definitions focused on layout and composition, not business logic.
- Treat routes as feature boundaries with clear entry points.
- Avoid coupling components to route implementation details.

---

## Navigation State

- Keep navigation state (filters, pagination) explicit and shareable.
- Avoid mixing UI state with routing unless it affects navigation history.
- Ensure back/forward navigation preserves user context.

---

## Performance & Loading

- Lazy-load route-level features where possible.
- Keep route guards lightweight and deterministic.
- Avoid blocking navigation on non-critical data.

---

## Related Rules

- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/state.md`
- `.rulesync/rules/stacks/vue/performance.md`
