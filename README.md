# Palmwine Papi Portfolio

> The multidisciplinary world of Oghenefejiro David Obaro-Umeh — Creative Director, A&R, Entrepreneur — unfolding in a Nigerian Alte aesthetic.

![Portfolio Preview](assets/images/hero-portrait.jpg)

## 🎨 Design Philosophy

This portfolio embodies the **Nigerian Alte aesthetic** with:
- **Bold color blocking** (#E85439, #F2E205, #1E1E1E)
- **Asymmetrical layouts** that break conventional containers
- **Film grain textures** and high-contrast imagery  
- **Gritty elegance** with intentional imperfection
- **Street culture energy** from Lagos creative scene

## 🚀 Features

### Visual Design
- **Asymmetrical grid system** with overlapping sections
- **Parallax scrolling** with smooth animations
- **Film grain effects** and texture overlays
- **Custom typography** with Helvetica Neue and Inter
- **Responsive design** optimized for all devices

### Interactive Elements
- **Smooth scrolling** navigation
- **Magnetic hover effects** on project cards
- **Custom cursor** with trail effects (desktop)
- **Intersection Observer** animations
- **Touch-friendly** mobile interface

### Performance
- **Optimized animations** with 60fps targeting
- **Lazy loading** images
- **Progressive enhancement**
- **SEO optimized** with meta tags
- **Accessibility compliant** (WCAG 2.1)

## 🛠 Installation & Setup

### Prerequisites
- Node.js 16+ and npm 8+
- Modern web browser
- Basic knowledge of HTML/CSS/JavaScript

### Quick Start
```bash
# Clone the repository
git clone https://github.com/davidobaraumeh/palmwine-papi-portfolio.git
cd palmwine-papi-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Alternative Setup (No Node.js)
```bash
# Simply open index.html in a modern web browser
# Or use Python's built-in server:
python -m http.server 3000
```

## 📁 Project Structure

```
palmwine-papi-portfolio/
├── index.html                 # Main HTML file
├── styles/
│   ├── main.css              # Core styles & layout
│   ├── animations.css        # Animation effects
│   └── responsive.css        # Mobile responsiveness
├── js/
│   ├── main.js              # Core functionality
│   ├── navigation.js        # Navigation system
│   └── animations.js        # Advanced animations
├── assets/
│   └── images/              # Portfolio images
│       └── README.md        # Image guidelines
├── package.json             # Dependencies & scripts
└── README.md               # This file
```

## 🎯 Customization Guide

### 1. Personal Information
Edit `index.html` to update:
- **Name and title** in hero section
- **Bio content** in about section
- **Experience timeline** details
- **Project descriptions**
- **Contact information**

### 2. Images
Replace placeholder images in `assets/images/`:
- `hero-portrait.jpg` - Your main portrait (1920x1080)
- `about-street.jpg` - Lifestyle/street photography (1200x800)
- `timeline-*.jpg` - Work/project images (400x300)
- `project-*.jpg` - Portfolio pieces (600x400)
- `contact-nightlife.jpg` - Contact section background (1200x800)

See `assets/images/README.md` for detailed image specifications.

### 3. Colors & Branding
Modify CSS variables in `styles/main.css`:
```css
:root {
  --primary: #E85439;    /* Your brand primary */
  --secondary: #1E1E1E;  /* Dark backgrounds */
  --accent: #F2E205;     /* Highlight color */
  --background: #000000; /* Main background */
  --muted: #BFBFBF;     /* Secondary text */
}
```

### 4. Content Sections
Each section is modular and can be customized:

#### Hero Section
```html
<h1 class="hero-title">
    <span class="palmwine-script">Your Brand Name</span>
</h1>
<h2 class="hero-subtitle">Your Name</h2>
<p class="hero-tagline">Your Role • Your Skills • Your Identity</p>
```

#### About Section
Update the bio text while maintaining the visual hierarchy and aesthetic.

#### Timeline/Experience
Add or modify timeline items:
```html
<div class="timeline-item" data-year="2024">
    <div class="timeline-content">
        <h3>Your Role</h3>
        <p class="company">Company/Organization</p>
        <p class="description">Brief description...</p>
    </div>
    <div class="timeline-image">
        <img src="assets/images/your-image.jpg" alt="Description">
    </div>
</div>
```

#### Projects
Customize project cards with your work:
```html
<div class="project-card">
    <div class="project-image">
        <img src="assets/images/your-project.jpg" alt="Project">
        <div class="project-overlay">
            <h3>Project Title</h3>
            <p>Project description</p>
        </div>
    </div>
</div>
```

### 5. Social Links
Update contact section social links:
```html
<div class="social-links">
    <a href="https://instagram.com/yourusername" class="social-link">Instagram</a>
    <a href="https://linkedin.com/in/yourusername" class="social-link">LinkedIn</a>
    <a href="mailto:your@email.com" class="social-link">Email</a>
</div>
```

## 🎨 Design Guidelines

### Nigerian Alte Aesthetic
- **Embrace asymmetry** - Let elements break out of grids
- **Use bold colors** - High contrast, poster-like appearance
- **Add texture layers** - Film grain, fabric scans, vintage elements
- **Raw energy** - Imperfect, authentic, street-inspired
- **Cultural references** - Palmwine calabash, Nigerian patterns

### Typography Hierarchy
- **Hero titles**: Extra bold, uppercase, loose letter spacing
- **Body text**: Light, airy spacing, intentionally ragged edges
- **Special elements**: Hand-lettered or graffiti-style accents

### Image Treatment
- **High contrast** with film grain overlay
- **Color filters** that complement the palette
- **Intentional bleeding** over section boundaries
- **Polaroid/vinyl frames** as decorative elements

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 80+ |
| Firefox | 75+ |
| Safari | 13+ |
| Edge | 80+ |

### Progressive Enhancement
- Core functionality works without JavaScript
- Animations degrade gracefully
- Responsive design adapts to all screen sizes
- Accessibility features included

## 🚀 Performance Optimization

### Built-in Optimizations
- **Intersection Observer** for scroll animations
- **RequestAnimationFrame** for smooth animations
- **Throttled scroll events** for performance
- **Lazy loading** for images
- **Minified assets** in production build

### Performance Scripts
```bash
# Build optimized version
npm run build

# Run Lighthouse audit
npm run lighthouse

# Optimize images
npm run optimize-images
```

## 🎯 SEO & Analytics

### Meta Tags
Update in `<head>` section:
```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your description">
<meta property="og:title" content="Your Name">
<meta property="og:description" content="Your description">
<meta property="og:image" content="assets/images/og-image.jpg">
```

### Schema Markup
Add structured data for better search visibility:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Your Title",
  "url": "https://yourwebsite.com"
}
```

## 🔧 Development

### Available Scripts
```bash
npm run start     # Start development server
npm run build     # Build for production
npm run lint      # Lint JavaScript
npm run format    # Format code with Prettier
npm run validate  # Validate HTML
```

### Code Style
- **CSS**: BEM methodology for class naming
- **JavaScript**: ES6+ with modern practices
- **HTML**: Semantic markup with accessibility

## 🌍 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Custom Server
Upload built files from `dist/` folder to your web server.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- **Nigerian Alte Scene** - For the aesthetic inspiration
- **Mowalola** - For the bold fashion influence
- **Lagos Creative Community** - For the cultural energy
- **Modern Web Standards** - For the technical foundation

## 📞 Support

For questions about customization or issues:
- 📧 Email: david@palmwinepapi.com
- 🐦 Twitter: [@palmwinepapi](https://twitter.com/palmwinepapi)
- 📷 Instagram: [@palmwinepapi](https://instagram.com/palmwinepapi)

---

**Built with passion for the Nigerian creative scene. Make it your own! 🇳🇬**
