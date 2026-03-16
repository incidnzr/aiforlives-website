# AIforLives Website

A modern, responsive website for AIforLives — a social entrepreneurial not-for-profit organization focused on mobilizing artificial intelligence for social good.

## 🌐 Live Website

**Domain:** `aiforlives.org`
**Previous Domain:** `aiforlives.com`

## 📋 Project Overview

AIforLives is a social entrepreneurial not-for-profit enterprise. The website reflects this mission with a focus on:

- Mobilizing AI technologies for social good
- Supporting young entrepreneurs (particularly women)
- Implementing Erasmus+ projects
- Focusing on media, health, and environmental topics at the intersection of AI and social impact

## 🏗️ Website Structure

### 7 Pages:

1. **Home** (`index.html`) — Mission intro, focus areas, featured projects, partners, and CTA
2. **About Us** (`about.html`) — Mission, vision, values, animated stat counters
3. **Focus Areas** (`focus.html`) — Interactive tab system for Media, Health, and Environment
4. **Projects** (`projects.html`) — Erasmus+ and web development projects with modal details
5. **Get Involved** (`contact.html`) — Redesigned contact form with info panel, social links, and FAQ
6. **Legal Notice** (`legal.html`) — Legal/imprint information
7. **Privacy Policy** (`privacy.html`) — Privacy and data protection policy

## 🎨 Color Palette

"Modern AI" theme using CSS variables throughout:

| Role | Variable | Hex | Color |
|------|----------|-----|-------|
| Primary | `--primary-blue` | `#1e293b` | Slate 800 |
| Primary Light | `--primary-blue-light` | `#334155` | Slate 700 |
| Secondary | `--teal` | `#7c3aed` | Violet 600 |
| Secondary Light | `--teal-light` | `#8b5cf6` | Violet 500 |
| Accent | `--coral` | `#06b6d4` | Cyan 500 |
| Accent Light | `--coral-light` | `#22d3ee` | Cyan 400 |
| Warm | `--brown` | `#f59e0b` | Amber 500 |
| Warm Light | `--brown-light` | `#fde68a` | Amber 200 |

> **Note:** Variable names like `--teal`, `--coral`, `--brown` are retained from the original palette for backward compatibility. They now map to Violet, Cyan, and Amber respectively.

The CSS architecture includes transparent variants (`--teal-10`, `--coral-08`, etc.) and semantic aliases (`--primary`, `--secondary`, `--accent`) for flexibility. All colors outside `:root` use CSS variables — only black/white `rgba()` values remain as raw values.

## 🎯 Key Features

- Unified navigation structure across all pages with mobile hamburger menu
- Unified hero section gradients (navy/violet/cyan family)
- Featured Projects section on homepage
- Interactive tab system (Focus Areas) and modal system (Projects)
- Redesigned contact form with dark info panel + white form layout
- 4-column grid footer with social icons and violet accent stripe
- Partners section with icons
- Animated stat counters on About page
- Responsive design with breakpoints at 576px, 768px, 992px, and 1200px
- Custom logo set (header, footer, favicon)
- Pure HTML/CSS/JS — no framework dependencies

## 📁 Project Structure

```
aiforlives-website/
├── index.html                # Homepage
├── about.html                # About Us page
├── focus.html                # Focus Areas page (tab system)
├── projects.html             # Projects page (modal system)
├── contact.html              # Get Involved / Contact page
├── legal.html                # Legal Notice / Imprint
├── privacy.html              # Privacy Policy
├── .nojekyll                 # GitHub Pages Jekyll bypass
├── css/
│   ├── style.css             # Main styles, CSS variables, shared components
│   ├── responsive.css        # Responsive breakpoints for all pages
│   ├── about.css             # About page styles
│   ├── focus.css             # Focus areas tab system styles
│   ├── projects.css          # Projects page & modal styles
│   ├── contact.css           # Contact form & info panel styles
│   └── legal.css             # Legal & privacy page styles
├── js/
│   ├── main.js               # Navigation, mobile menu, smooth scrolling
│   ├── components.js          # Shared UI components
│   ├── focus.js              # Tab system with URL hash support
│   ├── projects.js           # Modal system with full project data
│   └── contact.js            # Form validation and submission
├── images/
│   ├── logo/
│   │   ├── logo.png          # Full logo
│   │   ├── logo_small.png    # Compact logo (used in header & footer)
│   │   ├── favicon.png       # Browser favicon
│   │   └── ...               # Additional logo variants (dark, mono, solid)
│   ├── compath.png           # Project images
│   ├── gasca.png
│   ├── detam.png
│   ├── youthgen.png
│   ├── greentennis.png
│   ├── scorewomen.png
│   ├── mimaria.png
│   ├── starhome.png
│   ├── catsitter.png
│   ├── ecorelief.png
│   ├── digitalsurvey.png
│   └── sf4sport.png
└── README.md
```

## 🛠️ Technical Details

### CSS Architecture

- CSS variables in `:root` for consistent theming (colors, spacing, shadows, transitions)
- Transparent color variants for overlays and backgrounds
- Modular stylesheets per page with shared base in `style.css`
- Responsive rules centralized in `responsive.css`
- BEM-inspired naming conventions

### JavaScript Modules

- **main.js** — Header navigation, mobile menu toggle, smooth scrolling, scroll animations
- **components.js** — Shared UI component logic
- **focus.js** — Tab system for focus areas with URL hash support
- **projects.js** — Modal system with full project data for all Erasmus+ and web projects
- **contact.js** — Form validation and submission handling

### Project Data

All project information is stored in `js/projects.js`:

- Erasmus+ Projects: Compath Sport, GASCA, DETAM, YOUTHGEN, GreenTennis, Score Women
- Web Development Projects: Mimaria Architecture, Star Home London, Cat Sitter Berlin
- Featured AI Projects: EcoRelief, Digital Survey Platform

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| < 576px | Mobile |
| 576px – 768px | Tablet |
| 768px – 992px | Desktop |
| > 992px | Large Desktop |

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Use VS Code with Live Server extension for live preview

## 🔧 Customization

### Adding New Projects

1. Add project data to `projectData` object in `js/projects.js`
2. Create corresponding project card in `projects.html`
3. Add project image to `images/`

### Updating Colors

All colors are defined as CSS variables in `css/style.css` `:root`. Update the variables there and the entire site updates automatically.

## 🌍 Deployment

Hosted via GitHub Pages (`.nojekyll` file included). Also compatible with Netlify, Vercel, or any static hosting.

### Domain Configuration

- Set up DNS records for `aiforlives.org`
- Configure redirect from `aiforlives.com` to `aiforlives.org`
- Enable HTTPS/SSL

## 📞 Contact

**Organization:** AIforLives
**Email:** aiforlives@gmail.com
**Phone:** +49 1522 8180645
**Location:** Bochum, Germany

## 📄 License

Developed for AIforLives non-profit organization. All rights reserved.

## 🙏 Acknowledgments

- Fonts: Google Fonts (Inter, Source Sans Pro)
- Icons: Font Awesome
- Color palette: Modern AI theme (Slate, Violet, Cyan, Amber)

---

**Last Updated:** March 2026
**Version:** 2.0.0
**Status:** Production
