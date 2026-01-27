---
targets:
  - '*'
root: false
description: PHP error handling conventions
summary: Exceptions, domain errors, and boundaries
stack: php
globs:
  - '**/*.php'
cursor:
  description: PHP error handling conventions
  globs:
    - '**/*.php'
---

# PHP Error Handling Rules

## Exceptions

- Use specific exception types for domain errors.
- Provide actionable messages and context.
- Avoid swallowing exceptions without logging/handling.
- Avoid sentinel return values (`false`, `null`) for error cases.

```php
final class OfferingNotFound extends DomainException
{
    public static function withExternalId(string $id): self
    {
        return new self("Offering not found: {$id}");
    }
}
```

---

## Boundaries

- Translate technical exceptions into domain errors at boundaries.
- Keep domain code free of framework exceptions.
