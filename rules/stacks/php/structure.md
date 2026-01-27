---
targets:
  - '*'
root: false
description: PHP structure and style
summary: Namespaces, file organization, and style
stack: php
globs:
  - '**/*.php'
cursor:
  description: PHP structure and style
  globs:
    - '**/*.php'
---

# PHP Structure Rules

## Organization

- One class per file.
- Namespaces mirror directory structure.
- Group methods: public → protected → private.
- Prefer `final` for classes not intended for extension.

---

## Style

- Follow PSR‑12 or repo‑defined style.
- Use constructor property promotion where it improves clarity.

---

## Documentation

- Add PHPDoc to public APIs for params, returns, and exceptions.
- Document invariants and business rules on domain objects.
