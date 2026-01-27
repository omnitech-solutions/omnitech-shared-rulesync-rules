---
targets:
  - '*'
root: false
description: React component patterns and composition
summary: Component APIs, composition, rendering patterns
stack: react
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/components/**'
  - '**/features/**'
cursor:
  description: React component patterns and composition
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
---

# React Component Rules

## Component API Design

- Prefer explicit props and defaults; avoid “catch‑all” props for core behavior.
- Keep prop names stable and intention‑revealing.
- Prefer `children` for composition over configuration props when possible.
- Expose minimal surface area; pass callbacks for actions, not state setters.

```tsx
export function Card({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card">
      {title ? <h2>{title}</h2> : null}
      <div>{children}</div>
    </section>
  );
}
```

---

## Controlled vs Uncontrolled

- Controlled components should accept `value` + `onChange`.
- Uncontrolled components should expose `defaultValue` and internal state.
- Avoid mixing both patterns in the same component unless clearly documented.

---

## Composition Patterns

- Compose features from smaller components rather than large “mega” components.
- Extract repeated UI patterns into shared primitives.
- Keep components focused on one responsibility.

```tsx
function UserCard({ user }: { user: User }) {
  return (
    <div className="card">
      <UserAvatar user={user} />
      <UserDetails user={user} />
      <UserActions user={user} />
    </div>
  );
}
```

---

## Rendering & Keys

- Use stable IDs for keys.
- Avoid index keys unless list is static and never reorders.

```tsx
{
  items.map(item => <Item key={item.id} item={item} />);
}
```

---

## Props vs State

- Prefer props for data passed from parents; use state for local UI state only.
- Avoid syncing props to state unless necessary (and document why).
- Keep derived values out of state; compute from props/state.

---

## Styling

- Keep styling concerns close to the component.
- Prefer design tokens and shared primitives over one-off class stacks.
- Avoid mixing layout and data concerns in the same component.

---

## Anti‑Patterns

- Components with multiple unrelated responsibilities.
- Implicit prop coupling (two props required but not enforced).
- Conditional rendering that hides business rules.
