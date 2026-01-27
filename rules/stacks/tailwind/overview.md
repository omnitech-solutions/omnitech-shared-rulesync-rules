---
targets:
  - '*'
root: false
description: Utility-first CSS principles and consistency
summary: Composition, tokens, and design system alignment
stack: tailwind
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/*.vue'
  - '**/*.css'
cursor:
  description: Utility-first CSS principles and consistency
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
    - '**/*.vue'
---

# Utility-First CSS Overview Rules

## Core Principles

- **Utilities Over One-Off CSS:** Prefer shared utility classes to avoid
  duplicate bespoke styles.
- **Composition First:** Build interfaces by composing small, reusable class
  patterns.
- **Token Consistency:** Keep spacing, color, and typography aligned to design
  tokens.
- **Readable Class Stacks:** Keep class lists short and intention-revealing.

---

## System Boundaries

- Centralize visual decisions in tokens and shared primitives.
- Avoid mixing utility classes with ad-hoc custom CSS without a clear reason.
- Treat component classes as part of the component API.

---

## Related Rules

- `.rulesync/rules/ui-ux.md`
- `.rulesync/rules/stacks/tailwind/components.md`
- `.rulesync/rules/stacks/tailwind/layout.md`
- `.rulesync/rules/stacks/tailwind/tokens.md`
- `.rulesync/rules/stacks/tailwind/forms.md`
- `.rulesync/rules/stacks/tailwind/motion.md`
- `.rulesync/rules/stacks/tailwind/performance.md`
- `.rulesync/rules/stacks/tailwind/accessibility.md`
