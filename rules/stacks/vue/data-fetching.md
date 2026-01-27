---
targets:
  - '*'
root: false
description: Vue data fetching and server state guidance
summary: Boundaries for async data, caching, and error states
stack: vue
globs:
  - '**/*.vue'
  - '**/services/**'
  - '**/api/**'
  - '**/composables/**'
cursor:
  description: Vue data fetching and server state guidance
  globs:
    - '**/*.vue'
    - '**/services/**'
---

# Vue Data Fetching Rules

## Server State Boundaries

- Keep data fetching in composables or services, not components.
- Separate server state from local UI state.
- Prefer explicit loading, empty, and error states.

---

## Caching & Consistency

- Cache server responses with clear invalidation rules.
- Avoid stale data by scoping caches to user and environment context.
- Keep optimistic updates reversible.

---

## Error Handling

- Provide user-friendly error states and recovery paths.
- Avoid retry storms; back off and surface failures clearly.

---

## Related Rules

- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/composables.md`
- `.rulesync/rules/stacks/vue/state.md`
