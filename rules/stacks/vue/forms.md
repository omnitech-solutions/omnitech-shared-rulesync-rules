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

## Form State

- Keep form state localized to the form component.
- Separate display formatting from stored values.
- Reset form state explicitly on success or navigation changes.

---

## Validation

- Validate at the boundary before submitting.
- Show validation errors near the relevant fields.
- Avoid relying on server errors for client-side validation.

---

## Submission Flow

- Disable or guard against double submissions.
- Provide clear pending and success states.
- Handle partial failures without losing user input.

---

## Related Rules

- `.rulesync/rules/ui-ux.md`
- `.rulesync/rules/stacks/vue/overview.md`
- `.rulesync/rules/stacks/vue/state.md`
