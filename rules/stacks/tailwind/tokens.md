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

# Utility-First Token Rules

## Token Discipline

- Use tokenized values for spacing, color, typography, and radii.
- Avoid ad-hoc values unless there is a documented design requirement.
- Keep tokens consistent across features and platforms.

---

## Theming & Variants

- Model themes as token sets, not custom component overrides.
- Prefer semantic tokens (e.g., "surface", "accent") over raw colors.
- Keep token changes backward-compatible to avoid UI churn.

---

## Related Rules

- `.rulesync/rules/ui-ux.md`
- `.rulesync/rules/stacks/tailwind/overview.md`
- `.rulesync/rules/stacks/tailwind/components.md`
