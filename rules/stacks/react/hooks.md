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
- SHOULD avoid syncing props to state without a clear reason.
- SHOULD use refs to access mutable values without rerenders.

---

## Custom Hooks

- MUST name custom hooks with a use\* prefix.
- SHOULD keep hooks small and composable.
- SHOULD surface clear return types and behaviors.

---

## State and Derived Values

- SHOULD keep state as local as possible.
- SHOULD use `useReducer` when state transitions are complex.
- SHOULD derive values during render instead of storing them in state.

```tsx
// ✅ GOOD: Derived during render
const total = items.reduce((sum, item) => sum + item.price, 0);

// ❌ BAD: Derived state kept in sync via useEffect
const [total, setTotal] = useState(0);
useEffect(() => {
  setTotal(items.reduce((sum, item) => sum + item.price, 0));
}, [items]);
```

---

## Memoization Discipline

- SHOULD avoid `useMemo`/`useCallback` unless it prevents real work or renders.
- SHOULD memoize expensive computations or props passed to memoized children.

---

## Data Fetching Placement

- SHOULD colocate data fetching with the component that renders it.
- SHOULD pass identifiers/filters, not pre-processed results, unless needed for
  cross-component coordination.

---

## Related Rules

- `.rulesync/rules/stacks/react/overview.md`
- `.rulesync/rules/stacks/react/hooks.md`
- `.rulesync/rules/stacks/react/state.md`
