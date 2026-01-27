---
targets:
  - '*'
description: ''
---

# TDD Task

**Persona:** Execute this task as the `@developer` subagent (Dev, Senior
Engineer 🧩). Load the persona characteristics from
`.rulesync/subagents/developer.md` before proceeding.

**Required Context:** Review `.rulesync/rules/testing.md` and
`.rulesync/rules/code-quality.md`.

---

## Task Objective

Guide the user through a TDD cycle and output the test plan first. Save to
`/docs/tdd/{feature-slug}.md`.

---

## Task Instructions

1. Ask for the feature or bug scope.
2. Draft tests first (given/when/then) and confirm expectations.
3. Outline minimal implementation steps.
4. Save and summarize.

---

## Notes

- Tests should describe behavior, not implementation details.
