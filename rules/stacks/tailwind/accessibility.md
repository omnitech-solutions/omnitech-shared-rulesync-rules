---
targets:
  - '*'
root: false
description: Utility-first accessibility guidance
summary: Contrast, focus styles, and semantic structure
stack: tailwind
globs:
  - '**/*.css'
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/*.vue'
cursor:
  description: Utility-first accessibility guidance
  globs:
    - '**/*.css'
    - '**/*.tsx'
    - '**/*.jsx'
---

# Tailwind Accessibility Rules

## A11y Defaults

- MUST include focus-visible styles on interactive elements.
- MUST maintain sufficient color contrast.
- SHOULD use semantic markup alongside utility classes.

---

## States

- MUST style disabled and error states clearly.
- SHOULD avoid motion-only cues for status.

---

## Related Rules

- `.rulesync/rules/stacks/tailwind/overview.md`
- `.rulesync/rules/stacks/tailwind/accessibility.md`
