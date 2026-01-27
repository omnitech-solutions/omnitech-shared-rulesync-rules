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

# Utility-First Accessibility Rules

## Contrast & Visibility

- Maintain sufficient contrast for text, icons, and controls.
- Ensure focus styles are visible and consistent across components.
- Avoid relying on color alone to convey state.

---

## Interaction States

- Provide clear hover, active, and disabled states for controls.
- Ensure focus outlines are not removed without a replacement.

---

## Related Rules

- `.rulesync/rules/ui-ux.md`
- `.rulesync/rules/stacks/tailwind/overview.md`
