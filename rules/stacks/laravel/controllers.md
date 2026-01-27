---
targets:
  - '*'
root: false
description: Laravel controller patterns
summary: Thin controllers, command mapping, response shaping
stack: laravel
globs:
  - '**/app/Http/Controllers/**'
  - '**/controllers/**'
cursor:
  description: Laravel controller patterns
  globs:
    - '**/app/Http/Controllers/**'
---

# Laravel Controller Rules

## Responsibilities

- Validate input at the boundary.
- Map requests to commands/handlers.
- Return resources or DTOs, not domain internals.
- Keep controller actions short and intention‑revealing.

```php
final class ActivateUserController extends Controller
{
    public function __construct(private ActivateUserHandler $handler)
    {
    }

    public function __invoke(Request $request, string $userId): JsonResponse
    {
        $validated = $request->validate(['reason' => ['required', 'string']]);
        $result = $this->handler->handle(ActivateUserCommand::fromArray($userId, $validated));

        return UserResource::make($result)->response();
    }
}
```

---

## Anti‑Patterns

- Business rules in controllers.
- Transactions in controllers (use handlers/services).
- Returning Eloquent models directly from controllers.
