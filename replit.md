# Restaurant Website Application

## Overview
This is a modern restaurant website application for "El Sabor del Chef", a Mediterranean fusion restaurant. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a responsive design, menu QR code generation, and static content serving.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
The application follows a monorepo structure with clear separation between client and server code:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom Mediterranean theme colors
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **File Serving**: Static file serving for menu PDFs and assets
- **QR Code Generation**: QRCode library for menu QR code generation

## Key Components

### Frontend Components
- **Landing Page**: Single-page application with multiple sections (Hero, About, Menu, Gallery, Contact)
- **Navigation**: Responsive navbar with smooth scrolling to sections
- **Menu Section**: QR code display for digital menu access
- **Gallery**: Image showcase of restaurant and food
- **Contact**: Restaurant information and location details

### Backend Services
- **Menu API**: Endpoints for serving menu PDF and generating QR codes
- **Static Assets**: Serves menu PDF files from attached_assets directory
- **Development Tools**: Vite integration for development mode

### Database Schema
- **Users Table**: Basic user structure with username/password (currently using in-memory storage)
- **Drizzle Configuration**: Set up for PostgreSQL with migrations support

## Data Flow
1. **Client Requests**: React app makes API calls using TanStack Query
2. **QR Code Generation**: Server generates QR codes pointing to menu PDF URLs
3. **Menu Serving**: Static PDF files served directly through Express
4. **Development Mode**: Vite middleware handles client-side routing and hot reloading

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **State Management**: TanStack Query for API state
- **Build Tools**: Vite, PostCSS, Autoprefixer

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL (Neon Database)
- **QR Generation**: QRCode library
- **Development**: tsx for TypeScript execution

### Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **Error Handling**: Runtime error overlay for development
- **Hot Reload**: Vite HMR for fast development cycles

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Assets**: Static assets copied to build directory

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with hot reload
- **Production**: Compiled JavaScript with NODE_ENV=production
- **Database**: Configured for PostgreSQL via DATABASE_URL environment variable

### Hosting Considerations
- **Static Files**: Menu PDFs served from attached_assets directory
- **Domain Handling**: Supports both Replit domains and localhost for development
- **Database**: Ready for PostgreSQL deployment (currently using in-memory storage)

The application is designed to be easily deployable on Replit or similar Node.js hosting platforms, with clear separation of concerns and modern development practices.