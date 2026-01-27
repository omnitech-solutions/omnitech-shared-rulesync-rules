---
targets:
  - '*'
root: false
description: Node.js testing practices
summary: Async correctness and boundary testing
stack: nodejs
globs:
  - '**/test/**'
  - '**/__tests__/**'
---

# Node.js Testing Rules

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/nodejs/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Test Coverage

- MUST test domain logic and critical HTTP paths.
- SHOULD include integration tests for data stores and queues.

---

## Isolation

- MUST isolate tests from external services via mocks or fakes.
- SHOULD keep fixtures small and realistic.

---

## Related Rules

- `.rulesync/rules/stacks/nodejs/overview.md`
- `.rulesync/rules/stacks/nodejs/testing.md`
