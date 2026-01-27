---
targets:
  - '*'
root: false
description: Node.js HTTP and API boundary rules
summary: Validation, error mapping, and response contracts
stack: nodejs
globs:
  - '**/routes/**'
  - '**/controllers/**'
  - '**/*.js'
---

# Node.js HTTP API Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/nodejs/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Request Handling

- MUST validate inputs and headers at the edge.
- MUST enforce authentication and authorization per request.
- SHOULD support idempotency for write operations where feasible.

---

## Response Design

- MUST use consistent response envelopes and error shapes.
- MUST return correct HTTP status codes.
- SHOULD document pagination, filtering, and sorting behavior.

---

## Compatibility

- MUST avoid breaking changes without a migration plan.
- SHOULD version APIs when public consumers exist.

---

## Related Rules

- `.rulesync/rules/stacks/nodejs/overview.md`
- `.rulesync/rules/stacks/nodejs/http-api.md`
- `.rulesync/rules/stacks/nodejs/security.md`
