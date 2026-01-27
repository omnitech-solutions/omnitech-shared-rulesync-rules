---
targets:
  - '*'
root: false
description: Laravel service provider patterns
summary: Bindings, routes, and migrations
stack: laravel
globs:
  - '**/app/Providers/**'
  - '**/providers/**'
cursor:
  description: Laravel service provider patterns
  globs:
    - '**/app/Providers/**'
---

# Laravel Provider Rules

## Service Providers

- Bind interfaces to implementations in providers.
- Register routes, migrations, and event listeners here.
- Keep provider boot logic lightweight.

```php
final class BillingServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(BillingRepository::class, EloquentBillingRepository::class);
    }
}
```
