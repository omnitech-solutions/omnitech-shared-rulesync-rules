---
targets:
  - '*'
root: false
description: Laravel routing conventions
summary: RESTful routes, grouping, versioning
stack: laravel
globs:
  - '**/routes/**'
  - '**/routes/*.php'
cursor:
  description: Laravel routing conventions
  globs:
    - '**/routes/**'
---

# Laravel Routing Rules

## RESTful Routes

- Use resource routes for standard CRUD.
- Group by version or context via route groups.
- Apply auth/role middleware at route group level.

```php
Route::prefix('api/v1')->group(function () {
    Route::apiResource('users', UserController::class);
});
```
