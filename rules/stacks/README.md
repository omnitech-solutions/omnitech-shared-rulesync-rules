---
targets:
  - '*'
root: true
description: Stack rules index and suggested subsets
summary: Index of stack-specific rule modules and task-focused subsets
---

# Stack Rules Index

This directory contains stack-specific rules. Use the smallest relevant subset
for the task at hand to keep context focused.

## How to Use Stack Rules

- **Start with the stack overview** for the language/framework in play.
- **Layer in only what you need** (components, data access, testing, security)
  based on the change.
- **Honor non-negotiables first** when a stack defines them; they override all
  other guidance.
- **Prefer task-based subsets** below when you're unsure where to start.

### Task-Based Subsets (Recommended)

Use these as minimum entry points and expand as needed:

- **Feature (UI):** React/Vue Overview + Components + State/Composables +
  Testing + Accessibility
- **Feature (API):** Node/Rails/Laravel Overview + HTTP/API + Data Access +
  Security + Testing
- **GraphQL Change:** GraphQL Overview + Schema + Resolvers + Operations + Error
  Handling + Testing
- **Performance Work:** Relevant Stack Overview + Performance + Data Access (if
  applicable)
- **Security Work:** Relevant Stack Overview + Security (+ Non-Negotiables)

### Common Stack Combinations

- **React + TypeScript + Tailwind** for frontend apps
- **Vue + TypeScript + Tailwind** for SPAs and internal tools
- **Node.js + TypeScript + GraphQL** for service APIs
- **Rails + GraphQL** for monolith services with federation
- **Laravel + Vue** for PHP-backed admin or CMS apps

## React

**Core**

- `rules/stacks/react/overview.md`
- `rules/stacks/react/components.md`

**State & Effects**

- `rules/stacks/react/hooks.md`
- `rules/stacks/react/state.md`

**Quality**

- `rules/stacks/react/performance.md`
- `rules/stacks/react/testing.md`
- `rules/stacks/react/error-handling.md`
- `rules/stacks/react/accessibility.md`

## Rails

**Core**

- `rules/stacks/rails/overview.md`
- `rules/stacks/rails/non-negotiables.md`
- `rules/stacks/rails/controllers.md`
- `rules/stacks/rails/models.md`

**Data & Workflows**

- `rules/stacks/rails/services.md`
- `rules/stacks/rails/persistence.md`
- `rules/stacks/rails/routing.md`
- `rules/stacks/rails/jobs.md`

**Quality & Security**

- `rules/stacks/rails/testing.md`
- `rules/stacks/rails/security.md`

## Laravel

**Core**

- `rules/stacks/laravel/overview.md`
- `rules/stacks/laravel/non-negotiables.md`
- `rules/stacks/laravel/controllers.md`
- `rules/stacks/laravel/validation.md`

**Data & Infrastructure**

- `rules/stacks/laravel/eloquent.md`
- `rules/stacks/laravel/persistence.md`
- `rules/stacks/laravel/resources.md`
- `rules/stacks/laravel/providers.md`
- `rules/stacks/laravel/routing.md`
- `rules/stacks/laravel/jobs.md`

**Quality & Security**

- `rules/stacks/laravel/testing.md`
- `rules/stacks/laravel/security.md`

## PHP

**Core**

- `rules/stacks/php/overview.md`
- `rules/stacks/php/non-negotiables.md`
- `rules/stacks/php/types.md`
- `rules/stacks/php/structure.md`

**Reliability & Performance**

- `rules/stacks/php/errors.md`
- `rules/stacks/php/data-access.md`
- `rules/stacks/php/testing.md`
- `rules/stacks/php/performance.md`

## Node.js

**Core**

- `rules/stacks/nodejs/overview.md`
- `rules/stacks/nodejs/non-negotiables.md`
- `rules/stacks/nodejs/runtime.md`
- `rules/stacks/nodejs/http-api.md`
- `rules/stacks/nodejs/data-access.md`
- `rules/stacks/nodejs/jobs.md`
- `rules/stacks/nodejs/operations.md`

**Quality & Safety**

- `rules/stacks/nodejs/testing.md`
- `rules/stacks/nodejs/performance.md`
- `rules/stacks/nodejs/security.md`

## Vue

**Core**

- `rules/stacks/vue/overview.md`
- `rules/stacks/vue/components.md`
- `rules/stacks/vue/composables.md`
- `rules/stacks/vue/state.md`
- `rules/stacks/vue/routing.md`
- `rules/stacks/vue/data-fetching.md`
- `rules/stacks/vue/forms.md`
- `rules/stacks/vue/error-handling.md`

**Quality & UX**

- `rules/stacks/vue/testing.md`
- `rules/stacks/vue/performance.md`
- `rules/stacks/vue/accessibility.md`

## GraphQL

**Core**

- `rules/stacks/graphql/overview.md`
- `rules/stacks/graphql/schema.md`
- `rules/stacks/graphql/resolvers.md`
- `rules/stacks/graphql/data-access.md`
- `rules/stacks/graphql/operations.md`
- `rules/stacks/graphql/error-handling.md`
- `rules/stacks/graphql/error-codes.md`
- `rules/stacks/graphql/pagination.md`
- `rules/stacks/graphql/governance.md`

**Quality & Safety**

- `rules/stacks/graphql/testing.md`
- `rules/stacks/graphql/performance.md`
- `rules/stacks/graphql/security.md`

## Tailwind

**Core**

- `rules/stacks/tailwind/overview.md`
- `rules/stacks/tailwind/components.md`
- `rules/stacks/tailwind/layout.md`
- `rules/stacks/tailwind/tokens.md`
- `rules/stacks/tailwind/forms.md`
- `rules/stacks/tailwind/motion.md`

**Quality & UX**

- `rules/stacks/tailwind/performance.md`
- `rules/stacks/tailwind/accessibility.md`

## TypeScript

**Core**

- `rules/stacks/typescript/overview.md`
- `rules/stacks/typescript/types.md`
- `rules/stacks/typescript/api-boundaries.md`
- `rules/stacks/typescript/runtime-validation.md`
- `rules/stacks/typescript/error-handling.md`
- `rules/stacks/typescript/configuration.md`

**Quality**

- `rules/stacks/typescript/testing.md`
- `rules/stacks/typescript/performance.md`
