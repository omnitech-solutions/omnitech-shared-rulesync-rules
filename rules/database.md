---
targets:
  - '*'
root: false
description: Database modeling, migrations, and data access patterns
summary: Schema design, query safety, migrations, and operational practices
---

# Database Rules

## Core Principles

- MUST model data for integrity first, performance second.
- MUST keep schema changes backward compatible when possible.
- MUST treat migrations as production changes with rollout/rollback plans.
- SHOULD keep data access isolated behind repository/service boundaries.

---

## Schema Design

- MUST enforce data integrity with constraints (FKs, UNIQUE, NOT NULL).
- MUST use explicit types and lengths (avoid unbounded text unless needed).
- SHOULD prefer timestamps in UTC with clear naming (`created_at`,
  `updated_at`).
- SHOULD document ownership and lifecycle for critical tables.

---

## Migrations

- MUST keep migrations idempotent and reversible when possible.
- MUST avoid long-running locks in peak hours; use online/zero-downtime
  patterns.
- SHOULD split destructive changes into phases (add → backfill → swap → remove).
- SHOULD include data backfills as separate, observable steps.

---

## Query Safety

- MUST parameterize queries to prevent injection.
- MUST avoid N+1 queries in hot paths.
- SHOULD set query timeouts for user-facing endpoints.
- SHOULD add pagination to unbounded list queries.

---

## Indexing

- MUST create indexes for frequently filtered or joined columns.
- MUST verify index usage with query plans before shipping.
- SHOULD remove unused or redundant indexes to keep writes fast.

---

## Transactions & Consistency

- MUST use transactions for multi-step writes that must succeed together.
- MUST select isolation levels appropriate to the domain risk.
- SHOULD avoid long-lived transactions in request threads.

---

## Data Access Boundaries

- MUST keep raw queries behind a data access layer (repository/service).
- MUST avoid leaking ORM models across process or API boundaries.
- SHOULD centralize connection management and pooling.

---

## Data Privacy & Retention

- MUST classify sensitive data and enforce access controls.
- MUST implement retention or deletion policies for regulated data.
- SHOULD mask or redact sensitive fields in logs.

---

## Related Documentation

- `.rulesync/rules/performance.md` - Performance best practices
- `.rulesync/rules/security.md` - Security patterns
- `.rulesync/rules/architecture.md` - Architecture boundaries
