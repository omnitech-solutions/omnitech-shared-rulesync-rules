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

# Tailwind Component Rules

## Component Composition

- MUST build components from utility classes and tokens.
- SHOULD use consistent variant APIs for size and intent.
- SHOULD avoid duplication by extracting shared patterns.

---

## Variants and States

- MUST define hover, focus, active, and disabled states.
- SHOULD keep state styles consistent across components.

---

## Related Rules

- `.rulesync/rules/stacks/tailwind/overview.md`
- `.rulesync/rules/stacks/tailwind/components.md`
- `.rulesync/rules/stacks/tailwind/tokens.md`
