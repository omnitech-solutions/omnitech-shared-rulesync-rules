---
targets:
  - '*'
root: false
description: Laravel validation patterns
summary: Boundary validation for MVC and DDD
stack: laravel
globs:
  - '**/app/Http/**'
  - '**/app/Application/**'
  - '**/app/Domain/**'
cursor:
  description: Laravel validation patterns
  globs:
    - '**/app/Http/**'
---

# Laravel Validation Rules

## Boundary Validation

- Validate input at the edge (controllers/requests).
- Construct commands from validated data.
- Keep domain/application free of framework types.
- Prefer reusable validation rules for shared shapes.

```php
$validated = $request->validate([
    'items' => ['required', 'array'],
    'items.*.item_id' => ['required', 'string'],
    'items.*.quantity' => ['required', 'integer', 'min:1'],
]);
```

---

## Form Requests (MVC)

- Use Form Requests for traditional MVC controllers.
- Keep Form Request rules small and reusable.
- Avoid business rules inside Form Requests for DDD contexts.

---

## Domain Validation

- Enforce invariants in domain entities/value objects.
- Use explicit exceptions for rule violations.
