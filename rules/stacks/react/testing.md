---
targets:
  - '*'
root: false
description: React testing practices
summary: Component testing, hooks testing, and integration tests
stack: react
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/__tests__/**'
  - '**/*.test.*'
  - '**/*.spec.*'
cursor:
  description: React testing practices
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
---

# React Testing Rules

## Component Tests

- MUST test behavior via user interactions.
- MUST avoid testing implementation details.
- SHOULD use accessibility queries for elements.

---

## Integration

- SHOULD test feature flows across multiple components.
- SHOULD mock network boundaries, not internal modules.

---

## Related Rules

- `.rulesync/rules/stacks/react/overview.md`
- `.rulesync/rules/stacks/react/testing.md`
