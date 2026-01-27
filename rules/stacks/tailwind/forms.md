---
targets:
  - '*'
root: false
description: Utility-first form styling guidance
summary: Form consistency, states, and accessibility
stack: tailwind
globs:
  - '**/*.css'
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/*.vue'
cursor:
  description: Utility-first form styling guidance
  globs:
    - '**/*.css'
    - '**/*.tsx'
    - '**/*.jsx'
---

# Utility-First Form Rules

## Form Consistency

- Keep input styling consistent across the application.
- Align spacing, sizing, and typography with design tokens.
- Use shared form primitives for common controls.

---

## Interaction States

- Provide clear focus, error, and disabled states.
- Ensure error styling is visible without relying on color alone.
- Keep hover and focus treatments subtle and consistent.

---

## Layout & Grouping

- Group related fields visually and semantically.
- Keep labels and helper text aligned for scannability.

---

## Related Rules

- `.rulesync/rules/ui-ux.md`
- `.rulesync/rules/stacks/tailwind/overview.md`
- `.rulesync/rules/stacks/tailwind/accessibility.md`
