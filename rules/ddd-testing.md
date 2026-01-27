---
targets:
  - '*'
root: false
description: Domain-driven design testing rules for layered services
globs:
  - '**/*'
cursor:
  description: Domain-driven design testing rules for layered services
  globs:
    - '**/*'
---

# DDD Testing Rules

## Goals

- Fast, deterministic feedback that tells a story about real business rules, not
  framework behavior.
- Ensure each layer proves the right thing: Domain invariants, Application
  orchestration, Infrastructure contracts.
- Keep OAuth or external integration tests offline by fully faking providers and
  signing tokens locally.

## Test Pyramid

- **Unit (Domain):** Pure business logic (aggregates, VOs, policies, services);
  no frameworks or databases.
- **Integration/Application:** Handlers, repositories, and policies working
  together via in-memory or fake infrastructure.
- **Feature/E2E:** HTTP controllers, persistence, jobs, and event work flows;
  asserts response shapes and side effects.

## Domain Unit Tests

- Test aggregate invariants, event emission, and value-object validation.
- Use builders (`SubscriptionBuilder`, `EmailAddressBuilder`) to assemble valid
  state quickly.
- Keep time deterministic by injecting clocks or freezing time
  (`Carbon::setTestNow`, `Clock` fixtures).
- Assert business outcomes (status transitions, domain events) rather than
  internals.

## Application Handler Tests

- Instantiate handlers with fake/in-memory repositories and stub policies.
- Validate that commands produce the expected domain operations, transactions,
  and repository interactions.
- Keep assertions focused on behavior: `handler.handle(command)` should trigger
  aggregate methods and repository saves.

## Feature & Integration Tests

- Drive HTTP endpoints through controllers or routes using framework test
  clients.
- Fake queues, events, and external services (`Event::fake`, `Queue::fake`, HTTP
  fakes) to avoid flakiness.
- Assert JSON/resource shape and event publication, not raw ORM fields.
- Group tests by layer (`tests/Unit`, `tests/Integration/Infrastructure`,
  `tests/Feature`).

## Test Data & Determinism

- Factories for Infrastructure tests; builders/pure constructors for Domain
  tests.
- Freeze time for expiry/authorization flows; inject deterministic UUIDs or IDs
  where needed.
- Avoid randomness, network calls, and real tokens.

## OAuth / OIDC Testing

- Fake discovery, token, and JWKS endpoints with deterministic responses.
- Sign tokens with short-lived keys in tests, include domain-aware claims
  (`subscription_id`, `scope`).
- Always test both happy paths and security edges: invalid `state`, missing
  `scope`, expired `exp`, mismatched `aud`.
- Let Application policies interpret scopes/claims, not controllers.

## Anti-Patterns

- Testing framework behavior instead of business rules.
- Over-mocking domain objects; tests should use real aggregates.
- Relying on networked IdPs or random data in CI.
- Mixing domain tests with persistence/travel concerns; keep pure logic
  isolated.

## Review Checklist

- Domain tests cover new invariants and emit expected events.
- Handler tests validate policies, transactions, and repository saves.
- Feature tests assert HTTP responses/resources and queued jobs/events.
- OAuth flows use fake endpoints and signed tokens with required scopes.
- All tests read like business stories; if a test description doesn’t mention a
  rule, reconsider the assertion.
