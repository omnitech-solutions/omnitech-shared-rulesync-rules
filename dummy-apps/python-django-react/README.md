# Python + Django + React

Minimal placeholder stack with a Django backend and React frontend. The folders
here are **illustrative**. Use the bootstrap commands below to generate a real
app.

## Bootstrap (Generate a Real App)

Backend (Django):

1. Install Python (3.11+ recommended) and pip.
2. From `backend/`:
   - `python -m venv .venv`
   - `source .venv/bin/activate`
   - `pip install django`
   - `django-admin startproject app .`
   - `python manage.py startapp api`

Frontend (React):

1. Install Node.js (18+ recommended) and npm/pnpm.
2. From `frontend/`:
   - `npm create vite@latest . -- --template react`
   - `npm install`

## Run (After Generation)

Backend:

- `python manage.py migrate`
- `python manage.py runserver`

Frontend:

- `npm run dev`

## Notes

- Typical endpoints: `/health`, `/api/hello`.
- Frontend usually calls `http://localhost:8000/api/hello`.
