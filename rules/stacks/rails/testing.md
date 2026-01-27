---
targets:
  - '*'
root: false
description: Rails testing practices
summary: Model, controller, and request specs
stack: rails
globs:
  - '**/spec/**'
  - '**/test/**'
  - '**/*.spec.rb'
  - '**/*_spec.rb'
cursor:
  description: Rails testing practices
  globs:
    - '**/spec/**'
---

# Rails Testing Rules

## Test Focus

- Test domain behavior in model specs.
- Test controllers/routes for request/response behavior.
- Use factories/builders for setup.
- Cover critical background jobs and service workflows.

---

## Request Specs

- Prefer request specs over controller specs for end‑to‑end behavior.
- Assert response status, shape, and side effects.
- Include auth/authorization paths in integration coverage.

---

## Test Data

- Use deterministic factories; avoid random data in CI.
