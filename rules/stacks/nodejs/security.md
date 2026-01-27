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

> Authority Notice
>
> This stack is governed by `.rulesync/rules/stacks/nodejs/non-negotiables.md`.
> If any rule here conflicts with a non-negotiable, the non-negotiable wins.

## Input and Output

- MUST validate all external input.
- MUST sanitize outputs that render in HTML contexts.
- SHOULD encode data when embedding in templates.

---

## Auth and Secrets

- MUST enforce authentication/authorization per request.
- MUST keep secrets out of repo and logs.

---

## Related Rules

- `.rulesync/rules/stacks/nodejs/overview.md`
- `.rulesync/rules/stacks/nodejs/security.md`
