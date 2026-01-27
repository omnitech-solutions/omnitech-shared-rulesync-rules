---
targets:
  - '*'
root: false
description: React accessibility rules
summary: Semantic HTML, keyboard navigation, ARIA usage
stack: react
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/components/**'
cursor:
  description: React accessibility rules
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
---

# React Accessibility Rules

## Semantic HTML

- Prefer semantic elements (`button`, `nav`, `main`) over generic `div`s.
- Use proper label associations for form fields.

```tsx
<label htmlFor="email">Email</label>
<input id="email" name="email" type="email" />
```

---

## Keyboard Support

- Ensure all interactive elements are reachable and operable via keyboard.
- Preserve focus order and provide visible focus states.

---

## ARIA Usage

- Use ARIA only when semantic HTML is insufficient.
- Keep ARIA attributes in sync with component state.

```tsx
<button aria-expanded={isOpen} aria-controls="menu">
  Menu
</button>
```
