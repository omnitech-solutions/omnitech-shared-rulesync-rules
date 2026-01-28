# Python Django React App with Taxes CRUD

A full-stack application featuring Django REST API backend and React dashboard
frontend for managing tax records. Uses Turbo monorepo with pnpm for efficient
development.

## Quick Start

### Prerequisites

- Python 3.11+
- Node.js 18+
- pnpm

### Installation & Setup

```bash
# Clone and navigate to the project
cd dummy-apps/python-django-react

# Install all dependencies and set up both backend and frontend
pnpm run setup
```

### Development

```bash
# Start both backend and frontend in development mode
pnpm run dev

# Or start individually:
pnpm run dev:backend  # Django on http://localhost:8000
pnpm run dev:frontend # React on http://localhost:5173
```

## Project Structure

```
python-django-react/
├── backend/          # Django REST API
│   ├── app/         # Django project settings
│   ├── api/         # Taxes API endpoints
│   ├── requirements.txt
│   └── manage.py
├── frontend/         # React dashboard
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   ├── package.json
│   └── vite.config.ts
├── package.json      # Root monorepo config
├── turbo.json        # Turbo pipeline configuration
└── pnpm-workspace.yaml
```

## API Endpoints

- `GET /api/taxes/` - List all tax records
- `POST /api/taxes/` - Create new tax record
- `GET /api/taxes/{id}/` - Get specific tax record
- `PUT /api/taxes/{id}/` - Update tax record
- `DELETE /api/taxes/{id}/` - Delete tax record

## Features

- **Backend**: Django REST Framework with CORS support
- **Frontend**: React with TypeScript, Tailwind CSS, Axios
- **CRUD Operations**: Complete tax record management
- **Dashboard**: Modern UI with data tables and forms
- **Hot Reload**: Both backend and frontend support hot reloading

## Scripts

- `pnpm run setup` - Install and configure everything
- `pnpm run dev` - Start development servers
- `pnpm run build` - Build for production
- `pnpm run lint` - Run linting
- `pnpm run test` - Run tests
- `pnpm run clean` - Clean build artifacts

## Shared setup

See `../SHARED_SETUP.md` for Rulesync rules and AI/MCP setup.
