---
targets:
  - '*'
root: false
description: Rails model rules
summary: Validations, associations, domain logic placement
stack: rails
globs:
  - '**/app/models/**'
  - '**/models/**'
cursor:
  description: Rails model rules
  globs:
    - '**/app/models/**'
---

# Rails Model Rules

## Model Behavior

- Keep domain behavior on models when it naturally belongs to the entity.
- Prefer intention‑revealing methods over attribute mutation.
- Avoid bloated models by extracting services or concerns.
- Keep data integrity with validations and DB constraints.

```ruby
class Subscription < ApplicationRecord
  enum status: { draft: 0, active: 1, paused: 2 }

  def activate!
    raise AlreadyActive if active?
    update!(status: :active)
  end
end
```

---

## Validations & Callbacks

- Use validations for data integrity and invariants.
- Avoid heavy logic in callbacks; keep callbacks predictable.
- Prefer explicit lifecycle methods over deep callback chains.

---

## Associations

- Prefer explicit associations and `dependent:` behavior.
- Avoid implicit data access chains that hide N+1 issues.
- Use `inverse_of` where it improves consistency.
