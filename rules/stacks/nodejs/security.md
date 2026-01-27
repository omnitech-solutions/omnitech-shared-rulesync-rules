---
targets:
  - '*'
root: false
description: Node.js security and dependency hygiene
summary: Input safety, secrets, and supply-chain awareness
stack: nodejs
globs:
  - '**/*.js'
  - '**/*.mjs'
  - '**/server.js'
  - '**/app.js'
cursor:
  description: Node.js security and dependency hygiene
  globs:
    - '**/*.js'
    - '**/*.mjs'
---

# Node.js Security Rules

## Input & Output Safety

- Validate and normalize all external inputs before use.
- Encode output according to its context (HTML, JSON, logs, headers).
- Treat file paths and URLs as untrusted data.

---

## Secrets & Configuration

- Keep secrets out of source control and runtime logs.
- Fail fast if required secrets or keys are missing.
- Scope credentials to the minimum permissions required.

---

## Dependency Hygiene

- Keep dependencies current and remove unused packages.
- Review transitive dependencies for high-risk changes.
- Prefer maintained, well-audited libraries for security-sensitive tasks.

---

## Related Rules

- `.rulesync/rules/security.md`
- `.rulesync/rules/stacks/nodejs/overview.md`
