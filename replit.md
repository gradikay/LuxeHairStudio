# Replit.md

## Overview

This is a static website for "Luxe Hair Studio," a premium hair salon. The project is a client-side only website built with vanilla HTML, CSS, and JavaScript. It features a modern, elegant design with a dark theme and pink accent colors, targeting luxury hair care services.

## User Preferences

Preferred communication style: Simple, everyday language.
Use SVG icons instead of emojis for professional appearance.
Mobile-first design approach - all hover effects must work with touch/finger interactions.
Buttons should be very girly with sparkle effects, gradients, and handwritten fonts.

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

### Recent Enhancements (July 2025)
- Live store hours status system with embedded JavaScript data (static hosting compatible)
- Real-time open/closed status display with color-coded indicators
- Support for holidays, vacation periods, and closing soon warnings
- Countdown timer with shaking bell icon animation when closing soon
- Phone icon shake animation when store is open
- Mobile-first responsive design with touch event support
- Ultra-girly button designs with sparkle effects and Dancing Script font
- Professional square logo in navigation with pink gradient
- Comprehensive documentation system with technical guide and user-friendly README
- Compact, elegant store status section design
- Smooth carousel gallery with rotation angles, auto-play, and touch/swipe support
- Enhanced floating animations with improved smoothness and visual appeal
- Complete code cleanup with organized CSS comments and sections
- Full SEO optimization with meta tags, schema markup, and social media integration
- Comprehensive customization guide for easy personalization
- Detailed SEO guide for local business optimization
- Touch-friendly carousel preventing image zoom on mobile devices
- Fixed aspect ratios and responsive design for all screen sizes
- Complete image replacement with 11 professional hair styling photos showcasing diverse techniques
- Updated all alt text descriptions for better accessibility and SEO optimization
- Professional folder structure reorganization: index.html in root, css/, js/, and assets/images/ directories
- All file paths updated to follow standard web development organization patterns
- Lazy loading implementation for all 19 images for improved performance
- Mobile-optimized footer layout with relevant social media links
- Static hosting compatibility - no external API dependencies
- Implemented lazy loading for all images except the first hero image for optimal page load performance
- Fixed gallery touch events to prevent modal opening during scroll gestures

## Technical Notes

The project follows a traditional web development approach without modern build tools or frameworks. This makes it simple to understand and modify but may require additional tooling for advanced features like form handling, database integration, or complex state management.

The design emphasizes luxury and elegance through careful typography choices, sophisticated color schemes, and smooth animations, aligning with the premium hair salon brand positioning.