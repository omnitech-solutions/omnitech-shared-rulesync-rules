---
targets:
  - '*'
root: false
description: React testing practices
summary: Component testing, hooks testing, and integration tests
stack: react
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/__tests__/**'
  - '**/*.test.*'
  - '**/*.spec.*'
cursor:
  description: React testing practices
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
---

# React Testing Rules

## Testing Principles

- Test observable behavior, not implementation details.
- Prefer user‑level interactions and assertions.
- Keep tests small and focused on one behavior.
- Cover critical accessibility states (labels, roles, focus).

```tsx
render(<UserCard user={user} />);
expect(screen.getByText(user.name)).toBeInTheDocument();
```

---

## Hooks Testing

- Test hooks via public APIs (components) when possible.
- If testing hooks directly, assert returned values and side effects.

---

## Integration Tests

- Cover critical flows that span multiple components.
- Mock external services at the boundary, not inside components.
- Assert error and empty states, not just happy paths.

---

## Test Data

- Use builders/factories for consistent test setup.
- Avoid brittle snapshots for complex UI; assert key text/roles instead.
- Prefer deterministic time/IDs for stable tests.
