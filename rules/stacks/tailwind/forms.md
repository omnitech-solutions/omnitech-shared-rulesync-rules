---
targets:
  - '*'
root: false
description: Utility-first form styling guidance
summary: Form consistency, states, and accessibility
stack: tailwind
globs:
  - '**/*.css'
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/*.vue'
cursor:
  description: Utility-first form styling guidance
  globs:
    - '**/*.css'
    - '**/*.tsx'
    - '**/*.jsx'
---

# Tailwind Form Rules

## Form Architecture

- MUST validate inputs before submission.
- MUST provide clear error messages near inputs.
- SHOULD keep form state centralized per form.

---

## UX and Accessibility

- MUST associate labels with inputs.
- MUST support keyboard submission and focus states.
- SHOULD disable submit while processing.

---

## Security

- MUST protect against injection via validation and encoding.
- SHOULD prevent double submits with idempotency or locks.

---

## Related Rules

- `.rulesync/rules/stacks/tailwind/overview.md`
- `.rulesync/rules/stacks/tailwind/forms.md`
- `.rulesync/rules/stacks/tailwind/accessibility.md`
