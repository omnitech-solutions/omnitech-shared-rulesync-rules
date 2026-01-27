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

## Route Design

- MUST use resourceful routing conventions.
- MUST keep routes shallow and readable.
- SHOULD avoid deep nesting beyond one level.

---

## HTTP Semantics

- MUST align verbs with intent (GET, POST, PUT, PATCH, DELETE).
- SHOULD keep route names consistent and predictable.

---

## Versioning

- SHOULD version APIs when external consumers exist.
- MAY deprecate routes with clear timelines.

---

## Related Rules

- `.rulesync/rules/stacks/laravel/overview.md`
- `.rulesync/rules/stacks/laravel/routing.md`
