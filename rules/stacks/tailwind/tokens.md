---
targets:
  - '*'
root: false
description: Utility-first design tokens and theming
summary: Color, spacing, typography, and elevation tokens
stack: tailwind
globs:
  - '**/*.css'
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/*.vue'
cursor:
  description: Utility-first design tokens and theming
  globs:
    - '**/*.css'
    - '**/*.tsx'
    - '**/*.jsx'
---

# Tailwind Token Rules

## Token Usage

- MUST use design tokens for color, spacing, and typography.
- MUST avoid hard-coded one-off values.
- SHOULD define tokens for semantic intent, not raw values.

---

## Consistency

- SHOULD centralize tokens in a single theme config.
- SHOULD document token meaning and usage.

---

## Related Rules

- `.rulesync/rules/stacks/tailwind/overview.md`
- `.rulesync/rules/stacks/tailwind/tokens.md`
