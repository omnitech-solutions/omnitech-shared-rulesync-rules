---
targets:
  - '*'
root: false
description: Node.js non-negotiable architectural constraints
summary: Absolute rules that define acceptable Node.js architecture
stack: nodejs
globs:
  - '**/*.js'
  - '**/*.mjs'
  - '**/src/**'
  - '**/server.js'
  - '**/app.js'
---

# Node.js Non-Negotiables

## Absolute Requirements

- MUST validate all external inputs.
- MUST enforce authorization for protected actions.
- MUST keep business logic out of transport layers.
- MUST keep errors structured and user-safe.
- MUST log and monitor critical flows.

---

## Operational Safety

- MUST handle timeouts and retries explicitly.
- MUST prevent unbounded concurrency.
- MUST use explicit configuration and secret management.

---

## Change Control

- MUST avoid breaking API changes without a migration plan.
- MUST document behavioral changes and deprecations.

---

## Related Rules

- `.rulesync/rules/stacks/nodejs/overview.md`
- `.rulesync/rules/stacks/nodejs/non-negotiables.md`
