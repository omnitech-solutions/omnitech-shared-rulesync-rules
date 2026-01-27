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

## Routes

- **MUST** use RESTful resource routes.
- **MUST** keep nesting shallow.
- **MUST** treat routes as public contracts.
