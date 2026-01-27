---
targets:
  - '*'
root: false
description: PHP core standards and conventions
summary: PHP principles, strict types, and structure
stack: php
globs:
  - '**/*.php'
  - '**/composer.json'
cursor:
  description: PHP core standards and conventions
  globs:
    - '**/*.php'
---

# PHP Overview Rules

## Core Principles

- Use `declare(strict_types=1);` in new files.
- Prefer explicit types and return values.
- Keep classes small and single‑purpose.
- Favor composition over inheritance.
- Use Composer autoloading and namespaces consistently.
- Keep framework concerns out of domain logic where possible.

---

## Related Rules

- `.rulesync/rules/stacks/php/types.md`
- `.rulesync/rules/stacks/php/errors.md`
- `.rulesync/rules/stacks/php/structure.md`
- `.rulesync/rules/stacks/php/data-access.md`
- `.rulesync/rules/stacks/php/testing.md`
- `.rulesync/rules/stacks/php/performance.md`
