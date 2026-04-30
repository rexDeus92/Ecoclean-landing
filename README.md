# EcoClean Home - Eco-Friendly Apartment Cleaning Landing Page

[![GitHub Pages](https://img.shields.io/badge/GitHub--Pages-181717?style=for-the-badge&logo=github)](https://rexdeus92.github.io/Ecoclean-landing)


A high-converting, single-page landing page for an eco-friendly apartment cleaning service.


**🌐 Live Demo:** [https://rexdeus92.github.io/Ecoclean-landing](https://rexdeus92.github.io/Ecoclean-landing)

## 🌿 Features

- **Clean & Fresh Minimalism Design** - Airy, safe, and natural visual theme
- **Fully Responsive** - Mobile-first design that works on all devices
- **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized** - No external dependencies, pure HTML/CSS/JS
- **Scroll Animations** - Smooth fade-in-up animations using Intersection Observer
- **Form Validation** - Client-side validation with real-time feedback
- **Touch-Friendly** - All interactive elements meet 48px minimum touch target size

## 🎨 Design System

### Color Palette
- **Background**: Warm Soft Beige `#F9F7F3` | Pure White `#FFFFFF`
- **Primary Accent**: Pastel Mint Green `#A8DADC`
- **Secondary Accent (CTA)**: Leaf Green `#2A9D8F`
- **Text**: Dark Charcoal `#264653`

### Typography
- **Font**: Poppins (Google Fonts)
- **Base Size**: 18px
- **Headings**: Large, bold, and welcoming

### UI Elements
- **Border Radius**: 24px on buttons, cards, and images
- **Shadows**: Soft, diffused drop shadows on hover
- **Spacing**: Generous padding (80px sections)

## 📁 Project Structure

```
Ecoclean-landing/
├── index.html          # Main HTML file with all sections
├── css/
│   └── styles.css      # Complete design system and styles
├── js/
│   └── main.js         # Interactions and form validation
├── images/             # Image assets directory
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Direct Open
Simply open `index.html` in your browser - no build process required!

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## 📱 Sections

1. **Header/Navigation** - Logo, nav links, and CTA button
2. **Hero Section** - 50/50 split with headline, subheadline, and CTAs
3. **Benefits Section** - 3-card grid highlighting key benefits
4. **How It Works** - 3-step timeline process
5. **Testimonials** - Social proof with 5-star reviews
6. **Booking Form** - Lead capture with 15% discount offer
7. **Footer** - Brand, social links, and legal links

## ✨ Animations & Interactions

- **Fade In Up**: Elements animate on scroll using Intersection Observer
- **Button Hover**: Lift effect with shadow enhancement
- **Card Hover**: Subtle lift with soft shadow
- **Form Validation**: Real-time feedback with success/error states
- **Mobile Menu**: Smooth slide-in navigation
- **Smooth Scroll**: Anchor links scroll smoothly to sections

## 🎯 Conversion Optimization

- Clear value proposition in hero section
- Social proof with testimonials
- Urgency with 15% discount offer
- Trust signals (non-toxic, family-safe)
- Minimal friction booking form
- Multiple CTAs throughout page

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization

### Change Colors
Edit CSS custom properties in `:root` (lines 10-30 of `styles.css`):
```css
:root {
    --color-accent-leaf: #2A9D8F; /* Change CTA color */
    --color-accent-mint: #A8DADC; /* Change accent color */
}
```

### Update Copy
Edit text content directly in `index.html`. All copy is conversion-focused and can be customized per your needs.

### Replace Images
The hero section uses an SVG placeholder. Replace the `.hero__image-placeholder` div with an actual image:
```html
<img src="images/hero.jpg" alt="Professional cleaner in eco-friendly apron" class="hero__image">
```

## 🧪 Testing

```bash
# Lighthouse Performance Audit
# Open Chrome DevTools > Lighthouse > Run audit

# Mobile-Friendly Test
# https://search.google.com/test/mobile-friendly
```

## 📄 License

Free to use and modify for personal and commercial projects.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with 💚 for a cleaner, greener future**
