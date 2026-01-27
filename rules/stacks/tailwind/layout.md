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

# Utility-First Layout Rules

## Layout Structure

- Favor layout primitives (flex, grid, stack) over bespoke positioning.
- Keep spacing aligned to the shared scale for rhythm and consistency.
- Avoid deeply nested layout wrappers when simpler structures work.

---

## Responsive Design

- Design mobile-first and scale up progressively.
- Keep breakpoint usage consistent across features.
- Avoid layout shifts by reserving space for dynamic content.

---

## Related Rules

- `.rulesync/rules/ui-ux.md`
- `.rulesync/rules/stacks/tailwind/overview.md`
