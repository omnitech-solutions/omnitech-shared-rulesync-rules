---
targets:
  - '*'
root: false
description: Laravel Eloquent model patterns
summary: Model structure, casts, scopes, relationships
stack: laravel
globs:
  - '**/app/Models/**'
  - '**/app/**/Models/**'
cursor:
  description: Laravel Eloquent model patterns
  globs:
    - '**/app/Models/**'
---

# Laravel Eloquent Rules

## Model Structure

- Keep models focused on persistence concerns.
- Avoid business rules inside Eloquent models for DDD contexts.
- Use casts and accessors for data normalization.
- Use `$hidden`/`$visible` to control serialized output.

```php
final class User extends Model
{
    protected $fillable = ['name', 'email'];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
```

---

## Scopes & Queries

- Use query scopes for reusable filters.
- Prefer `with()` for eager loading to prevent N+1.
- Avoid `->all()` in high‑traffic paths; paginate or cursor where needed.

```php
public function scopeActive($query)
{
    return $query->where('active', true);
}
```
