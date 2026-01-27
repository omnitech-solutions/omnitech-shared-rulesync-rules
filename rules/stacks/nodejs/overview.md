---
targets:
  - '*'
root: false
description: Node.js core architecture and application contract
summary:
  Non-negotiable Node.js standards, rule strength, and system-wide guarantees
stack: nodejs
globs:
  - '**/*.js'
  - '**/*.mjs'
  - '**/src/**'
  - '**/server.js'
  - '**/app.js'
---

# Node.js Overview Rules

> **Authority Notice**
>
> This ruleset is governed by the constraints defined in:
> `.rulesync/rules/stacks/nodejs/non-negotiables.md`
>
> If any rule in this document or its specializations conflicts with the
> non-negotiables, the non-negotiables take precedence.

This document defines the **baseline architectural contract** for Node.js
applications.  
All other Node.js rules **specialize or elaborate** on the guarantees defined
here.

---

## Rule Strength

All rules use the following strength levels:

- **MUST**  
  Required. Violations block merge or release.

- **SHOULD**  
  Expected default. Deviations require explicit justification.

- **MAY**  
  Optional guidance.

---

## Core Contract

- **Runtime-Aware Design (MUST)**  
  Node.js applications must be designed with explicit awareness of the event
  loop, asynchronous execution model, and shared-process constraints.

- **Explicit Boundaries (MUST)**  
  Execution flows through clearly separated layers only:  
  Transport / API → Application → Domain → Infrastructure.

- **Replaceability (MUST)**  
  Domain and application logic must not depend on Node.js frameworks, transport
  libraries, or runtime globals.

- **Predictable Behavior (MUST)**  
  Validation, authorization, side effects, concurrency, and failure handling
  must be explicit, observable, and testable.

---

## Execution Model

- **Async Correctness (MUST)**  
  All asynchronous work must be awaited, timeboxed, and error-aware.
  Fire-and-forget behavior in request paths is forbidden.

- **No Hidden Work (MUST)**  
  Background jobs, retries, I/O, and side effects must never occur implicitly as
  part of request handling.

- **Single Responsibility (MUST)**  
  Each module owns exactly one concern: transport, orchestration, domain logic,
  or infrastructure interaction.

---

## Operational Guarantees

- **Lifecycle Discipline (MUST)**  
  Applications must handle startup, readiness, shutdown, and termination signals
  deterministically.

- **Observability (MUST)**  
  Requests, jobs, and background work must emit structured logs and measurable
  signals for latency, errors, and throughput.

- **Failure Containment (MUST)**  
  External failures must be isolated via timeouts, retries, and bounded
  concurrency to prevent cascading outages.

---

## Quality & Evolution

- **Consistency (MUST)**  
  Error handling, response shapes, logging, and configuration must be consistent
  across the application.

- **Additive Change (MUST)**  
  Public APIs evolve via additive change and deprecation only.  
  Breaking changes require explicit approval and migration planning.

---

## Related Rules (Authoritative Index)

The following documents elaborate on and enforce the guarantees defined here:

- `.rulesync/rules/stacks/nodejs/non-negotiables.md`
- `.rulesync/rules/stacks/nodejs/http-api.md`
- `.rulesync/rules/stacks/nodejs/runtime.md`
- `.rulesync/rules/stacks/nodejs/data-access.md`
- `.rulesync/rules/stacks/nodejs/jobs.md`
- `.rulesync/rules/stacks/nodejs/operations.md`
- `.rulesync/rules/stacks/nodejs/performance.md`
- `.rulesync/rules/stacks/nodejs/security.md`
- `.rulesync/rules/stacks/nodejs/testing.md`
