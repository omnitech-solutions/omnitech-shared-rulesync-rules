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

# Tailwind Performance Rules

## CSS Output

- MUST use purge/content config to minimize CSS size.
- SHOULD avoid arbitrary values that prevent reuse.

---

## Runtime Performance

- SHOULD avoid excessive DOM depth in styled components.
- SHOULD prefer static class lists over dynamic string building.

---

## Related Rules

- `.rulesync/rules/stacks/tailwind/overview.md`
- `.rulesync/rules/stacks/tailwind/performance.md`
