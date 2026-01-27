# PHP + Laravel + Vue

Minimal placeholder stack with a Laravel backend and Vue frontend. The folders
here are **illustrative**. Use the bootstrap commands below to generate a real
app.

## Bootstrap (Generate a Real App)

Backend (Laravel):

1. Install PHP (8.1+), Composer, and a DB (SQLite/MySQL).
2. From `backend/`:
   - `composer create-project laravel/laravel .`

Frontend (Vue):

1. Install Node.js (18+ recommended) and npm/pnpm.
2. From `frontend/`:
   - `npm create vite@latest . -- --template vue`
   - `npm install`

## Run (After Generation)

Backend:

- `php artisan migrate`
- `php artisan serve`

Frontend:

- `npm run dev`

## Notes

- Typical endpoints: `/health`, `/api/hello`.
- Frontend usually calls `http://localhost:8000/api/hello`.
