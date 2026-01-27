---
targets:
  - '*'
root: false
description: PHP typing and language features
summary: Types, enums, union types, and value objects
stack: php
globs:
  - '**/*.php'
cursor:
  description: PHP typing and language features
  globs:
    - '**/*.php'
---

# PHP Type Rules

## Type Safety

- Prefer scalar and return types for all methods.
- Avoid `mixed` except at boundaries.
- Use value objects for domain concepts.
- Use `readonly` properties when mutation is not required.

---

## Enums & Match

- Use enums for fixed domain concepts.
- Prefer `match` for exhaustive value handling.

```php
enum Status: string { case Draft = 'draft'; case Active = 'active'; }

$label = match ($status) {
    Status::Draft => 'Draft',
    Status::Active => 'Active',
};
```

---

## Arrays

- Prefer typed collections to raw arrays.
- Use array shapes when arrays are unavoidable.
- Add PHPDoc generics for collections where helpful.

```php
/** @param array{item_id: string, quantity: int} $item */
function addItem(array $item): void {}
```
