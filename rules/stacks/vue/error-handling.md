---
targets:
  - '*'
root: false
description: Vue error handling patterns and user-safe fallbacks
summary: Error boundaries, async failure handling, and user messaging
stack: vue
globs:
  - '**/*.vue'
  - '**/*.ts'
  - '**/composables/**'
  - '**/components/**'
---

# Vue Error Handling Rules

## Error Boundaries and UI Fallbacks

- MUST provide user-safe fallbacks for failed views or data states.
- MUST avoid rendering raw error objects directly to users.
- SHOULD include friendly error copy with recovery actions.
- SHOULD log error context (route, user action, correlation id).

---

## Async and Data Fetching Errors

- MUST handle rejected promises in composables and stores.
- MUST distinguish between user-recoverable errors and system failures.
- SHOULD implement retry or refresh actions for transient errors.
- SHOULD surface validation errors inline with the relevant fields.

---

## State and Store Safety

- MUST keep error state scoped to the domain that failed.
- MUST reset error state on successful recovery.
- SHOULD avoid global error flags that hide root causes.

---

## Observability

- MUST capture errors with enough context to reproduce.
- SHOULD include endpoint, parameters (redacted), and timeouts.
- SHOULD tag errors with feature or component identifiers.

---

## Related Rules

- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/data-fetching.md`
- `.rulesync/rules/stacks/vue/components.md`
