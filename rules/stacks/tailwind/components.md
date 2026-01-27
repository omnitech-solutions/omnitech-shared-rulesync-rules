---
targets:
  - '*'
root: false
description: Utility-first component composition
summary: Class extraction, variants, and shared primitives
stack: tailwind
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/*.vue'
cursor:
  description: Utility-first component composition
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
    - '**/*.vue'
---

# Utility-First Component Rules

## Composition & Extraction

- Extract repeated class stacks into shared components or utilities.
- Keep component variants explicit and limited.
- Prefer a small set of shared primitives over many similar one-off patterns.

---

## Class Readability

- Group classes by purpose (layout, spacing, typography, color).
- Avoid long chains of conditional classes; move logic into variants.
- Keep component styling close to the component definition.

---

## Consistency

- Use consistent naming for variant props and states.
- Align component styles with the design system tokens.

---

## Related Rules

- `.rulesync/rules/ui-ux.md`
- `.rulesync/rules/stacks/tailwind/overview.md`
- `.rulesync/rules/stacks/tailwind/tokens.md`
