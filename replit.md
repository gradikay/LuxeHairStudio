# Replit.md

## Overview

This is a static website for "Luxe Hair Studio," a premium hair salon. The project is a client-side only website built with vanilla HTML, CSS, and JavaScript. It features a modern, elegant design with a dark theme and pink accent colors, targeting luxury hair care services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static Website**: Pure HTML, CSS, and JavaScript implementation
- **Single Page Application (SPA)**: All content is contained in a single HTML file with smooth scrolling navigation between sections
- **Responsive Design**: Mobile-first approach with hamburger menu for smaller screens
- **Modern CSS**: Uses CSS Grid, Flexbox, and advanced features like backdrop-filter and gradients

### Design System
- **Typography**: Google Fonts integration with three font families:
  - Poppins (primary text)
  - Great Vibes (decorative headings)
  - Dancing Script (stylistic elements)
- **Color Scheme**: Dark theme with black/dark purple gradients and hot pink (#ff69b4) accents
- **Layout**: Fixed navigation with smooth scrolling sections

## Key Components

### Navigation System
- Fixed navbar with backdrop blur effect
- Mobile-responsive hamburger menu
- Active section highlighting based on scroll position
- Smooth scrolling between sections

### Content Sections
- Hero section with call-to-action
- About section (partially implemented)
- Services section (structure prepared)
- Gallery section (structure prepared)
- Contact section (structure prepared)

### Interactive Features
- Mobile navigation toggle
- Smooth scrolling navigation
- Dynamic active link highlighting
- Appointment booking button (frontend only)

## Data Flow

### Client-Side Only
- No backend or database integration
- All interactions are handled through vanilla JavaScript
- Static content delivery
- Form submissions would need backend integration (currently frontend only)

### User Interactions
1. Navigation clicks trigger smooth scrolling
2. Mobile menu toggle shows/hides navigation
3. Scroll position updates active navigation state
4. CTA buttons direct users to contact section

## External Dependencies

### Third-Party Services
- **Google Fonts**: Typography system
- **Pixabay**: Image hosting for hero section background
- No CDN frameworks (pure vanilla implementation)

### Assets
- Custom CSS styling (no frameworks like Bootstrap or Tailwind)
- Custom JavaScript (no libraries like jQuery or React)
- External images hosted on Pixabay

## Deployment Strategy

### Static Hosting Ready
- No server-side requirements
- Can be deployed to any static hosting service:
  - GitHub Pages
  - Netlify
  - Vercel
  - Traditional web hosting

### Future Enhancements Needed
- Backend integration for appointment booking
- Database for storing appointments and customer information
- Content Management System for easy updates
- Analytics integration
- SEO optimization
- Contact form functionality

### Current Limitations
- Appointment form is non-functional (frontend only)
- No data persistence
- No admin panel for content management
- Limited SEO optimization
- Incomplete content sections (about, services, gallery sections need completion)

## Technical Notes

The project follows a traditional web development approach without modern build tools or frameworks. This makes it simple to understand and modify but may require additional tooling for advanced features like form handling, database integration, or complex state management.

The design emphasizes luxury and elegance through careful typography choices, sophisticated color schemes, and smooth animations, aligning with the premium hair salon brand positioning.