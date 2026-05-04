# Task Manager API

A complete full-stack web application for managing tasks, built using Node.js, Express, EJS templating, and MongoDB.

## Features
- **Task Management:** Create, read, and manage tasks easily.
- **MVC Architecture:** Separation of Models, Views, and Controllers.
- **Server-Side Rendering:** Uses EJS for rendering dynamic content from the server.
- **Database:** MongoDB for persistent storage of tasks.

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the application in development mode:
   ```bash
   npm run dev
   ```

3. The application will start on `http://localhost:3000` (or the port defined in your environment).

## Project Structure
- `/src/models` - Mongoose schemas
- `/src/views` - EJS templates for the frontend
- `/src/public` - Static assets (CSS, JS)
- `/src/server.ts` - Main application entry point
