---
targets:
  - '*'
root: false
description: Rails controller patterns
summary: Thin controllers, strong params, response handling
stack: rails
globs:
  - '**/app/controllers/**'
  - '**/controllers/**'
cursor:
  description: Rails controller patterns
  globs:
    - '**/app/controllers/**'
---

# Rails Controller Rules

## Controller Responsibilities

- Validate and sanitize input (strong params).
- Authorize actions via policies/guards.
- Delegate business behavior to models/services.
- Return consistent response shapes.
- Keep controller actions short and intention‑revealing.

```ruby
class UsersController < ApplicationController
  def create
    user = UserCreator.call(user_params)
    render json: UserSerializer.new(user).serializable_hash, status: :created
  end

  private

  def user_params
    params.require(:user).permit(:email, :name)
  end
end
```

---

## Filters & Concerns

- Keep before_action chains small and explicit.
- Avoid heavy logic in filters; use services instead.
- Extract shared controller behavior into concerns only when it’s cohesive.

---

## Responses

- Centralize error handling in controllers or middleware.
- Return clear status codes and error structures.
- Use serializers/presenters for consistent JSON output.
