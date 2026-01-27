---
targets:
  - '*'
root: false
description: React error handling patterns
summary: Error boundaries and resilient UI
stack: react
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/components/**'
cursor:
  description: React error handling patterns
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
---

# React Error Handling Rules

## Error Boundaries

- Use error boundaries around feature areas and routes.
- Provide user‑friendly fallbacks and recovery actions.

```tsx
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
```

---

## Error Surface

- Bubble errors to user‑visible areas with context.
- Avoid swallowing errors silently.
- Log errors at boundaries with correlation context.
