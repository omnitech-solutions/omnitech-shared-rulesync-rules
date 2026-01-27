---
targets:
  - '*'
root: false
description: Domain-driven design architecture and boundary rules
globs:
  - '**/*'
cursor:
  description: Domain-driven design architecture and boundary rules
  globs:
    - '**/*'
---

# Domain-Driven Design Architecture Rules

## Purpose

- Establish the dependency rule and responsibilities that keep Domain,
  Application, and Infrastructure cleanly separated.
- Supply a repeatable decision tree so AI assistants and humans know exactly
  where behavior, orchestration, and adapters live.
- Align every package with common DDD building blocks so bounded contexts stay
  autonomous and evolvable.

## Core Principles

- **Dependency rule:** Domain never imports Application or Infrastructure;
  Application imports Domain only; Infrastructure can depend on both.
- **Ubiquitous language:** Business terms must appear verbatim in code, tests,
  documentation, and domain events.
- **Behavior over data:** Methods describe actions (`activate()`,
  `placeOrder()`), not setters (`setStatus`).
- **Explicit contracts:** Domain interfaces expose domain types or DTOs, not
  primitives, arrays, or ORM models.

## Layer Responsibilities

### Domain

Owns aggregates, value objects, domain events, services, policies, and
repository interfaces.

- Business invariants and decisions live here; controllers, HTTP, DB, queues,
  and external APIs are forbidden.
- IO contracts accept or return domain types only; repositories live here as
  interfaces.

### Application

Owns commands and queries, handlers, transaction boundaries, and cross-aggregate
coordination.

- Validates input (in commands), invokes policies, orchestrates domain behavior,
  and manages transactions via repository helpers.
- Does not host controllers, ORMs, or business logic beyond invoking Domain
  services.

### Infrastructure

Owns HTTP controllers/resources, repository implementations, persistence models,
jobs/listeners, integrations, and adapters.

- Maps between framework/transport types and domain contracts.
- Must remain thin: no business rules, no handler chaining, no aggregates in
  responses.

---

## Boundary Rules (Do / Don't)

- **Domain:** No framework imports, no persistence, no network calls.
- **Application:** Orchestrates use cases; does not contain business rules.
- **Infrastructure:** Adapts frameworks/IO; never owns rules or decisions.
- **Controllers/Jobs/Listeners:** Translate input/output and delegate to
  handlers; no transactions or business logic.
- **Integrations:** Anti-corruption layers translate external models to domain
  language; never embed business rules.

## Dependency Matrix

| From ↓ / To →      | **Domain** | **Application** |  **Infrastructure**  |
| ------------------ | :--------: | :-------------: | :------------------: |
| **Domain**         |     ✅     |       ❌        |          ❌          |
| **Application**    |     ✅     |       ❌        | ❌ (interfaces only) |
| **Infrastructure** |     ✅     |       ✅        |          ✅          |

## DDD Building Blocks

### Entities

- Identity-rich objects that track lifecycle and execute domain behavior.
- Guard invariants, emit events, and avoid public setters.

### Value Objects

- Immutable, self-validating types that replace primitive obsession (Email,
  Money, Address).
- Equality by value; provide factories/constructors that enforce invariants.

### Aggregates

- Consistency boundaries with a single root that controls all mutations.
- Reference other aggregates by ID; keep each aggregate small enough to keep
  transactions predictable.

### Domain Events

- Immutable past-tense facts (`SubscriptionActivated`, `OrderPlaced`).
- Emitted from aggregates; carry enough data so listeners need not rehydrate
  aggregates.
- Publish after successful persistence.

### Domain Services

- Stateless helpers for logic that spans aggregates or complex calculations
  (pricing, shipping, billing).
- Accept/return domain types and stay free of framework code.

### Repositories

- Interface lives in Domain; implementation in Infrastructure.
- Operate on aggregates (save/find whole aggregates), expose transaction
  helpers, and publish events post-commit.

### Commands / Queries

- **Commands:** Mutate state; validate input up front; return results/events.
- **Queries:** Read-only; no side effects; can return read models/DTOs.
- **Handlers:** Orchestrate one use case; do not call other handlers.

### Policies

- Live in the Domain layer; answer authorization in business terms.
- Do not perform persistence or framework calls.

### Factories & Policies

- Factories enforce invariants up front and create aggregates from DTOs or
  external data.
- Policies answer permission questions (`canApprove`, `canUpgrade`) and return
  rich results (allowed/denied reasons).

## Strategic Patterns

- **Bounded contexts:** Keep one domain per app/package; context mapping (Shared
  Kernel, ACL, Customer/Supplier) determines integration style.
- **Anti-corruption layers:** Translate upstream models into downstream domain
  language when integrating with legacy/third-party APIs.
- **Sagas/Process managers:** Maintain standalone state, react to domain events,
  and dispatch commands for long-running processes (provisioning, billing).
- **Event sourcing (optional):** Use only when audit trails or time-travel
  reasoning are important; default remains state-based aggregates.

## Package Structure & Naming

- Root layout: `packages/{Package}/Domain`, `Application`, `Infrastructure`,
  `tests`, `config`.
- Domain files: `Domain/Aggregates/{Aggregate}/{Aggregate}.{ext}`,
  `ValueObjects/*`, `Events/*`, `Policies/*`, `Services/*`, `Exceptions/*`, plus
  a README glossary.
- Application: `Commands/{Aggregate}{Action}/` for commands/handlers/results;
  separate Queries/Handlers.
- Infrastructure: `Http/Controllers`, `Http/Resources`, `Persistence/Models`,
  `Persistence/Repositories`, `Jobs`, `Listeners`, `Integration`, `Providers`,
  `routes`, `Migrations`.
- Naming: `SubscriptionRepository` (interface), `SubscriptionEloquent` or
  `SubscriptionEntity` (ORM), `ActivateSubscriptionHandler`,
  `SubscriptionActivated` event, etc.

## Code Placement Decision Tree

1. Is this core business logic or an invariant? → Domain entity/aggregate/value
   object.
2. Does it coordinate workflows, transactions, or policies? → Application
   handler.
3. Does it interact with HTTP, DB, or queues? → Infrastructure
   controller/job/adapter.
4. Does it authorize? → Domain policy.
5. Does it represent a fact after something happened? → Domain event.
6. Does it translate between contexts? → Integration API or ACL in
   Infrastructure.

## Anti-Patterns to Avoid

- Anemic domain: Entities that only expose getters/setters.
- God aggregates: One span-of-control class handling unrelated responsibilities.
- Domain logic leaking into controllers, jobs, listeners, or ORM models.
- Arrays/primitives in API/handlers for business concepts (use VOs/DTOs).
- Repositories returning ORM models or exposing persistence details to
  Domain/Application.

## AI Assistant Guidelines

- Always ask “Which layer does this belong to?” and map the path
  (Domain/ValueObjects, Application/Commands, Infrastructure/Http, etc.).
- Verify that dependencies remain downward only (Domain ← Application ←
  Infrastructure).
- Name commands/events/policies in the ubiquitous language
  (`ActivateSubscription`, `SubscriptionActivated`, `SubscriptionPolicy`).
- Keep controllers/jobs thin; they should only translate to commands and
  delegate to handlers/services.
- Flag any code importing framework utilities inside Domain or orchestrating
  cross-aggregate logic outside Application.
