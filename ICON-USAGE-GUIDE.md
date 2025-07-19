# Custom Hair Salon Icons Guide

## Overview
Custom SVG icons created specifically for Luxe Hair Studio. These icons are scalable, lightweight, and designed to match your pink and black aesthetic.

## Available Icons

### Hair Styling Tools
- `hair-dryer` - Professional hair dryer
- `scissors` - Hair cutting scissors
- `hair-brush` - Styling brush
- `curling-iron` - Curling iron/styling tool
- `hair-straightener` - Hair straightening iron
- `hair-comb` - Fine tooth comb

### Hair Services
- `hair-dye` - Hair coloring/dyeing
- `hair-wave` - Hair texture/waves

### Decorative Elements
- `beauty-crown` - Luxury/premium symbol
- `sparkle` - Glamour sparkles (3 different sizes)

## How to Use Icons

### Method 1: Inline SVG (Recommended)
```html
<svg width="24" height="24" fill="#ff69b4">
  <use href="assets/icons.svg#hair-dryer"></use>
</svg>
```

### Method 2: CSS Background
```css
.icon-hair-dryer {
  background: url('assets/icons.svg#hair-dryer') no-repeat center;
  background-size: contain;
  width: 24px;
  height: 24px;
}
```

### Method 3: Direct in HTML with color
```html
<svg class="service-icon" width="32" height="32" viewBox="0 0 24 24" fill="#ff69b4">
  <use href="assets/icons.svg#scissors"></use>
</svg>
```

## Color Customization
- Use `fill="#ff69b4"` for your signature pink
- Use `fill="currentColor"` to inherit text color
- Use `fill="#fff"` for white icons on dark backgrounds

## Size Guidelines
- Small icons: 16-20px (navigation, bullets)
- Medium icons: 24-32px (service cards, buttons)
- Large icons: 48-64px (hero sections, headers)

## Examples for Your Site

### Service Cards
```html
<div class="service-card">
  <svg class="service-icon" width="32" height="32" fill="#ff69b4">
    <use href="assets/icons.svg#scissors"></use>
  </svg>
  <h3>Hair Cutting</h3>
</div>
```

### Navigation Enhancement
```html
<a href="#services" class="nav-link">
  <svg width="16" height="16" fill="currentColor">
    <use href="assets/icons.svg#beauty-crown"></use>
  </svg>
  Services
</a>
```

### Decorative Sparkles
```html
<div class="girly-button">
  Book Now
  <svg class="sparkle-1" width="12" height="12" fill="#ff69b4">
    <use href="assets/icons.svg#sparkle"></use>
  </svg>
</div>
```

## Benefits
- **Lightweight**: Single SVG file for all icons
- **Scalable**: Perfect at any size
- **Customizable**: Easy color changes
- **Professional**: Clean, purpose-built designs
- **Brand Consistent**: Matches your salon's aesthetic

## Integration Tips
1. Load the icons.svg file once in your HTML head
2. Use CSS classes for consistent styling
3. Combine with your existing pink gradients
4. Add subtle animations for enhanced interactivity