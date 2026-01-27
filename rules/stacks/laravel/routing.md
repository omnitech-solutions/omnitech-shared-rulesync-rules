---
targets:
  - '*'
root: false
description: Laravel routing conventions
summary: Route structure, versioning, and middleware discipline
stack: laravel
globs:
  - '**/routes/**'
---

# Laravel Routing Rules

## Route Structure

- **MUST** define routes explicitly.
- **MUST** group routes by version or bounded context.
- **MUST** apply auth and policy middleware at the route boundary.

---

## REST Discipline

- **SHOULD** use RESTful resource routes for CRUD.
- **MUST NOT** overload routes with hidden behavior.

---

## Stability

- **MUST** treat public routes as API contracts.
- **MUST** version routes when making breaking changes.
