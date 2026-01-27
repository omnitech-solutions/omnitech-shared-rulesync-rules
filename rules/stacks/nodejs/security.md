---
targets:
  - '*'
root: false
description: Node.js security rules
summary: Input safety, secrets, and dependencies
stack: nodejs
globs:
  - '**/*.js'
---

# Node.js Security Rules

## Input Safety

- **MUST** validate and sanitize all inputs.
- **MUST** encode output appropriately.

---

## Secrets

- **MUST** keep secrets out of code and logs.
- **MUST** fail fast on missing secrets.

---

## Dependencies

- **MUST** remove unused dependencies.
- **SHOULD** monitor transitive risk.
