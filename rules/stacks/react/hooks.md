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

## Hook Basics

- Call hooks at the top level of components and custom hooks only.
- Keep render logic pure; move side effects to `useEffect`.
- Split effects by concern; avoid large “do everything” effects.
- Use `useRef` for mutable values that shouldn’t trigger re-renders.

```tsx
useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, [subscriptionKey]);
```

---

## useMemo / useCallback

- Use memoization only when it reduces measurable work or prevents expensive
  re-renders.
- Avoid memoizing trivial computations or values.

```tsx
const sorted = useMemo(() => sortUsers(users), [users]);
const onSelect = useCallback(() => selectUser(userId), [userId, selectUser]);
```

---

## Custom Hooks

- Custom hooks should encapsulate a single concern and return a clear API.
- Prefer returning stable objects for consumers.
- Avoid leaking implementation details through the hook API.
- Keep hook names intention‑revealing (`useUser`, `useAuth`, `useFeatureFlags`).

```tsx
export function useUser(userId: string) {
  const query = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });
  return {
    user: query.data,
    isLoading: query.isLoading,
    error: query.error,
  };
}
```

---

## Effects & Dependencies

- Depend on values used inside effects; avoid suppressing lint rules without
  justification.
- If a dependency changes often, extract logic to a callback or custom hook.
- Avoid stale closures by including dependencies or using refs intentionally.

---

## Async Patterns

- Cancel or ignore stale requests on unmount.
- Prefer abort signals when supported.

```tsx
useEffect(() => {
  const controller = new AbortController();
  fetchData({ signal: controller.signal });
  return () => controller.abort();
}, [queryKey]);
```

---

## Event Handlers

- Prefer stable callbacks for handlers passed to child components.
- Keep handler logic small and delegate to helpers for complex work.
