---
targets:
  - '*'
description: ''
---

# DEBT-SCAN Task

**Persona:** Execute this task as the `@architect` subagent (Archer, Principal
Architect 🧠). Load the persona characteristics from
`.rulesync/subagents/architect.md` before proceeding.

**Required Context:** Review `.rulesync/rules/code-quality.md` and
`.rulesync/rules/architecture.md`.

---

## Task Objective

Identify and summarize technical debt in a scoped area. Save the report to
`/docs/debt/{yyyy-mm-dd}-{scope-slug}.md`.

---

## Task Instructions

1. Ask the scope (entire repo or specific path) and focus areas.
2. Scan for:
   - duplication, dead code, brittle abstractions
   - missing tests, weak boundaries, inconsistent conventions
   - performance bottlenecks and risky dependencies
3. Classify debt by severity (P0–P3) and impact.
4. Provide recommended fixes and sequencing.
5. Save the report and summarize key actions.

---

## Notes

- Prefer actionable remediation steps over long explanations.
