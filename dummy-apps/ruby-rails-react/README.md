# Ruby + Rails + React

Minimal placeholder stack with a Rails API backend and React frontend. The
folders here are **illustrative**. If you want a real, runnable app, use the
bootstrap commands below to generate one from scratch.

## Bootstrap (Generate a Real App)

Backend (Rails API):

1. Install Ruby (3.x) and Bundler.
2. From `backend/`:
   - `bundle init`
   - Add `rails` to Gemfile
   - `bundle install`
   - `bundle exec rails new . --api`

Frontend (React):

1. Install Node.js (18+ recommended) and npm/pnpm.
2. From `frontend/`:
   - `npm create vite@latest . -- --template react`
   - `npm install`

## Run (After Generation)

Backend:

- `bundle exec rails db:create db:migrate`
- `bundle exec rails s`

Frontend:

- `npm run dev`

## Notes

- Typical endpoints: `/health`, `/api/hello`.
- Frontend usually calls `http://localhost:3000/api/hello`.
