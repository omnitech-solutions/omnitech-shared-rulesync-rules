---
targets:
  - '*'
root: false
description: Laravel security practices
summary: Authentication, authorization, and exposure control
stack: laravel
globs:
  - '**/app/Http/**'
---

# Laravel Security Rules

## Authorization

- **MUST** enforce authorization explicitly.
- **MUST** check ownership and tenancy.
- **MUST NOT** rely on implicit access.

---

## Input & Secrets

- **MUST** validate all input.
- **MUST** keep secrets out of code and logs.
