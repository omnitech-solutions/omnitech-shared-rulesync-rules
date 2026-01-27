---
targets:
  - '*'
root: false
description: Rails security practices
summary: Strong params, CSRF, authn/z
stack: rails
globs:
  - '**/app/controllers/**'
  - '**/app/models/**'
  - '**/config/**'
cursor:
  description: Rails security practices
  globs:
    - '**/app/controllers/**'
---

# Rails Security Rules

## Input & Params

- Always use strong parameters for mass assignment.
- Validate and sanitize user input at boundaries.
- Prefer allowlists over denylists for params.

---

## Authentication & Authorization

- Enforce authorization checks in controllers or policies.
- Avoid leaking sensitive data in JSON responses.
- Protect admin actions with explicit checks.

---

## CSRF & Sessions

- Use CSRF protection for state‑changing requests.
- Secure cookies with appropriate flags.
- Rotate credentials and secrets regularly.
