---
targets:
  - '*'
root: false
description: Laravel core architecture and application contract
summary:
  Non-negotiable Laravel standards, rule strength, and system-wide guarantees
stack: laravel
globs:
  - '**/*.php'
  - '**/app/**'
  - '**/routes/**'
  - '**/config/**'
---

# Laravel Overview Rules

> **Authority Notice**
>
> This ruleset is governed by the constraints defined in:
> `.rulesync/rules/stacks/laravel/non-negotiables.md`
>
> If any rule in this document or its specializations conflicts with the
> non-negotiables, the non-negotiables take precedence.

This document defines the **baseline architectural contract** for Laravel
applications.  
All other Laravel rules **specialize or elaborate** on the guarantees defined
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

- **Framework as Infrastructure (MUST)**  
  Laravel is an infrastructure and delivery framework, not the domain or
  application model.

- **Explicit Boundaries (MUST)**  
  Execution flows through clear layers only:  
  HTTP → Controllers → Application / Handlers → Domain → Persistence.

- **Replaceability (MUST)**  
  Domain and application logic must not depend on Laravel classes, helpers, or
  facades.

- **Predictable Behavior (MUST)**  
  Validation, authorization, persistence, transactions, and side effects must be
  explicit, observable, and testable.

---

## Execution Model

- **Thin Controllers (MUST)**  
  Controllers validate input, invoke application logic, and shape responses
  only.

- **Single Responsibility (MUST)**  
  Each layer owns exactly one concern: transport, orchestration, domain, or
  persistence.

- **No Hidden Work (MUST)**  
  Background jobs, transactions, and side effects must never be implicit or
  framework-driven by accident.

---

## Quality & Evolution

- **Consistency (MUST)**  
  Naming, routing, validation, authorization, and response shaping must be
  consistent across the application.

- **Additive Change (MUST)**  
  Public APIs evolve via additive change and deprecation only.  
  Breaking changes require explicit approval and migration planning.

---

## Related Rules (Authoritative Index)

The following documents elaborate on and enforce the guarantees defined here:

- `.rulesync/rules/stacks/laravel/non-negotiables.md`
- `.rulesync/rules/stacks/laravel/controllers.md`
- `.rulesync/rules/stacks/laravel/routing.md`
- `.rulesync/rules/stacks/laravel/validation.md`
- `.rulesync/rules/stacks/laravel/resources.md`
- `.rulesync/rules/stacks/laravel/eloquent.md`
- `.rulesync/rules/stacks/laravel/persistence.md`
- `.rulesync/rules/stacks/laravel/jobs.md`
- `.rulesync/rules/stacks/laravel/providers.md`
- `.rulesync/rules/stacks/laravel/security.md`
- `.rulesync/rules/stacks/laravel/testing.md`
