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

# Tailwind Motion Rules

## Motion Principles

- MUST respect prefers-reduced-motion.
- MUST keep motion purposeful and minimal.
- SHOULD avoid distracting or long-running animations.

---

## Performance

- MUST use transform/opacity for animations.
- SHOULD avoid layout-thrashing animations.

---

## Related Rules

- `.rulesync/rules/stacks/tailwind/overview.md`
- `.rulesync/rules/stacks/tailwind/motion.md`
- `.rulesync/rules/stacks/tailwind/performance.md`
