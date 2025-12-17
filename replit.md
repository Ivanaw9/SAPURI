# SAPURI GROUP Website

## Overview

This is a professional B2B website for SAPURI GROUP (PT. Sumber Alam Putera Lestari), a leading Indonesian distributor of industrial printing equipment, screen printing materials, and ceramic manufacturing equipment. The website serves as a comprehensive product catalog and customer engagement platform, targeting industrial clients, printing businesses, and ceramic manufacturers across Indonesia.

The project builds upon the existing sapuri.co.id structure while modernizing the user experience with React-based components, responsive design, and multilingual support. The site emphasizes professional credibility, product showcasing, and seamless quote request functionality to drive B2B sales conversions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing without React Router complexity
- **State Management**: React Context for language switching and TanStack Query for server state management
- **Styling**: Tailwind CSS with custom design system following industrial B2B aesthetics
- **Component Library**: Radix UI primitives with shadcn/ui styling for consistent, accessible components
- **Form Handling**: React Hook Form with Zod validation for robust form processing

### Backend Architecture
- **Runtime**: Node.js with Express.js for RESTful API endpoints
- **Build System**: Vite for fast development and optimized production builds
- **Development**: Full-stack development with hot module replacement and TypeScript compilation
- **Asset Management**: Static asset serving with Vite's asset pipeline

### Database Schema Design
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Database**: PostgreSQL (via Neon Database service) for relational data integrity
- **Schema Structure**: 
  - **Categories**: Hierarchical product categorization supporting Screen Printing, Digital Printing, and Ceramic divisions
  - **Products**: Comprehensive product catalog with specifications, images, and multilingual content
  - **Articles**: Content management for industry news and technical articles
  - **Users**: Basic authentication system for administrative access

### Internationalization Strategy
- **Primary Language**: Bahasa Indonesia (id) as default for Indonesian market focus
- **Secondary Language**: English (en) for international clients and technical documentation
- **Implementation**: React Context-based language switching with localStorage persistence
- **Content Structure**: Separate fields for Indonesian and English content in database schema

### Design System Implementation
- **Color Palette**: Professional blue primary (#0C1C8F) with warm orange accent (#FFB000) for industrial credibility
- **Typography**: Inter font family for modern, readable interface across all device sizes
- **Component Variants**: Consistent button styles, card layouts, and form elements following design guidelines
- **Responsive Breakpoints**: Mobile-first approach with tablet and desktop optimizations

### Performance Optimizations
- **Code Splitting**: Dynamic imports for route-based code splitting
- **Asset Optimization**: Vite's built-in asset optimization and tree shaking
- **Query Optimization**: TanStack Query for efficient data fetching and caching
- **Image Handling**: Placeholder system for development with future integration for production assets

## External Dependencies

### Database Infrastructure
- **Neon Database**: Managed PostgreSQL hosting with connection pooling
- **Connection Management**: connect-pg-simple for PostgreSQL session storage

### UI and Component Libraries
- **Radix UI**: Comprehensive primitive components for accessibility and functionality
- **Lucide React**: Consistent icon library for interface elements
- **Embla Carousel**: Touch-friendly carousel components for product showcases
- **React Hook Form**: Form state management with minimal re-renders

### Development and Build Tools
- **TypeScript**: Static type checking across frontend and backend
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **PostCSS**: CSS processing with autoprefixer for browser compatibility
- **ESBuild**: Fast JavaScript bundling for production builds

### Business Integrations
- **WhatsApp Business**: Direct customer communication through floating action button
- **Quote System**: Form-based quotation requests with email notifications
- **Google Fonts**: Inter font family loading with performance optimization

### Validation and Data Processing
- **Zod**: Runtime type validation for forms and API endpoints
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Type-safe component variant management

### Development Environment
- **Replit Integration**: Development banner and runtime error overlay for Replit environment
- **Vite Plugins**: Hot reload, error handling, and development optimizations
- **TSX**: TypeScript execution for server-side development workflow