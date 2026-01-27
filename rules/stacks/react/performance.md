---
targets:
  - '*'
root: false
description: React performance optimization guidelines
summary: Rendering, memoization, code splitting, virtualization
stack: react
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/components/**'
cursor:
  description: React performance optimization guidelines
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
---

# React Performance Rules

## Rendering Efficiency

- Keep renders cheap; avoid heavy work in render.
- Move expensive calculations to memoized selectors or precomputed data.
- Split large components into smaller ones to limit re-render scope.

---

## Memoization

- Use `React.memo` for components with stable props and expensive renders.
- Use `useMemo`/`useCallback` when it prevents measurable re-renders.
- Avoid premature memoization; validate with profiling.

---

## Lists & Virtualization

- Virtualize long lists to avoid rendering hundreds of DOM nodes.
- Use stable keys and avoid re-sorting in render.
- Paginate or window data from the server when possible.

---

## Code Splitting

- Split feature routes and heavy components.
- Provide meaningful loading states during lazy load.

```tsx
const Settings = React.lazy(() => import('./Settings'));
```

---

## Re-render Control

- Avoid prop drilling through many layers; use context or composition.
- Keep derived props stable to reduce churn.
- Co-locate state with the component that renders it.
