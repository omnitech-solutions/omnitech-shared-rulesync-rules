# Node Express React Tax Management App

A full-stack tax management application built with Node.js, Express, React, and
Turbo monorepo architecture using pnpm workspace.

## 🚀 Features

- **Turbo Monorepo**: Efficient monorepo setup with Turborepo
- **Express.js Backend**: RESTful API with TypeScript
- **React Dashboard**: Modern UI with Next.js and Tailwind CSS
- **Tax CRUD Operations**: Complete create, read, update, delete functionality
- **Real-time Updates**: Interactive dashboard with live data
- **Filtering & Search**: Filter taxes by type and status
- **Responsive Design**: Mobile-friendly interface

## 📋 Prerequisites

- Node.js 18+
- pnpm 8+

## 🛠️ Installation

1. Clone and navigate to the project:

```bash
cd node-express-react
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

**Backend** (copy from example):

```bash
cp packages/backend/.env.example packages/backend/.env
```

**Frontend** (copy from example):

```bash
cp packages/frontend/.env.local.example packages/frontend/.env.local
```

## 🚀 Running the Application

### Development Mode

Start both frontend and backend in development mode:

```bash
pnpm dev
```

This will start:

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

### Individual Services

Start only the backend:

```bash
pnpm --filter @tax-app/backend dev
```

Start only the frontend:

```bash
pnpm --filter @tax-app/frontend dev
```

### Production Build

Build all packages:

```bash
pnpm build
```

Start production servers:

```bash
pnpm start
```

## 📡 API Endpoints

### Health Check

- `GET /api/health` - Check API status

### Taxes CRUD

- `GET /api/taxes` - Get all taxes (supports query filters)
- `GET /api/taxes/:id` - Get specific tax
- `POST /api/taxes` - Create new tax
- `PUT /api/taxes/:id` - Update existing tax
- `DELETE /api/taxes/:id` - Delete tax

### Query Parameters

- `type` - Filter by tax type (income, sales, property, corporate)
- `isActive` - Filter by status (true/false)

## 🏗️ Project Structure

```
node-express-react/
├── packages/
│   ├── backend/                 # Express.js API
│   │   ├── src/
│   │   │   ├── routes/         # API routes
│   │   │   ├── types.ts        # TypeScript types
│   │   │   └── index.ts        # Server entry point
│   │   └── package.json
│   └── frontend/               # Next.js React app
│       ├── src/
│       │   ├── app/           # Next.js app router
│       │   ├── components/    # React components
│       │   └── lib/           # Utilities and API client
│       └── package.json
├── turbo.json                  # Turbo configuration
├── pnpm-workspace.yaml        # pnpm workspace config
└── package.json               # Root package.json
```

## 🎯 Tax Management Features

### Tax Types

- Income Tax
- Sales Tax
- Property Tax
- Corporate Tax

### Operations

- ✅ Create new taxes with name, rate, type, and description
- ✅ View all taxes in a sortable table
- ✅ Edit existing tax details
- ✅ Delete taxes with confirmation
- ✅ Toggle active/inactive status
- ✅ Filter by type and status
- ✅ Real-time statistics dashboard

## 🛠️ Development Commands

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev

# Build for production
pnpm build

# Run linting
pnpm lint

# Run tests
pnpm test

# Clean build artifacts
pnpm clean
```

## 📊 Dashboard Features

The React dashboard includes:

- **Statistics Cards**: Total taxes, active/inactive counts, average rate
- **Filter Controls**: Filter by tax type and active status
- **Data Table**: Sortable tax records with inline actions
- **Modal Forms**: Create and edit taxes with validation
- **Responsive Design**: Works on desktop and mobile devices

## 🔧 Technology Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security headers
- **Morgan** - HTTP request logger
- **UUID** - Unique identifier generation

### Frontend

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Axios** - HTTP client
- **Lucide React** - Icon library

### DevOps

- **Turbo** - Monorepo build system
- **pnpm** - Package manager
- **ESLint** - Code linting

## 🚀 Deployment

### Environment Variables

Make sure to set these in production:

**Backend (.env)**:

```
PORT=3001
NODE_ENV=production
```

**Frontend (.env.local)**:

```
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
```

### Build Process

```bash
# Build all packages
pnpm build

# Start production servers
pnpm start
```

## 📝 License

This project is for demonstration purposes.

## Shared setup

See `../SHARED_SETUP.md` for Rulesync rules and AI/MCP setup.
