---
targets:
  - '*'
root: false
description: React hooks usage and custom hook patterns
summary: useEffect, useMemo/useCallback, custom hooks
stack: react
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/hooks/**'
cursor:
  description: React hooks usage and custom hook patterns
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
---

# React Hooks Rules

## Hook Integrity

- MUST follow the Rules of Hooks without exception.
- MUST keep dependencies complete and explicit.
- MUST avoid conditional hook calls.

---

## Effect Discipline

- MUST keep effects focused on side effects only.
- MUST clean up subscriptions, timers, and listeners.
- SHOULD avoid effects for derived state.
- SHOULD use refs to access mutable values without rerenders.

---

## Custom Hooks

- MUST name custom hooks with a use\* prefix.
- SHOULD keep hooks small and composable.
- SHOULD surface clear return types and behaviors.

---

## Related Rules

- `.rulesync/rules/stacks/react/overview.md`
- `.rulesync/rules/stacks/react/hooks.md`
- `.rulesync/rules/stacks/react/state.md`
