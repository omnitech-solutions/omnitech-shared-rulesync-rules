---
targets:
  - '*'
root: false
description: Cross-cutting rule overview and analytics context
summary: High-level guidance for audits, telemetry, and rule selection
---

# Overview Rules

## Purpose

- Provide a shared baseline for audits and cross-domain reviews.
- Clarify how to select rule sets for a given task or change.
- Define expectations for analytics and telemetry work.

---

## Rule Selection Guidance

- MUST start from the smallest relevant rule set and expand only as needed.
- MUST treat stack non-negotiables as highest priority when present.
- SHOULD combine cross-cutting rules (security, testing, documentation) with
  stack-specific rules.
- SHOULD document any intentional deviations and rationale.

---

## Audit Baseline (All Domains)

- MUST capture evidence for each claim (file/line, log output, or test result).
- MUST classify findings by severity (P0–P3) and impact.
- SHOULD separate symptoms from root causes.
- SHOULD propose actionable fixes, not just observations.

---

## Analytics & Telemetry

### Event Design

- MUST define event names, ownership, and trigger conditions.
- MUST document event payloads with required/optional fields.
- SHOULD use consistent naming (snake_case or dot.case) per team convention.
- SHOULD include versioning for event schema changes.

### Data Quality

- MUST validate required fields at collection boundaries.
- MUST avoid PII unless explicitly approved and documented.
- SHOULD include server-side validation for client-submitted events.
- SHOULD add sampling or throttling for high-volume events.

### Observability

- MUST log failed event deliveries with enough context to retry or debug.
- SHOULD emit metrics for ingestion lag, drop rates, and schema violations.
- SHOULD provide dashboards or queries for critical events.

---

## Related Documentation

- `.rulesync/rules/architecture.md` - Architecture patterns
- `.rulesync/rules/llm-provider-configuration.md` - LLM provider configuration
- `.rulesync/rules/security.md` - Security best practices
- `.rulesync/rules/testing.md` - Testing standards
- `.rulesync/rules/documentation.md` - Documentation standards
