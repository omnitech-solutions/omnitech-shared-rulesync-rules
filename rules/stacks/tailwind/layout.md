---
targets:
  - '*'
root: false
description: Utility-first layout and responsive patterns
summary: Layout primitives, spacing scale, and responsive structure
stack: tailwind
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/*.vue'
  - '**/*.css'
cursor:
  description: Utility-first layout and responsive patterns
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
    - '**/*.vue'
---

# Tailwind Layout Rules

## Layout System

- MUST use consistent spacing and layout primitives.
- MUST prefer flex/grid utilities over custom CSS.
- SHOULD keep layout responsive by default.

---

## Responsiveness

- MUST design for mobile-first breakpoints.
- SHOULD avoid fixed widths when fluid layouts work.

---

## Composition

- SHOULD build layout utilities into reusable components.

---

## Related Rules

- `.rulesync/rules/stacks/tailwind/overview.md`
- `.rulesync/rules/stacks/tailwind/layout.md`
- `.rulesync/rules/stacks/tailwind/tokens.md`
