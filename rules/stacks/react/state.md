---
targets:
  - '*'
root: false
description: React state management patterns
summary: Server state, client state, derived state
stack: react
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/state/**'
  - '**/stores/**'
cursor:
  description: React state management patterns
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
---

# React State Rules

## State Placement

- Keep state local unless multiple components need it.
- Lift state only when coordination is required.
- Prefer derived values over duplicating data in state.

---

## Server State

- Treat server state as external: use caching, invalidation, and retries.
- Centralize API calls in services or hooks.
- Normalize data where multiple views depend on shared entities.
- Prefer optimistic updates only when rollback is well-defined.

```tsx
const usersQuery = useQuery({ queryKey: ['users'], queryFn: fetchUsers });
```

---

## Client State

- Use context for app-wide UI state (theme, auth, locale).
- Keep UI-only state near the component that renders it.
- Use URL/search params for shareable state (filters, pagination).

```tsx
const ThemeContext = createContext({ theme: 'light', toggle: () => {} });
```

---

## State Transitions

- Use explicit actions for complex state machines.
- Prefer reducers when updates are interdependent.

```tsx
type Action = { type: 'open' } | { type: 'close' };
function reducer(state: State, action: Action): State {
  if (action.type === 'open') return { ...state, isOpen: true };
  return { ...state, isOpen: false };
}
```

---

## Anti‑Patterns

- Duplicating server data into local state without a cache policy.
- State that mixes UI concerns with business rules.
- Global state for values only used in one component.
