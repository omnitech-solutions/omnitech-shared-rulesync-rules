# Laravel Vue Taxes App

A high-performance tax calculator application built with Laravel 11, Vue 3,
Tailwind CSS, and TanStack Query.

## Tech Stack

- **Backend**: Laravel 11
- **Frontend**: Vue 3 (Composition API)
- **State/Data Fetching**: TanStack Query (Vue Query)
- **Styling**: Tailwind CSS v4
- **API Documentation**: L5-Swagger (OpenAPI)

## Prerequisites

- PHP 8.2+
- Composer
- Node.js & npm

## Setup Instructions

1.  **Install PHP Dependencies**

    ```bash
    composer install
    ```

2.  **Install Node Dependencies**

    ```bash
    npm install
    ```

3.  **Environment Setup**

    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4.  **Database Setup** (Optional for this specific demo, but good practice)

    ```bash
    touch database/database.sqlite
    php artisan migrate
    ```

5.  **Build Frontend**
    ```bash
    npm run build
    ```

## Running the Application

1.  **Start Laravel Server**

    ```bash
    php artisan serve
    ```

2.  **Start Vite (Hot Reload)**
    ```bash
    npm run dev
    ```

Access the application at `http://localhost:8000`.

## API Documentation

Swagger documentation is available at `/api/documentation`. To regenerate docs:

```bash
php artisan l5-swagger:generate
```

_(Note: Ensure your L5-Swagger configuration matches your environment)_
