---
targets:
  - '*'
root: false
description: PHP performance considerations
summary: Memory, generators, and IO boundaries
stack: php
globs:
  - '**/*.php'
cursor:
  description: PHP performance considerations
  globs:
    - '**/*.php'
---

# PHP Performance Rules

## Performance Principles

- Stream large datasets with generators.
- Avoid unnecessary object allocations in hot paths.
- Cache expensive computations at appropriate boundaries.
- Prefer early returns to reduce branching and nesting.

```php
/** @return \Generator<object> */
function streamUsers(): \Generator
{
    foreach (User::cursor() as $user) {
        yield $user;
    }
}
```
