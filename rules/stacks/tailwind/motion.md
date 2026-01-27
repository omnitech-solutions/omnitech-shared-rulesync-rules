---
targets:
  - '*'
root: false
description: Utility-first motion and transition guidance
summary: Animations, transitions, and reduced motion
stack: tailwind
globs:
  - '**/*.css'
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/*.vue'
cursor:
  description: Utility-first motion and transition guidance
  globs:
    - '**/*.css'
    - '**/*.tsx'
    - '**/*.jsx'
---

# Utility-First Motion Rules

## Motion Principles

- Use motion to clarify state changes, not to decorate.
- Keep animations short and purposeful.
- Avoid motion that competes with content or usability.

---

## Accessibility

- Respect reduced-motion preferences.
- Avoid large-scale motion on critical workflows.

---

## Consistency

- Use a small set of shared transition patterns.
- Keep durations and easing consistent across components.

---

## Related Rules

- `.rulesync/rules/ui-ux.md`
- `.rulesync/rules/stacks/tailwind/overview.md`
- `.rulesync/rules/stacks/tailwind/accessibility.md`
