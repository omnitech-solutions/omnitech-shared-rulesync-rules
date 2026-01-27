---
targets:
  - '*'
root: false
description: Rails service objects and orchestration
summary: Service objects, transactions, and workflows
stack: rails
globs:
  - '**/app/services/**'
  - '**/services/**'
cursor:
  description: Rails service objects and orchestration
  globs:
    - '**/app/services/**'
---

# Rails Services Rules

## Service Objects

- Use services for multi‑step workflows and cross‑model coordination.
- Keep services small and intention‑revealing.
- Return explicit results or raise domain‑specific errors.
- Encapsulate policy checks and transactional boundaries here.

```ruby
class UserCreator
  def self.call(attrs)
    new(attrs).call
  end

  def initialize(attrs)
    @attrs = attrs
  end

  def call
    User.transaction do
      user = User.create!(@attrs)
      Audit.log('user_created', user_id: user.id)
      user
    end
  end
end
```

---

## Transactions

- Define transaction boundaries in services or repositories.
- Avoid transactions inside controllers.
- Keep side effects (email, events) outside the transaction when possible.
