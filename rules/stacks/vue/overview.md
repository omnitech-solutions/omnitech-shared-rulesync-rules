---
targets:
  - '*'
root: false
description: Vue core principles and architecture
summary: Component boundaries, data flow, and composable design
stack: vue
globs:
  - '**/*.vue'
  - '**/components/**'
  - '**/composables/**'
  - '**/stores/**'
cursor:
  description: Vue core principles and architecture
  globs:
    - '**/*.vue'
    - '**/components/**'
---

# Vue Overview Rules

## Core Principles

- **Component-First:** Build UI from small, focused components with clear
  responsibilities.
- **Explicit Data Flow:** Prefer props down and events up; keep side effects
  outside render.
- **Composable Logic:** Extract reusable behavior into composables with clear
  inputs and outputs.
- **Type Safety:** Keep component interfaces and shared models well-typed.
- **Separation of Concerns:** Keep presentation, state, and data access
  distinct.

---

## Application Boundaries

- Keep domain logic out of components; call services or stores instead.
- Avoid coupling components to routing or persistence details.
- Prefer feature-based composition over deep component hierarchies.

---

## Related Rules

- `.rulesync/rules/ui-ux.md`
- `.rulesync/rules/stacks/vue/components.md`
- `.rulesync/rules/stacks/vue/composables.md`
- `.rulesync/rules/stacks/vue/state.md`
- `.rulesync/rules/stacks/vue/routing.md`
- `.rulesync/rules/stacks/vue/data-fetching.md`
- `.rulesync/rules/stacks/vue/forms.md`
- `.rulesync/rules/stacks/vue/testing.md`
- `.rulesync/rules/stacks/vue/performance.md`
- `.rulesync/rules/stacks/vue/accessibility.md`
- `.rulesync/rules/stacks/typescript/overview.md`
- `.rulesync/rules/stacks/typescript/types.md`
