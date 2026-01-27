---
targets:
  - '*'
root: false
description: Vue testing guidance
summary: Component, composable, and state testing boundaries
stack: vue
globs:
  - '**/*.vue'
  - '**/test/**'
  - '**/__tests__/**'
cursor:
  description: Vue testing guidance
  globs:
    - '**/*.vue'
    - '**/test/**'
---

# Vue Testing Rules

## Component Tests

- Test components as users interact with them, not as implementation details.
- Keep tests focused on props, emitted events, and visible output.
- Mock network and store boundaries rather than internal helpers.

---

## Composables & State

- Test composables with controlled inputs and deterministic clocks.
- Validate edge cases for async flows and error states.
- Keep store tests isolated and reset state between runs.

---

## Stability

- Avoid relying on DOM timing or order-dependent behavior.
- Prefer small, fast tests; reserve end-to-end coverage for critical paths.

---

## Related Rules

- `.rulesync/rules/testing.md`
- `.rulesync/rules/stacks/vue/components.md`
- `.rulesync/rules/stacks/vue/composables.md`
