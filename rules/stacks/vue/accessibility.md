---
targets:
  - '*'
root: false
description: Vue accessibility guidance
summary: Semantics, focus management, and UI affordances
stack: vue
globs:
  - '**/*.vue'
  - '**/components/**'
cursor:
  description: Vue accessibility guidance
  globs:
    - '**/*.vue'
    - '**/components/**'
---

# Vue Accessibility Rules

## Semantics & Structure

- Use semantic HTML elements before adding ARIA roles.
- Ensure labels, hints, and error messages are programmatically associated.
- Keep heading and landmark structure logical and consistent.

---

## Focus & Interaction

- Ensure all interactive elements are keyboard accessible.
- Provide visible focus states and logical tab order.
- Manage focus on navigation, dialogs, and dynamic content updates.

---

## Visual Accessibility

- Maintain sufficient color contrast for text and UI controls.
- Avoid conveying meaning with color alone.

---

## Related Rules

- `.rulesync/rules/ui-ux.md`
- `.rulesync/rules/stacks/vue/components.md`
