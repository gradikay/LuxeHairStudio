# Luxe Hair Studio - Customization Guide

## 🎨 How to Customize Your Hair Salon Landing Page

This guide will help you personalize your hair salon website to match your brand and business needs.

---

## 📝 Basic Information Changes

### 1. Salon Name & Branding
**File: `index.html`**
- **Line 37**: Change `"Welcome to Luxe Hair Studio"` to your salon name
- **Line 21**: Update `"Luxe Hair Studio"` in navigation 
- **Line 18**: Change logo letter `"L"` to your salon's initial

### 2. Hero Section Content
**File: `index.html`** (Lines 37-40)
```html
<h1 class="hero-title">Welcome to [YOUR SALON NAME]</h1>
<p class="hero-subtitle">[YOUR TAGLINE]</p>
<p class="hero-description">[YOUR DESCRIPTION]</p>
```

### 3. Store Hours Configuration
**File: `js/script.js`** (around line 755, look for `this.storeData = {`)
```javascript
"hours": {
  "monday": {"isOpen": false, "openTime": null, "closeTime": null},
  "tuesday": {"isOpen": true, "openTime": "09:00", "closeTime": "18:30"},
  "wednesday": {"isOpen": true, "openTime": "09:00", "closeTime": "19:00"},
  "thursday": {"isOpen": true, "openTime": "09:00", "closeTime": "19:00"},
  "friday": {"isOpen": true, "openTime": "09:00", "closeTime": "19:00"},
  "saturday": {"isOpen": true, "openTime": "08:00", "closeTime": "19:25"},
  "sunday": {"isOpen": false, "openTime": null, "closeTime": null}
},
"closingSoonWarning": 60,
"specialHours": {
  "holidays": [
    {"date": "2025-12-25", "name": "Christmas Day", "isOpen": false},
    {"date": "2025-01-01", "name": "New Year's Day", "isOpen": false}
  ],
  "vacation": [
    {"startDate": "2025-08-15", "endDate": "2025-08-22", "reason": "Summer Vacation"}
  ]
}
```

**Note:** Store hours are now embedded directly in the JavaScript file for better static hosting compatibility. No external JSON files are needed.

---

## 🎨 Visual Customization

### 1. Color Scheme
**File: `styles.css`**

**Primary Pink Color**: Search for `#ff69b4` and replace with your color
**Secondary Pink**: Search for `#ffb6c1` and replace with your accent color
**Background**: Search for `#000000` to change the dark background

### 2. Fonts
**File: `index.html`** (Line 9)
Change the Google Fonts URL to use different fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600&display=swap" rel="stylesheet">
```

**File: `styles.css`**
Update font families:
- `'Great Vibes'` - Decorative script font
- `'Dancing Script'` - Handwritten style font  
- `'Poppins'` - Main body text font

### 3. Hero Carousel Images
**File: `index.html`** (Lines 44-55)
Replace the image URLs with your own photos:
```html
<img src="YOUR-IMAGE-URL.jpg" alt="Your description">
```

### 4. Logo Customization
**File: `styles.css`** (Lines 56-71)
Customize the square logo:
- Change `background` color
- Modify `border-radius` for different shapes
- Update letter in HTML (Line 20)

---

## 🔧 SEO Optimization

### 1. Basic SEO Meta Tags
**File: `index.html`** (Lines 9-15)

**Title Tag** (Line 9):
```html
<title>[Your Salon Name] - [Your Services] | [Your City]</title>
```

**Description** (Line 10):
```html
<meta name="description" content="[150-160 characters describing your salon and services]">
```

**Keywords** (Line 11):
```html
<meta name="keywords" content="hair salon [your city], hair cutting, hair coloring, [your services]">
```

### 2. Local Business Schema
**File: `index.html`** (Lines 25-42)
Update the structured data with your business information:
```json
{
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "Your Salon Name",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "streetAddress": "Your Address",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "Your ZIP"
  }
}
```

### 3. Social Media Meta Tags
**File: `index.html`** (Lines 16-24)
Update Open Graph tags for social media sharing:
- `og:title` - Your salon name and tagline
- `og:description` - Brief description of services
- `og:image` - High-quality image of your salon (1200x630px recommended)
- `og:url` - Your website URL

---

## 📱 Mobile Responsiveness

The website is already mobile-first responsive. Key breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px  
- **Mobile**: Below 768px

### Customizing Mobile Layout
**File: `styles.css`**
Look for media queries starting with `@media (max-width: XXXpx)` to customize mobile layouts.

---

## 🎯 Adding New Sections

### 1. Services Section
Add after the hero section in `index.html`:
```html
<section id="services" class="services">
    <div class="container">
        <h2>Our Services</h2>
        <div class="service-grid">
            <div class="service-item">
                <h3>Hair Cutting</h3>
                <p>Professional cuts for all hair types</p>
            </div>
            <!-- Add more services -->
        </div>
    </div>
</section>
```

### 2. Contact Information
Update contact section with your details:
- Phone number
- Email address  
- Physical address
- Business hours

---

## 🚀 Advanced Customizations

### 1. Adding More Carousel Images
**File: `index.html`**
1. Add new slide in carousel:
```html
<div class="hero-slide">
    <img src="new-image.jpg" alt="Description">
</div>
```
2. Add corresponding dot:
```html
<button class="hero-dot" data-slide="4"></button>
```

### 2. Customizing Animations
**File: `styles.css`**
Modify animation durations and effects by searching for:
- `transition:`
- `animation:`
- `@keyframes`

### 3. Adding Analytics
Add Google Analytics or other tracking code before closing `</head>` tag in `index.html`.

---

## 📋 Content Guidelines

### Writing Effective Copy
1. **Hero Title**: Keep it under 60 characters
2. **Meta Description**: 150-160 characters
3. **Service Descriptions**: Focus on benefits, not just features
4. **Call-to-Action**: Use action words like "Book", "Schedule", "Call"

### Image Optimization
1. **File Size**: Keep images under 500KB
2. **Dimensions**: Hero images should be at least 1200px wide
3. **Format**: Use JPG for photos, PNG for graphics with transparency
4. **Alt Text**: Always include descriptive alt text

---

## 🔍 Testing Your Changes

### Before Going Live:
1. **Mobile Testing**: Test on actual mobile devices
2. **Speed Test**: Use Google PageSpeed Insights
3. **SEO Check**: Use Google Search Console
4. **Cross-Browser**: Test in Chrome, Firefox, Safari, Edge

### Tools for Testing:
- **Mobile**: Chrome DevTools Device Mode
- **SEO**: Google Search Console, SEMrush
- **Performance**: GTmetrix, Google PageSpeed Insights
- **Accessibility**: WAVE, aXe DevTools

---

## 📞 Need Help?

This website is built with pure HTML, CSS, and JavaScript - no frameworks required. You can:
1. Edit files directly in any text editor
2. Use web-based editors like CodePen for testing
3. Host on services like Netlify, Vercel, or GitHub Pages

### Common Issues:
- **Images not loading**: Check file paths and URLs
- **Fonts not showing**: Verify Google Fonts links
- **Mobile layout issues**: Check CSS media queries
- **Colors not changing**: Use browser dev tools to find exact selectors

---

**📧 For technical support, consult web development resources or hire a local web developer.**