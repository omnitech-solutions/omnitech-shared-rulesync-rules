---
targets:
  - '*'
root: false
description: Laravel core conventions and architecture
summary: Laravel conventions, MVC, and DDD layering guidance
stack: laravel
globs:
  - '**/*.php'
  - '**/app/**'
  - '**/routes/**'
  - '**/config/**'
cursor:
  description: Laravel core conventions and architecture
  globs:
    - '**/*.php'
---

# Laravel Overview Rules

## Core Principles

- **MVC Conventions:** Keep controllers thin, models focused, views simple.
- **Layer Isolation:** Laravel concerns live in Infrastructure;
  domain/application remain framework‑agnostic.
- **Explicit Boundaries:** Controllers → Commands/Handlers → Domain.
- **Consistency:** Follow Laravel naming and folder conventions.

---

## Related Rules

- `.rulesync/rules/stacks/laravel/controllers.md`
- `.rulesync/rules/stacks/laravel/validation.md`
- `.rulesync/rules/stacks/laravel/eloquent.md`
- `.rulesync/rules/stacks/laravel/persistence.md`
- `.rulesync/rules/stacks/laravel/resources.md`
- `.rulesync/rules/stacks/laravel/providers.md`
- `.rulesync/rules/stacks/laravel/routing.md`
- `.rulesync/rules/stacks/laravel/jobs.md`
- `.rulesync/rules/stacks/laravel/testing.md`
- `.rulesync/rules/stacks/laravel/security.md`
