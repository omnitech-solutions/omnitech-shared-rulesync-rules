---
targets:
  - '*'
root: false
description: PHP core architecture and application contract
summary: Non-negotiable PHP standards, rule strength, and system-wide guarantees
stack: php
globs:
  - '**/*.php'
  - '**/composer.json'
---

# PHP Overview Rules

> **Authority Notice**
>
> This ruleset is governed by: `.rulesync/rules/stacks/php/non-negotiables.md`
>
> In the event of conflict, the non-negotiables take precedence.

This document defines the **baseline architectural contract** for PHP
applications. All other PHP rules **specialize or elaborate** on these
guarantees.

---

## Rule Strength

- **MUST** — Required. Violations block merge or release.
- **SHOULD** — Expected default. Deviations require justification.
- **MAY** — Optional guidance.

---

## Core Contract

- **PHP as a Systems Language (MUST)**  
  PHP is a general-purpose systems language, not a scripting layer.

- **Explicit Boundaries (MUST)**  
  Transport → Application → Domain → Infrastructure.

- **Replaceability (MUST)**  
  Domain and application logic must not depend on frameworks or global state.

- **Predictable Behavior (MUST)**  
  Types, errors, persistence, and side effects must be explicit and testable.

---

## Evolution & Quality

- **Additive Change (MUST)**  
  Public APIs evolve via additive change and deprecation only.

- **Consistency (MUST)**  
  Typing, error handling, and structure must be consistent across the codebase.

---

## Related Rules (Authoritative Index)

- `.rulesync/rules/stacks/php/non-negotiables.md`
- `.rulesync/rules/stacks/php/types.md`
- `.rulesync/rules/stacks/php/errors.md`
- `.rulesync/rules/stacks/php/structure.md`
- `.rulesync/rules/stacks/php/data-access.md`
- `.rulesync/rules/stacks/php/performance.md`
- `.rulesync/rules/stacks/php/testing.md`
