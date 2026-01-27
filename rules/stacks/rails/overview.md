---
targets:
  - '*'
root: false
description: Ruby on Rails core conventions and architecture
summary: Rails conventions, MVC boundaries, and domain boundaries
stack: rails
globs:
  - '**/*.rb'
  - '**/app/**'
  - '**/config/**'
cursor:
  description: Ruby on Rails core conventions and architecture
  globs:
    - '**/*.rb'
---

# Rails Overview Rules

## Core Principles

- **Convention Over Configuration:** Follow Rails defaults unless there’s a
  strong reason not to.
- **Thin Controllers:** Controllers orchestrate requests; domain logic lives in
  models/services.
- **Fat Models, Lean Views:** Keep business behavior in models/services, not
  templates.
- **Clear Boundaries:** Separate concerns across models, services, policies, and
  jobs.
- **Consistency:** Keep naming and folder structure aligned with Rails
  conventions.

---

## Layer Responsibilities

- **Controllers:** Validate input, authorize, and delegate.
- **Models:** Encapsulate persistence + core business behavior.
- **Services:** Orchestrate workflows that span models.
- **Jobs:** Async work only; call services.

---

## Related Rules

- `.rulesync/rules/stacks/rails/controllers.md`
- `.rulesync/rules/stacks/rails/models.md`
- `.rulesync/rules/stacks/rails/services.md`
- `.rulesync/rules/stacks/rails/persistence.md`
- `.rulesync/rules/stacks/rails/routing.md`
- `.rulesync/rules/stacks/rails/jobs.md`
- `.rulesync/rules/stacks/rails/testing.md`
- `.rulesync/rules/stacks/rails/security.md`
