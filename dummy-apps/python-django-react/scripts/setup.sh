#!/bin/bash

set -e

echo "🚀 Setting up Python Django React Tax Management App..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Please install pnpm first:"
    echo "npm install -g pnpm"
    exit 1
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.11+ first."
    exit 1
fi

echo "📦 Installing root dependencies..."
pnpm install

echo "🐍 Setting up Django backend..."
cd backend

# Create virtual environment
if [ ! -d "venv" ]; then
    echo "Creating Python virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment and install dependencies
echo "Installing Python dependencies..."
source venv/bin/activate
pip install -r requirements.txt

# Copy environment file
if [ ! -f ".env" ]; then
    echo "Creating .env file from template..."
    cp .env.example .env
fi

# Run migrations
echo "Running Django migrations..."
python manage.py migrate

# Create superuser (optional)
echo "Creating Django superuser (optional - press Ctrl+C to skip)..."
python manage.py createsuperuser || echo "Superuser creation skipped."

cd ..

echo "⚛️ Setting up React frontend..."
cd frontend

# Install frontend dependencies
echo "Installing Node.js dependencies..."
pnpm install

# Copy environment file
if [ ! -f ".env.local" ]; then
    echo "Creating .env.local file from template..."
    cp .env.local.example .env.local
fi

cd ..

echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Start the development servers:"
echo "   pnpm run dev"
echo ""
echo "2. Or start individually:"
echo "   Backend:  pnpm run dev:backend  (http://localhost:8000)"
echo "   Frontend: pnpm run dev:frontend (http://localhost:5173)"
echo ""
echo "3. Access the Django admin at: http://localhost:8000/admin/"
echo "4. Access the React dashboard at: http://localhost:5173"
echo ""
echo "📚 Available commands:"
echo "   pnpm run setup      - Run this setup script"
echo "   pnpm run dev        - Start both servers"
echo "   pnpm run build      - Build for production"
echo "   pnpm run lint       - Run linting"
echo "   pnpm run test       - Run tests"
echo "   pnpm run clean      - Clean build artifacts"
