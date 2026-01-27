# Node.js + Express + React

Minimal placeholder stack with an Express backend and React frontend. The
folders here are **illustrative**. Use the bootstrap commands below to generate
a real app.

## Bootstrap (Generate a Real App)

Backend (Express):

1. Install Node.js (18+ recommended) and npm/pnpm.
2. From `backend/`:
   - `npm init -y`
   - `npm install express`
   - `npm install -D nodemon`

Frontend (React):

1. From `frontend/`:
   - `npm create vite@latest . -- --template react`
   - `npm install`

## Run (After Generation)

Backend:

- `npx nodemon server.js`

Frontend:

- `npm run dev`

## Notes

- Typical endpoints: `/health`, `/api/hello`.
- Frontend usually calls `http://localhost:3000/api/hello`.
