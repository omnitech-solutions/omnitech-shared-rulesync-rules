---
targets:
  - '*'
root: false
description: Vue form architecture and validation
summary: Form state, validation boundaries, and submission flows
stack: vue
globs:
  - '**/*.vue'
  - '**/components/**'
cursor:
  description: Vue form architecture and validation
  globs:
    - '**/*.vue'
    - '**/components/**'
---

# Vue Form Rules

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

- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/forms.md`
- `.rulesync/rules/stacks/vue/accessibility.md`
