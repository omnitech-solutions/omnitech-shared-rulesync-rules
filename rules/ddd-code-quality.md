---
targets:
  - '*'
root: false
description: Domain-driven design code quality rules for layered services
globs:
  - '**/*'
cursor:
  description: DDD code quality rules for layered services
  globs:
    - '**/*'
---

# DDD Code Quality Rules

## Why this matters

- Make the correct architectural decision the easiest path by enforcing naming,
  structure, and purity.
- Keep behavior-rich domain code readable, testable, and language-idiomatic
  while still obeying DDD boundaries.
- Provide AI assistants with explicit heuristics for formatting, logging, and
  code smell detection.

## Core Principles

- **Ubiquitous language:** Use the same nouns/verbs in code, README glossaries,
  commands, events, and tests.
- **Layered architecture:** Domain contains behavior, Application orchestrates
  commands/queries, Infrastructure adapts to frameworks.
- **Behavior over data:** Prefer expressive methods over `setX()`; aggregates
  encapsulate rules and emit events.
- **Small focused methods:** Keep logic flat with early returns and clear helper
  extraction.

## Development Standards

- Always declare strict typing where the language allows
  (`declare(strict_types=1)` in PHP, using TypeScript strict mode).
- Replace primitives with value objects when a concept represents currency,
  identifiers, addresses, etc.
- Document public behavior when it exposes invariants or throws domain
  exceptions.
- Use specific domain exceptions instead of generic ones
  (`SubscriptionAlreadyActive`, `InvalidStateTransition`).
- Favor composition over inheritance; keep methods grouped public → protected →
  private.

## Framework-specific Guidelines

### PHP / Laravel

- Prefer modern language features supported by the codebase (e.g., readonly,
  enums, match) and typed properties.
- Keep controllers thin: convert request data to commands, call handlers, return
  resources.
- Validate input in command/DTO factories instead of form requests to keep
  controllers thin.
- Repositories in Infrastructure map domain aggregates ↔ ORM models (Eloquent)
  and publish domain events.
- Jobs delegate to application handlers; listeners translate events into
  jobs/resources.
- Service providers bind domain interfaces to infrastructure implementations,
  register routes, and load migrations.

### TypeScript / Node

- Use PascalCase for classes, camelCase for methods/properties, and explicit
  `interface`/`abstract class` for contracts.
- Keep domain lambdas pure; infrastructure code handles transport/responses.
- Structure barrels (`index.ts`) at package boundaries to prevent deep relative
  imports.

### Ruby / Rails

- Use snake_case for files/methods, keep domain modules framework-agnostic, and
  place behavior in service objects if needed.
- Jobs leverage ActiveJob/Sidekiq and delegate to handlers; controllers remain
  translators.

## Tooling & Automation

- Enforce rules through linting and static analysis (ESLint + Deptrac for
  TypeScript, PHPStan + PHP-CS-Fixer + Deptrac for PHP).
- Use architecture tooling (Deptrac, ESLint import rules) to block
  domain-to-infrastructure imports.

## Code Review Checklist

- **Domain** uses ubiquitous language, rejects framework imports, and exposes
  behavior-rich aggregates.
- **Application** handles commands/queries, invokes policies, returns domain
  objects/DTOs, and keeps transactions explicit.
- **Infrastructure** maps domain types to controllers/resources/jobs, never
  contains business rules, and uses repository implementations.
- **General** ensures commands vs queries remain explicit, domain events are
  past-tense, handler chaining is avoided, and error handling is expressive.
