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

- MUST test behavior from the user's perspective.
- SHOULD avoid fragile selectors.

---

## Integration

- SHOULD test data-fetching and routing flows.
- SHOULD keep mocks focused on external boundaries.

---

## Related Rules

- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/testing.md`
