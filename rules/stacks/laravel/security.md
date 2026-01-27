---
targets:
  - '*'
root: false
description: Laravel security practices
summary: Auth, policies, CSRF, validation
stack: laravel
globs:
  - '**/app/Http/**'
  - '**/config/**'
  - '**/routes/**'
cursor:
  description: Laravel security practices
  globs:
    - '**/app/Http/**'
---

# Laravel Security Rules

## Authentication & Authorization

- Use guards/policies for authorization.
- Apply auth middleware to protected routes.
- Check ownership/tenant boundaries explicitly.

---

## CSRF & Input

- Use CSRF protection for state‑changing requests.
- Validate and sanitize input at the boundary.
- Use signed URLs for sensitive links when appropriate.

---

## Sensitive Data

- Avoid leaking secrets in logs or responses.
- Use config/env for sensitive values.
