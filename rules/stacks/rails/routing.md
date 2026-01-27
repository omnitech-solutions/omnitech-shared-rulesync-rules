---
targets:
  - '*'
root: false
description: Rails routing conventions
summary: RESTful routes, nesting, concerns
stack: rails
globs:
  - '**/config/routes.rb'
  - '**/routes/**'
cursor:
  description: Rails routing conventions
  globs:
    - '**/config/routes.rb'
---

# Rails Routing Rules

## RESTful Routes

- Use resource‑based routes and HTTP verbs consistently.
- Keep route nesting shallow; prefer explicit identifiers.

```ruby
resources :users do
  resources :posts, only: [:index, :create]
end
```

---

## Namespacing

- Use namespaces for API versions or bounded contexts.

```ruby
namespace :api do
  namespace :v1 do
    resources :users
  end
end
```
