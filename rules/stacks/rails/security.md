---
targets:
  - '*'
root: false
description: Rails testing strategy
summary: Deterministic, boundary-focused tests
stack: rails
globs:
  - '**/spec/**'
cursor:
  description: Rails testing strategy
  globs:
    - '**/spec/**'
---

# Rails Testing Rules

- **MUST** test services and workflows explicitly.
- **MUST** cover failure paths.
- **MUST** keep tests deterministic and isolated.
