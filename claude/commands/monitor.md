---
targets:
  - '*'
description: ''
---

# MONITOR Task

**Persona:** Execute this task as the `@qa` subagent (Quinn, QA Lead 🔍). Load
the persona characteristics from `.rulesync/subagents/qa.md` before proceeding.

**Required Context:** Review `.rulesync/rules/testing.md` and
`.rulesync/rules/performance.md`.

---

## Task Objective

Define monitoring checks or test probes for a feature and record them in
`/docs/monitor/{feature-slug}.md`.

---

## Task Instructions

1. Ask for feature scope and critical flows.
2. Define health signals, failure modes, and test probes.
3. Recommend alerts and thresholds.
4. Save and summarize.

---

## Notes

- Keep monitoring scoped to measurable signals.
