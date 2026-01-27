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

## Semantics

- MUST use semantic HTML and ARIA only when needed.
- MUST provide accessible names for controls.

---

## Interaction

- MUST support keyboard interaction for all controls.
- SHOULD manage focus on route or modal changes.

---

## Related Rules

- `.rulesync/rules/stacks/react/overview.md`
- `.rulesync/rules/stacks/react/accessibility.md`
