---
targets:
  - '*'
root: false
description: PHP 8.x best practices and patterns
globs:
  - '**/*.php'
  - '**/composer.json'
cursor:
  description: PHP 8.x best practices and patterns
  globs:
    - '**/*.php'
---

# PHP Rules

## PHP Best Practices

- **Strict Types:** Use `declare(strict_types=1);` in new files
- **Type Hints:** Prefer scalar and return types; use union types when needed
- **PSR-12:** Follow PSR-12 formatting and naming conventions
- **Typed Properties:** Use typed properties and constructor property promotion
- **Composer:** Manage dependencies with Composer and autoloading
- **Exceptions:** Throw exceptions for error cases; avoid silent failures
- **Input Validation:** Validate and sanitize external input early
- **Prepared Queries:** Use prepared statements or ORM to avoid SQL injection
- **Immutability:** Prefer immutable value objects for domain data
- **Configuration:** Read config from environment variables
- **Testing:** Write PHPUnit tests for core logic
- **Docs & Analysis:** Add PHPDoc on public APIs and keep PHPStan clean

---

## Strict Types

```php
<?php

declare(strict_types=1);

namespace App\Services;

final class Slugger
{
    public function slugify(string $value): string
    {
        $value = trim(strtolower($value));
        $value = preg_replace('/[^a-z0-9]+/', '-', $value) ?? '';

        return trim($value, '-');
    }
}
```

---

## Type Safety

- Avoid `mixed` except at legacy or external boundaries
- Prefer specific return types over `void` when returning data
- Use array shapes when arrays are unavoidable
- Use enums for fixed domain concepts; prefer `match` over `switch`

```php
<?php

declare(strict_types=1);

enum Status: string
{
    case Draft = 'draft';
    case Active = 'active';
}

/**
 * @return array{status: Status, label: string}
 */
function describe(Status $status): array
{
    $label = match ($status) {
        Status::Draft => 'Draft',
        Status::Active => 'Active',
    };

    return ['status' => $status, 'label' => $label];
}
```

---

## Error Handling

```php
<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\JsonResponse;
use Throwable;

final class UserController
{
    public function __construct(private UserService $service)
    {
    }

    public function show(int $id): JsonResponse
    {
        try {
            $user = $this->service->find($id);

            return response()->json($user);
        } catch (Throwable $error) {
            report($error);

            return response()->json(['error' => 'Not found'], 404);
        }
    }
}
```

---

## Data Access

```php
<?php

declare(strict_types=1);

namespace App\Repositories;

use Illuminate\Support\Facades\DB;

final class UserRepository
{
    public function findByEmail(string $email): ?object
    {
        return DB::table('users')
            ->where('email', $email)
            ->first();
    }
}
```

---

## Structure & Style

- One class per file; namespaces mirror directory structure
- Prefer composition over inheritance
- Order methods: public → protected → private
- Use PHP CS Fixer and keep PHPStan clean
- Avoid magic methods (`__get`, `__call`) in domain code

```php
// Example PHP CS Fixer command (repo-specific config)
// ./vendor/bin/php-cs-fixer fix src --dry-run --diff
```

---

## Performance Notes

- Use generators for large result sets
- Prefer early returns to reduce nesting
- Use strict comparisons (`===`)

```php
/** @return \Generator<object> */
function streamUsers(): \Generator
{
    foreach (User::cursor() as $user) {
        yield $user;
    }
}
```
