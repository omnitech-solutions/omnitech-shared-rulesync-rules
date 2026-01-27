---
targets:
  - '*'
root: false
description: React core principles and architecture
summary: Core React principles, component boundaries, and data flow
stack: react
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/components/**'
  - '**/app/**'
cursor:
  description: React core principles and architecture
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
---

# React Overview Rules

## Core Principles

- **Components as APIs:** Treat components like public APIs with stable props,
  predictable defaults, and clear responsibilities.
- **Unidirectional Data Flow:** Keep data flowing down via props and events
  flowing up via callbacks.
- **Colocate State:** Keep state closest to where it’s needed; lift only when
  coordination is required.
- **Type Safety:** Prefer TypeScript and precise prop types.
- **Composition First:** Compose small components rather than building large,
  monolithic ones.
- **Predictable Rendering:** Avoid hidden side effects in render; keep render
  pure and idempotent.

---

## Component Boundaries

- UI components render data; **containers** orchestrate data fetching,
  composition, and side effects.
- Keep business rules out of UI components; call domain/services instead.
- Prefer explicit prop names over “bag” props when behavior matters.

```tsx
// ✅ GOOD: Clear props and responsibilities
export function UserCard({
  user,
  onSelect,
}: {
  user: User;
  onSelect?: (user: User) => void;
}) {
  return (
    <button onClick={() => onSelect?.(user)}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </button>
  );
}
```

---

## Data & Side Effects

- Keep data fetching in hooks or containers.
- Treat effects as lifecycle transitions; clean up subscriptions.
- Prefer derived values (`useMemo`) over storing redundant state.

---

## File Organization (Suggested)

- `components/` — presentational components
- `features/` — feature-level composition
- `hooks/` — shared hooks
- `state/` — client state or stores
- `services/` — API clients, adapters

---

## Related Rules

- `.rulesync/rules/stacks/react/components.md`
- `.rulesync/rules/stacks/react/hooks.md`
- `.rulesync/rules/stacks/react/state.md`
- `.rulesync/rules/stacks/react/performance.md`
- `.rulesync/rules/stacks/react/testing.md`
- `.rulesync/rules/stacks/react/error-handling.md`
- `.rulesync/rules/stacks/react/accessibility.md`
- `.rulesync/rules/ui-ux.md`
- `.rulesync/rules/stacks/typescript/overview.md`
- `.rulesync/rules/stacks/typescript/types.md`
