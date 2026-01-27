---
targets:
  - '*'
description: ''
---

# DIAGRAM Task

**Persona:** Execute this task as the `@architect` subagent (Archer, Principal
Architect 🧠). Load the persona characteristics from
`.rulesync/subagents/architect.md` before proceeding.

**Required Context:** Review `.rulesync/rules/architecture.md`.

---

## Task Objective

Produce a system diagram in Mermaid based on the requested scope. Save to
`/docs/diagrams/{diagram-name}.md`.

---

## Task Instructions

1. Ask what level of diagram is needed (system, container, component, or
   sequence) and the scope.
2. Identify key components, data flows, and boundaries.
3. Generate a Mermaid diagram with clear labels.
4. Save the diagram and provide a short explanation.

---

## Notes

- Prefer fewer boxes with clear boundaries over overly detailed charts.
