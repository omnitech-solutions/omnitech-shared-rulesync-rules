# Ruby + Rails + React

Minimal Rails API backend + React frontend demo app.

## Run (Local Dev)

From repo root:

```bash
cd dummy-apps/ruby-rails-react
pnpm install
pnpm dev
```

Rails runs on `http://localhost:3000` and Vite on `http://localhost:5173`.

## Shared setup

See `../SHARED_SETUP.md` for Rulesync rules and AI/MCP setup.

## Swagger / API Client (Optional)

If you regenerate client types from Rails:

```bash
cd dummy-apps/ruby-rails-react/backend
bundle exec rake rswag:specs:swaggerize

cd ../frontend
pnpm api:gen
```
