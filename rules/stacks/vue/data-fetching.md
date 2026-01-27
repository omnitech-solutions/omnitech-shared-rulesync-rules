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

## Data Ownership

- MUST fetch data in feature-level containers or composables.
- MUST avoid data fetching in presentational components.
- SHOULD colocate fetching logic with the owning route.

---

## Caching and Staleness

- SHOULD cache repeatable queries with explicit invalidation.
- SHOULD handle loading and empty states consistently.

---

## Error Handling

- MUST surface recoverable errors in the UI.
- SHOULD log unexpected failures with context.

---

## Related Rules

- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/data-fetching.md`
- `.rulesync/rules/stacks/vue/error-handling.md`
