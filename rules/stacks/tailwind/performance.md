---
targets:
  - '*'
root: false
description: Utility-first CSS performance guidance
summary: Class hygiene, build output, and rendering efficiency
stack: tailwind
globs:
  - '**/*.css'
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/*.vue'
cursor:
  description: Utility-first CSS performance guidance
  globs:
    - '**/*.css'
    - '**/*.tsx'
    - '**/*.jsx'
---

# Utility-First Performance Rules

## CSS Output Size

- Keep utility usage consistent to reduce redundant class combinations.
- Avoid generating large numbers of one-off utilities.
- Prefer shared component primitives to reduce duplicated class stacks.

---

## Rendering Efficiency

- Avoid excessive box shadows, filters, or large blur effects in lists.
- Keep hover and focus effects simple on large collections.
- Minimize layout thrash by limiting dynamic size changes.

---

## Related Rules

- `.rulesync/rules/performance.md`
- `.rulesync/rules/stacks/tailwind/overview.md`
