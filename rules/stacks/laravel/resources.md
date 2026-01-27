---
targets:
  - '*'
root: false
description: Laravel API resources and response shaping
summary: Resource classes, response DTOs
stack: laravel
globs:
  - '**/app/Http/Resources/**'
  - '**/resources/**'
cursor:
  description: Laravel API resources and response shaping
  globs:
    - '**/app/Http/Resources/**'
---

# Laravel Resources Rules

## API Resources

- Use Resource classes to shape JSON responses.
- Keep domain models out of HTTP responses.
- Avoid leaking internal fields; map explicit output shape.

```php
final class UserResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'email' => $this->email,
            'created_at' => $this->created_at,
        ];
    }
}
```
