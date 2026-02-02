# AIforLives Website

A modern, responsive website for AIforLives - a social entrepreneurial not-for-profit organization focused on mobilizing artificial intelligence for social good.

## 🌐 Live Website
**Domain:** `aiforlives.org`  
**Previous Domain:** `aiforlives.com`

## 📋 Project Overview

AIforLives is transitioning from a commercial organization to a social entrepreneurial not-for-profit enterprise. The new website reflects this transformation with a focus on:
- Mobilizing AI technologies for social good
- Supporting young entrepreneurs (particularly women)
- Implementing Erasmus+ projects
- Focusing on media, health, and environmental topics at the intersection of AI and social impact

## 🎨 Design Inspiration
Inspired by [neuroclimate.org](https://neuroclimate.org) - clean, minimalist design with strong visual references.

## 🏗️ Website Structure

### **5 Main Pages:**
1. **Home** (`index.html`) - Introduction to AIforLives' mission and focus areas
2. **About Us** (`about.html`) - Mission, vision, values, and organization story
3. **Focus Areas** (`focus.html`) - Interactive tab system for Media, Health, and Environment
4. **Projects** (`projects.html`) - Erasmus+ and web development projects with modal details
5. **Get Involved** (`contact.html`) - Contact form, engagement options, and FAQ

## 🎯 Key Features

### **Design Features:**
- Clean, minimalist aesthetic inspired by neuroclimate.org
- Color palette: Deep Blue (#1a365d), Teal (#2d9c9c), Coral (#ff6b6b), Warm Brown (#a67c52)
- Responsive design optimized for all devices
- Smooth animations and transitions
- Accessible navigation and content structure

### **Technical Features:**
- **Pure HTML/CSS/JS** - No framework dependencies
- **Modular CSS** - Separate stylesheets for each page
- **Interactive Components**:
  - Tab system for focus areas
  - Modal system for project details
  - Mobile-responsive navigation
  - Form validation
  - Smooth scrolling
- **Performance Optimized**:
  - Minimal JavaScript
  - Optimized images (placeholders)
  - Fast loading times

## 📁 Project Structure

```
aiforlives-website/
├── index.html              # Homepage
├── about.html              # About Us page
├── focus.html              # Focus Areas page (Tab system)
├── projects.html           # Projects page (Modal system)
├── contact.html            # Get Involved/Contact page
├── css/
│   ├── style.css          # Main styles (shared across all pages)
│   ├── about.css          # About page specific styles
│   ├── focus.css          # Focus areas page styles (Tab system)
│   ├── projects.css       # Projects page styles (Modal system)
│   └── contact.css        # Contact page styles
├── js/
│   ├── main.js            # Main navigation and common functionality
│   ├── focus.js           # Tab system functionality
│   ├── projects.js        # Modal system for project details
│   └── contact.js         # Contact form validation
├── images/                # Image assets (to be added)
└── README.md              # This file
```

## 🚀 Getting Started

### **Local Development:**
1. Clone the repository
2. Open `index.html` in your browser
3. Use VS Code with Live Server extension for best development experience

### **File Structure Setup:**
```bash
mkdir aiforlives-website
cd aiforlives-website
mkdir css js images
```

### **VS Code Recommended Extensions:**
- **Live Server** - For live preview with auto-refresh
- **Prettier** - Code formatting
- **Auto Rename Tag** - HTML tag management
- **CSS Peek** - CSS navigation

## 🛠️ Technical Details

### **CSS Architecture:**
- **CSS Variables** for consistent theming
- **Mobile-first responsive design**
- **BEM-inspired naming conventions**
- **Separate stylesheets** for maintainability

### **JavaScript Modules:**
- **main.js** - Header navigation, mobile menu, smooth scrolling
- **focus.js** - Tab system for focus areas with URL hash support
- **projects.js** - Modal system for project details with full project data
- **contact.js** - Form validation and submission handling

### **Project Data:**
All project information is stored in `js/projects.js` including:
- Erasmus+ Projects (Compath Sport, GASCA, DETAM, YOUTHGEN, GreenTennis, Score Women)
- Web Development Projects (Mimaria Architecture, Star Home London, Cat Sitter Berlin)
- Featured AI Projects (EcoRelief, Digital Survey Platform)

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Mobile**: < 576px
- **Tablet**: 576px - 768px  
- **Desktop**: 768px - 992px
- **Large Desktop**: > 992px

## 🔧 Customization

### **To Add New Projects:**
1. Add project data to `projectData` object in `js/projects.js`
2. Create corresponding project card in `projects.html`
3. Style adjustments in `css/projects.css` if needed

### **To Update Content:**
1. Edit HTML files for page content
2. Update project details in `js/projects.js`
3. Modify styles in respective CSS files

### **To Add Images:**
1. Place images in `images/` folder
2. Update image paths in HTML/CSS
3. Optimize images for web (recommended: WebP format)

## 🌍 Deployment

### **Recommended Hosting:**
- **Netlify** (Free for non-profits)
- **Vercel** (Free tier available)
- **GitHub Pages** (Simple static hosting)

### **Deployment Steps:**
1. **Netlify**:
   ```bash
   # Connect Git repository
   # Deploy with default settings
   # Configure custom domain: aiforlives.org
   ```

2. **Domain Configuration**:
   - Set up DNS records for `aiforlives.org`
   - Configure redirect from `aiforlives.com` to `aiforlives.org`
   - Enable HTTPS/SSL

3. **Performance Optimization**:
   - Minify CSS and JavaScript
   - Optimize images
   - Enable browser caching
   - Set up CDN if needed

## 📊 SEO & Analytics

### **SEO Ready:**
- Semantic HTML structure
- Meta tags for each page
- Open Graph tags for social sharing
- Sitemap ready structure

### **Analytics Integration:**
Add to `index.html` head section:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📞 Contact & Support

**Organization:** AIforLives  
**Email:** aiforlives@gmail.com  
**Phone:** +49 1522 8180645  
**Location:** Berlin, Germany

## 📄 License

This project is developed for AIforLives non-profit organization. All rights reserved.

## 🙏 Acknowledgments

- Design inspiration from neuroclimate.org
- Fonts from Google Fonts (Inter, Source Sans Pro)
- Icons from Font Awesome
- Color palette inspired by social impact and technology themes

---

**Last Updated:** December 2024  
**Version:** 1.0.0  
**Status:** Ready for Deployment