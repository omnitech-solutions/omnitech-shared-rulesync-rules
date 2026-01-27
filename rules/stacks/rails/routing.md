---
targets:
  - '*'
root: false
description: Rails routing conventions
summary: RESTful routes and public API contracts
stack: rails
globs:
  - '**/config/routes.rb'
cursor:
  description: Rails routing conventions
  globs:
    - '**/config/routes.rb'
---

# Rails Routing Rules

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

- `.rulesync/rules/stacks/rails/overview.md`
- `.rulesync/rules/stacks/rails/routing.md`
